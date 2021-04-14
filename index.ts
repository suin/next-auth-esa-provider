import Providers from "next-auth/providers";

declare module "next-auth/providers" {
  interface DefaultProviders {
    Esa: (options: ProviderEsaOptions) => Provider<"esa">;
  }

  interface ProviderEsaOptions extends Omit<ProviderCommonOptions, "scope"> {
    scope?: "read" | "read write";
  }

  type ProviderCommonOptions = Parameters<DefaultProviders["Twitter"]>[0];
}

Providers.Esa = (options) => ({
  id: "esa",
  name: "esa",
  // @ts-expect-error: Type 'string' is not assignable to type '"oauth"'.
  type: "oauth",
  scope: "read",
  version: "2.0",
  params: { grant_type: "authorization_code" },
  accessTokenUrl: "https://api.esa.io/oauth/token",
  authorizationUrl: "https://api.esa.io/oauth/authorize?response_type=code",
  profileUrl: "https://api.esa.io/v1/user",
  profile: (user) => ({
    id: user.id,
    name: user.screen_name,
    email: user.email,
    image: user.icon,
  }),
  ...options,
});
