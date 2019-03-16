import React from 'react'
import { View, Text, Button } from 'react-native'
import Style from '../style/Style'

export default class ReadWords extends React.Component {

    changeState = () => {
        // TODO: criar o método changeState
        alert("Olá")
    }

    render() {
        return (
            <View>
                <Text style={Style.textCenter}>
                    Memorize as palavras abaixo:
                </Text>
                <Text style={Style.readMorePanelText}>Palavra 1</Text>
                <Text style={Style.readMorePanelText}>Palavra 2</Text>
                <Text style={Style.readMorePanelText}>Palavra 3</Text>
                <Button
                    onPress={this.changeState}
                    title="Memorizei!"
                    style={Style.btnOk}
                />
            </View>
        )
    }
}