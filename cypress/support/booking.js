class Login {
    loginInEN() {
        cy.contains('Log In / Sign Up').should('be.visible')
        cy.contains('Log In / Sign Up').click()
        cy.url().should('include', 'login?redirect=/en')
            .then(() => {
                cy.fixture('login_data.json').then((users) => {
                    let findQuery = (x) => x.id === 1;
                    let user = users.find(x => findQuery(x))

                    // Login
                    cy.get('input[type="email"]').click().type(user.email)
                    cy.get('input[type="password"]').click().type(user.password)
                    cy.contains('button', 'Login').click()
                    cy.intercept('POST', 'https://api.webook.com/api/v2/login').as('loginRequest')
                    cy.wait('@loginRequest').then((interception) => {

                        // Verifying the Payload
                        const requestPayload = interception.request.body
                        expect(requestPayload).to.have.property('email', user.email)
                        expect(requestPayload).to.have.property('password', user.password)
                        expect(requestPayload).to.have.property('lang', 'en')
                        expect(requestPayload).to.have.property('captcha').that.is.not.empty

                        // Verifying the Response
                        const response = interception.response.body
                        if (response.status != 'error') {
                            expect(response).to.have.property('status', 'success')
                            expect(response.data).to.have.property('email', user.email)

                        }
                        else {
                            expect(response.error).to.have.property('user', 'Invalid credentials')

                        }
                    })
                })
            })
    }

    loginInAR() {
        cy.contains('العربية').click()
        cy.contains('دخول / تسجيل').should('be.visible')
        cy.contains('دخول / تسجيل').click()
        cy.url().should('include', 'login?redirect=/ar')
            .then(() => {
                cy.fixture('login_data.json').then((users) => {
                    let findQuery = (x) => x.id === 2;
                    let user2 = users.find(x => findQuery(x))

                    // Login
                    cy.get('input[type="email"]').click().type(user2.email)
                    cy.get('input[type="password"]').click().type(user2.password)
                    cy.contains('button', 'تسجيل الدخول').click()
                    cy.intercept('POST', 'https://api.webook.com/api/v2/login').as('loginRequest')
                    cy.wait('@loginRequest').then((interception) => {

                        // Verifying the Payload
                        const requestPayload = interception.request.body
                        expect(requestPayload).to.have.property('email', user2.email)
                        expect(requestPayload).to.have.property('password', user2.password)
                        expect(requestPayload).to.have.property('lang', 'ar')
                        expect(requestPayload).to.have.property('captcha').that.is.not.empty

                        // Verifying the Response
                        const response = interception.response.body
                        if (response.status != 'error') {
                            expect(response).to.have.property('status', 'success')
                            expect(response.data).to.have.property('email', user2.email)

                        }
                        else {
                            expect(response.error).to.have.property('user', 'Invalid credentials')

                        }

                    })
                })
            })
    }
}
const login = new Login();
export default login;