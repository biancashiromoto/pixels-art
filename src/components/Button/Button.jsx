import PropTypes from "prop-types";

const Button = ({label, onClick, className}) => {
  return (
    <button
      className={`${className} btn btn-outline-light`}
      onClick={onClick}
      
    >
      {label}
    </button>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Button;
