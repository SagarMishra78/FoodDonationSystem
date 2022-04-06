import { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

export default function WriteBlog() {
  const Navigate = useNavigate();
  const [values, setValues] = useState({
    title: "",
    content: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const postBlog = async () => {
    const { title, content } = values;

    const res = await fetch("/blog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        content,
      }),
    });
    await res.json();
    if (res.status === 201) {
      toast.success("Your Blog has been published!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: true,
        hideProgressBar: true,
      });
      Navigate("/readblog");
    } else {
      toast.error("Please fill details", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: true,
        hideProgressBar: true,
      });
    }
  };

  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
      <form className="writeForm" method="POST" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <input
            name="title"
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
            onChange={onChange}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            name="content"
            className="writeInput writeText"
            placeholder="Write your thoughts..."
            type="text"
            rows={5}
            onChange={onChange}
          />
        </div>
        <Button style={{ width: "auto" }} variant="dark" onClick={postBlog}>
          Publish
        </Button>
      </form>
    </div>
  );
}
