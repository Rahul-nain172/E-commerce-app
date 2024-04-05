import { Navbar } from "./components/navbar/navbar.js"
import Auth from "./components/authentication/auth.js";
import CustomUserContext from "./contexts/usercontext.js";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import { useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { Cart } from "./components/Cart/Cart.js";
import { Myorder } from "./components/myorders/dummyorders.js";
import { Hero } from "./components/hero/hero.js";
import { Product } from "./components/Items/product.js";
import { Bill } from "./components/Bill/Bill.js";



function App() {
  const BrowserRouter=createBrowserRouter([
    {
      path:'/',
      element:<Navbar/>,
      children:[
        {
          path:'',
          element:<Hero/>,
        },
        {
          path:'auth/:mode',
          element: <Auth/>
        },
        {
          path:'products/:name',
          element:<Product/>
        },
        {
          path:'cart',
          element:<Cart/>
        },
        {
          path:'/orders',
          element:<Myorder/>
        }
      ],
    },
    {
      path:'/bill/:ind',
      element:<Bill/>
    }
  
  ]);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on component mount
  }, []);
  return (
    <>
    <CustomUserContext>
      <RouterProvider router={BrowserRouter}/>
    </CustomUserContext>
    </>
  );
}

export default App;
