import { useEffect, useState } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
// import Loading from "./Loading";
import Error from "./Error";

const CommentArea = (props) => {
  // state = {
  //   comments: [],
  //   isLoading: true,
  //   isError: false,
  // };

  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {}, []);

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

  useEffect(() => {
    funxExx();
  }, [props.bookAsin]);

  const funxExx = async (props) => {
    // this.setState({
    //   isLoading: true,
    // });
    setIsLoading(true);
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + props.bookAsin,
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
        // this.setState({
        //   comments: comments,
        //   isLoading: false,
        //   isError: false,
        // });
        setComments(comments);
        setIsLoading(false);
        setIsError(false);
      } else {
        console.log("error");
        // this.setState({ isLoading: false, isError: true });
        setIsLoading(false);
        setIsError(true);
      }
    } catch (error) {
      console.log(error);
      // this.setState({ isLoading: false, isError: true });
      setIsLoading(false);
      setIsError(true);
    }
  };

  return (
    <div className="text-center">
      {/* {this.state.isLoading && <Loading />} */}
      {isLoading && <h2>Seleziona un libro</h2>}
      {isError && <Error />}
      <AddComment asin={props.bookAsin} />
      <CommentList commentsToShow={comments} />
    </div>
  );
};

export default CommentArea;
