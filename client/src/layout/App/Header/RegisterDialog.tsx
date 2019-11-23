import React from 'react';
import Dialog from "rc-dialog";
import styles from "./styles.scss";
import Button from "../../../components/Button";
import axios from "axios";
import {Form, Field} from 'react-final-form'
import {Form as UIForm} from 'semantic-ui-react'


interface IProps {
}

interface IForm {
    username?: string
    email?: string
    password?: string
    confirm?: string
}

interface IState {
    visible: boolean
    errorFromServer?: string
}


export default class RegisterDialog extends React.Component<IProps, IState> {
    state = {visible: false, errorFromServer: ''};

    handleOpenDialog = () => this.setState({visible: true});

    handleCloseDialog = () => {
        this.setState({visible: false, errorFromServer: ''})

    }

    usernameChange = () => {
        if (this.state.errorFromServer === "Username already exists") {
            this.setState({errorFromServer: ''})
        }
    }

    emailChange = () => {
        if (this.state.errorFromServer === "Email already exists" || '"email" must be a valid email') {
            this.setState({errorFromServer: ''})
        }
    }

    onSubmit = async (values: IForm) => {
        const {email, password, username} = values;
        const res = await axios.post('http://localhost:8080/user/register', {email, password, username});
        console.log(res)

    }

    render() {
        const {visible} = this.state;
        return <>
            <Button onClick={this.handleOpenDialog}>Register</Button>
            <Dialog
                title={'Register'}
                onClose={this.handleCloseDialog}
                visible={visible}
            >
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
                                case "Username already exists": {
                                    errors.username = "Username already exists"
                                    break
                                }
                                case '"email" must be a valid email': {
                                    errors.email = "Email must be a valid"
                                    break
                                }
                                case "Email already exists": {
                                    errors.email = "Email already exists"
                                    break
                                }
                            }
                            return errors
                        }}
                        render={({handleSubmit, form, submitting, pristine, values}) => (
                            <UIForm onSubmit={async (values) => {
                                try {
                                    await handleSubmit(values)
                                    form.reset()
                                    await this.setState({visible: false, errorFromServer: ''})
                                    alert('You have successfully registered!')
                                } catch (e) {
                                    console.log(e.response.data)
                                    this.setState({errorFromServer: e.response.data})
                                }
                            }}>
                                {!this.state.visible ? form.reset() : null} {/* Reset form on close */}
                                <Field name="username">
                                    {({input, meta}) => (
                                        <div>
                                            <label>Username</label>
                                            <input {...input} type="text" placeholder="Username"
                                                   onClick={this.usernameChange}
                                                   className={meta.error && meta.touched ? styles.errorField : ''}/>
                                            {meta.error && meta.touched &&
                                            <span className={styles.error}>{meta.error}</span>}
                                        </div>
                                    )}
                                </Field>
                                <Field name="email">
                                    {({input, meta}) => (
                                        <div>
                                            <label>Email</label>
                                            <input {...input} type="text" placeholder="Email"
                                                   onClick={this.emailChange}
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
                                                   className={meta.error && meta.touched ? styles.errorField : ''}/>
                                            {meta.error && meta.touched &&
                                            <span className={styles.error}>{meta.error}</span>}
                                        </div>
                                    )}
                                </Field>
                                <Field name="confirm">
                                    {({input, meta}) => (
                                        <div>
                                            <label>Confirm password</label>
                                            <input {...input} type="password" placeholder="Confirm password"
                                                   className={meta.error && meta.touched ? styles.errorField : ''}/>
                                            {meta.error && meta.touched &&
                                            <span className={styles.error}>{meta.error}</span>}
                                        </div>
                                    )}
                                </Field>
                                <div className="buttons">
                                    <div className={styles.row}>
                                        <Button type={'submit'} disabled={submitting || pristine}>Register</Button>
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


/*

const App = () => (
    <div>
        <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
                <form onSubmit={handleSubmit}>
                    <Field name="firstName" validate={required}>
                        {({ input, meta }) => (
                            <div>
                                <label>First Name</label>
                                <input {...input} type="text" placeholder="First Name" />
                                {meta.error && meta.touched && <span>{meta.error}</span>}
                            </div>
                        )}
                    </Field>
                    <Field
                        name="age"
                        validate={composeValidators(required)}
                    >
                        {({ input, meta }) => (
                            <div>
                                <label>Age</label>
                                <input {...input} type="text" placeholder="Age" />
                                {meta.error && meta.touched && <span>{meta.error}</span>}
                            </div>
                        )}
                    </Field>
                    <div className="buttons">
                        <button type="submit" disabled={submitting}>
                            Submit
                        </button>
                    </div>
                </form>
            )}
        />
    </div>
)
*!/
*/
