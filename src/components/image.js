import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "13-Garage.png" }) {
          childImageSharp {
            fixed(width: 280) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
      }
    `}
    render={data => (
      <div
        style={{
          textAlign: 'center',
          maxWidth: 300,
        }}
      >
        <Img
          fixed={data.placeholderImage.childImageSharp.fixed}
          style={{ marginBottom: 15 }}
        />
        <h3
          style={{
            textAlign: 'left',
            color: 'white',
            paddingTop: 15,
            borderTop: '1px solid white',
            marginBottom: 10,
          }}
        >
          13 - Garage
        </h3>
        <span style={{ display: 'block', textAlign: 'left', color: 'grey' }}>
          From 73.00$
        </span>
      </div>
    )}
  />
)
export default Image
