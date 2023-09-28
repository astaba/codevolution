import { Fragment } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

// Set json server pagination limit
const limit = 2;

const RQInifiniteQueries = () => {
  const {
    status,
    error,
    data,
    hasNextPage,
    fetchNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["colors"],
    queryFn: ({ pageParam = 1 }) => {
      return axios.get(
        `http://localhost:4000/colors?_limit=${limit}&_page=${pageParam}`
      );
    },
    getNextPageParam: (lastPage, pages) => {
      // compute maxPage base on a response header from json server
      const maxPage = Math.ceil(lastPage.headers["x-total-count"] / limit);
      if (pages.length < maxPage) return pages.length + 1;
      return undefined;
    },
    // To display data in reverse order
    // select: (data) => {
    //   return {
    //     pages: [...data.pages].reverse(),
    //     pageParams: [...data.pageParams].reverse(),
    //   };
    // },
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
          {data?.pages.map((group, i) => (
            <Fragment key={i}>
              {group.data.map((color) => (
                <li key={color.id}>
                  <h4>
                    {color.id} - {color.label}
                  </h4>
                </li>
              ))}
            </Fragment>
          ))}
        </ul>
      )}
      <div>
        <button
          onClick={() => fetchNextPage(/*{ pageParam: 3 }*/)} // To pass data to queryFn
          disabled={!hasNextPage}
        >
          {isFetchingNextPage
            ? "Loading more..."
            : hasNextPage
            ? "Load more"
            : "Nothing more to load"}
        </button>
      </div>
      {isFetching && !isFetchingNextPage ? <p>Fetching...</p> : null}
    </>
  );
};

export default RQInifiniteQueries;
