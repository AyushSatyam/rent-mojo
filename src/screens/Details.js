import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";

function Details(props) {
  const location = useLocation();
  console.log(location);
  const [postData, setpostData] = useState(null);
  const [comments, setcomments] = useState(null);
  const postId = location.search.split("=")[1];
  const getComments = () => {
    fetch("http://jsonplaceholder.typicode.com/comments?postId=" + postId)
      .then((buffer) => buffer.text())
      .then((stringResponse) => JSON.parse(stringResponse))
      .then((comments) => setcomments(comments));
  };
  useEffect(() => {
    fetch("http://jsonplaceholder.typicode.com/posts/" + postId)
      .then((buffer) => buffer.text())
      .then((stringResponse) => JSON.parse(stringResponse))
      .then((postData) => setpostData(postData));
  }, []);
  console.log(postData);
  return (
    <Row
      style={{
        display: "flex",
        margin: "15%",
        justifyContent: "center",
      }}
    >
      {postData && (
        <Col sm="12">
          <Card body style={{ margin: "10px" }}>
            <CardTitle tag="h5">{postData.title}</CardTitle>
            <CardText>{postData.body}</CardText>
            <Button color="primary" onClick={getComments}>
              <Link
                to={"/details?postId=" + postData.id}
                style={{ textDecoration: "none", color: "white" }}
              >
                Show Comments
              </Link>
            </Button>
          </Card>
        </Col>
      )}
      {comments &&
        comments.map((comment) => (
          <Card body style={{ margin: "10px" }}>
            <CardTitle tag="h5">{comment.name}</CardTitle>
            <CardText>{comment.email}</CardText>
            <CardText>{comment.body}</CardText>
            {/* <Button color="primary" onClick={getComments}>
              <Link
                to={"/details?postId=" + postData.id}
                style={{ textDecoration: "none", color: "white" }}
              >
                Show Comments
              </Link>
            </Button> */}
          </Card>
        ))}
    </Row>
  );
}
export default Details;
