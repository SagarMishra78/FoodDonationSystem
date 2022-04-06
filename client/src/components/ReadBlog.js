import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

const ReadBlog = (props) => {
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
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    callBlogDetails();
  });

  const fabStyle = {
    position: "relative",
    bottom: 70,
    left: 1250,
  };

  const writeBlog = () => {
    Navigate("/writeblog");
  };

  const viewBlog = (e) => {
    let id = e.currentTarget.id;
    Navigate("/blogmodal", { state: id });
  };

  const DisplayBlog = data.map((info) => {
    return (
      <div className="blog-card" key={info._id}>
        <Card className="blogCard" sx={{ maxWidth: 345 }}>
          <CardContent>
            <Typography
              className="blogTitle"
              gutterBottom
              variant="h5"
              component="div"
            >
              {info.title}
            </Typography>
            <Typography
              className="blogContent"
              variant="body2"
              color="text.secondary"
            >
              {info.content}
            </Typography>
            <Typography className="blogDate" variant="subtitle2" color="red">
              {info.date}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              className="viewButton"
              variant="contained"
              size="small"
              onClick={viewBlog}
            >
              View
            </Button>
          </CardActions>
        </Card>
      </div>
    );
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
