import login from '../support/login'

describe('Login Scenarios in English and Arabic Language', () => {
  beforeEach(() => {
    cy.setCookie('CF_Authorization', 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjA4ZDYxYmFkYTgxMDkwYjA2OWY4YjViZDBmYzEzNGQ1NWNjZGJlMDVlZTFmM2U4NDk5NmE1NjkyMTBhNmQxMTAifQ.eyJhdWQiOlsiZmU2ZWI0NDU4OTBiYTY3MDFmOGE1NWEzZjBhMzZmYjdhOGZlOWZhZDBjYjhlYWJkYTg4ODIwNDg5ZDQ2ODNkZiJdLCJlbWFpbCI6Im11aGFtbWFkLnNob3VrYXRAdXhiZXJ0LmNvbSIsImFjY291bnRfaWQiOiIzYjlkNDBiNWYzNzBhMzNiYmFhMjFkNjQ4NDU3NzYyNSIsImV4cCI6MTcwMzgzOTE2OCwiaWF0IjoxNzAzNzUyNzY4LCJuYmYiOjE3MDM3NTI3NjgsImlzcyI6Imh0dHBzOi8vc3VwZXJ0ZWNoLmNsb3VkZmxhcmVhY2Nlc3MuY29tIiwic3ViIjoiYTQ3YTgyMDYtYTcwNi01ODJlLThkMDAtZDVhZWM4YTczMGYyIiwiaWRlbnRpdHkiOnsiZW1haWwiOiJtdWhhbW1hZC5zaG91a2F0QHV4YmVydC5jb20iLCJpZHAiOnsiaWQiOiJlYWM0YzQ5Yy1lYTM1LTQ0MTUtOTAxNy04YTU1YTcxNDY5M2UiLCJ0eXBlIjoib25ldGltZXBpbiJ9LCJnZW8iOnsiY291bnRyeSI6IlBLIn0sInVzZXJfdXVpZCI6ImE0N2E4MjA2LWE3MDYtNTgyZS04ZDAwLWQ1YWVjOGE3MzBmMiIsImFjY291bnRfaWQiOiIzYjlkNDBiNWYzNzBhMzNiYmFhMjFkNjQ4NDU3NzYyNSIsImlhdCI6MTcwMzc1Mjc2OCwiaXAiOiIxMTEuODguMTU1LjU5IiwiYXV0aF9zdGF0dXMiOiJOT05FIiwiY29tbW9uX25hbWUiOiIiLCJzZXJ2aWNlX3Rva2VuX2lkIjoiIiwic2VydmljZV90b2tlbl9zdGF0dXMiOmZhbHNlLCJpc193YXJwIjpmYWxzZSwiaXNfZ2F0ZXdheSI6ZmFsc2UsImRldmljZV9pZCI6IiIsIm10bHNfYXV0aCI6eyJjZXJ0X2lzc3Vlcl9kbiI6IiIsImNlcnRfc2VyaWFsIjoiIiwiY2VydF9pc3N1ZXJfc2tpIjoiIiwiY2VydF9wcmVzZW50ZWQiOnRydWUsImNvbW1vbl9uYW1lIjoiIiwiYXV0aF9zdGF0dXMiOiJOT05FIn0sInZlcnNpb24iOjJ9LCJ0eXBlIjoib3JnIiwiaWRlbnRpdHlfbm9uY2UiOiJkWUlEdmhyNW55ZnNUOXVEIn0.LGnuoZ4zADOBbb8Vf0GqwWWtjXGN9h82PPTKaWA0ecubet2685PPjyhXJFpYIrSdnXEC61-tzSfwJaHJoqg0yQuj2icnO61v8Geh1gcnCCs9TuPsZphXn_C17qs17u-maqBAJfIkNIgb4nvWFUoJxUce9j7mMs-cR8jDewz9IYOYFR2dezgortEqdQ55JGmnP-X6Ka9RtX6qrlSV37x2EZrPar5Jv4MIOgg8lvJNoE6_DcUWR0IaQ8luk_g8rYTzBeFq6murqf6UeUl7oCgQI7SA5MXjQwFsb0K1E9XdTs6n69Zpib4HugJoxvSD3XZBP4mYS_YDFae0Krtw8az1Xw')
        cy.setCookie('CF_Authorization', 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjA4ZDYxYmFkYTgxMDkwYjA2OWY4YjViZDBmYzEzNGQ1NWNjZGJlMDVlZTFmM2U4NDk5NmE1NjkyMTBhNmQxMTAifQ.eyJhdWQiOlsiMjcwZjQ1YjI0ZTlhNmMxZTRjMTY4NmExNWIyZWJiNDFhZTRlM2ZiMjY2ZTUyMDg2ODMyMzhkNzgxYzA0MmZhNCJdLCJlbWFpbCI6Im11aGFtbWFkLnNob3VrYXRAdXhiZXJ0LmNvbSIsImV4cCI6MTcwMzgzOTE2OCwiaWF0IjoxNzAzNzUyNzY4LCJuYmYiOjE3MDM3NTI3NjgsImlzcyI6Imh0dHBzOi8vc3VwZXJ0ZWNoLmNsb3VkZmxhcmVhY2Nlc3MuY29tIiwidHlwZSI6ImFwcCIsImlkZW50aXR5X25vbmNlIjoiZFlJRHZocjVueWZzVDl1RCIsInN1YiI6ImE0N2E4MjA2LWE3MDYtNTgyZS04ZDAwLWQ1YWVjOGE3MzBmMiIsImNvdW50cnkiOiJQSyJ9.FRrv-GOnBDGhSYnZFA6d4cLPFK_3ikB6aYhQC8pSoi2HU8aSIbnSGQF0pj1zDsiHycvWHGSHG0aSj6jug4yDJmCboqKEsNMs4k7NeMPc2emwhewPlXK0dt6iH90_2nVefPi-oD5HlwHASwHBt8aw3GOm55KU9cjmV2iQn_Tj6JO5dkZr9pyed-onvdZjrmGqiEgdvFh5E6cmgXEaAmV78bG07SU4toi1YQ-lydDYSbdX5vugpeS8hTFWpwVosjeCqslOcMrHWAvv54yOVyZeOCuoN5hnjBW9ag56sMgFjivhrggY_h_zvHPY-DI5KZWqHjfYA4bkNuwf9kkTGcTV1g')
        cy.setCookie('CF_AppSession', 'n2894fd0fe338efc8')
        cy.setCookie('CF_Device', 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjA4ZDYxYmFkYTgxMDkwYjA2OWY4YjViZDBmYzEzNGQ1NWNjZGJlMDVlZTFmM2U4NDk5NmE1NjkyMTBhNmQxMTAifQ.eyJ0eXBlIjoidHJ1c3RlZF9kZXZpY2UiLCJpc3MiOiJodHRwczovL3N1cGVydGVjaC5jbG91ZGZsYXJlYWNjZXNzLmNvbSIsImlhdCI6MTcwMzc1Mjc3MiwiZXhwIjoxNzA2MzQ0NzcyLCJqdGkiOiJGNWI0Y0x1YVNvZ211eG9VRGJ3NE0xenpudlh0dlhZWiIsImVtYWlscyI6WyJtdWhhbW1hZC5zaG91a2F0QHV4YmVydC5jb20iXX0.GyhC9fKivKetAroYJp2q8SZ5wxglEgbh53eF9OxXEcgsB8QbV6fx_jLiqZga1pO569tooSZUkvIVvKaPfiVQwWlQfc4sqxC4AOHAgR8d9GPG2ataKBQZoFuqKucmQcDT_IzzEZqUwV2AOwl9Xj2IPsTU8MVbgEz9dUDQ3Xmw3JnBbKjQT2Y_zR9FB8lBppIn0jbL0XM5mxKN_v8TFkJWO-vqsisKEnZN9y6nKDWaPOcAOeIPy8WCichGjdlplxMk2HaP5rqslAZHls3qkiV-eOkGnPUVC_o-vVSeVi9rZGzbRUkDbw6oU72WvbjL6QFFymG8AnzYljEdn74SP-jyEQ')
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
