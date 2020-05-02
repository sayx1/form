import React from "react"
import { Link } from "gatsby"
import Thanks from './thanks'
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import './contact.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Thanks />
    
  </Layout>
)

export default IndexPage
