import React, { useEffect, useState } from "react";
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
import UserContext from "./utils/UserContext";

const AppLayout = () => {
  const [userName, setUserName] = useState();

  //Dummya authentication
  useEffect(() => {
    //Make an API call and send username and password
    const data = {
      name: "Yash Saini",
    };
    setUserName(data.name);
  },[])
  return(
    <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
      <div>
      <Header />
      <Outlet/>
    </div>
    </UserContext.Provider>
  );
}

const appRouter = createBrowserRouter([

  {
    path: "/",
    element: <AppLayout />,
    children:[
      {
        path: "/",
        element: (<div className="px-[14rem]">
        <Slider />
        <DishesContainer />
        </div>),
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
