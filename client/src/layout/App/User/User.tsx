import React from 'react';
import axios from "axios";
import HashLoader from 'react-spinners/HashLoader'
// import { css } from '@emotion/core'
import styles from './styles.module.scss'

interface IProps {
    match?: any
}

type TDataItem = {
    // _id: string
    // author: string
    // description?: string
    // title: string
    // date: string
    // theme: string
    username: string
}

interface IState {
    data: TDataItem | null,
    loading: boolean
}


// const override = css`
//     display: block;
//     margin: 0 auto;
//     border-color: red;
// `;

class User extends React.Component<IProps, IState> {
    state = {
        data: {
            username: ''
        },
        loading: true
    }

    async componentDidMount() {
        const data = (await axios(`/api/user/${this.props.match.params.id}`)).data
        console.log(data)
        window.setTimeout(() => this.setState({data: data, loading: false}), 1000)
    }

    render() {
        const {data, loading} = this.state
        return (
            <div>
                {loading
                    ? <div className={styles.loader}>
                        <HashLoader
                            sizeUnit={"px"}
                            // css={override}
                            size={150}
                            color={'#36d7b7'}
                            loading={this.state.loading}
                        />
                    </div>
                    : <div>
                        <h1>User page {this.props.match.params.id}</h1>
                        <h2>Username: {data.username}</h2>
                    </div>}
            </div>
        )
    }
}

export default User