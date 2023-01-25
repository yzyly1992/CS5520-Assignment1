import { StyleSheet } from 'react-native'
import React, {useState} from 'react'
import Starting from './Starting'
import Confirm from './Confirm'
import Finish from './Finish'
import { LinearGradient } from 'expo-linear-gradient';
import { myGradient } from '../components/Color'

export default function Controller() {
    const [page, setPage] = useState('Starting');
    const [email, setEmail] = useState();
    const [cell, setCell] = useState();
    const [finish, setFinish] = useState(false);
    const [emailValidInfo, setEmailValidInfo] = useState(0);
    const [cellValidInfo, setCellValidInfo] = useState(0);

    switch (page) {
        case 'Starting':
            return (
                <LinearGradient
                    colors={myGradient.starting}
                    style={styles.container}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                >
                    <Starting email={email} cell={cell} setPage={setPage} setEmail={setEmail} setCell={setCell} emailValidInfo={emailValidInfo} setEmailValidInfo={setEmailValidInfo} cellValidInfo={cellValidInfo} setCellValidInfo={setCellValidInfo} />
                </LinearGradient>
            )
        case 'Confirm':
            return (
                <LinearGradient
                colors={myGradient.confirm}
                style={styles.container}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                >
                    <Confirm email={email} cell={cell} setPage={setPage} setFinish={setFinish} />
                </LinearGradient>
            )
        case 'Finish':
            return (
                <LinearGradient
                colors={myGradient.finish}
                style={styles.container}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                >
                    <Finish cell={cell} finish={finish} setPage={setPage} setFinish={setFinish} setEmail={setEmail} setCell={setCell} setEmailValidInfo={setEmailValidInfo} setCellValidInfo={setCellValidInfo}/>
                </LinearGradient>
            )
        default:
            return (
            <LinearGradient
                colors={myGradient.starting}
                style={styles.container}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
            >
                <Starting email={email} cell={cell} setPage={setPage} setEmail={setEmail} setCell={setCell} emailValidInfo={emailValidInfo} setEmailValidInfo={setEmailValidInfo} cellValidInfo={cellValidInfo} setCellValidInfo={setCellValidInfo} />
            </LinearGradient>
            )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
})