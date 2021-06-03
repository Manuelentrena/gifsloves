import React from "react";

const Detail = ({ params }) => {
  const { id } = params;
  return (
    <>
      <h1>{id}</h1>
    </>
  );
};

export default Detail;
