import Link from "next/link";
import NavBar from "../components/NavBar";

export default function MyPotato(){
  
  return <>
  <h1>어바웃 페이지임</h1>
  
  <Link href="/">
    <a style={{color:"blue" , fontSize:20 }}  >인덱스페이지로</a>
  </Link>
  <NavBar/>
  </>
}

