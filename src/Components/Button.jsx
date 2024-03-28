import './Button.css'
import PropTypes from 'prop-types';

const Button = ({TextContent,widthSize,onClick}) => {
  return (
    <button style={{width:widthSize}} onClick={onClick}>{TextContent}</button>
  )
}
Button.propTypes = {
    TextContent: PropTypes.string.isRequired,
    widthSize:PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };
  

export default Button
