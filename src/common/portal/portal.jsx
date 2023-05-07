import { createPortal } from "react-dom";
import PropTypes from "prop-types";

const Portal = ({ children, element = document.body }) => {
  return createPortal(children, element);
};

Portal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  element: PropTypes.node,
};

export default Portal;
