class ForgotPassword {
    forgotPasswordInEN() {
        cy.contains('Log In / Sign Up').should('be.visible')
        cy.contains('Log In / Sign Up').click()
        cy.url().should('include', 'login?redirect=/en')
        cy.contains('Reset your password?').should('be.visible').click()
            .then(() => {
                cy.fixture('forgot_password_data.json').then((users) => {
                    let findQuery = (x) => x.id === 1;
                    let user = users.find(x => findQuery(x))

                    // Enter email for OTP
                    cy.contains('Confirm your email, we will send you a one-time code to reset your password').should('be.visible')
                    cy.get('input[type="email"]').click()
                    cy.get('input[type="email"]').type(user.email)
                    cy.contains('button', 'Send code').should('be.visible').click()
                    cy.intercept('POST', 'https://api.webook.com/api/v2/forgot-password').as('forgotPassword')
                    cy.wait('@forgotPassword').then((interception) => {

                        // Verifying the Payload
                        const requestPayload = interception.request.body
                        expect(requestPayload).to.have.property('email', user.email)
                        expect(requestPayload).to.have.property('lang', 'en')
                        expect(requestPayload).to.have.property('captcha').that.is.not.empty

                        // Verifying the Response
                        const response = interception.response.body
                        if (response.status != 'error') {
                            cy.contains('Verify your email address').should('be.visible')
                            cy.contains(`We sent a verification code to ${user.email}`).should('be.visible')
                            expect(response).to.have.property('status', 'success')
                            expect(response).to.have.property('verify_message', 'Email has been sent with verification code')
                        }
                        else {
                            expect(response).to.have.property('verify_message', 'User not found.')

                        }
                    })
                })
            })
    }

    forgotPasswordInAR() {
        cy.contains('العربية').click()
        cy.contains('دخول / تسجيل').should('be.visible')
        cy.contains('دخول / تسجيل').click()
        cy.url().should('include', 'login?redirect=/ar')
        cy.contains('نسيت كلمة المرور؟').should('be.visible').click()
        .then(() => {
            cy.fixture('forgot_password_data.json').then((users) => {
                let findQuery = (x) => x.id === 1;
                let user = users.find(x => findQuery(x))

                // Enter email for OTP
                cy.contains('الرجاء تأكيد بريدك الإلكتروني، سوف نرسل رمز تحقق لإستعادة كلمة المرور').should('be.visible')
                cy.get('input[type="email"]').click()
                cy.get('input[type="email"]').type(user.email)
                cy.contains('button', 'أرسل الكود').should('be.visible').click()
                cy.intercept('POST', 'https://api.webook.com/api/v2/forgot-password').as('forgotPassword')
                cy.wait('@forgotPassword').then((interception) => {

                    // Verifying the Payload
                    const requestPayload = interception.request.body
                    expect(requestPayload).to.have.property('email', user.email)
                    expect(requestPayload).to.have.property('lang', 'ar')
                    expect(requestPayload).to.have.property('captcha').that.is.not.empty

                    // Verifying the Response
                    const response = interception.response.body
                    if (response.status != 'error') {
                        cy.contains('تحقق من عنوان بريدك الإلكتروني').should('be.visible')
                        cy.contains(`أدخل رمز التحقق المرسل إلى ${user.email}`).should('be.visible')
                        expect(response).to.have.property('status', 'success')
                        expect(response).to.have.property('verify_message', 'Email has been sent with verification code')
                    }
                    else {
                        expect(response).to.have.property('verify_message', 'User not found.')

                    }
                })
            })
        })
    }
}
const forgot_password = new ForgotPassword();
export default forgot_password;