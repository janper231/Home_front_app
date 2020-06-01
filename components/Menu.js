import React from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from 'react-native-vector-icons';

//assets
import { styleMenu as styles } from '../assets/css/general';

export default function Menu() {
    const navigation = useNavigation();
    const route = useRoute();
    const list = [
        { name: "Inicio", route: "Home", icon: "home" },
        { name: "Historial", route: "History", icon: "align-justify" },
        { name: "Ahorrar", route: "Save", icon: "plus" },
        { name: "Perfil", route: "Profile", icon: "user" },
        { name: "Mas", route: "More", icon: "more-horizontal" },
    ]
    return (
        <View style={styles.menu} >
            {/* <View style={styles.eclipse} >
                <TouchableOpacity onPress={() => { navigation.push("Save") }} >
                    <Feather name={"plus"} color={"blue"} size={30} />
                </TouchableOpacity>
            </View> */}
            <View style={styles.submenu} >
                {list.map((Li, index) => (
                    <TouchableOpacity onPress={() => { navigation.navigate(Li.route) }} key={"touch_" + index} style={styles.button}>
                        <Feather name={Li.icon} color={route.name === Li.route ? styles.active.color : "grey"} size={26} />
                        <Text style={route.name === Li.route ? styles.active : styles.TextButton}> {Li.name} </Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View >
    );
}

