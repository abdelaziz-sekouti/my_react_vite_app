import React, { useState } from "react";
import { TextField, Box, Typography, Button } from "@mui/material";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function AddBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isActif, setIsActif] = useState(true);
  const navigate = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();
    toast.success("Blog Added Successfully");
    const newBlog = {
      id: 0,
      title: title,
      content: content,
      isActif: isActif,
    };
    const storedBlog = JSON.parse(localStorage.getItem("blogPosts")) || [];
    storedBlog.push(newBlog);
    newBlog.id = storedBlog.length - 1;
    localStorage.setItem("blogPosts", JSON.stringify(storedBlog));
    navigate("/blogs");
  };
  return (
    <Box
      component="form"
      onSubmit={handleForm}
      sx={{
        border: "2px solid #cc77",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        width: "70%",
        margin: "auto",
        padding: "30px",
      }}
    >
      <Typography variant="h3" sx={{ color: "#249ff7ff", mb: "20px" }}>
        Add A Blog
      </Typography>
      <TextField
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        label="Title"
        value={title}
        fullWidth
        sx={{ background: "transparent", mb: "10px" }}
      />
      <TextField
        onChange={(e) => {
          setContent(e.target.value);
        }}
        label="Content"
        value={content}
        multiline
        rows={8}
        fullWidth
        sx={{ background: "transparent", mb: "10px" }}
      ></TextField>

      <Button
        type="submit"
        sx={{
          fontWeight: "bold",
          fontFamily: "Roboto",
          fontSize: "17px",
          background: "#bdd219ff",
          marginLeft: 1,
          transition: "all .3s",
          color: "#fa0808ff",
          "&:hover": { background: "#c1b", color: "#fa0" },
        }}
      >
        Add Blog
      </Button>
    </Box>
  );
}
export default AddBlog;
