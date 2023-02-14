import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";

const AddComment = ({ asin }) => {
  // state = {
  //   comment: {
  //     comment: "",
  //     rate: 1,
  //     elementId: this.props.asin,
  //   },
  // };

  const [comment, setComment] = useState({
    comment: "",
    rate: 1,
    elementId: asin,
  });

  useEffect(() => {
    sendComment();
  }, []);

  const sendComment = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments",
        {
          method: "POST",
          body: JSON.stringify(comment),
          headers: {
            "Content-type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2VhMzhlNjVmZTk4NDAwMTM0ZDNkNWYiLCJpYXQiOjE2NzYyOTQzNzUsImV4cCI6MTY3NzUwMzk3NX0.FzICvEFZsF3HxNCBS3swTxEVPFwaVvBSiymZQOPl-rs",
          },
        }
      );
      if (response.ok) {
        alert("Comment was sent!");
        // this.setState({
        //   comment: {
        //     comment: "",
        //     rate: 1,
        //     elementId: this.props.asin,
        //   },
        // });
        setComment({ ...comment, elementId: asin });
      } else {
        console.log("error");
        alert("something went wrong");
      }
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <div className="my-3">
      <Form onSubmit={sendComment}>
        <Form.Group>
          <Form.Label>Comment text</Form.Label>
          <Form.Control
            type="text"
            placeholder="Add comment here"
            // value={this.state.comment.comment}
            value={comment.comment}
            // onChange={(e) =>
            // this.setState({
            //   comment: {
            //     ...this.state.comment,
            //     comment: e.target.value,
            //   },
            // })
            onChange={(e) =>
              setComment({ ...comment, elementId: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Rating</Form.Label>
          <Form.Control
            as="select"
            value={comment.rate}
            // onChange={(e) =>
            //   this.setState({
            //     comment: {
            //       ...this.state.comment,
            //       rate: e.target.value,
            //     },
            //   })
            // }
            onChange={(e) => setComment({ ...comment, rate: e.target.value })}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddComment;
