import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ALIŞVERİŞ, SEPET, PROFİLE, AYARLAR, SEÇENEKLER } from '../Utils/Routes';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Sepet from '../Pages/Sepet/Sepet';
import Profile from '../Pages/Profile/Profile';
import Ayarlar from '../Pages/Ayarlar/Ayarlar';
import Seçenekler from '../Pages/Seçenekler/Seçenekler';
import Detail from '../Pages/Detail/Detail';
import HesapDetayları from '../Pages/HesapDetayları/HesapDetayları';
import Bildirimler from '../Pages/Bildirimler/Bildirimler';
import Mesajlar from '../Pages/Mesajlar/Mesajlar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Getstarted from '../Pages/GetStarted/Getstarted';
import Alışveriş from '../Pages/Alışveriş/Alışveriş';
import ProfileAyarlar from '../Pages/ProfileAyarlar/ProfileAyarlar';
import KartDetay from '../Pages/KartDetay/KartDetay';
import Ödeme from '../Pages/Ödeme/Ödeme';
import Account from '../Pages/Account/Account';
import SingUp from '../Pages/Sing Up/SingUp';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


export default function Navigation({ navigation }) {

    return (
        <Stack.Navigator screenOptions={{ headerShown: false, headerTitle: false }}>

            <Stack.Screen name="GetStarted" component={Getstarted} />

            <Stack.Screen name="Login" component={TabMenu} />

            <Stack.Screen name='Detail' component={Detail} />

            <Stack.Screen name='Account' component={Account}

            />

            <Stack.Screen name='Sing Up' component={SingUp} />

            <Stack.Screen
                options={{
                    headerShown: true,
                    headerTitle: false,
                }}
                name='Kart Detay' component={KartDetay} />

            <Stack.Screen name='Mesajlar' component={Mesajlar}
                options={{
                    headerShown: true,
                    headerTitle: false
                }}
            />

            <Stack.Screen name='HesapDetayları' component={HesapDetayları} />

            <Stack.Screen name='Bildirimler' component={Bildirimler} />

            <Stack.Screen name='Profile Ayarlar' component={ProfileAyarlar}
                options={{
                    headerShown: true,
                    headerTitle: false,
                    headerTitleAlign: "center"
                }}
            />

            <Stack.Screen
                name='Ödeme'
                component={Ödeme}
                options={{
                    headerShown: true,
                    headerTitle: false
                }}
            />

        </Stack.Navigator>
    );
}




function TabMenu({ navigation }) {

    const handleProfileAyarlar = () => {
        navigation.navigate('Profile Ayarlar')
    }

    return (

        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === ALIŞVERİŞ) {
                        iconName = focused
                            ? 'ios-home'
                            : 'ios-home-outline';
                    }
                    else if (route.name === SEPET) {
                        iconName = focused ? 'basket' : 'basket-outline';
                    }
                    else if (route.name === PROFİLE) {
                        iconName = focused ? 'person' : 'person-outline';
                    }
                    else if (route.name === AYARLAR) {
                        iconName = focused ? 'md-settings' : 'md-settings-outline';
                    }
                    else if (route.name === SEÇENEKLER) {
                        iconName = focused ? 'md-ellipsis-horizontal' : 'md-ellipsis-horizontal';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}>

            <Tab.Screen
                options={{
                    headerShown: true,
                    headerTitle: "Alışveriş",
                    headerStyle: {
                        backgroundColor: 'tomato',
                    },
                    headerTitleAlign: "center",
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
                name={ALIŞVERİŞ} component={Alışveriş} />

            <Tab.Screen
                options={{
                    headerShown: true,
                    headerTitle: null,
                    headerStyle: {
                        backgroundColor: 'tomato',
                    },
                    headerTitleAlign: "center",
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },

                }}
                name={SEPET} component={Sepet} />

            <Tab.Screen
                options={{
                    headerTitle: null,
                    headerStyle: {
                        backgroundColor: 'tomato',
                    },
                    headerTitleAlign: "center",
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
                name={PROFİLE} component={Profile}

            />


            <Tab.Screen
                options={{
                    headerTitle: null, headerStyle: {
                        backgroundColor: 'tomato',
                    },
                    headerTitleAlign: "center",
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
                name={AYARLAR} component={Ayarlar} />

            <Tab.Screen
                options={{
                    headerTitle: null,
                    headerStyle: {
                        backgroundColor: 'tomato',
                    },
                    headerTitleAlign: "center",
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
                name={SEÇENEKLER} component={Seçenekler} />

        </Tab.Navigator>
    );
}