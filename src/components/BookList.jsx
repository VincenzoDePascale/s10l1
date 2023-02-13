import { Component } from "react";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";
import { Col, Form, Row } from "react-bootstrap";

class BookList extends Component {
  state = {
    searchQuery: "",
    bookAsin: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.bookAsin !== this.props.bookAsin) {
      // this.COSA?!
    }
  }

  render() {
    return (
      <>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Search a book</Form.Label>
              <Form.Control
                type="text"
                placeholder="Search here"
                value={this.state.searchQuery}
                onChange={(e) => this.setState({ searchQuery: e.target.value })}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={8}>
            <Row>
              {this.props.books
                .filter((b) =>
                  b.title.toLowerCase().includes(this.state.searchQuery)
                )
                .map((b) => (
                  <Col xs={12} md={4} key={b.asin}>
                    <SingleBook
                      book={b}
                      onClick={() => this.setState({ bookAsin: "b.asin" })}
                    />
                  </Col>
                ))}
            </Row>
          </Col>
          <Col xs={12} md={4}>
            <CommentArea bookAsin={this.state.bookTitle} />
          </Col>
        </Row>
      </>
    );
  }
}

export default BookList;
