import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import styles from './styles.module.scss'
import {ReactComponent as VKLogo} from "../../icons/vklogo.svg";
import {ReactComponent as InstLogo} from "../../icons/instlogo.svg";
import {ReactComponent as TelegramLogo} from "../../icons/telegramlogo.svg";
import Moment from 'react-moment';

interface IProps {
    username:string
    age?: number
    vk?: string
    instagram?: string
    telegram?: string
    imgUrl?: string
    date: string
}

const UserCard: React.FC<IProps> = ({username, age, vk, instagram, telegram, imgUrl, date}) => (
    <Card>
        <Image src={imgUrl} wrapped ui={false} className={styles.avatar}/>
        <Card.Content>
            <Card.Header>{username}</Card.Header>
            <Card.Meta>
                {age ? <span>Age: {age}</span> : null}
            </Card.Meta>
            <Card.Description>
                {vk ? <p className={styles.addSN}><VKLogo className={styles.logo}/> {vk}</p> : null }
                {instagram ? <p className={styles.addSN}><InstLogo className={styles.logo}/> {instagram}</p> : null }
                {telegram ? <p className={styles.addSN}><TelegramLogo className={styles.logo}/> {telegram}</p> : null }
            </Card.Description>
        </Card.Content>
        <Card.Content extra>
            Registered{`: `}
            <Moment format="D MMM YYYY" withTitle>
                {date}
            </Moment>
        </Card.Content>
    </Card>
)

export default UserCard