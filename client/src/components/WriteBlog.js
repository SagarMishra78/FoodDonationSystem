import { Button } from "react-bootstrap";

export default function WriteBlog() {
  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
      <form className="writeForm">
        <div className="writeFormGroup">
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Write your thoughts..."
            type="text"
            rows={5}
          />
        </div>
        <Button style={{ width: "auto" }} variant="dark">
          Publish
        </Button>
      </form>
    </div>
  );
}
