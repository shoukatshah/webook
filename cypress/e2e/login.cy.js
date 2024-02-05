import login from '../support/login'

describe('Login Scenarios in English and Arabic Language', () => {
  beforeEach(() => {
    cy.setCookie('CF_Authorization', 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImM1OTAxNmFmYTNhMzFmODg1ZWEzNTQ4MDMwODI5NDNhMzhlZmQ5OTE2OTBiMTIyY2YyMjY0MjExNDIzMDdiMWIifQ.eyJhdWQiOlsiZmU2ZWI0NDU4OTBiYTY3MDFmOGE1NWEzZjBhMzZmYjdhOGZlOWZhZDBjYjhlYWJkYTg4ODIwNDg5ZDQ2ODNkZiJdLCJlbWFpbCI6Im11aGFtbWFkLnNob3VrYXRAdXhiZXJ0LmNvbSIsImFjY291bnRfaWQiOiIzYjlkNDBiNWYzNzBhMzNiYmFhMjFkNjQ4NDU3NzYyNSIsImV4cCI6MTcwNzE5OTg3OCwiaWF0IjoxNzA3MTEzNDc4LCJuYmYiOjE3MDcxMTM0NzgsImlzcyI6Imh0dHBzOi8vc3VwZXJ0ZWNoLmNsb3VkZmxhcmVhY2Nlc3MuY29tIiwic3ViIjoiYTQ3YTgyMDYtYTcwNi01ODJlLThkMDAtZDVhZWM4YTczMGYyIiwiaWRlbnRpdHkiOnsiZW1haWwiOiJtdWhhbW1hZC5zaG91a2F0QHV4YmVydC5jb20iLCJpZHAiOnsiaWQiOiJlYWM0YzQ5Yy1lYTM1LTQ0MTUtOTAxNy04YTU1YTcxNDY5M2UiLCJ0eXBlIjoib25ldGltZXBpbiJ9LCJnZW8iOnsiY291bnRyeSI6IlBLIn0sInVzZXJfdXVpZCI6ImE0N2E4MjA2LWE3MDYtNTgyZS04ZDAwLWQ1YWVjOGE3MzBmMiIsImFjY291bnRfaWQiOiIzYjlkNDBiNWYzNzBhMzNiYmFhMjFkNjQ4NDU3NzYyNSIsImlhdCI6MTcwNzExMzQ3OCwiaXAiOiIxMDMuMTUyLjEwMS4xNjEiLCJhdXRoX3N0YXR1cyI6Ik5PTkUiLCJjb21tb25fbmFtZSI6IiIsInNlcnZpY2VfdG9rZW5faWQiOiIiLCJzZXJ2aWNlX3Rva2VuX3N0YXR1cyI6ZmFsc2UsImlzX3dhcnAiOmZhbHNlLCJpc19nYXRld2F5IjpmYWxzZSwiZGV2aWNlX2lkIjoiIiwibXRsc19hdXRoIjp7ImNlcnRfaXNzdWVyX2RuIjoiIiwiY2VydF9zZXJpYWwiOiIiLCJjZXJ0X2lzc3Vlcl9za2kiOiIiLCJjZXJ0X3ByZXNlbnRlZCI6dHJ1ZSwiY29tbW9uX25hbWUiOiIiLCJhdXRoX3N0YXR1cyI6Ik5PTkUifSwidmVyc2lvbiI6Mn0sInR5cGUiOiJvcmciLCJpZGVudGl0eV9ub25jZSI6IlB0eXI4SDhpTDRBNExhSVEifQ.Fe9sv5Ch6OwlEsGmGndNH3VHHl1m2Le3_q_ZGTngJe7LkThVQvvELkGIYL3N8JXPxLVbL24Rgeamoi6SE_hBJP_x4TSdk7HfMlW8UgLNDxe2Zb2SgTH-utLsGUJv416S4pZXnMGA7qcc5G3CN6mDLxR-NMVBlm3xemoBRh_2PNcz-opKXeBIY5N4i7m0klqpSBnYNnEouxpFzUkA0AfX5icJ73PDRDLhy4H7E1JVHSBQ9TqZ9_rhcQ0xNXtfUvSAR1lV4ulhAhCRSGCrwECepYzwy0C_bBzm-Sf10QIapRMSZYPHVqUfu1XyfqGH1UMBL9p2WbBwUwf7husM_Y90vg')
        cy.setCookie('CF_Authorization', 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImM1OTAxNmFmYTNhMzFmODg1ZWEzNTQ4MDMwODI5NDNhMzhlZmQ5OTE2OTBiMTIyY2YyMjY0MjExNDIzMDdiMWIifQ.eyJhdWQiOlsiMjcwZjQ1YjI0ZTlhNmMxZTRjMTY4NmExNWIyZWJiNDFhZTRlM2ZiMjY2ZTUyMDg2ODMyMzhkNzgxYzA0MmZhNCJdLCJlbWFpbCI6Im11aGFtbWFkLnNob3VrYXRAdXhiZXJ0LmNvbSIsImV4cCI6MTcwNzE5OTg3OCwiaWF0IjoxNzA3MTEzNDc4LCJuYmYiOjE3MDcxMTM0NzgsImlzcyI6Imh0dHBzOi8vc3VwZXJ0ZWNoLmNsb3VkZmxhcmVhY2Nlc3MuY29tIiwidHlwZSI6ImFwcCIsImlkZW50aXR5X25vbmNlIjoiUHR5cjhIOGlMNEE0TGFJUSIsInN1YiI6ImE0N2E4MjA2LWE3MDYtNTgyZS04ZDAwLWQ1YWVjOGE3MzBmMiIsImNvdW50cnkiOiJQSyJ9.FwbPfppdH-SMhyaQgvV-bfvKMmDsHWmBHa1eVywKteLjZoVAUy2zwYx2q3a4pK6mzJXoiWQdDXCuH0jZSeV4AVkjoLw8iAotYBGOFltmETWZcZ_06v7ouhlEgR5UhFHcx-xNu3skYlJ5EU3DwQMwbtpH5Bt72z4WfMebSQHgtqCCPtju9mrTbNIH_rJASbs91mN8q3h3mL0L57lO3Qy4UwTbslmigfH56vNoh5HFBvKPij5mIgLS5Rx1Dn57DXsIqm7TC5dQ1jJPQ-W9a2GW3aIzWZPBfRHxepzj_XJst082ah6v0mIr_vwDPMmlFyNBfCdpiQkUm2cdsgffzzKqcw')
        cy.setCookie('CF_AppSession', 'nfc913bee39281c06')
        cy.setCookie('CF_Device', 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImM1OTAxNmFmYTNhMzFmODg1ZWEzNTQ4MDMwODI5NDNhMzhlZmQ5OTE2OTBiMTIyY2YyMjY0MjExNDIzMDdiMWIifQ.eyJ0eXBlIjoidHJ1c3RlZF9kZXZpY2UiLCJpc3MiOiJodHRwczovL3N1cGVydGVjaC5jbG91ZGZsYXJlYWNjZXNzLmNvbSIsImlhdCI6MTcwNzExMzQ4MCwiZXhwIjoxNzA5NzA1NDgwLCJqdGkiOiIxbFV5TEswTnZWNUxFWERZd2RiWlU0SGFtQlJqa0tWMyIsImVtYWlscyI6WyJtdWhhbW1hZC5zaG91a2F0QHV4YmVydC5jb20iXX0.sHI6ACGtNEn_xIoTRygVYw8rBM27ec-zSDqXo4NGsLAJLO_qvvrvDQGGYdKrbGqURMvoW0FXSAXoRy2xgB7xIcE4Qi005pAdcGCBtRGeNyj3seZvyIZuO1vmrexlvPvBZtN-mp0lGBlY9ncYZ_l1ELaPu-DpFy1O72DOrRSx_WaqpXeIXk5AJIOMkvLktMFkd5uXH0DEpBZ8fIX_jXwoJdXP6a6yLCzCnoXc1cjdo6BAJy9b4APT3G80ZeKOXoWtssX5h2iSDxVOPwv15p6EBCab7Yo_Fhmokmx35bS1r55ogEHO3vInurJy2--H8TJSqFtaWtEZLm7UgVji9lvohg')
        cy.visit('/')
  })

  it('En => Login with correct Email and corrct Password', () => {
    cy.wait(5000)
    cy.fixture('login_data.json').then((users) => {
      let findQuery = (x) => x.id === 1
      let user = users.find(x => findQuery(x))
      login.loginInEN(user.email, user.password)
    })
  })
  it('En => Login with correct Email and incorrect Password', () => {
    cy.wait(5000)
    cy.fixture('login_data.json').then((users) => {
      let findQuery = (x) => x.id === 2
      let user = users.find(x => findQuery(x))
      login.loginInEN(user.email, user.password, 'Invalid credentials')
    })
  })
  it('En => Login with incorrect Email and correct Password', () => {
    cy.wait(5000)
    cy.fixture('login_data.json').then((users) => {
      let findQuery = (x) => x.id === 3;
      let user = users.find(x => findQuery(x))
      login.loginInEN(user.email, user.password, 'Invalid credentials')
    })
  })
  it('En => Login with incorrect Email and incorrect Password', () => {
    cy.wait(5000)
    cy.fixture('login_data.json').then((users) => {
      let findQuery = (x) => x.id === 4;
      let user = users.find(x => findQuery(x))
      login.loginInEN(user.email, user.password, 'Invalid credentials')
    })
  })

  it('Ar => Login with correct Email and corrct Password', () => {
    cy.wait(5000)
    cy.fixture('login_data.json').then((users) => {
      let findQuery = (x) => x.id === 1;
      let user = users.find(x => findQuery(x))
      login.loginInAR(user.email, user.password)
    })
  })
  it('Ar => Login with correct Email and incorrect Password', () => {
    cy.wait(5000)
    cy.fixture('login_data.json').then((users) => {
      let findQuery = (x) => x.id === 2;
      let user = users.find(x => findQuery(x))
      login.loginInAR(user.email, user.password, 'Invalid credentials')
    })
  })
  it('Ar => Login with incorrect Email and correct Password', () => {
    cy.wait(5000)
    cy.fixture('login_data.json').then((users) => {
      let findQuery = (x) => x.id === 3;
      let user = users.find(x => findQuery(x))
      login.loginInAR(user.email, user.password, 'Invalid credentials')
    })
  })
  it('Ar => Login with incorrect Email and incorrect Password', () => {
    cy.wait(5000)
    cy.fixture('login_data.json').then((users) => {
      let findQuery = (x) => x.id === 4;
      let user = users.find(x => findQuery(x))
      login.loginInAR(user.email, user.password, 'Invalid credentials')
    })
  })


})
describe('Input Validations for Login', () => {
  beforeEach(() => {
    cy.setCookie('CF_Authorization', 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImM1OTAxNmFmYTNhMzFmODg1ZWEzNTQ4MDMwODI5NDNhMzhlZmQ5OTE2OTBiMTIyY2YyMjY0MjExNDIzMDdiMWIifQ.eyJhdWQiOlsiZmU2ZWI0NDU4OTBiYTY3MDFmOGE1NWEzZjBhMzZmYjdhOGZlOWZhZDBjYjhlYWJkYTg4ODIwNDg5ZDQ2ODNkZiJdLCJlbWFpbCI6Im11aGFtbWFkLnNob3VrYXRAdXhiZXJ0LmNvbSIsImFjY291bnRfaWQiOiIzYjlkNDBiNWYzNzBhMzNiYmFhMjFkNjQ4NDU3NzYyNSIsImV4cCI6MTcwNjA5MjkyOSwiaWF0IjoxNzA2MDA2NTI5LCJuYmYiOjE3MDYwMDY1MjksImlzcyI6Imh0dHBzOi8vc3VwZXJ0ZWNoLmNsb3VkZmxhcmVhY2Nlc3MuY29tIiwic3ViIjoiYTQ3YTgyMDYtYTcwNi01ODJlLThkMDAtZDVhZWM4YTczMGYyIiwiaWRlbnRpdHkiOnsiZW1haWwiOiJtdWhhbW1hZC5zaG91a2F0QHV4YmVydC5jb20iLCJpZHAiOnsiaWQiOiJlYWM0YzQ5Yy1lYTM1LTQ0MTUtOTAxNy04YTU1YTcxNDY5M2UiLCJ0eXBlIjoib25ldGltZXBpbiJ9LCJnZW8iOnsiY291bnRyeSI6IlBLIn0sInVzZXJfdXVpZCI6ImE0N2E4MjA2LWE3MDYtNTgyZS04ZDAwLWQ1YWVjOGE3MzBmMiIsImFjY291bnRfaWQiOiIzYjlkNDBiNWYzNzBhMzNiYmFhMjFkNjQ4NDU3NzYyNSIsImlhdCI6MTcwNjAwNjUyOSwiaXAiOiIyMjMuMTIzLjExLjExNSIsImF1dGhfc3RhdHVzIjoiTk9ORSIsImNvbW1vbl9uYW1lIjoiIiwic2VydmljZV90b2tlbl9pZCI6IiIsInNlcnZpY2VfdG9rZW5fc3RhdHVzIjpmYWxzZSwiaXNfd2FycCI6ZmFsc2UsImlzX2dhdGV3YXkiOmZhbHNlLCJkZXZpY2VfaWQiOiIiLCJtdGxzX2F1dGgiOnsiY2VydF9pc3N1ZXJfZG4iOiIiLCJjZXJ0X3NlcmlhbCI6IiIsImNlcnRfaXNzdWVyX3NraSI6IiIsImNlcnRfcHJlc2VudGVkIjp0cnVlLCJjb21tb25fbmFtZSI6IiIsImF1dGhfc3RhdHVzIjoiTk9ORSJ9LCJ2ZXJzaW9uIjoyfSwidHlwZSI6Im9yZyIsImlkZW50aXR5X25vbmNlIjoic09MREI0d0RQeU90NE1PbiJ9.VCYpaElHJCoF_7OcIwPxQkE-YW0RTgeU30XnOeUvwB4vQkPqJQ2JZx6-37cICDwpuMrNvvWQHDaBQ9bdpnGYMrlJCu-PONAh1-0oVg1ojf62S5JncuPE-Y_C1AbE52fD7pA7cVEfITatucYbjjg63OMn8ufShIvc0nWE1vxItO6zTWNXsPAEI8s8SwIvKGjyCsxCEOpDTQmnauXUFklsL_NbI2JJFaxHGbQ2GpFnn7iushFpESUttOZR9bOmwcN5hriIhiDIBemKhZR-uQoiX_XdRa14p5sjazkclcWEAdfKjqBX-Xemkw7HH0GnO5EueBhVauy7hIvcF3YwFQVNIQ')
        cy.setCookie('CF_Authorization', 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImM1OTAxNmFmYTNhMzFmODg1ZWEzNTQ4MDMwODI5NDNhMzhlZmQ5OTE2OTBiMTIyY2YyMjY0MjExNDIzMDdiMWIifQ.eyJhdWQiOlsiMjcwZjQ1YjI0ZTlhNmMxZTRjMTY4NmExNWIyZWJiNDFhZTRlM2ZiMjY2ZTUyMDg2ODMyMzhkNzgxYzA0MmZhNCJdLCJlbWFpbCI6Im11aGFtbWFkLnNob3VrYXRAdXhiZXJ0LmNvbSIsImV4cCI6MTcwNjA5MjkyOSwiaWF0IjoxNzA2MDA2NTI5LCJuYmYiOjE3MDYwMDY1MjksImlzcyI6Imh0dHBzOi8vc3VwZXJ0ZWNoLmNsb3VkZmxhcmVhY2Nlc3MuY29tIiwidHlwZSI6ImFwcCIsImlkZW50aXR5X25vbmNlIjoic09MREI0d0RQeU90NE1PbiIsInN1YiI6ImE0N2E4MjA2LWE3MDYtNTgyZS04ZDAwLWQ1YWVjOGE3MzBmMiIsImNvdW50cnkiOiJQSyJ9.X6JbWEx0LcSpofwzEQ3IJf69HKYSPDPCpyAtFAMQsP6njNtrpO1fgJarqxIIV5D4RsorxivEcfic-YFw8-UK_ex1RBXBdJrV9Z7B65bgdN9L875gKkVFk8FUFjh8yTxgSnqtfdII6xpFOuYzSwAFwqmMSdOfFmEqiYb-Ok4CbvcrRhvqniKDOEg4YpG4KoeS0nhL6NtlM6DnGdifFB2PMD4l20Gm49I3FWL73H2_UcfKR4qshJRdwIoXHhHb0W0PtAokSC-zdqJ-D6ksuo6B-Mul7zsWNFIlvuU-nlsNgrCMOa8zJXfc6kxuBgc-kvfOKH0GkVvcAyqXQru8AyUFvw')
        cy.setCookie('CF_AppSession', 'ncbdbe1d33fc0251b')
        cy.setCookie('CF_Device', 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImM1OTAxNmFmYTNhMzFmODg1ZWEzNTQ4MDMwODI5NDNhMzhlZmQ5OTE2OTBiMTIyY2YyMjY0MjExNDIzMDdiMWIifQ.eyJ0eXBlIjoidHJ1c3RlZF9kZXZpY2UiLCJpc3MiOiJodHRwczovL3N1cGVydGVjaC5jbG91ZGZsYXJlYWNjZXNzLmNvbSIsImlhdCI6MTcwNjAwNjUyOSwiZXhwIjoxNzA4NTk4NTI5LCJqdGkiOiIxbFV5TEswTnZWNUxFWERZd2RiWlU0SGFtQlJqa0tWMyIsImVtYWlscyI6WyJtdWhhbW1hZC5zaG91a2F0QHV4YmVydC5jb20iXX0.F4xSq-ciqZ0Yt6TTKZQsYkbBxkpIqUwwoZpiKKqr_RHW4LfHHhydpGykqRG_gz8bJ1M1fJmmiPoaZ8VwbjhLK_6mNwwas6eBphxU9F7ocx3t_eq0AaXO6m2Gk3-PNQ_n-4cp8KJIPuljsMfAbGQHwiXmC7eUWsl2HHfH7-m4JOuA-mRxo-VdVyXkpX5oTrDmkaMOPjdiD-kralR1MMKmcelLcWXb7wQ9lOEgKF03pjiZQwrF6lYYuhAUaUT8wi6Kq4YFUcZDHHEAp2qmuA18SCaRE9VihWLvXtwm6MYCcKwd7eivNQGCrHq3nAP-DML1ysDEjB0xQntuE_wHHVrKag')
        cy.visit('/')
  })
  it('En >> Verify the validations for required fields', () => {
    cy.wait(5000)
    login.inputValidationsEN()
  })
  it('Ar >> Verify the validations for required fields', () => {
    cy.wait(5000)
    login.inputValidationsAR()
  })
})
