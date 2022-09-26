import React from 'react'

const MenuItem = ({menu}) => {
    const ulStyleMenu = {
        'list-style': 'none',
        margin: 0,
        padding: 0,
        'margin-top': '30px',
        display: 'flex',
        'flex-wrap': 'wrap',
        'justify-content': 'center',
	    background: '#5A98D0',
    };

    const aStyleMenu = {
	    display: 'block',
        padding: '1em',
        'border-right': '1px solid #ADC0CE',
        color: '#FFFFFF',
        'text-decoration': 'none',
    };


    return (
        <div>
            <ul style={ulStyleMenu}>
                <li><a style={aStyleMenu} href="#">Users</a></li>
                <li><a style={aStyleMenu} href="#">Projects</a></li>
                <li><a style={aStyleMenu} href="#">TODO</a></li>
            </ul>
        </div>
    )
}

export default MenuItem