import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/home-page/HomePage";
import AboutUs from "./pages/about/AboutUs";
import NavigationBar from "./components/Navigation_bar";
import Footer from "./components/Footer";
import NotFound from "./pages/404/Not-found";
import Contact from "./pages/contact/Contact";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/about-us",
      element: <AboutUs />,
    },
    {
      path: "/contact-us",
      element: <Contact />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return (
    <div className="App">
      <NavigationBar />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
