import React from "react";
import { Container, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
function Article() {
  const { id } = useParams();
  console.log("====================================");
  console.log(typeof parseInt(id));
  console.log("====================================");
  const articles = JSON.parse(localStorage.getItem("blogPosts") || "[]");
  const article = (() =>
    articles.find((a) => a.id == parseInt(id)) || {
      title: "Article Not Found",
      content: "",
    })();
   return (
    <Container sx={{}}>
      <Typography
        variant="h1"
        value={article.title}
        sx={{
          color: "#e8dcdcff",
          mb: 2,
          background: "#249ff7ff",
          padding: 2,
          textTransform:"uppercase",
          borderRadius: 2,
          textAlign: "center",
          fontSize: "1.3rem",
        }}
      >
        {article.title}
      </Typography>
       <Typography
        variant="h1"
        value={article.content}
        sx={{
          color: "#0b0b0bff",
          mb: 2,
          background: "#249ff7ff",
          padding: 4,
          borderRadius: 2,
          textAlign: "center",
          fontSize: "1rem",
        }}
      >
        {article.content}
      </Typography>
    </Container>
  )
}

export default Article;
