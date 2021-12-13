import PropTypes from 'prop-types';
import { NavLink, useNavigate } from 'react-router-dom';

function Header({ text, bgColor, textColor }) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };

  let activeStyle = {
    color: '#fff',
  };

  const navigate = useNavigate();

  const handleClick = () => {
    console.log('howdy');
    navigate('/about');
  };

  return (
    <header style={headerStyles}>
      <div className='container'>
        <h2>{text}</h2>
        <NavLink
          to='/'
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          App Home Page
        </NavLink>
        <button onClick={handleClick}>Click Here</button>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: 'Feedback App',
  bgColor: 'rgba(0, 0, 0, 0.4)',
  textColor: '#fff',
};

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default Header;
