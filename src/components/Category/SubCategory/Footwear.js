import React from "react";
import {
  useParams
} from "react-router-dom";
export const Footwear = () => {
  let { id } = useParams();
  return (
    <div>
     {id}
    </div>
  );
};
export default Footwear;
