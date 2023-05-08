import PropTypes from "prop-types";
import BookingForm from "../../../bookingForm";

const OrderModalContent = ({ onConfirm, onClose }) => {
  return (
    <>
      <BookingForm onConfirm={onConfirm} onClose={onClose} />
    </>
  );
};

OrderModalContent.propTypes = {
  onConfirm: PropTypes.func,
  onClose: PropTypes.func,
};

export default OrderModalContent;
