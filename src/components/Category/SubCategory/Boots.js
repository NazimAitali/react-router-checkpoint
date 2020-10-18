import React from "react";
import {
  useParams
} from "react-router-dom";
export const Boots = () => {
  let { id } = useParams();
  return (
    <div>
     {id}
    </div>
  );
};
export default Boots;
