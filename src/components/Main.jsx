import React from "react";

function Main(props) {
  const {data} = props
  return (
    <div className="img-container">
      <img src={data.hdurl} alt={data.title || ''} className="bgImage" />

    </div>
  );
}

export default Main;
