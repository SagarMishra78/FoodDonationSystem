import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Fab from "@mui/material/Fab";
import AddIcon from '@mui/icons-material/Add';

const ReadBlog = () => {
  const Navigate = useNavigate();
  const [data, setData] = useState([]);
  const callBlogDetails = async () => {
    try {
      const res = await fetch("/getblog", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const blogs = await res.json();
      setData(blogs);
      console.log(blogs);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    callBlogDetails();
  });

  const fabStyle = {
    position: "absolute",
    bottom: 16,
    right: 16,
  };

  const writeBlog = () => {
    Navigate("/writeblog");
  }

  const DisplayBlog = data.map((info) => {
    return info.blogs.map((i) => {
      return (
        <div className="blog-card">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image="https://media.istockphoto.com/vectors/food-donation-and-charity-vector-id1224414210?k=20&m=1224414210&s=612x612&w=0&h=FhZYeea62Eh_7OM74djnSdkRBSq0kpeloV3SnyTiSpE="
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {i.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {i.content}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </div>
      );
    });
  });

  return (
    <>
      <Fab
        sx={fabStyle}
        color="secondary"
        aria-label="edit"
        onClick={writeBlog}
      >
        <AddIcon />
      </Fab>
      <img
        style={{ marginTop: "10px" }}
        className="writeImg"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcZeyNFf52IT6Ki4804wopnd6a6tTKPe0mzw&usqp=CAU"
        alt=""
      />
      <div>{DisplayBlog}</div>
    </>
  );
};

export default ReadBlog;
