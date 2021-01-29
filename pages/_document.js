import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return(
            <Html lang="en">
                <Head>
                    <meta name="description" content="Search for your Breaking Bad characters." />
                    <meta property="og:title" content="Breaking Bad character search" />
                    <meta property="og:description" content="Search for your Breaking Bad characters." />
                    <meta property="og:type" content="website"/>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument