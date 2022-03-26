import Layout from '../components/Layout';
import Seo from '../components/Seo';
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {

  return (
    
    <Layout>
       {/*  <Seo/>  */}
      <Component {...pageProps} />
    </Layout>
  );
}
