import React from 'react'
import {Card} from 'semantic-ui-react'
import Linkify from 'react-linkify'
import styles from './styles.module.scss'


interface IProps {
    style?: object
    url?: string
    title: string
    author?: string
    authorID?: string
    theme: string
    description?: string
    date?: string
}

const SimpleCard: React.FC<IProps> = ({title, author, description, url, style, theme, authorID}) => {
    return (
        <Card
            style={style}
            href={url}
            header={title}
            meta={`theme: ${theme}`}
            description={
                <div>
                    <Linkify>
                        {description && description.split('\n').map((item, key) => <span key={key}>{item}<br/></span>)}
                    </Linkify>
                    <div className={styles.author}>
                        <a href={`/user/${authorID}`}>{author} </a>
                    </div>
                </div>
            }
            fluid
        />
    )
}

export default SimpleCard
