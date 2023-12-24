class Login {
    loginInEN(email, password, expectedErrorMessage = null) {
        cy.contains('Log In / Sign Up').should('be.visible')
        cy.contains('Log In / Sign Up').click()
        cy.url().should('include', 'login?redirect=/en')
            .then(() => {
                cy.get('input[type="email"]').click().type(email)
                cy.get('input[type="password"]').click().type(password)
                cy.contains('button', 'Login').click()
                cy.intercept('POST', 'https://api.webook.rocks/api/v2/login').as('loginRequest')
                cy.wait('@loginRequest').then((interception) => {
                    const requestPayload = interception.request.body
                    expect(requestPayload).to.have.property('email', email)
                    expect(requestPayload).to.have.property('password', password)
                    expect(requestPayload).to.have.property('lang', 'en')
                    expect(requestPayload).to.have.property('captcha').that.is.not.empty
                    const response = interception.response.body
                    if (response.status != 'error') {
                        expect(response).to.have.property('status', 'success')
                        expect(response.data).to.have.property('email', email)
                    }
                    else {
                        if (expectedErrorMessage) {
                            expect(response.error).to.have.property('email', expectedErrorMessage)

                        }
                        else {
                            throw new Error('Unexpected error message received.')
                        }
                    }
                })
            })
    }
    loginInAR(email, password, expectedErrorMessage = null) {
        cy.contains('العربية').click()
        cy.contains('دخول / تسجيل').should('be.visible')
        cy.contains('دخول / تسجيل').click()
        cy.url().should('include', 'login?redirect=/ar').then(() => {
            cy.get('input[type="email"]').click().type(email)
            cy.get('input[type="password"]').click().type(password)
            cy.contains('button', 'تسجيل الدخول').click()
            cy.intercept('POST', 'https://api.webook.rocks/api/v2/login').as('loginRequest')
            cy.wait('@loginRequest').then((interception) => {
                const requestPayload = interception.request.body
                expect(requestPayload).to.have.property('email', email)
                expect(requestPayload).to.have.property('password', password)
                expect(requestPayload).to.have.property('lang', 'ar')
                expect(requestPayload).to.have.property('captcha').that.is.not.empty
                const response = interception.response.body
                if (response.status != 'error') {
                    expect(response).to.have.property('status', 'success')
                    expect(response.data).to.have.property('email', email)
                }
                else {
                    if (expectedErrorMessage) {
                        expect(response.error).to.have.property('email', expectedErrorMessage)
                    }
                    else {
                        throw new Error('Unexpected error message received.')
                    }
                }
            })
        })
    }
    validateInputField(email, expectedMessage) {
        cy.get('input[type="email"]').click().clear().type(email)
        if (expectedMessage !== null) {
            cy.xpath('//*[@id="email-login"]/p').invoke('text').then((text) => {
                expect(text).to.equal(expectedMessage)
            })
        }
        else {
            cy.xpath('//*[@id="email-login"]/p').should('not.exist')
        }
    }
    inputValidationsEN() {
        cy.contains('Log In / Sign Up').should('be.visible')
        cy.contains('Log In / Sign Up').click()
        cy.url().should('include', 'login?redirect=/en')
        cy.contains('button', 'Login').click()
        cy.xpath('//*[@id="email-login"]/p').invoke('text').then((text) => {
            expect(text).to.equal('Required')
            if (text === 'Required') {
                this.validateInputField('shoukat', 'Invalid Email')
                this.validateInputField('shoukat@gmail', 'Invalid Email')
                this.validateInputField('shoukat@gmail.c', 'Invalid Email')
                this.validateInputField('shoukat@gmail.co', null)
            }
            else {
                cy.log('No input validations implemented for required field')
            }
            cy.xpath('//*[@id="email-login"]/div[3]/p')
                .invoke('text')
                .then((text) => {
                    expect(text).to.equal('Required')
                    if (text === 'Required') {
                        cy.get('input[type="password"]').click().type('abc')
                            .then(() => {
                                cy.xpath('//*[@id="email-login"]/div[3]/p').should('not.exist')
                            })
                    }
                    else {
                        cy.log('No input validations implemented for required field.')
                    }
                })
        })
    }
    inputValidationsAR() {
        cy.contains('العربية').click()
        cy.contains('دخول / تسجيل').should('be.visible')
        cy.contains('دخول / تسجيل').click()
        cy.url().should('include', 'login?redirect=/ar')
        cy.contains('button', 'تسجيل الدخول').click()
        cy.xpath('//*[@id="email-login"]/p').invoke('text').then((text) => {
            expect(text).to.equal('مطلوب')
            if (text === 'مطلوب') {
                this.validateInputField('shoukat', 'تحقق من البريد الإلكتروني')
                this.validateInputField('shoukat@gmail', 'تحقق من البريد الإلكتروني')
                this.validateInputField('shoukat@gmail.c', 'تحقق من البريد الإلكتروني')
                this.validateInputField('shoukat@gmail.co', null)
            }
            else {
                cy.log('No input validations implemented for required field')
            }
            cy.xpath('//*[@id="email-login"]/div[3]/p')
                .invoke('text')
                .then((text) => {
                    expect(text).to.equal('مطلوب')
                    if (text === 'مطلوب') {
                        cy.get('input[type="password"]').click().type('abc')
                            .then(() => {
                                cy.xpath('//*[@id="email-login"]/div[3]/p').should('not.exist')
                            })
                    }
                    else {
                        cy.log('No input validations implemented for required field.')
                    }
                })
        })
    }
}
const login = new Login()
export default login