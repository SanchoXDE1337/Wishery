import Button from '../../../components/Button'
import React from 'react'
import historyServise from '../../../services/historyService'

export default class PrivateButton extends React.Component {
    handleClick = () => historyServise.history!.push('/private')

    render() {
        return <Button onClick={this.handleClick}>Private Cabinet</Button>
    }
}
