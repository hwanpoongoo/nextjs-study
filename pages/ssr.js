
import Link from 'next/dist/client/link'
import {useRouter} from "next/router"


const API_KEY = "266d41f1f37bf4cbd51b1e8929e15eeb";

export default function Home({serverSideResults}) {
  const router = useRouter(); 
  

const onClick = (id, title) =>{
  event.stopPropagation();
  router.push({
    pathname:`/movies/${id}`,
    query: {
      title,
    },
  },`/movies/${id}`)
};

  return (
  <> 
  <p>SSR화면입니다</p>
   <div className = "container">
    {/*SSR의 경우*/} 
     {serverSideResults?.map((movie)=>(
       //return으로 뽑아낸점
          <div className="movie" key={movie.id} onClick={()=> onClick(movie.id , movie.title) }>
            <img src={`https://www.themoviedb.org/t/p/w500${movie.poster_path}`} />
            <h4>
              <Link href={{ pathname:`/movies/${movie.id}`,
                            query: {
                              id : movie.id,
                              title : "this is link", 
                            },
                          }} 
                    as={`/movies/${movie.id}`}>
                {movie.original_title}
              </Link>
            </h4>
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

//서버 사이드 렌더링
export async function getServerSideProps(ctx){
  //TypeError: Only absolute URLs are supported 이것은 프론트에서만 돌아가기 때문
  //const { results } = await (await fetch("/api/movies")).json();   

  const  { results } = await (await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)).json();  
  
  //서버 컨텍스트 사용가능
  console.log(ctx);
  

  //컴포넌트에 props 전달
  return {
    props: {
      serverSideResults : results,
    },
  };
}
