import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../src/ui/Home";
import Menu, { loader as menuLoader } from "../src/features/menu/Menu";
import Cart from "../src/features/cart/Cart";
import CreateOrder from "../src/features/order/CreateOrder";
import Order from "../src/features/order/Order";
import AppLayout from "./ui/AppLayout";
import Error from "../src/ui/Error";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
