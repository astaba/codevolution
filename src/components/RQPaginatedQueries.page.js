import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const RQPaginatedQueries = () => {
  const [page, setPage] = useState(1);

  // json server provide for data limitation and pagination
  const searchParams = new URLSearchParams();
  searchParams.set("_limit", "2");
  searchParams.set("_page", page);

  const {
    status,
    data: colors,
    error,
    isFetching,
  } = useQuery({
    queryKey: ["colors", page],
    queryFn: () => {
      return axios.get(
        "http://localhost:4000/colors?" + searchParams.toString()
      );
    },
    select: (data) => data.data,
  });

  return (
    <>
      <h2>RQ Paginated Queries</h2>
      {
        {
          loading: <h3>Loading...</h3>,
          error: <h3>Error: {error?.message}</h3>,
          success: (
            <ul>
              {(colors || []).map((color) => (
                <li key={color.id}>
                  <h4>
                    {color.id} - {color.label}
                  </h4>
                </li>
              ))}
            </ul>
          ),
        }[status]
      }
      <div>
        <button
          onClick={() => setPage((old) => Math.max(old - 1, 1))}
          disabled={page === 1}
        >
          &lt;&lt; Previous Page
        </button>{" "}
        <button
          onClick={() => setPage((old) => old + 1)}
          disabled={page === 4}
        >
          Next Page &gt;&gt;
        </button>
      </div>
    </>
  );
};

export default RQPaginatedQueries;
