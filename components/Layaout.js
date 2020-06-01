import React from 'react';
import { View, ScrollView, StatusBar } from 'react-native';
import { Container } from 'native-base';
//components
import Menu from './Menu';
//assets

const Layaout = (ctx) => {
    return (
        <Container>
            <StatusBar />
            <ScrollView>
                {ctx.children}
                <View style={{ height: 120, position: "relative" }} />
            </ScrollView>
            <Menu />
        </Container>
    )
}

export default Layaout;