import logo from './logo.svg';
import './App.css';
import React from "react";
import UserList from "./components/User";
import MenuItem from "./components/Menu";
import FooterItem from "./components/Footer";
import axios from "axios";

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'users': []
        }
    }
    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/users/').then(response => {
                const users = response.data
                this.setState(
                    {
                        'users': users
                })
            }).catch(error => console.log(error))
    }
    render() {
        return (
            <div>
                <MenuItem/>
                <UserList users={this.state.users}/>
                <FooterItem/>
            </div>
        );
    }
}

export default App;
