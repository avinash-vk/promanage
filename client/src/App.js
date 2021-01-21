import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import ROUTES from "./routes";
import React from 'react';
//components
import SignedInLayout from "./layout/SignedInLayout";
import { AuthContext } from "./firebase/provider";
// Pages
import Dashboard from "./pages/Dashboard";
import CreateProject from "./pages/CreateProject";
import Project from "./pages/Project";
import Settings from "./pages/Settings";
import Info from "./pages/Info";
import Profile from "./pages/Profile";
import SignIn from "./pages/Auth/SignIn";

import { auth } from "./firebase";

function App() {
  let { user, setUser } = React.useContext(AuthContext);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    auth().onAuthStateChanged(async (user) => {
      if(user){
        const { displayName, email, uid }  = user;
        setUser({
          displayName,
          email,
          uid
        })
      }
      else {
        setUser(null);
      }
      setLoading(false);
    })
  },[])
  if(loading) return <p>Loading...</p>
  let signedInRoutes = (
    <Switch>
      <Route exact path={ROUTES.dashboard} component={Dashboard} />
      <Route exact path={ROUTES.createProject} component={CreateProject} />
      <Route exact path={ROUTES.project} component={Project} />
      <Route exact path={ROUTES.profile} component={Profile} />
      <Route exact path={ROUTES.settings} component={Settings} />
      <Route exact path={ROUTES.info} component={Info} />
      <Redirect to={ROUTES.dashboard} />
    </Switch>
  );
  let signedOutRoutes = (
    <Switch>
      <Route exact path={ROUTES.signin} component={()=><SignIn setUser = {setUser} />} />
      <Redirect to={ROUTES.signin} />
    </Switch>
  );
  return (
    <BrowserRouter>
      {
        user 
        ? <SignedInLayout >
            {signedInRoutes}
          </SignedInLayout>
        : <> {signedOutRoutes} </>
      }
    </BrowserRouter>
  );
}

export default App;
