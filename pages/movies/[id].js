import { useRouter } from 'next/router'

export default function Detail(){
  const router = useRouter();
  console.log(router);
  return <>
  <h4>{router.query.id}</h4>
  {/*신기한 트릭이다*/}
  <h4>{router.query.title || "loading...."}</h4>
  </>;
};