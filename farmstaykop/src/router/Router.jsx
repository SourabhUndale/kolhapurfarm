import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Propertydetail from "../pages/propertydetails/Propertydetail";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children:[
        {
            path:"/",
            element:<Home />
        }
        ,
        {
          path:"/propertydetails",
          element:<Propertydetail />
      }
      ]
    },
  ]);

  export default router;