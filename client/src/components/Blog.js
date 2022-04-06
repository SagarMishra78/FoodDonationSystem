import React from 'react'
import { useLocation } from "react-router-dom";

const Blog = (props) => {
    const { state } = useLocation();
    const id = state;
    console.log(id);
  return (
    <div>Sagar</div>
  )
}

export default Blog;