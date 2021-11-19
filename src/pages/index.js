import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';


const indexPage = () => {
    return (
        <Layout pageTitle="Home Page">
            <p>I'm making this by following the Gatsby tutorial.</p>
            <StaticImage
                alt="Terminator"
                src="https://c4.wallpaperflare.com/wallpaper/869/679/589/endoskeleton-t-800-terminator-genisys-wallpaper-preview.jpg"/>
        </Layout>
    )
}


export default indexPage