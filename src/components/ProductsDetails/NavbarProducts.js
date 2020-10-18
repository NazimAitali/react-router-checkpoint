import React, { useState } from "react";
import PRODUCT from "../ProductsDetails/Product";

import { Link, Switch, Route, useRouteMatch } from "react-router-dom";
const NavbarProducts = () => {
  const DATA = [
    {
      name: "NIKE Liteforce Blue Sneakers",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie.",
      status: "Available",
    },
    {
      name: "U.S. POLO ASSN. Slippers",
      description:
        "Mauris finibus, massa eu tempor volutpat, magna dolor euismod dolor.",
      status: "Available",
    },
    {
      name: "ADIDAS Adispree Running Shoes",
      description:
        "Maecenas condimentum porttitor auctor. Maecenas viverra fringilla felis, eu pretium.",
      status: "Available",
    },
    {
      name: "Lee Cooper Mid Sneakers",
      description:
        "Ut hendrerit venenatis lacus, vel lacinia ipsum fermentum vel. Cras.",
      status: "Out of Stock",
    },
  ];
  let match = useRouteMatch();
  return (
    <div className="products">
      <div className="left">
        <h3>Products</h3>
        <ul>
          {DATA.map((product, i) => (
            <li>
              <Link  key={i} to={`${match.url}/${product.name}`}>{product.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="right">
        <Switch>
          <Route path={`${match.path}/:id`}>
            <PRODUCT/>
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default NavbarProducts;
