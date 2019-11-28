import React from 'react';
import Dialog from "rc-dialog";
import styles from "./styles.module.scss";
import Button from "../../../components/Button";
import axios from "axios";
import {Field, Form} from "react-final-form";
import {Form as UIForm} from "semantic-ui-react";


interface IProps {
    id?: string
    token?: string
}

interface IState {
    visible: boolean
    errorFromServer?: string
}

interface IForm {
    oldPass?: string
    newPass?: string
    confirm?: string
}

export default class ChangePassword extends React.Component<IProps, IState> {
    state = {
        visible: false,
        errorFromServer: ''
    }

    handleOpenLoginDialog = () => this.setState({visible: true})

    handleCloseLoginDialog = () => this.setState({visible: false})

    oldPassChange = () => {
        if (this.state.errorFromServer === 'Invalid old password' || '') {
            this.setState({errorFromServer: ''})
        }
    }

    onSubmit = async (values: IForm) => {
        const {oldPass, newPass} = values
        const {token, id} = this.props
        if (token) {
            try {
                const res = await axios.put(`/api/private/settings/changepass/${id}`,
                    {
                        oldPass,
                        newPass
                    },
                    {headers: {'auth-token': token}})
                console.log(res.data)
                window.location.reload()
                alert('Password has been successfully changed!')
            }
            catch (e) {
                console.log(e.response)
                this.setState({errorFromServer: e.response.data})
            }
        }
    }

    render() {
        const {visible} = this.state

        return <>
            <Button onClick={this.handleOpenLoginDialog}>Change password</Button>
            <Dialog
                title={'Change password'}
                onClose={this.handleCloseLoginDialog}
                visible={visible}
            >
                <div className={styles.password}>
                    <Form
                        onSubmit={this.onSubmit}
                        validate={(values: IForm) => {
                            const errors: IForm = {}
                            if (!values.oldPass) {
                                errors.oldPass = 'Required'
                            } else if (values.oldPass.length < 6) {
                                errors.oldPass = 'Password must be over 5 characters'
                            } else if (this.state.errorFromServer === 'Invalid old password') {
                                errors.oldPass = 'Invalid old password'
                                // this.setState({errorFromServer: ''})
                            }
                            if (!values.newPass) {
                                errors.newPass = 'Required'
                            } else if (values.newPass.length < 6) {
                                errors.newPass = 'Password must be over 5 characters'
                            } else if (values.oldPass === values.newPass) {
                                errors.newPass = 'New password must be different'
                            }
                            if (!values.confirm) {
                                errors.confirm = 'Required'
                            } else if (values.confirm !== values.newPass) {
                                errors.confirm = 'Must match'
                            }
                            return errors
                        }}
                        render={({handleSubmit, form, submitting, pristine, hasValidationErrors, hasSubmitErrors}) => (
                            <UIForm onSubmit={handleSubmit}>
                                {!this.state.visible ? window.setTimeout(form.reset, 100) : null} {/* Reset form on close */}
                                <Field name="oldPass">
                                    {({input, meta}) => (
                                        <div>
                                            <label>Old password</label>
                                            <input {...input} type="password" placeholder="Password"
                                                   onClick={this.oldPassChange}
                                                   className={meta.error && meta.touched ? styles.errorField : ''}/>
                                            {meta.error && meta.touched &&
                                            <span className={styles.error}>{meta.error}</span>}
                                        </div>
                                    )}
                                </Field>
                                <Field name="newPass">
                                    {({input, meta}) => (
                                        <div>
                                            <label>New password</label>
                                            <input {...input} type="password" placeholder="Password"
                                                   className={meta.error && meta.touched ? styles.errorField : ''}/>
                                            {meta.error && meta.touched &&
                                            <span className={styles.error}>{meta.error}</span>}
                                        </div>
                                    )}
                                </Field>
                                <Field name="confirm">
                                    {({input, meta}) => (
                                        <div>
                                            <label>Confirm new password</label>
                                            <input {...input} type="password" placeholder="Confirm new password"
                                                   className={meta.error && meta.touched ? styles.errorField : ''}/>
                                            {meta.error && meta.touched &&
                                            <span className={styles.error}>{meta.error}</span>}
                                        </div>
                                    )}
                                </Field>
                                <div className={styles.row}>
                                    <Button type={'submit'}
                                            disabled={submitting || pristine || hasValidationErrors /*|| hasSubmitErrors*/}>Change</Button>
                                </div>
                            </UIForm>
                        )}
                    />
                </div>
            </Dialog>
        </>

    }
}