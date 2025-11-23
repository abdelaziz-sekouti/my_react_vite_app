import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddBlog from "./components/AddBlog";
import Article from "./components/Article";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
import Testemonials from "./components/Testemonials";
import { testimonials } from "./components/Constants";


import ResponsiveDrawer from './components/ResponsiveDrawer'

function App() {

  return (
    <>
        <ResponsiveDrawer/> 
        <ToastContainer position="top-center" autoClose={300} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/blog_react" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/add-blog" element={<AddBlog />}></Route>
          <Route path="/blogs/:id" element={<Article />}></Route>
          <Route path="/blogs/" element={<Blogs />}></Route>
        </Routes>
        <Testemonials testimonials={testimonials} />
        <Footer />
    </>
  )
}

export default App
