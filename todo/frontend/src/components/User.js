import React from 'react'

const UserItem = ({user}) => {
    const tdStyle = {
          color: '#669',
          padding: '9px 8px',
          transition: '.3s linear',
    }
    return (
        <tr>
            <td style={tdStyle}>
                {user.user_name}
            </td>
            <td style={tdStyle}>
                {user.first_name}
            </td>
            <td style={tdStyle}>
                {user.last_name}
            </td>
            <td style={tdStyle}>
                {user.email}
            </td>
        </tr>
    )
}

const UserList = ({users}) => {
    const tableStyle = {
        'font-family': '"Lucida Sans Unicode", "Lucida Grande", Sans-Serif',
        'font-size': '16px',
        background: 'white',
        'max-width': '100%',
        width: '100%',
        'border-collapse': 'collapse',
        'text-align': 'left',

    }
    const thStyle = {
        'font-weight': 'normal',
        color: '#039',
        'border-bottom': '2px solid #6678b1',
        padding: '10px 8px',
    }
    return (
        <table style={tableStyle}>
            <th style={thStyle}>
                User name
            </th>
            <th style={thStyle}>
                First name
            </th>
            <th style={thStyle}>
                Last Name
            </th>
            <th style={thStyle}>
                Email
            </th>
            {users.map((user_) => <UserItem user={user_} />)}
        </table>
    )
}

export default UserList