class Logout {
    logoutInEN() {
        cy.xpath('/html/body/div[1]/header/nav/ul/li[3]/div[1]/button').click()
        cy.contains('Logout').should('be.visible').then(() => {
            cy.contains('Logout').click()
            cy.contains('Are you sure you want to logout?').should('be.visible')
            cy.get('.flex.items-baseline.justify-evenly.gap-4 button:contains("Logout")').click()
            cy.intercept('POST', 'https://api.webook.rocks/api/v2/auth/logout').as('logout')
            cy.wait('@logout').then((interception) => {
                const response = interception.response.body
                if (response.status != 'error') {
                    expect(response).to.have.property('message', 'Successfully logged out')
                }
            })
        })
    }
    logoutInAR() {
        cy.xpath('/html/body/div[1]/header/nav/ul/li[3]/div[1]/button').click()
        cy.contains('تسجيل الخروج').should('be.visible').then(() => {
            cy.contains('تسجيل الخروج').click()
            cy.contains('هل انت متأكد من تسجيل الخروج؟').should('be.visible')
            cy.get('.flex.items-baseline.justify-evenly.gap-4 button:contains("تسجيل الخروج")').click()
            cy.intercept('POST', 'https://api.webook.rocks/api/v2/auth/logout').as('logout')
            cy.wait('@logout').then((interception) => {
                const response = interception.response.body
                if (response.status != 'error') {
                    expect(response).to.have.property('message', 'Successfully logged out')
                }
            })
        })
    }
}
const logout = new Logout()
export default logout