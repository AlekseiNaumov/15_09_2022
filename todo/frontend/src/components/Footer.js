import React from 'react'

const FooterItem = ({menu}) => {
    const divStyleFooter = {
        'font-size': '16px',
        'line-height': '26px',
        'text-align': 'center',
        color: '#FFFFFF',
        background: '#5A98D0',
        padding: '20px 20px',
    };
    const olStyleFooter = {
	    display: 'flex',
        'justify-content': 'space-between',
        'flex-wrap': 'wrap',
        'font-size': '16px',
        'line-height': '26px',
        'letter-spacing': '0.05em',
        color: '#FFFFFF',
        padding: '32px 0 32px ',
        };
    const copyStyleFooter = {
        'font-size': '16px',
        'letter-spacing': '0.05em',
        color: '#FFFFFF',
        'padding-bottom': '32px',
        opacity: '0.4',
    };

    return (
        <div style={divStyleFooter}>
            <ol style={olStyleFooter}>
                <li>Адрес: Ленинградский пр-т., 39, строение 80, Москва, 125167</li>
                <li>+1 (999) 888-77-66</li>
                <li>example@email.com</li>
            </ol>
            <div style={copyStyleFooter}>
                Copyright &copy; Aleksei Naumov
            </div>
        </div>
    )
}

export default FooterItem