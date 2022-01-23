import { Outlet, useLocation } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import NewsLetter from "./NewsLetter";

export default function Layout() {
  let location = useLocation();
  return (
    <Box>
      <Navbar />
      <Box>{location.pathname === "/" ? <Home /> : <Outlet />}</Box>
      <NewsLetter />
      <Footer />
    </Box>
  );
}
