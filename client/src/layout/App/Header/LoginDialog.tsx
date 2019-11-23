import React from 'react';
import Dialog from "rc-dialog";
import styles from "./styles.scss";
import Button from "../../../components/Button";
import axios from "axios";
import {Field, Form} from "react-final-form";
import {Form as UIForm} from "semantic-ui-react";

interface IProps {
    login: (token: string, id: string) => void
}

interface IState {
    visible: boolean
    errorFromServer?: string
}

interface IForm {
    name?: string
    password?: string
}

export default class LoginDialog extends React.Component<IProps, IState> {
    state = {visible: false, errorFromServer: ''}

    handleOpenLoginDialog = () => this.setState({visible: true})

    handleCloseLoginDialog = () => this.setState({visible: false})

    nameChange = () => {
        if (this.state.errorFromServer === "Email or username is wrong") {
            this.setState({errorFromServer: ''})
        }
    }

    passwordChange = () => {
        if (this.state.errorFromServer === "Invalid password") {
            this.setState({errorFromServer: ''})
        }
    }

    onSubmit = async (values: IForm) => {
        const {password, name} = values;
        const {login} = this.props
        const res = await axios.post('/user/login', {name, password})
        const [token, id] = res.data;
        login(token, id);
        this.setState({visible: false, errorFromServer: ''})
    }

    render() {
        const {visible} = this.state

        return <>
            <Button onClick={this.handleOpenLoginDialog}>Login</Button>
            <Dialog
                title={'Login'}
                onClose={this.handleCloseLoginDialog}
                visible={visible}
            >
                <div className={styles.registration}>
                    <Form
                        onSubmit={this.onSubmit}
                        validate={(values: IForm) => {
                            const errors: IForm = {}
                            if (!values.name) {
                                errors.name = 'Required'
                            } else if (values.name.length < 3) {
                                errors.name = 'Username must be over 2 characters'
                            }
                            if (!values.password) {
                                errors.password = 'Required'
                            } else if (values.password.length < 6) {
                                errors.password = 'Password must be over 5 characters'
                            }
                            switch (this.state.errorFromServer) {
                                case "Email or username is wrong": {
                                    errors.name = "Email or username is wrong"
                                    break
                                }
                                case "Invalid password": {
                                    errors.password = "Invalid password"
                                    break
                                }
                            }
                            return errors
                        }}
                        render={({handleSubmit, submitting, pristine, form}) => (
                            <UIForm onSubmit={async (values) => {
                                try {
                                    await handleSubmit(values)
                                    await this.setState({visible: false, errorFromServer: ''})
                                } catch (e) {
                                    console.log(e.response.data)
                                    this.setState({errorFromServer: e.response.data})
                                }
                            }}>
                                <Field name="name">
                                    {({input, meta}) => (
                                        <div>
                                            <label>Login</label>
                                            <input {...input} type="text" placeholder="Username or Email"
                                                   onClick={this.nameChange}
                                                   className={meta.error && meta.touched ? styles.errorField : ''}/>
                                            {meta.error && meta.touched &&
                                            <span className={styles.error}>{meta.error}</span>}
                                        </div>
                                    )}
                                </Field>
                                <Field name="password">
                                    {({input, meta}) => (
                                        <div>
                                            <label>Password</label>
                                            <input {...input} type="password" placeholder="Password"
                                                   onClick={this.passwordChange}
                                                   className={meta.error && meta.touched ? styles.errorField : ''}/>
                                            {meta.error && meta.touched &&
                                            <span className={styles.error}>{meta.error}</span>}
                                        </div>
                                    )}
                                </Field>
                                <div className="buttons">
                                    <div className={styles.row}>
                                        <Button type={'submit'} disabled={submitting || pristine}>Log In</Button>
                                    </div>
                                </div>
                            </UIForm>
                        )}
                    />
                </div>
            </Dialog>
        </>

    }
}
