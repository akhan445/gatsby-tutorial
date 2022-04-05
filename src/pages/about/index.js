import React from "react";
import Layout from "../../components/layout/layout";
import { StaticImage } from "gatsby-plugin-image";

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
    <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    <StaticImage
        alt="logo"
        src="../../images/icon.png"
        />
  </Layout>
  )
}
export default AboutPage
