import React from 'react';
import CourseDetails from './Components/CourseDetails';
import BookDetails from './Components/BookDetails';
import BlogDetails from './Components/BlogDetails';
import './App.css';
function App() {
  return (
    <div className="container">
      <div className="column no-border">
        <CourseDetails />
      </div>
      <div className="column with-border">
        <BookDetails />
      </div>
      <div className="column with-border">
        <BlogDetails />
      </div>
    </div>
  );
}
