import React from 'react'
import {Card} from 'semantic-ui-react'
import Linkify from 'react-linkify'


interface IProps {
    style?: object
    url?: string
    title: string
    author: string
    theme: string
    description?: string
    date?: string
}

const SimpleCard: React.FC<IProps> = ({title, author, description, url, style, theme}) => {
    return (
        <Card
            style={style}
            href={url}
            header={title}
            meta={`${author}, theme: ${theme}`}
            description={
                <Linkify>
                    {description && description.split('\n').map((item, key) => <span key={key}>{item}<br/></span>)}
                </Linkify>
            }
            fluid
        />
    )
}

export default SimpleCard
