import React from "react";
import { Typography } from "@mui/material";
import "@fontsource/roboto";
import "@fontsource/lobster";
import sampleVideo from "../assets/gettyimages-1459538516-640_adpp.mp4";
const Heroe = ({
  title = "Welcome to Blog App",
  subtitle = "Discover stories, tutorials and tips about web development.",
  buttonText = "Get Started",
  buttonHref = "#posts",
  videoSrc, // optional: if provided, it will override the bundled sampleVideo
  height = "100vh",
}) => {
  const resolvedVideoSrc = videoSrc || sampleVideo;

  const containerStyle = {
    position: "relative",
    width: "100%",
    height: height,
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    margin: "-47px 0 10px 0",
  };

  const videoStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transform: "translate(-50%, -50%)",
    zIndex: 0,
    pointerEvents: "none", // prevents capturing clicks
  };

  const overlayStyle = {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(to bottom right, rgba(0,0,0,0.45), rgba(0,0,0,0.25))",
    zIndex: 1,
  };

  const contentStyle = {
    position: "relative",
    zIndex: 2,
    maxWidth: 960,
    padding: "0 1rem",
    textAlign: "center",
  };

  const subtitleStyle = {
    marginTop: "0.75rem",
    marginBottom: "1.25rem",
    fontSize: "clamp(1rem, 2.2vw, 1.25rem)",
    color: "rgba(255,255,255,0.9)",
  };

  const buttonStyle = {
    display: "inline-block",
    padding: "0.65rem 1.05rem",
    fontSize: "1rem",
    color: "#fff",
    background: "linear-gradient(90deg,#ff7a7a,#ff4e50)",
    borderRadius: 8,
    textDecoration: "none",
    boxShadow: "0 6px 20px rgba(255,78,80,0.18)",
    transition: "transform 160ms ease, box-shadow 160ms ease",
  };

  const buttonHover = (e) => {
    e.currentTarget.style.transform = "translateY(-3px)";
    e.currentTarget.style.boxShadow = "0 10px 30px rgba(255,78,80,0.25)";
  };

  const buttonLeave = (e) => {
    e.currentTarget.style.transform = "";
    e.currentTarget.style.boxShadow = "0 6px 20px rgba(255,78,80,0.18)";
  };

  return (
    <section style={containerStyle} aria-label="Hero">
      <video
        style={videoStyle}
        src={resolvedVideoSrc}
        autoPlay
        loop
        muted
        playsInline
      />
      <div style={overlayStyle} />
      <div style={contentStyle}>
        <Typography
          variant="h3"
          sx={{ color: "#249ff7ff", mb: 2, fontFamily: "lobster" }}
        >
          {title}
        </Typography>
        <Typography
          variant="h5"
          sx={{ color: "#ffffffff", fontFamily: "verdana" }}
        >
          You can add your blogs using "Add Blog" section and view all your
          blogs in "Blogs" section.
        </Typography>

        <Typography
          variant="body1"
          sx={{ color: "#ffffffff", fontFamily: "roboto" }}
        >
          Happy Blogging!
        </Typography>
        <p style={subtitleStyle}>{subtitle}</p>
        <a
          href={buttonHref}
          style={buttonStyle}
          onMouseEnter={buttonHover}
          onMouseLeave={buttonLeave}
          role="button"
        >
          {buttonText}
        </a>
      </div>
    </section>
  );
};

export default Heroe;
