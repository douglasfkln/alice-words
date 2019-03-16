import React from 'react'
import { View, Text, TextInput, Button } from 'react-native'

import Style from '../style/Style'

export default class InputWords extends React.Component {
    state = {
        palavra1: '',
        palavra2: '',
        palavra3: ''
    }
    confirmWords = () => {
        this.props.changeState({
            showInputWords: false,
            showResults: true,
            results: {
                palavra1: this.state.palavra1,
                palavra2: this.state.palavra2,
                palavra3: this.state.palavra3
            }
        });
    }
    render() {
        return (
            <View>
                <Text style={{ marginVertical: 10 }}>Lembra das três palavras?</Text>
                <Text>Palavra 1</Text>
                <TextInput
                    style={Style.textInput}
                    value={this.state.palavra1}
                    onChangeText={(palavra1) => this.setState({ palavra1 })}>
                </TextInput>
                <Text>Palavra 2</Text>
                <TextInput
                    style={Style.textInput}
                    value={this.state.palavra2}
                    onChangeText={(palavra2) => this.setState({ palavra2 })}>
                </TextInput>
                <Text>Palavra 3</Text>
                <TextInput
                    style={Style.textInput}
                    value={this.state.palavra3}
                    onChangeText={(palavra3) => this.setState({ palavra3 })}>
                </TextInput>
                <Button
                    title="Conferir palavras"
                    onPress={this.confirmWords}
                    style={Style.btnOk}
                />
            </View>
        )
    }
}