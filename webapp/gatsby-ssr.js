/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */
import React from "react"
import { navigate } from "gatsby"
import { AuthProvider } from "react-use-auth"

export const wrapRootElement = ({ element }) => (
  <AuthProvider
    navigate={navigate}
    auth0_domain="jamesandereggmarkdown.auth0.com"
    auth0_client_id="mknLnpdLMb6vqcu63Rhi8O0ykYFMzRxs"
  >
    {element}
  </AuthProvider>
)

