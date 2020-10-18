import React from "react";
import {
  Link,
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";
import Shoes from "./SubCategory/Shoes"
import Boots from "./SubCategory/Boots"
import Footwear from "./SubCategory/Footwear"
export const Category = () => {
  let match = useRouteMatch();
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to={`${match.url}/Shoes`}>Shoes</Link>
          </li>
          <li>
            <Link to={`${match.url}/Boots`}>Boots</Link>
          </li>
          <li>
            <Link to={`${match.url}/Footwear`}>Footwear</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path={`${match.path}/:id`}>
          <Shoes />
        </Route>
        <Route path={`${match.path}/:id`}>
          <Boots />
        </Route>
        <Route path={`${match.path}/:id`}>
          <Footwear />
        </Route>
      </Switch>
    </div>
  );
};

export default Category;
