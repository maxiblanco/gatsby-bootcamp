import React from 'react';
import Layout from 'src/components/Layout'
import { Link, graphql, useStaticQuery } from 'gatsby'

const BlogPage = () => {
  const data = useStaticQuery(graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date
          }
          fields {
            slug
          }
        }
      }
    }
  }
  `)
  console.log(data)
  return (
    <Layout>
      <h1>Blog</h1>
      <ol>
        {(data.allMarkdownRemark.edges).map((post) =>
          (
            <li key={post.node.id}>
              <Link to={`/blog/${post.node.fields.slug}`}>
                <h2>
                  {post.node.frontmatter.title}
                </h2>
                <p>{post.node.frontmatter.date}</p>
              </Link>
            </li>
          )
        )}
      </ol>
    </Layout>
  )
}

export default BlogPage;