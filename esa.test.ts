import "./index";
import Providers from "next-auth/providers";

test("esa provider", async () => {
  expect(
    Providers.Esa({
      clientId: "esa-client-id",
      clientSecret: "esa-secret",
    })
  ).toMatchInlineSnapshot(`
    Object {
      "accessTokenUrl": "https://api.esa.io/oauth/token",
      "authorizationUrl": "https://api.esa.io/oauth/authorize?response_type=code",
      "clientId": "esa-client-id",
      "clientSecret": "esa-secret",
      "id": "esa",
      "name": "esa",
      "params": Object {
        "grant_type": "authorization_code",
      },
      "profile": [Function],
      "profileUrl": "https://api.esa.io/v1/user",
      "scope": "read",
      "type": "oauth",
      "version": "2.0",
    }
  `);
});
