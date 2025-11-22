import React from "react";
import { Container, Typography ,List,ListItem} from "@mui/material";
import { Link } from "react-router-dom";
import "@fontsource/lobster";
function Blogs() {
  return (
    <Container sx={{ mt: 5, textAlign: "center" }}>
      <Typography
        variant="h3"
        sx={{ color: "#249ff7ff", mb: 2, fontFamily: "lobster" }}
      >
         Happy Blogging!
      </Typography>
       
      {(() => {
        const articles = JSON.parse(localStorage.getItem("blogPosts") || "[]");
        if (!articles.length) {
          return (
            <Typography variant="body1" sx={{ color: "#249ff7ff", mt: 3 }}>
              No articles yet. Add one in "Add Blog".
            </Typography>
          );
        }
        return (
          <div style={{ marginTop: 24, textAlign: "left" }}>
            <Typography variant="h5" sx={{ color: "#249ff7ff", mb: 1 }}>
              Your Articles
            </Typography>
            <List style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {articles.map((a, idx) => (
                <ListItem
                  key={a.id ?? idx}
                  style={{
                    background: "#b0dbfaff",
                    padding: 12,
                    borderRadius: 8,
                    marginBottom: 12,
                  }}
                >
                  <Typography variant="h6" sx={{display: "inline-block", color: "#fff", mb: 0.5,textTransform:"uppercase" }}>
                    {a.title || "Untitled"}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#fff",padding:'5px',borderRadius:'20px' }}>
                    {(a.content || "").slice(0, 200)}
                    {(a.content || "").length > 200 ? "…" : ""}
                  </Typography>
                  <Link
                    to={`/blogs/${a.id ?? idx}`}
                    style={{
                      display: "inline-block",
                      marginTop: 8,
                      color: "#0d0d0dff",
                      textDecoration: "none",
                      padding:'5px'
                    }}
                  >
                    Read more
                  </Link>
                </ListItem>
              ))}
            </List>
          </div>
        );
      })()}
    </Container>
  );
}

export default Blogs;
