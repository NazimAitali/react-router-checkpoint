import React from "react";
import { Link,Route,Switch, useRouteMatch } from "react-router-dom";
import Log from './Log'
export const Admin = () => {
  let match = useRouteMatch();
  return (
    
    <div className="admin">
  You must log in to view the page at /admin
  <button><Link to={`${match.url}/Welcome admin`}>Log in</Link></button>
  <Switch>
        <Route path={`${match.path}/:id`}>
          <Log />
        </Route>      
      </Switch>
    </div>
  );
};

export default Admin;
