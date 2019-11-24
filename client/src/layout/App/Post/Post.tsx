import React from 'react';
import axios from "axios";
import Card from "../../../components/Card/Card";
import Comments from './Comments';

interface IProps {
    match?: any
}

type TDataItem = {
    _id: string
    author: string
    description?: string
    title: string
    date: string
    theme: string
}
type TCommentItem = {
    _id?: string
    author?: string
    text?: string
}

interface IState {
    data: TDataItem | null,
    comments: TCommentItem[] | null
}


class Post extends React.Component<IProps, IState> {
    state = {
        data: {
            _id: '',
            author: '',
            description: '',
            title: '',
            theme: '',
            date: ''
        },
        comments: []
    }

    async componentDidMount() {
        const data = (await axios(`/api/posts/${this.props.match.params.id}`)).data
        this.setState({data: data})
    }

    render() {
        const {author, description, title, theme} = this.state.data
        return (
            <>
                <Card
                    author={author}
                    description={description}
                    title={title}
                    theme={theme}
                />
                <Comments postId={this.props.match.params.id}/>
            </>
        )
    }
}

export default Post