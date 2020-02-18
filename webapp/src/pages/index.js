import React from "react"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import { Heading, Button } from "rebass"
import { useAuth } from "react-use-auth"

const IndexPage = () => {
  const { isAuthenticated, user, login } = useAuth()

  return (
    <Layout>
      <SEO title="Markdown Landing Page" />
      <Heading fontSize={[5, 6, 7]}>Markdown Landing Page</Heading>
      <p>Write a landing page for anything</p>
      {isAuthenticated() ? <p>hello {user.nickname}</p> : null}
      <Button bg="highlight" onClick={login}> Get Started</Button>
    </Layout>
  )
}

export default IndexPage
