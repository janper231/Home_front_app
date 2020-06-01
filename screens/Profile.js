import React from 'react';
import { AsyncStorage } from 'react-native';
import { Form, Item, Input, Button, Icon, Text, Card, CardItem, View, Body, Toast } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import Layaout from '../components/Layaout';

const _retrieveData = async () => { return await AsyncStorage.getItem('Name_profile'); }
const _setData = async (val) => { return await AsyncStorage.setItem('Name_profile', val); }

const Profile = () => {
    const [name, setName] = React.useState("");
    const navigation = useNavigation();

    React.useEffect(() => {
        let n = _retrieveData().then((value) => {
            if (value !== null && name === "") setName(value)
        });
    }, [])

    const save = () => {
        _setData(name);
        Toast.show({ text: 'Nombre guardado', buttonText: 'Ok' })
        navigation.navigate("Home", { name: name });
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
