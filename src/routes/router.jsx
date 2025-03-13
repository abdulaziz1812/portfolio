import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import DetailsLayout from "../layouts/DetailsLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    
  },
  {
    path: "/project/:id",
    element: <DetailsLayout></DetailsLayout>,
  },

  

  {
    path: "*",
    element: <div>error</div>,
  },
]);

export default router;
