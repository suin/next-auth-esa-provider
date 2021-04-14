# @suin/next-auth-esa-provider

esa.io OAuth provider for [Next Auth].

[Next Auth]向けの esa.io の OAuth プロバイダー。

[next auth]: https://next-auth.js.org/

## Features

- Next Auth のビルトインプロバイダーと同じような書き方で、esa.io の OAuth を組み込むことができます。

## Installation

```bash
yarn add @suin/next-auth-esa-provider
# or
npm install @suin/next-auth-esa-provider
```

## Usage

Basic usage:

```typescript
import "@suin/next-auth-esa-provider"; // import this!
import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  providers: [
    Providers.Esa({
      clientId: process.env.ESA_ID ?? "",
      clientSecret: process.env.ESA_SECRET ?? "",
      // 書き込み権限も付与しつつ認可する場合は次のコメントアウトを外してください
      // scope: "read write",
    }),
  ],
  secret: process.env.SECRET,
  session: {
    jwt: true,
  },
  callbacks: {
    // クライアントサイドでesaのアクセストークンを参照する必要がない場合は、次のコールバックをコメントアウトしてください。
    async jwt(token, _user, account, _profile, _isNewUser) {
      if (account?.accessToken) {
        return { ...token, accessToken: account.accessToken };
      }
      return token;
    },
  },
});
```

## API Reference

https://suin.github.io/next-auth-esa-provider/
