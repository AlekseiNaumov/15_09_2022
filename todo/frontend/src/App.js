import logo from './logo.svg';
import './App.css';
import React from "react";
import UserList from "./components/User";

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'users': []
        }
    }
    componentDidMount() {
        const users = [
            {
                "user_name": "First",
                "first_name": "One",
                "last_name": "Freeman",
                "email": "First@Freeman.com"
            },
            {
                "user_name": "Second",
                "first_name": "Two",
                "last_name": "Freeman",
                "email": "Second@Freeman.com"
            },
            {
                "user_name": "Third",
                "first_name": "Three",
                "last_name": "Freeman",
                "email": "Third@Freeman.com"
            }
        ]
        this.setState(
            {
                'users': users
            }
        )

    }
    render() {
        return (
            <div>
                <UserList users={this.state.users}/>
            </div>
        );
    }

}

export default App;
