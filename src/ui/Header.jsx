import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <div>
      <Link to="/">React and Cheese</Link>
      <SearchOrder />
      <p>Baki</p>
    </div>
  );
}

export default Header;
