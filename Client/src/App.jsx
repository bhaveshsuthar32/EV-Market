
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { userRoutes } from "./routes";
import { PageNotFound } from "./components";

import "@assets/bootstrap-datetimepicker.min.css";
import "@assets/bootstrap.min.css";
import "@assets/feather.css";
import "@assets/owl.theme.default.min.css";
import "@assets/slick.css";
import "@assets/style.css";
// js
import "@assets_js/jquery-3.6.3.min.js";
import "@assets_js/bootstrap.bundle.min.js";
import "@assets_js/backToTop.js";
import "@assets_js/feather.min.js";
import "@assets_js/owl.carousel.min.js";
import "@assets_js/script.js";

const router = createBrowserRouter([
  ...userRoutes,
  { path: "*", element: <PageNotFound /> },
]);

 
function App() {
  return <RouterProvider router={router} />;
}

export default App;
