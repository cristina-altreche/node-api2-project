import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = () => {
    axios
      .get("http://localhost:8000/api/posts")
      .then((res) =>
        // console.log(res.data))
        setPosts(res.data)
      )

      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="post-list">
          {posts.map((post) => (
            <div className="post" key={post.id}>
              <div className="contents">
                <h5>{post.title}</h5>
                <p style={{ fontSize: "13px" }}>{post.created_at}</p>
              </div>
              {/* <div className="comments">
              <Comment posts={posts}/>
              </div> */}
            </div>
          ))}
        </div>
      </header>
    </div>
  );
};

export default App;
