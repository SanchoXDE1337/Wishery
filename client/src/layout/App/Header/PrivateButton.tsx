import Button from "../../../components/Button";
import React from "react";
import historyServicse from "../../../services/historyService";

interface IProps {
}

interface IState {
}

export default class PrivateButton extends React.Component<IProps, IState> {
    handleClick = () => historyServicse.history!.push('/private')


    render() {
        return <Button onClick={this.handleClick}>Private Cabinet</Button>
    }
}
