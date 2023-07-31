import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Slider from "./components/Slider";
import DishesContainer from "./components/DishesContainer";
import Error from "./components/Error";
import Help from "./components/Help";
import Footer from "./components/Footer"
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom"
import SignIn from "./components/Signin";
import Offers from "./components/Offers"
import Restaurantmenu from "./components/Restaurantmenu";

const AppLayout = () => (
  <>
    <Header />
    <Outlet/>
  </>
);

const appRouter = createBrowserRouter([

  {
    path: "/",
    element: <AppLayout />,
    children:[
      {
        path: "/",
        element: (<>
        <Slider />
        <DishesContainer />
        </>),
        errorElement: <Error/>
      },
      {
        path: "/help",
        element: <Help/>,
        errorElement: <Error/>,
      },
      {
        path: "/signin",
        element: <SignIn/>,
        errorElement: <Error/>,
      },
      {
        path: "/restaurants/:resId",
        element: <Restaurantmenu/>,
        errorElement: <Error/>
      },
      {
        path: "/footer",
        element: <Footer/>,
        errorElement: <Error/>
      }
    ],
    errorElement: <Error/>,
  },
  {
    path: "/offers",
    element: <Offers />,
    errorElement: <Error/>,
  }

])



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
