import { useRouteError } from "react-router-dom"

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return(
   <>
    <h1>Error: {err.status}</h1>
    <h2>{err.statusText}</h2>
   </>
  )
}

export default Error