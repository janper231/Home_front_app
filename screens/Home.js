import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, AsyncStorage, Image, SafeAreaView } from 'react-native';
import { H1, H2, H3, Icon, View, Toast, Card, CardItem, Body, Text, Button, Right, Left, Badge, ListItem, List } from 'native-base';
import Carousel from 'react-native-snap-carousel';
import ProgressCircle from 'react-native-progress-circle'

//components
import Layaout from '../components/Layaout';

export default function App() {
    const navigation = useNavigation();
    const Primary = "#54D1ED";
    const [state, setState] = React.useState({
        name: "Clic me!",
        modal: false,
        saldo: 1570000,
        inversion: 1600000,
        rendimiento: -30000,
        goals: [
            {
                name: "Viaje a islas Canarias",
                valueTotal: 8000000,
                currentvalue: 1630000,
                img: require("../assets/img/img2.png")
            },
            {
                name: "Mackbook Pro",
                valueTotal: 7000000,
                currentvalue: 0,
                img: require("../assets/img/img3.png")
            }
        ],
        activeIndex: 0,
        carouselItems: [
            { img: require('../assets/img/media.png') },
            { img: require('../assets/img/media.png') },
            { img: require('../assets/img/media.png') },
            { img: require('../assets/img/media.png') },
            { img: require('../assets/img/media.png') },

        ],
        tips: [
            {
                title: "10 gastos que debes evitar",
                msg: "\n Aunque el 66% de los adultos recibió educación para el ahorro, apenas el 44% ahorra de manera fomal.",
                img: require("../assets/img/tip1.png")
            },
            {
                title: "10 gastos que debes evitar",
                msg: "\n Aunque el 66% de los adultos recibió educación para el ahorro, apenas el 44% ahorra de manera fomal.",
                img: require("../assets/img/tip2.png")
            }, {
                title: "10 gastos que debes evitar",
                msg: "\n Aunque el 66% de los adultos recibió educación para el ahorro, apenas el 44% ahorra de manera fomal.",
                img: require("../assets/img/tip3.png")
            }
        ]
    });

    const _retrieveData = async () => {
        const value = await AsyncStorage.getItem('Name_profile');
        if (value !== null) setState({ ...state, name: value })
    };
    React.useEffect(() => {
        _retrieveData();
    }, [])

    const currencyFormat = (num) => {
        return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    const _renderItem = ({ item, index }) => {
        return (
            <View style={{ borderRadius: 5, height: 250, }}>
                <Image source={item.img} style={{ width: "100%", height: "100%", position: "absolute", }} />
            </View>
        )
    }

    return (
        <Layaout>
            {/* starting point, name and bell icon */}
            <View style={{ flexDirection: "row", justifyContent: 'space-between', padding: 15 }}>
                <TouchableOpacity onPress={() => { navigation.push("Profile") }}>
                    <H1 style={{ fontWeight: "bold" }}>{"Hola, " + state.name}</H1>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    Toast.show({
                        text: 'Clicked bell',
                        buttonText: 'Okay'
                    })
                }}
                >
                    <Icon type={"Feather"} name={"bell"} size={20} style={{ color: Primary }} />
                </TouchableOpacity>
            </View>
            {/* card 1*/}
            <View style={{ margin: 20, }}>
                <Card style={{ borderRadius: 10 }}>
                    <CardItem style={{ borderRadius: 10, backgroundColor: Primary, height: 150 }}>
                        <Body>
                            <H2 style={{ color: "white" }}> {"Eres\n estratega"} </H2>
                            <Image source={require('../assets/img/img1.png')} style={{ width: 120, height: 120, flex: 1, position: "absolute", right: 10, top: -30 }} />
                            <Text style={{ color: "white", top: 20 }}>
                                {"Tu saldo \n "}
                                <H1 style={{ color: "white" }}>{currencyFormat(state.saldo)}</H1>
                            </Text>
                        </Body>
                    </CardItem>
                </Card>
            </View>
            {/* Card 2 */}
            <View style={{ margin: 20, }}>
                <Card style={{ borderRadius: 10, backgroundColor: "#FFFFFF" }} >
                    <CardItem style={{ borderRadius: 10, backgroundColor: "#FFFFFF" }} >
                        <Body>
                            <List>
                                <ListItem>
                                    <CardItem>
                                        <Text>{"Inversión"} </Text>
                                        <Right />
                                        <Text>{currencyFormat(state.inversion)}</Text>
                                    </CardItem>
                                </ListItem>
                                <ListItem>
                                    <CardItem>
                                        <Text>{"Rendimiento"} </Text>
                                        <Right />
                                        <Text>{currencyFormat(state.rendimiento)}</Text>
                                    </CardItem>
                                </ListItem>
                            </List>
                        </Body>
                    </CardItem>
                </Card>
            </View>
            {/* your goals */}
            <View style={{ flexDirection: "row", justifyContent: 'space-between', padding: 15 }}>
                <H1 style={{ fontWeight: "bold" }}>{"Tus Metas"}</H1>
                <TouchableOpacity onPress={() => {
                    Toast.show({
                        text: 'success, set goals ',
                        buttonText: 'Okay'
                    })
                }}
                >
                    <Icon type={"Feather"} name={"plus-circle"} size={20} style={{ color: Primary }} />
                </TouchableOpacity>
            </View>
            {/* card goals */}
            <View style={{ flexDirection: "row", margin: 10 }}>
                {state.goals.map((goal, index) => (
                    <Card style={{ borderRadius: 20, backgroundColor: "#FFFFFF", width: "50%", height: 250 }} key={"card_goals_" + index}>
                        <CardItem style={{ borderRadius: 20, width: "100%", height: 250 }} key={"carditem_goals_" + index} >
                            <Body>
                                <List>
                                    <ListItem>
                                        <CardItem>
                                            <Left>
                                                <Image source={goal.img} style={{ width: 50, height: 50 }} />
                                            </Left>
                                            <Right>
                                                <Text >{"\n \n" + goal.name} </Text>
                                            </Right>
                                        </CardItem>
                                    </ListItem>
                                    <ListItem>
                                        <Left>
                                            <ProgressCircle
                                                percent={parseInt((goal.currentvalue * 100) / goal.valueTotal)}
                                                radius={30}
                                                borderWidth={6}
                                                color={Primary}
                                                shadowColor="#999"
                                                bgColor="#fff"
                                            >
                                                <Text style={{ fontSize: 18, color: Primary }}>{parseInt((goal.currentvalue * 100) / goal.valueTotal) + "%"}</Text>
                                            </ProgressCircle>
                                        </Left>
                                        <Text>
                                            <Text style={{ fontSize: 13, color: Primary }}>{"$" + goal.currentvalue}</Text>
                                            <Text style={{ fontSize: 13 }}>{"\n $" + goal.valueTotal}</Text>
                                        </Text>
                                    </ListItem>
                                </List>
                            </Body>
                        </CardItem>
                    </Card>
                ))}
            </View>
            {/* title graph */}
            <View style={{ flexDirection: "row", justifyContent: 'space-between', padding: 15 }}>
                <H1 style={{ fontWeight: "bold" }}>{"Conoce tu portafolio"}</H1>
                <Button rounded success onPress={() => {
                    Toast.show({
                        text: 'estratega ',
                        buttonText: 'Okay'
                    })
                }}
                >
                    <Text>{"Estratega"}</Text>
                </Button>
            </View>
            {/* card graph progress */}
            <View style={{ margin: 20, }}>
                <Card style={{ borderRadius: 10, backgroundColor: "#FFFFFF" }} >
                    <CardItem style={{ borderRadius: 10, backgroundColor: "#FFFFFF" }} >
                        <Body style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <CardItem>
                                <ProgressCircle
                                    percent={15}
                                    radius={45}
                                    borderWidth={6}
                                    color={"green"}
                                    shadowColor="#999"
                                    bgColor="#fff"
                                >
                                    <Image source={require("../assets/img/robot.png")} />
                                    <Text style={{ fontSize: 10 }}>{"RoboAdisor \n 10 Fondos"}</Text>
                                </ProgressCircle>
                            </CardItem>
                            <CardItem>
                                <Text>
                                    {"Skandia "}
                                    {"\n FIC Old Mutual Efectivo \n "}
                                    {"$ 240.000 \n"}
                                    <Text style={{ color: "green" }}>{"Tipo de activo"} </Text>
                                </Text>
                                <Badge success>
                                    <Text>{"15% "}</Text>
                                </Badge>
                            </CardItem>
                        </Body>
                    </CardItem>
                    <CardItem footer>
                        <Text>{"Tu dinero se invierte de la forma  más eficiente de acuerdo al perfil de riesgo asignado por nuestro RobotAdvisor"} </Text>
                    </CardItem>
                </Card>
            </View>
            {/* Los p*t@s del ahorro */}
            <View style={{ flexDirection: "row", justifyContent: 'space-between', padding: 15 }}>
                <H1 style={{ fontWeight: "bold" }}>{"Los P*t@s del ahorro"}</H1>
            </View>
            {/* carousel */}
            <SafeAreaView style={{ flex: 1, paddingTop: 50, }}>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', }}>
                    <Carousel
                        layout={"default"}
                        data={state.carouselItems}
                        sliderWidth={300}
                        itemWidth={300}
                        renderItem={_renderItem}
                        onSnapToItem={index => setState({ ...state, activeIndex: index })}
                    />
                </View>
            </SafeAreaView>
            {/* saving tips */}
            <View style={{ margin: 20, }}>
                <Card style={{ borderRadius: 10, backgroundColor: "#FFFFFF" }} >
                    <CardItem style={{ borderRadius: 10, backgroundColor: "#FFFFFF" }} >
                        <Body>
                            <List>
                                {state.tips.map((tip, index) => (
                                    <ListItem key={"list_tip_" + index}>
                                        <CardItem>
                                            <Left>
                                                <Text>
                                                    <Text style={{ fontSize: 15, fontWeight: "bold" }}>{tip.title}</Text>
                                                    <Text style={{ fontSize: 10 }}>{tip.msg}</Text>
                                                </Text>
                                            </Left>
                                            <Right>
                                                <Image source={tip.img} />
                                            </Right>
                                        </CardItem>
                                    </ListItem>
                                ))}
                            </List>
                        </Body>
                    </CardItem>
                </Card>
            </View>

        </Layaout >
    );
}

