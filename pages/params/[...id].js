import { useRouter } from 'next/router'

export default function Ids({id}){
  const router = useRouter();
  console.log(router);
 
  //이 트릭 되게 신기하네
  //const [a,b,...c] = router.query.id || [];
  
  const [a,b,...c] = id || [];
  
  return(
  <>
    <h4>a: {a}</h4>
    <h4>b: {b}</h4>
    <h4>c: {c}</h4>
  </>
  )

}


export function getServerSideProps(ctx){
  // console.log("서버에서만 보인다는점");
  console.log(ctx);

  return {
    props: ctx.params
  }
}