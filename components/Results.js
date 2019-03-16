import React from 'react'
import { View, Text, Button } from 'react-native'

import Style from '../style/Style'

export default class Results extends React.Component {

    reset = () => {
        alert("Errroooooo")
    }

    render() {
        return (
            <View>
                <Text style={Style.readMorePanelText}>Resultado</Text>
                <Button
                    onClick={this.reset}
                    title="Recomeçar"
                />
            </View>
        )
    }
}