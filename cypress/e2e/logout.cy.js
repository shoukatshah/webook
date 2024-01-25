import login from '../support/login'
import logout from '../support/logout'
describe('Logout Scenarios in English and Arabic', () => {
    beforeEach(() => {
        cy.setCookie('CF_Authorization', 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjA4ZDYxYmFkYTgxMDkwYjA2OWY4YjViZDBmYzEzNGQ1NWNjZGJlMDVlZTFmM2U4NDk5NmE1NjkyMTBhNmQxMTAifQ.eyJhdWQiOlsiZmU2ZWI0NDU4OTBiYTY3MDFmOGE1NWEzZjBhMzZmYjdhOGZlOWZhZDBjYjhlYWJkYTg4ODIwNDg5ZDQ2ODNkZiJdLCJlbWFpbCI6Im11aGFtbWFkLnNob3VrYXRAdXhiZXJ0LmNvbSIsImFjY291bnRfaWQiOiIzYjlkNDBiNWYzNzBhMzNiYmFhMjFkNjQ4NDU3NzYyNSIsImV4cCI6MTcwMzgzOTE2OCwiaWF0IjoxNzAzNzUyNzY4LCJuYmYiOjE3MDM3NTI3NjgsImlzcyI6Imh0dHBzOi8vc3VwZXJ0ZWNoLmNsb3VkZmxhcmVhY2Nlc3MuY29tIiwic3ViIjoiYTQ3YTgyMDYtYTcwNi01ODJlLThkMDAtZDVhZWM4YTczMGYyIiwiaWRlbnRpdHkiOnsiZW1haWwiOiJtdWhhbW1hZC5zaG91a2F0QHV4YmVydC5jb20iLCJpZHAiOnsiaWQiOiJlYWM0YzQ5Yy1lYTM1LTQ0MTUtOTAxNy04YTU1YTcxNDY5M2UiLCJ0eXBlIjoib25ldGltZXBpbiJ9LCJnZW8iOnsiY291bnRyeSI6IlBLIn0sInVzZXJfdXVpZCI6ImE0N2E4MjA2LWE3MDYtNTgyZS04ZDAwLWQ1YWVjOGE3MzBmMiIsImFjY291bnRfaWQiOiIzYjlkNDBiNWYzNzBhMzNiYmFhMjFkNjQ4NDU3NzYyNSIsImlhdCI6MTcwMzc1Mjc2OCwiaXAiOiIxMTEuODguMTU1LjU5IiwiYXV0aF9zdGF0dXMiOiJOT05FIiwiY29tbW9uX25hbWUiOiIiLCJzZXJ2aWNlX3Rva2VuX2lkIjoiIiwic2VydmljZV90b2tlbl9zdGF0dXMiOmZhbHNlLCJpc193YXJwIjpmYWxzZSwiaXNfZ2F0ZXdheSI6ZmFsc2UsImRldmljZV9pZCI6IiIsIm10bHNfYXV0aCI6eyJjZXJ0X2lzc3Vlcl9kbiI6IiIsImNlcnRfc2VyaWFsIjoiIiwiY2VydF9pc3N1ZXJfc2tpIjoiIiwiY2VydF9wcmVzZW50ZWQiOnRydWUsImNvbW1vbl9uYW1lIjoiIiwiYXV0aF9zdGF0dXMiOiJOT05FIn0sInZlcnNpb24iOjJ9LCJ0eXBlIjoib3JnIiwiaWRlbnRpdHlfbm9uY2UiOiJkWUlEdmhyNW55ZnNUOXVEIn0.LGnuoZ4zADOBbb8Vf0GqwWWtjXGN9h82PPTKaWA0ecubet2685PPjyhXJFpYIrSdnXEC61-tzSfwJaHJoqg0yQuj2icnO61v8Geh1gcnCCs9TuPsZphXn_C17qs17u-maqBAJfIkNIgb4nvWFUoJxUce9j7mMs-cR8jDewz9IYOYFR2dezgortEqdQ55JGmnP-X6Ka9RtX6qrlSV37x2EZrPar5Jv4MIOgg8lvJNoE6_DcUWR0IaQ8luk_g8rYTzBeFq6murqf6UeUl7oCgQI7SA5MXjQwFsb0K1E9XdTs6n69Zpib4HugJoxvSD3XZBP4mYS_YDFae0Krtw8az1Xw')
        cy.setCookie('CF_Authorization', 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjA4ZDYxYmFkYTgxMDkwYjA2OWY4YjViZDBmYzEzNGQ1NWNjZGJlMDVlZTFmM2U4NDk5NmE1NjkyMTBhNmQxMTAifQ.eyJhdWQiOlsiMjcwZjQ1YjI0ZTlhNmMxZTRjMTY4NmExNWIyZWJiNDFhZTRlM2ZiMjY2ZTUyMDg2ODMyMzhkNzgxYzA0MmZhNCJdLCJlbWFpbCI6Im11aGFtbWFkLnNob3VrYXRAdXhiZXJ0LmNvbSIsImV4cCI6MTcwMzgzOTE2OCwiaWF0IjoxNzAzNzUyNzY4LCJuYmYiOjE3MDM3NTI3NjgsImlzcyI6Imh0dHBzOi8vc3VwZXJ0ZWNoLmNsb3VkZmxhcmVhY2Nlc3MuY29tIiwidHlwZSI6ImFwcCIsImlkZW50aXR5X25vbmNlIjoiZFlJRHZocjVueWZzVDl1RCIsInN1YiI6ImE0N2E4MjA2LWE3MDYtNTgyZS04ZDAwLWQ1YWVjOGE3MzBmMiIsImNvdW50cnkiOiJQSyJ9.FRrv-GOnBDGhSYnZFA6d4cLPFK_3ikB6aYhQC8pSoi2HU8aSIbnSGQF0pj1zDsiHycvWHGSHG0aSj6jug4yDJmCboqKEsNMs4k7NeMPc2emwhewPlXK0dt6iH90_2nVefPi-oD5HlwHASwHBt8aw3GOm55KU9cjmV2iQn_Tj6JO5dkZr9pyed-onvdZjrmGqiEgdvFh5E6cmgXEaAmV78bG07SU4toi1YQ-lydDYSbdX5vugpeS8hTFWpwVosjeCqslOcMrHWAvv54yOVyZeOCuoN5hnjBW9ag56sMgFjivhrggY_h_zvHPY-DI5KZWqHjfYA4bkNuwf9kkTGcTV1g')
        cy.setCookie('CF_AppSession', 'n2894fd0fe338efc8')
        cy.setCookie('CF_Device', 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjA4ZDYxYmFkYTgxMDkwYjA2OWY4YjViZDBmYzEzNGQ1NWNjZGJlMDVlZTFmM2U4NDk5NmE1NjkyMTBhNmQxMTAifQ.eyJ0eXBlIjoidHJ1c3RlZF9kZXZpY2UiLCJpc3MiOiJodHRwczovL3N1cGVydGVjaC5jbG91ZGZsYXJlYWNjZXNzLmNvbSIsImlhdCI6MTcwMzc1Mjc3MiwiZXhwIjoxNzA2MzQ0NzcyLCJqdGkiOiJGNWI0Y0x1YVNvZ211eG9VRGJ3NE0xenpudlh0dlhZWiIsImVtYWlscyI6WyJtdWhhbW1hZC5zaG91a2F0QHV4YmVydC5jb20iXX0.GyhC9fKivKetAroYJp2q8SZ5wxglEgbh53eF9OxXEcgsB8QbV6fx_jLiqZga1pO569tooSZUkvIVvKaPfiVQwWlQfc4sqxC4AOHAgR8d9GPG2ataKBQZoFuqKucmQcDT_IzzEZqUwV2AOwl9Xj2IPsTU8MVbgEz9dUDQ3Xmw3JnBbKjQT2Y_zR9FB8lBppIn0jbL0XM5mxKN_v8TFkJWO-vqsisKEnZN9y6nKDWaPOcAOeIPy8WCichGjdlplxMk2HaP5rqslAZHls3qkiV-eOkGnPUVC_o-vVSeVi9rZGzbRUkDbw6oU72WvbjL6QFFymG8AnzYljEdn74SP-jyEQ')
        cy.visit('/')
    })
    it('En => Logout', () => {
        cy.wait(5000)
        cy.fixture('login_data.json').then((users) => {
            let findQuery = (x) => x.id === 1;
            let user = users.find(x => findQuery(x))
            login.loginInEN(user.email, user.password)
            cy.wait(2000)
            logout.logoutInEN()
        })
    })
    it('Ar => Logout', () => {
        cy.wait(5000)
        cy.fixture('login_data.json').then((users) => {
            let findQuery = (x) => x.id === 1;
            let user = users.find(x => findQuery(x))
            login.loginInAR(user.email, user.password)
            cy.wait(2000)
            logout.logoutInAR()
        })
    })
})
