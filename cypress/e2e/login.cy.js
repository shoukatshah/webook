import login from '../support/login'

describe('Login Scenarios in English and Arabic Language', () => {
  beforeEach(() => {
    cy.setCookie('CF_Authorization', 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjA4ZDYxYmFkYTgxMDkwYjA2OWY4YjViZDBmYzEzNGQ1NWNjZGJlMDVlZTFmM2U4NDk5NmE1NjkyMTBhNmQxMTAifQ.eyJhdWQiOlsiZmU2ZWI0NDU4OTBiYTY3MDFmOGE1NWEzZjBhMzZmYjdhOGZlOWZhZDBjYjhlYWJkYTg4ODIwNDg5ZDQ2ODNkZiJdLCJlbWFpbCI6Im11aGFtbWFkLnNob3VrYXRAdXhiZXJ0LmNvbSIsImFjY291bnRfaWQiOiIzYjlkNDBiNWYzNzBhMzNiYmFhMjFkNjQ4NDU3NzYyNSIsImV4cCI6MTcwMzQ4ODE1MCwiaWF0IjoxNzAzNDAxNzUwLCJuYmYiOjE3MDM0MDE3NTAsImlzcyI6Imh0dHBzOi8vc3VwZXJ0ZWNoLmNsb3VkZmxhcmVhY2Nlc3MuY29tIiwic3ViIjoiYTQ3YTgyMDYtYTcwNi01ODJlLThkMDAtZDVhZWM4YTczMGYyIiwiaWRlbnRpdHkiOnsiZW1haWwiOiJtdWhhbW1hZC5zaG91a2F0QHV4YmVydC5jb20iLCJpZHAiOnsiaWQiOiJlYWM0YzQ5Yy1lYTM1LTQ0MTUtOTAxNy04YTU1YTcxNDY5M2UiLCJ0eXBlIjoib25ldGltZXBpbiJ9LCJnZW8iOnsiY291bnRyeSI6IlBLIn0sInVzZXJfdXVpZCI6ImE0N2E4MjA2LWE3MDYtNTgyZS04ZDAwLWQ1YWVjOGE3MzBmMiIsImFjY291bnRfaWQiOiIzYjlkNDBiNWYzNzBhMzNiYmFhMjFkNjQ4NDU3NzYyNSIsImlhdCI6MTcwMzQwMTc1MCwiaXAiOiIxMTEuODguMTU1LjU5IiwiYXV0aF9zdGF0dXMiOiJOT05FIiwiY29tbW9uX25hbWUiOiIiLCJzZXJ2aWNlX3Rva2VuX2lkIjoiIiwic2VydmljZV90b2tlbl9zdGF0dXMiOmZhbHNlLCJpc193YXJwIjpmYWxzZSwiaXNfZ2F0ZXdheSI6ZmFsc2UsImRldmljZV9pZCI6IiIsIm10bHNfYXV0aCI6eyJjZXJ0X2lzc3Vlcl9kbiI6IiIsImNlcnRfc2VyaWFsIjoiIiwiY2VydF9pc3N1ZXJfc2tpIjoiIiwiY2VydF9wcmVzZW50ZWQiOnRydWUsImNvbW1vbl9uYW1lIjoiIiwiYXV0aF9zdGF0dXMiOiJOT05FIn0sInZlcnNpb24iOjJ9LCJ0eXBlIjoib3JnIiwiaWRlbnRpdHlfbm9uY2UiOiJIOHFGMWlTYVBaRFQzclNmIn0.qbb66PpIImHrilCXj_30ZTBdvd90sJDXjHfNcsuiHM8eLu-6w4PQnnUqBG-KWXG2LEr9fxSCqvkNtus_DwZwBaiVDHJEkl8GED5M-Grf7L1lqT8ng6e5xklN9byHGjYTI1zHDh0ev8XrdCHPsPVlvqUmByrUetp5dwr7ghkU80rXkMcGXkoGevLjo1n1x4sfLRpltaZOCQgIQopQL67qvOd1BbXFFCUwk4y_ZFmq-peWuGLj9b6mNczOUY4rdYF9BqjItu9mIGlVrrbJOXf-6hsw6RB2yUtEhfFjZbMx31OrG0f-QNzhMDx2gUAzH6zdWyu8h0l_dOobLDWHSekyFQ');
    cy.setCookie('CF_Authorization', 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjA4ZDYxYmFkYTgxMDkwYjA2OWY4YjViZDBmYzEzNGQ1NWNjZGJlMDVlZTFmM2U4NDk5NmE1NjkyMTBhNmQxMTAifQ.eyJhdWQiOlsiMjcwZjQ1YjI0ZTlhNmMxZTRjMTY4NmExNWIyZWJiNDFhZTRlM2ZiMjY2ZTUyMDg2ODMyMzhkNzgxYzA0MmZhNCJdLCJlbWFpbCI6Im11aGFtbWFkLnNob3VrYXRAdXhiZXJ0LmNvbSIsImV4cCI6MTcwMzQ4ODE1MCwiaWF0IjoxNzAzNDAxNzUwLCJuYmYiOjE3MDM0MDE3NTAsImlzcyI6Imh0dHBzOi8vc3VwZXJ0ZWNoLmNsb3VkZmxhcmVhY2Nlc3MuY29tIiwidHlwZSI6ImFwcCIsImlkZW50aXR5X25vbmNlIjoiSDhxRjFpU2FQWkRUM3JTZiIsInN1YiI6ImE0N2E4MjA2LWE3MDYtNTgyZS04ZDAwLWQ1YWVjOGE3MzBmMiIsImNvdW50cnkiOiJQSyJ9.2Tg7goTHE1Oi11E7Rfh84yvS6XOTLiUD7x2g9zs27KKSvVJbjL164423xpquyEUhhSdvLwlmLzMYHYrIO15-gTanp7ObuDOQXlrX1kSAChdYNwsYw-X6gZPzzJHnJMSnDn0zYa5bAq383sBPf-lUW1J-HBtRaAK_l4nTETUX-syzZYlHnzQXzL6cD4e9VL65n9qIZn4kmIk62qArdC1vk6zT7aW1A9q7sdhkIYG6LE5ivAbntArPrS7iY11KiPrfoFsMgyc0tdpKBSw9MbhbroScKT9yEvDgoCTj2-SpePDgf7Z9c4cwbv3o5gBaTg0NLpTSb149u0MZuRerDnP74A');
    cy.setCookie('CF_AppSession', 'n86af9b2b8b1ce1e4')
    cy.setCookie('CF_Device', 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjA4ZDYxYmFkYTgxMDkwYjA2OWY4YjViZDBmYzEzNGQ1NWNjZGJlMDVlZTFmM2U4NDk5NmE1NjkyMTBhNmQxMTAifQ.eyJ0eXBlIjoidHJ1c3RlZF9kZXZpY2UiLCJpc3MiOiJodHRwczovL3N1cGVydGVjaC5jbG91ZGZsYXJlYWNjZXNzLmNvbSIsImlhdCI6MTcwMzQwMTc1MiwiZXhwIjoxNzA1OTkzNzUyLCJqdGkiOiI1eGtuQm5Qcm1VU2ZkZHVwUkFEZXpqZTdLQjhlcnhaTiIsImVtYWlscyI6WyJtdWhhbW1hZC5zaG91a2F0QHV4YmVydC5jb20iXX0.AjkJmqF_EB9xRBqK96ZG33DTpQ4W1IzqSCsmW45UD5wYlv9esLdZpmG6PP5Y2EEo9M92S3MHZ_ye9UEFT7hxJnrdRm2veezS004A2d4brx_5AAnjkAUaynAd6yKu5UR4XftUL8_UvoC5tp3CcITkO7imoCHMxGK3Z7apot1JQZ8o23mT8iEOw4F49my-zBbyYXMRAdD7lYURdKgIq2qurrEFI83MWQJSl1MgYfWjiztMTJYj7uIrUirKCEXgmuPlzm4hg5ZG4RcX36e97aU3hvvyuuw6q_0DJalXjBOcKnS_9j-6mixsl99kk70XjsVcc1vrpJdOokLe0EOqnj9bCA');
    cy.visit('/')
  })

  it('En => Login with correct Email and corrct Password', () => {
    cy.wait(5000)
    cy.fixture('login_data.json').then((users) => {
      let findQuery = (x) => x.id === 1;
      let user = users.find(x => findQuery(x))
      login.loginInEN(user.email, user.password)
    })
  })
  it('En => Login with correct Email and incorrect Password', () => {
    cy.wait(5000)
    cy.fixture('login_data.json').then((users) => {
      let findQuery = (x) => x.id === 2;
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
    cy.setCookie('CF_Authorization', 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjA4ZDYxYmFkYTgxMDkwYjA2OWY4YjViZDBmYzEzNGQ1NWNjZGJlMDVlZTFmM2U4NDk5NmE1NjkyMTBhNmQxMTAifQ.eyJhdWQiOlsiZmU2ZWI0NDU4OTBiYTY3MDFmOGE1NWEzZjBhMzZmYjdhOGZlOWZhZDBjYjhlYWJkYTg4ODIwNDg5ZDQ2ODNkZiJdLCJlbWFpbCI6Im11aGFtbWFkLnNob3VrYXRAdXhiZXJ0LmNvbSIsImFjY291bnRfaWQiOiIzYjlkNDBiNWYzNzBhMzNiYmFhMjFkNjQ4NDU3NzYyNSIsImV4cCI6MTcwMzQ4ODE1MCwiaWF0IjoxNzAzNDAxNzUwLCJuYmYiOjE3MDM0MDE3NTAsImlzcyI6Imh0dHBzOi8vc3VwZXJ0ZWNoLmNsb3VkZmxhcmVhY2Nlc3MuY29tIiwic3ViIjoiYTQ3YTgyMDYtYTcwNi01ODJlLThkMDAtZDVhZWM4YTczMGYyIiwiaWRlbnRpdHkiOnsiZW1haWwiOiJtdWhhbW1hZC5zaG91a2F0QHV4YmVydC5jb20iLCJpZHAiOnsiaWQiOiJlYWM0YzQ5Yy1lYTM1LTQ0MTUtOTAxNy04YTU1YTcxNDY5M2UiLCJ0eXBlIjoib25ldGltZXBpbiJ9LCJnZW8iOnsiY291bnRyeSI6IlBLIn0sInVzZXJfdXVpZCI6ImE0N2E4MjA2LWE3MDYtNTgyZS04ZDAwLWQ1YWVjOGE3MzBmMiIsImFjY291bnRfaWQiOiIzYjlkNDBiNWYzNzBhMzNiYmFhMjFkNjQ4NDU3NzYyNSIsImlhdCI6MTcwMzQwMTc1MCwiaXAiOiIxMTEuODguMTU1LjU5IiwiYXV0aF9zdGF0dXMiOiJOT05FIiwiY29tbW9uX25hbWUiOiIiLCJzZXJ2aWNlX3Rva2VuX2lkIjoiIiwic2VydmljZV90b2tlbl9zdGF0dXMiOmZhbHNlLCJpc193YXJwIjpmYWxzZSwiaXNfZ2F0ZXdheSI6ZmFsc2UsImRldmljZV9pZCI6IiIsIm10bHNfYXV0aCI6eyJjZXJ0X2lzc3Vlcl9kbiI6IiIsImNlcnRfc2VyaWFsIjoiIiwiY2VydF9pc3N1ZXJfc2tpIjoiIiwiY2VydF9wcmVzZW50ZWQiOnRydWUsImNvbW1vbl9uYW1lIjoiIiwiYXV0aF9zdGF0dXMiOiJOT05FIn0sInZlcnNpb24iOjJ9LCJ0eXBlIjoib3JnIiwiaWRlbnRpdHlfbm9uY2UiOiJIOHFGMWlTYVBaRFQzclNmIn0.qbb66PpIImHrilCXj_30ZTBdvd90sJDXjHfNcsuiHM8eLu-6w4PQnnUqBG-KWXG2LEr9fxSCqvkNtus_DwZwBaiVDHJEkl8GED5M-Grf7L1lqT8ng6e5xklN9byHGjYTI1zHDh0ev8XrdCHPsPVlvqUmByrUetp5dwr7ghkU80rXkMcGXkoGevLjo1n1x4sfLRpltaZOCQgIQopQL67qvOd1BbXFFCUwk4y_ZFmq-peWuGLj9b6mNczOUY4rdYF9BqjItu9mIGlVrrbJOXf-6hsw6RB2yUtEhfFjZbMx31OrG0f-QNzhMDx2gUAzH6zdWyu8h0l_dOobLDWHSekyFQ');
    cy.setCookie('CF_Authorization', 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjA4ZDYxYmFkYTgxMDkwYjA2OWY4YjViZDBmYzEzNGQ1NWNjZGJlMDVlZTFmM2U4NDk5NmE1NjkyMTBhNmQxMTAifQ.eyJhdWQiOlsiMjcwZjQ1YjI0ZTlhNmMxZTRjMTY4NmExNWIyZWJiNDFhZTRlM2ZiMjY2ZTUyMDg2ODMyMzhkNzgxYzA0MmZhNCJdLCJlbWFpbCI6Im11aGFtbWFkLnNob3VrYXRAdXhiZXJ0LmNvbSIsImV4cCI6MTcwMzQ4ODE1MCwiaWF0IjoxNzAzNDAxNzUwLCJuYmYiOjE3MDM0MDE3NTAsImlzcyI6Imh0dHBzOi8vc3VwZXJ0ZWNoLmNsb3VkZmxhcmVhY2Nlc3MuY29tIiwidHlwZSI6ImFwcCIsImlkZW50aXR5X25vbmNlIjoiSDhxRjFpU2FQWkRUM3JTZiIsInN1YiI6ImE0N2E4MjA2LWE3MDYtNTgyZS04ZDAwLWQ1YWVjOGE3MzBmMiIsImNvdW50cnkiOiJQSyJ9.2Tg7goTHE1Oi11E7Rfh84yvS6XOTLiUD7x2g9zs27KKSvVJbjL164423xpquyEUhhSdvLwlmLzMYHYrIO15-gTanp7ObuDOQXlrX1kSAChdYNwsYw-X6gZPzzJHnJMSnDn0zYa5bAq383sBPf-lUW1J-HBtRaAK_l4nTETUX-syzZYlHnzQXzL6cD4e9VL65n9qIZn4kmIk62qArdC1vk6zT7aW1A9q7sdhkIYG6LE5ivAbntArPrS7iY11KiPrfoFsMgyc0tdpKBSw9MbhbroScKT9yEvDgoCTj2-SpePDgf7Z9c4cwbv3o5gBaTg0NLpTSb149u0MZuRerDnP74A');
    cy.setCookie('CF_AppSession', 'n86af9b2b8b1ce1e4')
    cy.setCookie('CF_Device', 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjA4ZDYxYmFkYTgxMDkwYjA2OWY4YjViZDBmYzEzNGQ1NWNjZGJlMDVlZTFmM2U4NDk5NmE1NjkyMTBhNmQxMTAifQ.eyJ0eXBlIjoidHJ1c3RlZF9kZXZpY2UiLCJpc3MiOiJodHRwczovL3N1cGVydGVjaC5jbG91ZGZsYXJlYWNjZXNzLmNvbSIsImlhdCI6MTcwMzQwMTc1MiwiZXhwIjoxNzA1OTkzNzUyLCJqdGkiOiI1eGtuQm5Qcm1VU2ZkZHVwUkFEZXpqZTdLQjhlcnhaTiIsImVtYWlscyI6WyJtdWhhbW1hZC5zaG91a2F0QHV4YmVydC5jb20iXX0.AjkJmqF_EB9xRBqK96ZG33DTpQ4W1IzqSCsmW45UD5wYlv9esLdZpmG6PP5Y2EEo9M92S3MHZ_ye9UEFT7hxJnrdRm2veezS004A2d4brx_5AAnjkAUaynAd6yKu5UR4XftUL8_UvoC5tp3CcITkO7imoCHMxGK3Z7apot1JQZ8o23mT8iEOw4F49my-zBbyYXMRAdD7lYURdKgIq2qurrEFI83MWQJSl1MgYfWjiztMTJYj7uIrUirKCEXgmuPlzm4hg5ZG4RcX36e97aU3hvvyuuw6q_0DJalXjBOcKnS_9j-6mixsl99kk70XjsVcc1vrpJdOokLe0EOqnj9bCA');
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
