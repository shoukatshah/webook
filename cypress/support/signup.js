class Signup {
    singnupInEN(first_name, last_name, email, confirm_email, password, mobile_number, expectedErrorMessage) {
        cy.contains('Log In / Sign Up').should('be.visible')
        cy.contains('Log In / Sign Up').click()
        cy.url().should('include', 'login?redirect=/en')
        cy.contains('button', 'Create an account').should('be.visible')
        cy.contains('button', 'Create an account').click()
        cy.contains('Create Your Account').should('be.visible').then(() => {
            cy.get('#first_name').click().type(first_name)
            cy.get('#last_name').click().type(last_name)
            cy.get('#email').click().type(email)
            cy.get('#confirm_email').click().type(confirm_email)
            cy.get('input[type="password"]').click().type(password)
            cy.get('input[type="tel"]').click().type(mobile_number)
            cy.contains('button', 'Create Account').click()
            cy.intercept('POST', 'https://api.webook.rocks/api/v2/register?lang=en').as('signupRequest')
            cy.wait('@signupRequest').then((interception) => {
                const requestPayload = interception.request.body
                expect(requestPayload).to.have.property('first_name', first_name)
                expect(requestPayload).to.have.property('last_name', last_name)
                expect(requestPayload).to.have.property('email', email)
                expect(requestPayload).to.have.property('confirm_email', confirm_email)
                expect(requestPayload).to.have.property('password', password)
                expect(requestPayload).to.have.property('phone', mobile_number)
                expect(requestPayload).to.have.property('captcha').that.is.not.empty
                const response = interception.response.body
                if (response.status != 'error') {
                    expect(response).to.have.property('status', 'success')
                    expect(response.data.user).to.have.property('first_name', first_name)
                    expect(response.data.user).to.have.property('last_name', last_name)
                    expect(response.data.user).to.have.property('email', email)
                    expect(response.data.user).to.have.property('cell_number', mobile_number)
                    expect(response.data.user).to.have.property('cell_country_code', 'SA')
                    expect(response.data.user).to.have.property('is_guest', false)
                    expect(response.data.user).to.have.property('has_bookings', false)
                }
                else {
                    if (expectedErrorMessage) {
                        expect(response.error).to.have.property('user', expectedErrorMessage)
                        cy.xpath('//*[@id="signup-wrapper"]/div[3]/div/p').invoke('text').then((text) => {
                            expect(text).to.equal('Account already exists. Please login or use the forgot password option if needed.')
                        })
                    }
                    else {
                        throw new Error('Unexpected error message received.')
                    }
                }
            })
        })
    }
    singnupInAR(first_name, last_name, email, confirm_email, password, mobile_number, expectedErrorMessage) {
        cy.contains('العربية').click()
        cy.contains('دخول / تسجيل').should('be.visible')
        cy.contains('دخول / تسجيل').click()
        cy.url().should('include', 'login?redirect=/ar')
        cy.contains('button', 'تسجيل حساب جديد').should('be.visible')
        cy.contains('button', 'تسجيل حساب جديد').click()
        cy.contains('تسجيل حساب جديد').should('be.visible').then(() => {
            cy.get('#first_name').click().type(first_name)
            cy.get('#last_name').click().type(last_name)
            cy.get('#email').click().type(email)
            cy.get('#confirm_email').click().type(confirm_email)
            cy.get('input[type="password"]').click().type(password)
            cy.get('input[type="tel"]').click().type(mobile_number)
            cy.contains('button', 'إنشاء حساب جديد').click()
            cy.intercept('POST', 'https://api.webook.rocks/api/v2/register?lang=ar').as('signupRequest')
            cy.wait('@signupRequest').then((interception) => {
                const requestPayload = interception.request.body
                expect(requestPayload).to.have.property('first_name', first_name)
                expect(requestPayload).to.have.property('last_name', last_name)
                expect(requestPayload).to.have.property('email', email)
                expect(requestPayload).to.have.property('confirm_email', confirm_email)
                expect(requestPayload).to.have.property('password', password)
                expect(requestPayload).to.have.property('phone', mobile_number)
                expect(requestPayload).to.have.property('captcha').that.is.not.empty
                const response = interception.response.body
                if (response.status != 'error') {
                    expect(response).to.have.property('status', 'success')
                    expect(response.data.user).to.have.property('first_name', first_name)
                    expect(response.data.user).to.have.property('last_name', last_name)
                    expect(response.data.user).to.have.property('email', email)
                    expect(response.data.user).to.have.property('cell_number', mobile_number)
                    expect(response.data.user).to.have.property('cell_country_code', 'SA')
                    expect(response.data.user).to.have.property('is_guest', false)
                    expect(response.data.user).to.have.property('has_bookings', false)
                }
                else {
                    if (expectedErrorMessage) {
                        expect(response.error).to.have.property('user', expectedErrorMessage)
                        cy.xpath('//*[@id="signup-wrapper"]/div[3]/div/p').invoke('text').then((text) => {
                            expect(text).to.equal('الحساب مسجل مسبقاً. يرجى تسجيل الدخول أو إستعادة كلمة المرور عند الحاجة')
                        })
                    }
                    else {
                        throw new Error('Unexpected error message received.')
                    }
                }
            })
        })
    }
    validateInputField(email, expectedMessage) {
        cy.get('#email').click().clear().type(email)
        if (expectedMessage !== null) {
            cy.xpath('//*[@id="signup-form-info"]/fieldset[2]/div[1]/p[1]').invoke('text').then((text) => {
                expect(text).to.equal(expectedMessage)
            })
        }
        else {
            cy.xpath('//*[@id="email-login"]/p').should('not.exist')
        }
    }
    validateConfirmEmail(email, expectedMessage) {
        cy.get('#confirm_email').click().clear().type(email)
        if (expectedMessage !== null) {
            cy.xpath('//*[@id="signup-form-info"]/fieldset[2]/div[2]/p').invoke('text').then((text) => {
                expect(text).to.equal(expectedMessage)
            })
        }
        else {
            cy.xpath('//*[@id="signup-form-info"]/fieldset[2]/div[2]/p').should('not.exist')
        }
    }
    validatePassword(password, expectedMessage) {
        cy.get('input[type="password"]').click().clear().type(password)
        if (expectedMessage !== null) {
            cy.xpath('//*[@id="signup-form-info"]/fieldset[3]/p').invoke('text').then((text) => {
                expect(text).to.equal(expectedMessage)
            })
        }
        else {
            cy.xpath('//*[@id="signup-form-info"]/fieldset[3]/p').should('not.exist')
        }
    }
    validatePhoneNumber(phone_number, expectedMessage) {
        cy.get('input[type="tel"]').click().clear().type(phone_number)
        cy.url().then((URL) => {
            if (URL.includes('https://wbk-web-test.webook.rocks/en/login?redirect=/en')) {
                cy.contains('button', 'Create Account').click()
            }
            else {
                cy.contains('button', 'إنشاء حساب جديد').click()
            }
        })
        if (expectedMessage !== null) {
            cy.xpath('//*[@id="signup-form-info"]/fieldset[4]/div/div/div[2]/p').invoke('text').then((text) => {
                expect(text).to.equal(expectedMessage)
            })
        }
        else {
            cy.xpath('//*[@id="signup-form-info"]/fieldset[4]/div/div/div[2]/p').should('not.exist')
        }
    }
    inputValidationsEN() {
        cy.contains('Log In / Sign Up').should('be.visible')
        cy.contains('Log In / Sign Up').click()
        cy.contains('button', 'Create an account').should('be.visible')
        cy.contains('button', 'Create an account').click()
        cy.url().should('include', 'login?redirect=/en')
        cy.contains('button', 'Create Account').click()
        cy.xpath('//*[@id="signup-form-info"]/fieldset[1]/div[1]/p').should('contain', 'Required')
        cy.get('#first_name').click().type('sh')
        cy.xpath('//*[@id="signup-form-info"]/fieldset[1]/div[1]/p').should('not.exist')
        cy.xpath('//*[@id="signup-form-info"]/fieldset[1]/div[2]/p').should('contain', 'Required')
        cy.get('#last_name').click().type('shaha')
        cy.xpath('//*[@id="signup-form-info"]/fieldset[1]/div[2]/p').should('not.exist')
        cy.xpath('//*[@id="signup-form-info"]/fieldset[2]/div[1]/p[1]').invoke('text').then((text) => {
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
        })
        cy.xpath('//*[@id="signup-form-info"]/fieldset[2]/div[2]/p').invoke('text').then((text) => {
            expect(text).to.equal('Required')
            if (text === 'Required') {
                this.validateConfirmEmail('shoukat', 'Emails do not match')
                this.validateConfirmEmail('shoukat@gmail', 'Emails do not match')
                this.validateConfirmEmail('shoukat@gmail.c', 'Emails do not match')
                this.validateConfirmEmail('shoukat@gmail.co', null)
            }
            else {
                cy.log('No input validations implemented for required field')
            }
        })
        cy.xpath('//*[@id="signup-form-info"]/fieldset[3]/p').invoke('text').then((text) => {
            expect(text).to.equal('Required')
            if (text === 'Required') {
                this.validatePassword('Test1', 'Invalid password')
                this.validatePassword('Test12', 'Invalid password')
                this.validatePassword('Test123', 'Invalid password')
                this.validatePassword('Test1234', null)
            }
            else {
                cy.log('No input validations implemented for required field')
            }
        })
        cy.xpath('//*[@id="signup-form-info"]/fieldset[4]/div/div/div[2]/p').invoke('text').then((text) => {
            expect(text).to.equal('Required')
            if (text === 'Required') {
                this.validatePhoneNumber('54685', 'Invalid mobile')
                this.validatePhoneNumber('546859', 'Invalid mobile')
                this.validatePhoneNumber('5468598', 'Invalid mobile')
                this.validatePhoneNumber('54685989', 'Invalid mobile')
                this.validatePhoneNumber('11111111111', 'Invalid mobile')
            }
            else {
                cy.log('No input validations implemented for required field')
            }
        })
    }
    inputValidationsAR() {
        cy.contains('العربية').click()
        cy.contains('دخول / تسجيل').should('be.visible')
        cy.contains('دخول / تسجيل').click()
        cy.contains('button', 'تسجيل حساب جديد').click()
        cy.url().should('include', 'login?redirect=/ar')
        cy.contains('button', 'إنشاء حساب جديد').click()
        cy.xpath('//*[@id="signup-form-info"]/fieldset[1]/div[1]/p').should('contain', 'مطلوب')
        cy.get('#first_name').click().type('sh')
        cy.xpath('//*[@id="signup-form-info"]/fieldset[1]/div[1]/p').should('not.exist')
        cy.xpath('//*[@id="signup-form-info"]/fieldset[1]/div[2]/p').should('contain', 'مطلوب')
        cy.get('#last_name').click().type('shaha')
        cy.xpath('//*[@id="signup-form-info"]/fieldset[1]/div[2]/p').should('not.exist')
        cy.xpath('//*[@id="signup-form-info"]/fieldset[2]/div[1]/p[1]').invoke('text').then((text) => {
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
        })
        cy.xpath('//*[@id="signup-form-info"]/fieldset[2]/div[2]/p').invoke('text').then((text) => {
            expect(text).to.equal('مطلوب')
            if (text === 'مطلوب') {
                this.validateConfirmEmail('shoukat', 'البريد الإلكتروني غير متطابق')
                this.validateConfirmEmail('shoukat@gmail', 'البريد الإلكتروني غير متطابق')
                this.validateConfirmEmail('shoukat@gmail.c', 'البريد الإلكتروني غير متطابق')
                this.validateConfirmEmail('shoukat@gmail.co', null)
            }
            else {
                cy.log('No input validations implemented for required field')
            }
        })
        cy.xpath('//*[@id="signup-form-info"]/fieldset[3]/p').invoke('text').then((text) => {
            expect(text).to.equal('مطلوب')
            if (text === 'مطلوب') {
                this.validatePassword('Test1', 'كلمة المرور غير مطابقة للشروط')
                this.validatePassword('Test12', 'كلمة المرور غير مطابقة للشروط')
                this.validatePassword('Test123', 'كلمة المرور غير مطابقة للشروط')
                this.validatePassword('Test1234', null)
            }
            else {
                cy.log('No input validations implemented for required field')
            }
        })
        cy.xpath('//*[@id="signup-form-info"]/fieldset[4]/div/div/div[2]/p').invoke('text').then((text) => {
            expect(text).to.equal('مطلوب')
            if (text === 'مطلوب') {
                this.validatePhoneNumber('54685', 'رقم الجوال غير صحيح')
                this.validatePhoneNumber('546859', 'رقم الجوال غير صحيح')
                this.validatePhoneNumber('5468598', 'رقم الجوال غير صحيح')
                this.validatePhoneNumber('54685989', 'رقم الجوال غير صحيح')
                this.validatePhoneNumber('11111111111', 'رقم الجوال غير صحيح')
            }
            else {
                cy.log('No input validations implemented for required field')
            }
        })
    }
}
const signup = new Signup()
export default signup