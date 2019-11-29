import React from 'react'
import Dialog from 'rc-dialog'
import Button from '../../../components/Button'
import axios from 'axios'
import {Form, Field} from 'react-final-form'
import {Form as UIForm} from 'semantic-ui-react'
import styles from './styles.module.scss'

interface IForm {
    username?: string
    email?: string
    password?: string
    confirm?: string
}

interface IProps {
    login: (token: string, id: string) => void
}

interface IState {
    visible?: boolean
    errorFromServer?: string
}

export default class RegisterDialog extends React.Component<IProps, IState> {
    state = {visible: false, errorFromServer: ''}

    handleOpenDialog = () => this.setState({visible: true})

    handleCloseDialog = () => this.setState({visible: false, errorFromServer: ''})

    usernameChange = () => {
        if (this.state.errorFromServer === 'Username already exists') {
            this.setState({errorFromServer: ''})
        }
    }

    emailChange = () => {
        const {errorFromServer} = this.state
        if (errorFromServer === 'Email already exists' || errorFromServer === '"email" must be a valid email') {
            this.setState({errorFromServer: ''})
        }
    }

    onSubmit = async (values: IForm) => {
        try {
            const {email, password, username} = values
            const {login} = this.props
            await axios.post('/api/user/register', {email, password, username})
            const name = username
            const response = await axios.post('/api/user/login', {name, password})
            const [token, id] = response.data
            login(token, id)
            this.setState({visible: false, errorFromServer: ''})
            alert('You have successfully registered!')
        } catch (e) {
            this.setState({errorFromServer: e.response.data})
        }
    }
    render() {
        const {visible} = this.state
        return (
            <>
                <Button onClick={this.handleOpenDialog}>Register</Button>
                <Dialog title={'Register'} onClose={this.handleCloseDialog} visible={visible}>
                    <div className={styles.registration}>
                        <Form
                            onSubmit={this.onSubmit}
                            validate={(values: IForm) => {
                                const errors: IForm = {}
                                if (!values.username) {
                                    errors.username = 'Required'
                                } else if (values.username.length < 3) {
                                    errors.username = 'Username must be over 2 characters'
                                }
                                if (!values.email) {
                                    errors.email = 'Required'
                                } else if (values.email.length < 6) {
                                    errors.email = 'Email must be over 5 characters'
                                }
                                if (!values.password) {
                                    errors.password = 'Required'
                                } else if (values.password.length < 6) {
                                    errors.password = 'Password must be over 5 characters'
                                }
                                if (!values.confirm) {
                                    errors.confirm = 'Required'
                                } else if (values.confirm !== values.password) {
                                    errors.confirm = 'Must match'
                                }
                                switch (this.state.errorFromServer) {
                                    case 'Username already exists': {
                                        errors.username = 'Username already exists'
                                        break
                                    }
                                    case '"email" must be a valid email': {
                                        errors.email = 'Email must be a valid'
                                        break
                                    }
                                    case 'Email already exists': {
                                        errors.email = 'Email already exists'
                                        break
                                    }
                                }
                                return errors
                            }}
                            render={({
                                handleSubmit,
                                form,
                                submitting,
                                pristine,
                                hasValidationErrors,
                                hasSubmitErrors,
                            }) => (
                                <UIForm onSubmit={handleSubmit}>
                                    {!this.state.visible ? window.setTimeout(form.reset, 100) : null}{' '}
                                    {/* Reset form on close */}
                                    <Field name="username">
                                        {({input, meta}) => (
                                            <div>
                                                <label>Username</label>
                                                <input
                                                    {...input}
                                                    type="text"
                                                    placeholder="Username"
                                                    onClick={this.usernameChange}
                                                    className={meta.error && meta.touched ? styles.errorField : ''}
                                                />
                                                {meta.error && meta.touched && (
                                                    <span className={styles.error}>{meta.error}</span>
                                                )}
                                            </div>
                                        )}
                                    </Field>
                                    <Field name="email">
                                        {({input, meta}) => (
                                            <div>
                                                <label>Email</label>
                                                <input
                                                    {...input}
                                                    type="text"
                                                    placeholder="Email"
                                                    onClick={this.emailChange}
                                                    className={meta.error && meta.touched ? styles.errorField : ''}
                                                />
                                                {meta.error && meta.touched && (
                                                    <span className={styles.error}>{meta.error}</span>
                                                )}
                                            </div>
                                        )}
                                    </Field>
                                    <Field name="password">
                                        {({input, meta}) => (
                                            <div>
                                                <label>Password</label>
                                                <input
                                                    {...input}
                                                    type="password"
                                                    placeholder="Password"
                                                    className={meta.error && meta.touched ? styles.errorField : ''}
                                                />
                                                {meta.error && meta.touched && (
                                                    <span className={styles.error}>{meta.error}</span>
                                                )}
                                            </div>
                                        )}
                                    </Field>
                                    <Field name="confirm">
                                        {({input, meta}) => (
                                            <div>
                                                <label>Confirm password</label>
                                                <input
                                                    {...input}
                                                    type="password"
                                                    placeholder="Confirm password"
                                                    className={meta.error && meta.touched ? styles.errorField : ''}
                                                />
                                                {meta.error && meta.touched && (
                                                    <span className={styles.error}>{meta.error}</span>
                                                )}
                                            </div>
                                        )}
                                    </Field>
                                    <div className={styles.row}>
                                        <Button
                                            type={'submit'}
                                            disabled={submitting || pristine || hasValidationErrors || hasSubmitErrors}
                                        >
                                            Register
                                        </Button>
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
