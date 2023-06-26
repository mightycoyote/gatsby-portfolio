import * as React from "react"
import Layout from "../components/Layout"
import { Seo } from "../components/seo"

const IndexPage = () => {
    return (
        <Layout>
            <p>This is some stuff in my exciting website.</p>
        </Layout>
    )
}

export default IndexPage

export const Head = () => (
    <Seo />
)
