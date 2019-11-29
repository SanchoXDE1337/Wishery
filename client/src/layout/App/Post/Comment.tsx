import {Comment} from "semantic-ui-react";
import React from "react";
import Moment from 'react-moment';
import Linkify from 'react-linkify';
import historyService from "../../../services/historyService";


interface IProps {
    author?: string
    text?: string
    date?: string
    authorID?: string
}

const Commentary: React.FC<IProps> = ({author, text, date, authorID}) => (
    <Comment>
        <Comment.Content>
            <Comment.Author as='a' onClick={() => historyService.history!.push(`/user/${authorID}`)}>{author}</Comment.Author>
            <Comment.Metadata>
                <div>
                    <Moment format="hh:mm, D MMM YYYY" withTitle>
                        {date}
                    </Moment>
                </div>
            </Comment.Metadata>
            <Comment.Text>
                <Linkify>
                    {text && text.split('\n').map((item, key) => {
                        return <span key={key}>{item}<br/></span>
                    })}
                </Linkify>
            </Comment.Text>
        </Comment.Content>
    </Comment>
)
export default Commentary