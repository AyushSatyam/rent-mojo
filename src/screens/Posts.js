import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";

function Posts(props) {
  const location = useLocation();
  const userId = location.search.split("=")[1];
  const [posts, setposts] = useState(null);
  useEffect(() => {
    fetch("http://jsonplaceholder.typicode.com/posts?userId=" + userId)
      .then((buffer) => buffer.text())
      .then((stringResponse) => JSON.parse(stringResponse))
      .then((data) => setposts(data));
  }, []);
  console.log(posts);
  return (
    <Row
      style={{
        display: "flex",
        margin: "15%",
        justifyContent: "center",
      }}
    >
      {posts &&
        posts.map((post) => (
          <Col sm="12">
            <Card body style={{ margin: "10px" }}>
              <CardTitle tag="h5">{post.title}</CardTitle>
              <CardText>{post.body}</CardText>
              <Button color="primary">
                <Link
                  to={"/details?postId=" + post.id}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Show Details
                </Link>
              </Button>
            </Card>
          </Col>
        ))}
    </Row>
  );
}

export default Posts;
