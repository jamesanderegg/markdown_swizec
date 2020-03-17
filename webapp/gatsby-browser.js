import React from 'react'
import { navigate } from 'gatsby'
import { AuthProvider } from 'react-use-auth'
import { ApolloProvider } from 'react-apollo-hooks'

import { client } from "./src/apollo"

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>
      <AuthProvider 
          navigate={navigate} 
          auth0_domain="jamesandereggmarkdown.auth0.com"
          auth0_client_id="mknLnpdLMb6vqcu63Rhi8O0ykYFMzRxs">
          {element}
      </AuthProvider>
  </ApolloProvider>
)
