import React from 'react';

const Header = (props) => {
    const { viewStyle } = styles;
    return (
        <div style={viewStyle} >{props.headerText}</div>
    );
};


const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        fontSize: 20,
        display: 'flex',
        boxShadow: '5px 5px 5px rgba(0,0,0,0.2)'

    }
};

export default Header;
