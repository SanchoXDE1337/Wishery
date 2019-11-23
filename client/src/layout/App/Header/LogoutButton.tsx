import Button from "../../../components/Button";
import React from "react";
import historyService from "../../../services/historyService";

interface IProps {
    logout: () => void
}

interface IState {
}

export default class LogoutButton extends React.Component<IProps, IState> {
    logout = () => {
        if (window.confirm('Are you sure you wish to logout?')) {
            this.props.logout()
            historyService.history!.push('/')
        }
    }

    render() {
        return <Button onClick={this.logout}>Logout</Button>
    }
}



