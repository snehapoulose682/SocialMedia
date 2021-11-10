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
          <Route exact path="/" element={<LoginPage/>} />
          <Route exact path="/postsPage" element={<PostsPage/>} />
          <Route exact path="/postDetailsPage" element={<PostDetailsPage/>} />
          <Route exact path="/profilePage" element={<ProfilePage/>} />
        </Routes >
      </div>
    </Router>
  );
}

export default App;
