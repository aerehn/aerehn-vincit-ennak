//A header component that has a default string parameter of type string
import PropTypes from 'prop-types';
import HeaderCSS from "./Header.module.css";
const Header = (props) => {
    return (
        <header className={HeaderCSS.header}>
            <h1>{props.title}</h1>
            
        </header>
    )
}
Header.defaultProps={
    title: 'Scrooge\'s bitcoin investigator'
}

Header.propTypes ={
    title: PropTypes.string.isRequired
}
export default Header;
