import NextAuth from "next-auth"
import type { NextAuthConfig } from "next-auth"
import type { OIDCConfig } from "next-auth/providers"
import type { JWT } from "next-auth/jwt"

// Define the profile type from your OIDC provider
interface OIDCProfile {
  sub: string
  name?: string
  preferred_username?: string
  email?: string
  picture?: string
}

// Extend the built-in session type
interface ExtendedSession {
  accessToken?: string
}

// Extend the built-in token type
interface ExtendedToken extends JWT {
  accessToken?: string
}

const oidcProvider: OIDCConfig<OIDCProfile> = {
  id: "oidc-provider",
  name: "OIDC Provider",
  type: "oidc",
  issuer: "http://10.2.5.96:8080/realm/master", // e.g., "https://your-provider.com"
  clientId: "public-client",
  // clientSecret: process.env.OIDC_CLIENT_SECRET,
  client: {
    token_endpoint_auth_method: "none",
  },
  authorization: {
    params: {
      scope: "openid email profile",
      response_type: "code",
      code_challenge_method: "S256", // PKCE
    },
  },
  checks: ["pkce", "state"],
  profile(profile) {
    return {
      id: profile.sub,
      name: profile.name ?? profile.preferred_username,
      email: profile.email,
      image: profile.picture,
    }
  },
}

export const authConfig = {
  debug: true,
  providers: [oidcProvider],
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60, // 24 hours
  },
  callbacks: {
    authorized: async ({ auth }) => {
      return !!auth
    },
    redirect: async ({ url, baseUrl }) => {
      // Allow relative callback URLs
      if (url.startsWith("/")) {
        return `${baseUrl}${url}`
      }
      // Allow callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) {
        return url
      }
      // Default to homepage
      return baseUrl
    },
    jwt: async ({ token, account }): Promise<ExtendedToken> => {
      if (account) {
        token.accessToken = account.access_token
      }
      return token as ExtendedToken
    },
    session: async ({ session, token }) => {
      if (token) {
        (session as ExtendedSession).accessToken = (token as ExtendedToken).accessToken
      }
      return session
    }
  },
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
    error: "/auth/error",
  },
} satisfies NextAuthConfig
