import React from "react"
import Layout from "components/Layout"
import { graphql } from "gatsby"
import Head from "src/components/Head"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`

const Blog = props => {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = `https:${node.data.target.fields.file["en-US"].url}`
        return <img alt={alt} src={url} />
      },
    },
  }
  return (
    <Layout>
      <Head title={`${props.data.contentfulBlogPost.title}`} />
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>{props.data.contentfulBlogPost.publishedDate}</p>
      {documentToReactComponents(
        props.data.contentfulBlogPost.body.json,
        options
      )}
    </Layout>
  )
}

export default Blog
