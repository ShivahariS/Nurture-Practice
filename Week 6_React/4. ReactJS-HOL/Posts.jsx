import React from "react";
import Post from "./Post";

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

 
  loadPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) =>response.json())
      .then((data) => {
        const englishTitles = [
          "Welcome to Our Blog",
          "Getting Started with React",
          "Understanding Components",
          "Connecting to APIs",
          "Conclusion and Resources",
        ];

        const englishBodies = [
          "This blog will help you understand how to build web apps using React.",
          "React is a JavaScript library used for building user interfaces in a component-based way.",
          "Components are reusable parts of a UI. Each one is a piece of your app that you can build and maintain easily.",
          "Using APIs, your React app can fetch live data from the internet and display it to users.",
          "Thank you for reading! Keep learning and explore more about React development.",
        ];

        
        const postList = data.slice(0, 5).map((item, index) => {
          return new Post(item.id, englishTitles[index], englishBodies[index]);
        });

        this.setState({ posts: postList });
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  };

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, info) {
    alert("An error occurred while rendering the component.");
    console.error("Error details:", error, info);
  }

  render() {
    return (
      <div>
        <h2>Blog Posts</h2>
        {this.state.posts.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <hr />
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;
