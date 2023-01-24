import { View, Text } from 'react-native'
import React, {useState} from 'react'
import Starting from './Starting'
import Confirm from './Confirm'
import Finish from './Finish'

export default function Controller() {
    const [page, setPage] = useState('Starting');
    const [email, setEmail] = useState();
    const [cell, setCell] = useState();
    const [finish, setFinish] = useState(false);

    switch (page) {
        case 'Starting':
            return (
                <Starting email={email} cell={cell} setPage={setPage} setEmail={setEmail} setCell={setCell} />
            )
        case 'Confirm':
            return (
                <Confirm email={email} cell={cell} setPage={setPage} setFinish={setFinish} />
            )
        case 'Finish':
            return (
                <Finish cell={cell} setPage={setPage} setFinish={setFinish} setEmail={setEmail} setCell={setCell} />
            )
        default:
            return (
                <Starting email={email} cell={cell} setPage={setPage} setEmail={setEmail} setCell={setCell} />
            )
    }
}