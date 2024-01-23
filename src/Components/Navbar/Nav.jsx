import PropTypes from 'prop-types';

const Nav = ({route}) => {
    return (
        <>
            <li className=''>
                <a href={route.path}> {route.label} </a>
            </li>
        </>
    );
};

Nav.propTypes = {
    route: PropTypes.object

};

export default Nav;