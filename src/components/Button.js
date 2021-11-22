import PropTypes from 'prop-types'

const Button = (props) => {
    return (
    <button 
    onClick = {props.onClick}
    >
        {props.title} 
    </button>
    )
}

Button.defaultProps={
    title: 'PlaceHolder',
    color: 'black'
}

Button.propTypes ={
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Button
