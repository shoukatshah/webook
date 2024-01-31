import login from './login'
import './commands'
class Booking {
    bookingInEN() {
        cy.fixture('login_data.json').then((users) => {
            let findQuery = (x) => x.id === 1
            let user = users.find(x => findQuery(x))
            login.loginInEN(user.email, user.password)
        })
        cy.xpath('//*[@id="root"]/header/nav/div/ul/li').click()
        cy.url().should('include', 'explore')
        cy.wait(2000)
        cy.scrollTo(0, 500)
        cy.contains('Disney: The Castle').should('exist').then(($element) => {
            if ($element.length > 0) {
                cy.contains('Disney: The Castle').click()
            }
        })
        cy.wait(2000)
        cy.scrollTo('bottom')
        cy.xpath('//*[@id="main"]/div[1]/section/section/div/a').click()
        cy.intercept('GET', 'https://api.webook.rocks/api/v2/event-detail/disney-the-castle-gold?lang=en&visible_in=rs').as('eventDetailsRequest')
        cy.wait('@eventDetailsRequest', { timeout: 10000 }).then((interception) => {
            const is_soldout = interception.response.body.data.is_soldout
            const time_slots = interception.response.body.data.time_slots
            cy.log(`Here is soldout: ${is_soldout} and timeslots length: ${time_slots.length}`)
            if (is_soldout === false || time_slots.length > 0) {
                const firstDate = time_slots[0]
                const day = new Date(firstDate).getDate()
                cy.get('button[name="day"]').filter(':contains(' + day + ')').eq(1).click()
                cy.intercept('GET', `https://api.webook.rocks/api/v2/event-detail/disney-the-castle-gold/timeslot-capacity?time_slot=${firstDate}&visible_in=rs`).as('timeslotCapacity')
                cy.wait('@timeslotCapacity', { timeout: 10000 }).then((interception) => {
                    const start_time = new Date(interception.response.body.data[0].time_from)
                    const formattedTime = start_time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
                    cy.contains(`${formattedTime}`).click()
                    cy.contains('button', 'Select Tickets').click({ force: true })
                    cy.xpath('/html/body/div[1]/main/section/div/div[2]/div[2]/div/div/ul/li[3]/div[1]/div[2]/div[2]/button[2]').click()
                    cy.contains('button', 'Next').click()
                    cy.intercept('POST', 'https://api.webook.rocks/api/v2/checkout?lang=en').as('checkOut')
                    cy.contains('button', 'Select Payment').click()
                    cy.get('input[type = checkbox]').each(($chekbox) => {
                        cy.wrap($chekbox).check()
                    })
                    cy.contains('button', 'Proceed to Payment').click({ force: true })
                    cy.wait('@checkOut').then((interception) => {
                        const status = interception.response.body.status
                        const resp = interception.response.body.message
                        if (status === "error") {
                            cy.log(resp.time_slots)
                        }
                        else {
                            cy.origin('https://secure.paytabs.sa', () => {
                                cy.wait(2000)
                                cy.get('#number').type('4111111111111111')
                                cy.get('#expmonth').type('12')
                                cy.get('#expyear').type('25')
                                cy.get('#cvv').type('123')
                                cy.get('#payBtn').click()
                                cy.wait(2000)
                                cy.contains('Please wait while redirecting').should('be.visible')
                            })
                            cy.wait(30000)
                            cy.contains('Back to my orders').should('be.visible')
                        }
                    })
                })
            }
            else {
                cy.log('No available dates or event is sold out.')
            }
        })
    }

    bookingInAR() {
        cy.fixture('login_data.json').then((users) => {
            let findQuery = (x) => x.id === 1
            let user = users.find(x => findQuery(x))
            login.loginInAR(user.email, user.password)
        })
        cy.xpath('//*[@id="root"]/header/nav/div/ul/li').click()
        cy.url().should('include', 'explore')
        cy.wait(2000)
        cy.scrollTo(0, 500)
        cy.contains('ديزني ذا كاسل').should('exist').then(($element) => {
            if ($element.length > 0) {
                cy.contains('ديزني ذا كاسل').click()
            }
        })
        cy.wait(2000)
        cy.scrollTo('bottom')
        cy.xpath('//*[@id="main"]/div[1]/section/section/div/a').click()
        cy.intercept('GET', 'https://api.webook.rocks/api/v2/event-detail/disney-the-castle-gold?lang=ar&visible_in=rs').as('eventDetailsRequest')
        cy.wait('@eventDetailsRequest', { timeout: 10000 }).then((interception) => {
            const is_soldout = interception.response.body.data.is_soldout
            const time_slots = interception.response.body.data.time_slots
            if (is_soldout === false || time_slots.length > 0) {
                const firstDate = time_slots[0]
                const day = new Date(firstDate).getDate()
                cy.get('button[name="day"]').filter(':contains(' + day + ')').eq(1).click()
                cy.intercept('GET', `https://api.webook.rocks/api/v2/event-detail/disney-the-castle-gold/timeslot-capacity?time_slot=${firstDate}&visible_in=rs`).as('timeslotCapacity')
                cy.wait('@timeslotCapacity', { timeout: 10000 }).then((interception) => {
                    const start_time = new Date(interception.response.body.data[0].time_from)
                    const formattedTime = start_time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
                    cy.contains(`${formattedTime}`).click()
                    cy.contains('button', 'اختر التذاكر').click({ force: true })
                    cy.xpath('/html/body/div[1]/main/section/div/div[2]/div[2]/div/div/ul/li[3]/div[1]/div[2]/div[2]/button[2]').click()
                    cy.contains('button', 'التالي').click()
                    cy.intercept('POST', 'https://api.webook.rocks/api/v2/checkout?lang=ar').as('checkOut')
                    cy.contains('button', 'اختر طريقة الدفع').click()
                    cy.get('input[type = checkbox]').each(($chekbox) => {
                        cy.wrap($chekbox).check()
                    })
                    cy.contains('button', 'الذهاب للدفع').click({ force: true })
                    cy.wait('@checkOut').then((interception) => {
                        const status = interception.response.body.status
                        const resp = interception.response.body.message
                        if (status === "error") {
                            cy.log(resp.time_slots)
                        }
                        else {
                            cy.origin('https://secure.paytabs.sa', () => {
                                cy.wait(2000)
                                cy.get('#number').type('4111111111111111')
                                cy.get('#expmonth').type('12')
                                cy.get('#expyear').type('25')
                                cy.get('#cvv').type('123')
                                cy.get('#payBtn').click()
                                cy.wait(2000)
                                cy.contains(' يرجى الانتظار أثناء إعادة التوجيه').should('be.visible')
                            })
                            cy.wait(30000)
                            cy.contains('العودة لقائمة الطلبات').should('be.visible')
                        }
                    })
                })
            }
            else {
                cy.log('No available dates or event is sold out.')
            }
        })

    }
}
const booking = new Booking()
export default booking