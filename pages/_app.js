import '../styles/globals.css'
import SiteWrapper from '../components/SiteWrapper'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
    return (
        <SiteWrapper>
            <Head>
                <title>CS 1410</title>
            </Head>

            <Component {...pageProps} />
        </SiteWrapper>
    )
}

export default MyApp
