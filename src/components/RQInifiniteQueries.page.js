import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const RQInifiniteQueries = () => {
  const { status, error, data } = useQuery({
    queryKey: ["colors"],
    queryFn: () => {
      return axios.get("http://localhost:4000/colors");
    },
  });

  console.log(data);

  return (
    <>
      <h2>RQ Inifinite Queries</h2>
      {status === "loading" ? (
        <h3>Loading...</h3>
      ) : status === "error" ? (
        <h3>Error: {error.message}</h3>
      ) : (
        <ul>
          {data?.data.map((color) => (
            <li key={color.id}>
              <h4>
                {color.id} - {color.label}
              </h4>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default RQInifiniteQueries;
