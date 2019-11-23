import React from 'react'
import { Input } from 'semantic-ui-react'

interface IProps {
    onChange: any
}

const InputWithIcon:React.FC<IProps> = ({onChange}) => <Input onChange={onChange} icon='search' placeholder='Search...' />

export default InputWithIcon