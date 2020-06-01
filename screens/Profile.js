import React from 'react';
import { AsyncStorage } from 'react-native';
import { Form, Item, Input, Button, Icon, Text, Card, CardItem, View, Body, Toast } from 'native-base';
import Layaout from '../components/Layaout';

const Profile = () => {
    const [name, setName] = React.useState("");
    const _retrieveData = async () => {
        const value = await AsyncStorage.getItem('Name_profile');
        if (value !== null && name === "") {
            setName(value)
        }
    };
    React.useEffect(() => {
        _retrieveData();
    }, [])
    const _storeData = async (value) => {
        await AsyncStorage.setItem('Name_profile', name);
    };
    const save = () => {
        _storeData();
        Toast.show({ text: 'Nombre guardado', buttonText: 'Ok' })
    }

    return (
        <Layaout>
            <View style={{ margin: 20, }}>
                <Card style={{ borderRadius: 10, backgroundColor: "#FFFFFF" }} >
                    <CardItem style={{ borderRadius: 10, backgroundColor: "#FFFFFF" }} >
                        <Body style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <CardItem>
                                <Form >
                                    <Item regular>
                                        <Input placeholder='Ingrese su nombre' value={name} onChange={(e) => setName(e.nativeEvent.text)} />
                                    </Item>
                                    <Button success rounded onPress={() => save()}>
                                        <Icon type={"Feather"} name="save" />
                                        <Text>{"Guardar"}</Text>
                                    </Button>
                                </Form>
                            </CardItem>
                        </Body>
                    </CardItem>
                </Card>
            </View>
        </Layaout >
    );
}

export default Profile;
