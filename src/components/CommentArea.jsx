import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import Loading from "./Loading";
import Error from "./Error";

class CommentArea extends Component {
  state = {
    comments: [],
    isLoading: true,
    isError: false,
  };

  // componentDidMount = async () => {
  //   try {
  //     let response = await fetch(
  //       "https://striveschool-api.herokuapp.com/api/comments/" +
  //         this.props.asin,
  //       {
  //         headers: {
  //           Authorization:
  //             "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2VhMzhlNjVmZTk4NDAwMTM0ZDNkNWYiLCJpYXQiOjE2NzYyOTQzNzUsImV4cCI6MTY3NzUwMzk3NX0.FzICvEFZsF3HxNCBS3swTxEVPFwaVvBSiymZQOPl-rs",
  //         },
  //       }
  //     );
  //     console.log(response);
  //     if (response.ok) {
  //       let comments = await response.json();
  //       this.setState({ comments: comments, isLoading: false, isError: false });
  //     } else {
  //       console.log("error");
  //       this.setState({ isLoading: false, isError: true });
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     this.setState({ isLoading: false, isError: true });
  //   }
  // };

  componentDidUpdate = async (prevProps) => {
    if (prevProps.asin !== this.props.asin) {
      this.setState({
        isLoading: true,
      });
      try {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/comments/" +
            this.props.asin,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2VhMzhlNjVmZTk4NDAwMTM0ZDNkNWYiLCJpYXQiOjE2NzYyOTQzNzUsImV4cCI6MTY3NzUwMzk3NX0.FzICvEFZsF3HxNCBS3swTxEVPFwaVvBSiymZQOPl-rs",
            },
          }
        );
        console.log(response);
        if (response.ok) {
          let comments = await response.json();
          this.setState({
            comments: comments,
            isLoading: false,
            isError: false,
          });
        } else {
          console.log("error");
          this.setState({ isLoading: false, isError: true });
        }
      } catch (error) {
        console.log(error);
        this.setState({ isLoading: false, isError: true });
      }
    }
  };

  render() {
    return (
      <div className="text-center">
        {/* {this.state.isLoading && <Loading />} */}
        {this.state.isLoading && <h2>Seleziona un libro</h2>}
        {this.state.isError && <Error />}
        <AddComment asin={this.props.asin} />
        <CommentList commentsToShow={this.state.comments} />
      </div>
    );
  }
}

export default CommentArea;
