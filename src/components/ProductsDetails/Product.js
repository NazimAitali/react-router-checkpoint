import React from "react";
import { useParams } from "react-router-dom";
export const PRODUCT = ({}) => {
  let { id } = useParams();

  return (
    <div>
     {id === "NIKE Liteforce Blue Sneakers" ? (
        <>
          <h3>{id} </h3>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            molestie.
          </p>
          <hr></hr>
          <h3> Available</h3>
        </>
      ) : null}
      {id === "U.S. POLO ASSN. Slippers" ? (
        <>
          <h3>{id} </h3>
          <p>
            {" "}
            Mauris finibus, massa eu tempor volutpat, magna dolor euismod dolor.
          </p>
          <hr></hr>
          <h3> Available</h3>
        </>
      ) : null}
      {id === "ADIDAS Adispree Running Shoes" ? (
        <>
          <h3>{id} </h3>
          <p>
            {" "}
            Maecenas condimentum porttitor auctor. Maecenas viverra fringilla
            felis, eu pretium.
          </p>
          <hr></hr>
          <h3> Available</h3>
        </>
      ) : null}
      {id === "Lee Cooper Mid Sneakers" ? (
        <>
          <h3>{id} </h3>
          <p>
            {" "}
            Ut hendrerit venenatis lacus, vel lacinia ipsum fermentum vel. Cras.
          </p>
          <hr></hr>
          <h3> Out of Stock</h3>
        </>
      ) : null}
      
      
    </div>
  );
};
export default PRODUCT;
