import React from "react";
import { useParams } from "react-router-dom";

import useSuperHeroe from "../hooks/useSuperHeroe";

const RQSuperHeroe = () => {
  const { heroId } = useParams();
  const { isLoading, data, isError, error } = useSuperHeroe(heroId);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>Super Heroes Details</h2>
      <div>
        {data?.data.name} - {data?.data.alterEgo}
      </div>
    </>
  );
};

export default RQSuperHeroe;
