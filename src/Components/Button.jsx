import './Button.css'
import PropTypes from 'prop-types';

const Button = ({TextContent,widthSize}) => {
  return (
    <button style={{width:widthSize}}>{TextContent}</button>
  )
}
Button.propTypes = {
    TextContent: PropTypes.string.isRequired,
    widthSize:PropTypes.string.isRequired,
  };
  

export default Button
