import React from 'react'
import Dialog from 'rc-dialog'
import styles from './styles.module.scss'
import Button from '../../../components/Button'
import axios from 'axios'
import {Field, Form} from 'react-final-form'
import {Form as UIForm} from 'semantic-ui-react'
import {ReactComponent as VKLogo} from '../../icons/vklogo.svg'
import {ReactComponent as InstLogo} from '../../icons/instlogo.svg'
import {ReactComponent as TelegramLogo} from '../../icons/telegramlogo.svg'

interface IProps {
    id?: string
    token?: string
}

interface IState {
    visible: boolean
    vk: string
    instagram: string
    telegram: string
    age?: number
    imgUrl: string
}

interface IForm {
    vk: string
    instagram: string
    telegram: string
    age?: number
    imgUrl: string
}

export default class AddInfo extends React.Component<IProps, IState> {
    state = {
        visible: false,
        vk: '',
        instagram: '',
        telegram: '',
        age: undefined,
        imgUrl: '',
    }

    handleOpenLoginDialog = () => this.setState({visible: true})

    handleCloseLoginDialog = () => this.setState({visible: false})

    async componentDidMount() {
        const data = (await axios(`/api/user/${this.props.id}`)).data
        const {vk, instagram, telegram} = data.info.contacts
        this.setState({vk, instagram, telegram, age: data.info.age, imgUrl: data.info.imgUrl})
    }

    onSubmit = async (values: IForm) => {
        const {vk, instagram, telegram, age, imgUrl} = values
        const {token, id} = this.props
        if (token) {
            await axios.put(
                `/api/private/settings/${id}`,
                {
                    vk,
                    instagram,
                    telegram,
                    age,
                    imgUrl,
                },
                {headers: {'auth-token': token}},
            )
            window.location.reload()
        }
    }

    render() {
        const {visible, vk, instagram, telegram, age, imgUrl} = this.state

        return (
            <>
                <Button onClick={this.handleOpenLoginDialog}>Add/Update information</Button>
                <Dialog title={'Info'} onClose={this.handleCloseLoginDialog} visible={visible}>
                    <div>
                        <Form
                            onSubmit={this.onSubmit}
                            initialValues={{vk, instagram, telegram, age, imgUrl}}
                            render={({handleSubmit, submitting, pristine}) => (
                                <UIForm onSubmit={handleSubmit}>
                                    <div className={styles.addSN}>
                                        <label className={styles.logo}>Age</label>
                                        <Field
                                            name="age"
                                            component="input"
                                            type="number"
                                            placeholder="Enter your age here"
                                        />
                                    </div>
                                    <div className={styles.addSN}>
                                        <VKLogo className={styles.logo} />
                                        <Field
                                            name="vk"
                                            component="input"
                                            type="text"
                                            placeholder="Enter your vk id here"
                                        />
                                    </div>
                                    <div className={styles.addSN}>
                                        <InstLogo className={styles.logo} />
                                        <Field
                                            name="instagram"
                                            component="input"
                                            type="text"
                                            placeholder="Enter your instagram here"
                                        />
                                    </div>
                                    <div className={styles.addSN}>
                                        <TelegramLogo className={styles.logo} />
                                        <Field
                                            name="telegram"
                                            component="input"
                                            type="text"
                                            placeholder="Enter your telegram here"
                                        />
                                    </div>
                                    <div className={styles.addSN}>
                                        <label className={styles.logo}>URL</label>
                                        <Field
                                            name="imgUrl"
                                            component="input"
                                            type="text"
                                            placeholder="Enter URL for your avatar"
                                        />
                                    </div>
                                    <div className="buttons">
                                        <div className={styles.row}>
                                            <Button type={'submit'} disabled={submitting || pristine}>
                                                Add
                                            </Button>
                                        </div>
                                    </div>
                                </UIForm>
                            )}
                        />
                    </div>
                </Dialog>
            </>
        )
    }
}
