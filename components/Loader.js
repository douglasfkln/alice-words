import React from 'react'
import { Image } from 'react-native'

export default class Loader extends React.Component {
    render() {
        return (
            <Image
                source={require('../assets/loader.gif')}
            />
        )
    }
}