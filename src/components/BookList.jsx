import { useEffect, useState } from "react";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";
import { Col, Form, Row } from "react-bootstrap";

const BookList = (props) => {
  // state = {
  //   searchQuery: "",
  //   bookAsin: null,
  // };

  const [searchQuery, setSearchQuery] = useState("");
  const [bookAsin, setBookAsin] = useState(null);
  useEffect(() => {}, []);

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.bookAsin !== this.props.bookAsin) {
  //     this.cangeAsinBook();
  //   }
  // }

  const cangeAsinBook = (asin) => {
    setBookAsin(asin);
  };

  return (
    <>
      <Row>
        <Col>
          <Form.Group>
            <Form.Label>Search a book</Form.Label>
            <Form.Control
              type="text"
              placeholder="Search here"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={8}>
          <Row>
            {props.books
              .filter((b) => b.title.toLowerCase().includes(searchQuery))
              .map((b) => (
                <Col xs={12} md={4} key={b.asin}>
                  <SingleBook book={b} cangeAsinBook={cangeAsinBook} />
                </Col>
              ))}
          </Row>
        </Col>
        <Col xs={12} md={4}>
          <CommentArea
            bookAsin={bookAsin}
            onClick={() => this.setState({ selected: !this.state.selected })}
          />
        </Col>
      </Row>
    </>
  );
};

export default BookList;
