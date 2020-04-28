import React from "react"
import { Link } from "gatsby"
import Contact from './Contact'
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import './contact.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Contact />
    <Link to='/' className='viewmore'>Learn More </Link>
  </Layout>
)

export default IndexPage
