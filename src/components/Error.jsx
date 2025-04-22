import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();

  return (
    <div>
      <h2>{err.status}</h2>
      <h1>{err.statusText}!!!</h1>
    </div>
  );
};

export default Error;
