import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="es">
                <Head>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&family=Yantramanav:wght@300;400;500;700;900&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body>
                    

                    <Main />
                    <NextScript />
                    <img src="https://tracker.metricool.com/c3po.jpg?hash=b7e14a40527ce6ea94a2ad622058f191" />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
