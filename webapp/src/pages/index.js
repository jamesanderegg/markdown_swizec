import React from "react"
// import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import { Heading } from "rebass"
import { useAuth } from "react-use-auth"

import { LoginButton } from '../components/LoginButton';
import { Dashboard } from "../components/Dashboard"


const IndexPage = () => {
  const { isAuthenticated, user, login } = useAuth()

  return (
    <Layout>
      <SEO title="Markdown Landing Page" />
      <Heading fontSize={[5, 6, 7]}>Markdown Landing Page</Heading>
      <p>Write a landing page for anything</p>
      <Dashboard />
      {isAuthenticated() ? <p>hello {user.nickname}</p> : null}
      <LoginButton />
    </Layout>
  )
}

export default IndexPage
