/** @type {import('next').NextConfig} */

const API_KEY = process.env.API_KEY;

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        //redirect
        source: "/juseung",
        destination : "/kimjuseung",
        permanent: false,
      },
      {
        //콜론 이후 아무값 가능. source 와  destination만 맞춰주면 됨
        source: "/retest/:abcd",
        destination : "/retest2/:abcd",
        permanent: false,
      },   
      {
        //와일드카드 형태도 가능
        //http://localhost:3000/kingWangZZang/123/234/566 
        source: "/king/:path*",
        destination : "/kingWangZZang/:path*",
        permanent: false,
      },
    ]
  },
  async rewrites(){
    return [ 
      {
        //key 마스킹 가능
        source: "/api/movies",
        destination : `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
      {
        source: "/api/movies/:id",
        destination : `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
      }
    ];
  }

}

module.exports = nextConfig
