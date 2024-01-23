import PropTypes from 'prop-types';

const Nav = ({route}) => {
    return (
        <>
            <ul className=' mr-7'>
                <a href={route.path}> {route.label} </a>
            </ul>
        </>
    );
};

Nav.propTypes = {
    route: PropTypes.object

};

export default Nav;