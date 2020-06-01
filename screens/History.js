import React from 'react';
import { Container, Header, Content, List, ListItem, Text, View } from 'native-base';
import Layaout from '../components/Layaout';

export default function App() {
    return (
        <Layaout>
            <Content>
                <List>
                    <ListItem>
                        <Text>Simon Mignolet</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Nathaniel Clyne</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Dejan Lovren</Text>
                    </ListItem>
                </List>
            </Content>
        </Layaout>
    );
}

