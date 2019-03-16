import React from 'react'
import { View, Text, TextInput, Button } from 'react-native'

import Style from '../style/Style'

export default class InputWords extends React.Component {
    confirmWords = () => {
        console.log("Verificando...");
    }
    render() {
        return (
            <View>
                <Text style={{ marginVertical: 10 }}>Lembra das três palavras?</Text>
                <Text>Palavra 1</Text>
                <TextInput style={Style.textInput}></TextInput>
                <Text>Palavra 2</Text>
                <TextInput style={Style.textInput}></TextInput>
                <Text>Palavra 3</Text>
                <TextInput style={Style.textInput}></TextInput>
                <Button
                    title="Conferir palavras"
                    onClick={this.confirmWords}
                    style={Style.btnOk}
                />
            </View>
        )
    }
}