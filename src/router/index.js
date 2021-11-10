import '../index.css'
import { BrowserRouter as Router,Routes } from "react-router-dom";
import {Route} from "react-router";
import LoginPage from "../pages/LoginPage";
import PostsPage from "../pages/PostsPage";
import PostDetailsPage from "../pages/PostDetailsPage";
import ProfilePage from "../pages/ProfilePage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes >
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/postsPage" component={PostsPage} />
          <Route exact path="/postDetailsPage" component={PostDetailsPage} />
          <Route exact path="/profilePage" component={ProfilePage} />
        </Routes >
      </div>
    </Router>
  );
}

export default App;
