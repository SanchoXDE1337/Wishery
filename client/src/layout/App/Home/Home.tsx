import React from 'react';
import axios from "axios";
import Card from "../../../components/Card/Card";
import {Form as UIForm} from "semantic-ui-react";
import InputWithIcon from "../../../components/SearchInput";

interface IProps {
}

type TDataItem = {
    _id: string
    author: string
    description?: string
    title: string
    theme: string
    date?: string
}

interface IState {
    data: TDataItem[] | null
    selectValue: string
    inputValue: string
}


class Home extends React.Component<IProps, IState> {
    state = {
        data: [],
        selectValue: '',
        inputValue: ''
    }

    async componentDidMount() {
        const data = (await axios(`/`)).data
        data.reverse()
        this.setState({data})
    }

    handleSelectChange = (e: any) => {
        console.log(e.target.value)
        this.setState({selectValue: e.target.value})
    }
    handleInputChange = (e: any) => {
        console.log(e.target.value)
        this.setState({inputValue: e.target.value})
    }

    render() {
        const {data, selectValue, inputValue} = this.state
        const filteredByInput: TDataItem[] = data.filter((item: TDataItem) => {
            if (inputValue !== '') {
                return item.title.toLowerCase().includes(inputValue.toLowerCase())
            } else {
                return item
            }
        })
        const filteredData: TDataItem[] = filteredByInput.filter(
            (item: TDataItem) => selectValue ? item.theme === selectValue : item)
        return (
            <>
                <div style={{display: "inline-block", marginRight: "1em"}}>
                    <InputWithIcon onChange={(event: any) => this.handleInputChange(event)}/>
                </div>
                <UIForm style={{width: "10em", display: "inline-block"}}>
                    <label>Theme of wishes: </label>
                    <select onChange={(event: any) => this.handleSelectChange(event)}>
                        <option value="">All</option>
                        <option value="Drink">Drink</option>
                        <option value="Walk">Walk</option>
                        <option value="Cinema">Cinema</option>
                        <option value="Concert">Concert</option>
                        <option value="Outdoors">Outdoors</option>
                        <option value="Chill">Chill</option>
                        <option value="Travel">Travel</option>
                        <option value="Game">Game</option>
                        <option value="Other">Other</option>
                    </select>
                </UIForm>
                {filteredData.map((obj: TDataItem) =>
                    <Card
                        author={obj.author}
                        url={`/posts/${obj._id}`}
                        theme={obj.theme}
                        title={obj.title}
                        key={obj.author + obj.description + obj.title}
                    />
                )}
            </>
        )
    }
}

export default Home