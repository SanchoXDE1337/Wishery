import React from 'react'
import {Input} from 'semantic-ui-react'

interface IProps {
    onChange: any
    fluid?: any
}

const InputWithIcon: React.FC<IProps> = ({onChange, fluid}) => (
    <Input onChange={onChange} icon="search" placeholder="Search..." fluid={!!fluid} />
)

export default InputWithIcon
