import {View, TouchableOpacity, Text, Image } from 'react-native'
import { styles } from './styles'
import { useState } from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
import Icon from 'react-native-vector-icons/AntDesign'
import DropDownPicker from 'react-native-dropdown-picker'

export default function LoginPage() {
    return (
        <View style={styles.container}>
            <View style={styles.ViewNavbar}>
                <Entypo name="menu" size={60} style={styles.icon} />
                <Feather name="search" size={50} style={styles.icon} />
             </View>
             
            <View style={{alignItems: "center", marginBottom: 50,}}>
                <Text style={{fontSize: 27, fontWeight: "bold"}}>Escolha uma das opçôes abaixo</Text>
                <Text style={{fontSize: 27, fontWeight: "bold"}}>para fazer login</Text>
            </View>

            <View>
                <TouchableOpacity style={{width: 480, height: 200, borderWidth: 2, borderColor: "black", alignItems: "center", justifyContent: "center"}}>
                    <Image 
                        source={require('../../../assets/apertos-de-mao.jpg')} 
                        style={{width: 478, height: 198}}
                    />
                    <View style={{width: 480, height: 200, backgroundColor: "black", opacity: 0.5, position: "absolute"}}></View>
                    <Text style={styles.textPath}>CLIENTE</Text>
                    
                </TouchableOpacity>

                <TouchableOpacity style={{width: 480, height: 200, borderWidth: 2, borderColor: "black", alignItems: "center", justifyContent: "center", marginTop: 50,}}>
                <Image 
                        source={require('../../../assets/trabalhos.jpg')} 
                        style={{width: 478, height: 198}}
                    />
                    <View style={{width: 480, height: 200, backgroundColor: "black", opacity: 0.5, position: "absolute"}}></View>
                    <Text style={styles.secondTextPath}>PRESTADOR DE</Text>
                    <Text style={styles.thirdTextPath}>SERVIÇO</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
