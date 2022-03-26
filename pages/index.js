import { useEffect, useState } from 'react'
import {useRouter} from "next/router"


const API_KEY = "266d41f1f37bf4cbd51b1e8929e15eeb";

export default function Home({serverSideResults}) {
  const router = useRouter();
  const [movies,setMovies] = useState();
  useEffect(()=>{
    (async () => {
      //const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
      //const json = await response.json();

      const {results} = await (
          //await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
          await fetch(`/api/movies`)
        ).json();    
        setMovies(results);
        console.log(results)
    })();
 },[]);

 
  return (
  <> 
  <p style={{"color":"red"}}>csr화면입니다</p>
   <div className = "container">
    
     {!movies && <h1>Loading...</h1>}
     {movies?.map((movie)=>(
       //return으로 뽑아낸점
        <div className="movie" key={movie.id}>
          <img src={`https://www.themoviedb.org/t/p/w500${movie.poster_path}`} />
          <h4>{movie.original_title}</h4>
        </div>   
     ))}
   </div>

   <style jsx>{`

    .container {
      display: grid;
      place-items : center;
      grid-template-columns: 1fr 1fr;
      padding: 20px;
      gap: 20px;
    }

    .movie {
      cursor :pointer;
    }
    
    .movie img {
      max-width: 100%;
      border-radius: 12px;
      transition: transform 0.2s ease-in-out;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    }
    .movie:hover img {
      transform: scale(1.05) translateY(-10px);
    }
    .movie h4 {
      font-size: 18px;
      text-align: center;
    }
    `}</style>
  </>
  )
}

 
