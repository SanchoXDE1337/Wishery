import {Comment} from "semantic-ui-react";
import React from "react";
import Moment from 'react-moment';


interface IProps {
    author?: string
    text?: string
    date?: string
}

const Commentary: React.FC<IProps> = ({author, text, date}) => (
    <Comment>
        <Comment.Content>
            <Comment.Author as='a'>{author}</Comment.Author>
            <Comment.Metadata>
                <div>
                    <Moment format="hh:mm, D MMM YYYY" withTitle>
                        {date}
                    </Moment>
                </div>
            </Comment.Metadata>
            <Comment.Text>{text}</Comment.Text>
        </Comment.Content>
    </Comment>
)
export default Commentary