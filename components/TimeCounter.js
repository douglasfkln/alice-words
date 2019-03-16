import React from 'react'
import { View, Text, Button } from 'react-native'

import Style from '../style/Style'

export default class TimeCounter extends React.Component {
    waitText = () => {
        alert("Aguardando...");
    }
    render() {
        return (
            <View>
                <Text style={Style.waitText}>
                    Aguarde
                </Text>
                <Button
                    onPress={this.waitText}
                    title="Ok, vou aguardar"
                />
            </View>
        )
    }
}