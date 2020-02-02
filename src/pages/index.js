import React from "react"
import Layout from "src/components/Layout"
import { Link } from "gatsby"
import Head from "src/components/Head"

const IndexPage = () => {
  return (
    <div>
      <Layout>
        <Head title={"Home"} />
        <h1>Hello.</h1>
        <h2>I'm Maxi, a web dev, living in Buenos Aires.</h2>
        <p>
          Need a dev! <Link to="/contact">Contact me.</Link>
        </p>
      </Layout>
    </div>
  )
}

export default IndexPage
