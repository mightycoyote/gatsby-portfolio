import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

const SuccessPage = () => {
    return (
        <Layout>
            <h1>Thank you!</h1>
            <p>Your contact form submission has been received.</p>
            <Link to="/">Back to home</Link>
        </Layout>
    )
};

export default SuccessPage;

export const Head = () => <title>Form success</title>;