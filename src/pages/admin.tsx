import Head from 'next/head'
import React from "react";

export default function Admin(props: any) {
return   <>
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Content Manager</title>
        <link href="netlifycms/config.yml" type="text/yaml" rel="cms-config-url" />
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
    <script src="https://unpkg.com/netlify-cms@2.9.7/dist/netlify-cms.js"></script>
    </>
}