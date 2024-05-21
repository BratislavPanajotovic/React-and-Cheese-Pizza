import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../src/ui/Home";
import Menu from "../src/features/menu/Menu";
import Cart from "../src/features/cart/Cart";
import CreateOrder from "../src/features/order/CreateOrder";
import Order from "../src/features/order/Order";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/menu",
    element: <Menu />,
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
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
