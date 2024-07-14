import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import PropTypes from "prop-types";
import { updateOrder } from "../../services/apiRestaurant";

function UpdateOrder({ order }) {
  const fetcher = useFetcher();
  return (
    <fetcher.Form method="PATCH" className="text-right ">
      <Button type="primary">
        Make priority for this order: {order.id} {/* Adjust this line */}
      </Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;

export async function action({ params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}

UpdateOrder.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.string.isRequired,
    customer: PropTypes.string,
    status: PropTypes.string,
    priority: PropTypes.bool,
    cart: PropTypes.array,
    estimatedDelivery: PropTypes.string,
    orderPrice: PropTypes.number,
    priorityPrice: PropTypes.number,
  }).isRequired,
};
