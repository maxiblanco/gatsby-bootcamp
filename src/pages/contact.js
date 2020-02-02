import React from "react"
import Layout from "src/components/Layout"
import Head from "src/components/Head"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>My contact info</h1>
      <h2>email@email.com</h2>
      <p>
        This is my twitter handle{" "}
        <a href="https://twitter.com/maximiblanco">@maximiblanco</a>
      </p>
      <p>Adress</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, in?
      </p>
    </Layout>
  )
}

export default ContactPage
