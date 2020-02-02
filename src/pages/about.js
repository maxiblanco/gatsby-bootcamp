import React from "react"
import Head from "src/components/Head"
import Layout from "src/components/Layout"
import { Link } from "gatsby"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>Maxi Blanco</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        animi quae autem officiis error non!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse nisi
        asperiores deleniti porro et iste corrupti, tempore nesciunt vel!
        Obcaecati.
      </p>
      <p>
        You can hire me! <Link to="/contact">Contact Me</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
