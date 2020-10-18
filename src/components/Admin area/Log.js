import React from "react";
import {
  useParams
} from "react-router-dom";
export const Log = () => {
  let { id } = useParams();
  return (
    <div>
     <h2>{id}</h2>
    </div>
  );
};
export default Log;
