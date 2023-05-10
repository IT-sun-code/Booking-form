import PropTypes from "prop-types";
import BookingForm from "../../../bookingForm";

const OrderModalContent = ({ onConfirm }) => {
  return (
    <>
      <BookingForm onConfirm={onConfirm} />
    </>
  );
};

OrderModalContent.propTypes = {
  onConfirm: PropTypes.func,
};

export default OrderModalContent;
