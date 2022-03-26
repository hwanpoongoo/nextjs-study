import Head from "next/head";
import Link from "next/link";

export default function Seo({title = "home"}){


 return <>
  <Head>
    <title>{title} | Next movies</title>
  </Head>
 
<div className="container">
  <Link  href="/" passHref>
  <button>
   CSR
   </button>
  </Link>

  <Link href="/ssr" passHref>
  <button>
   SSR
   </button>
  </Link>
 </div>


 <style jsx>{`
  button {
    width : 200px;
    padding : 5px;
    margin : 5px;
  }
  .container{
    display : flex;
    flex-direction : row;
    justify-content : center
  }
`}</style>

</>
}