import {View, TouchableOpacity, Text, Image } from 'react-native'
import { styles } from './styles'
import { useState } from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../../routes/Types';

export default function LoginPage() {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    return (
        <View style={styles.container}>
            <View style={styles.ViewNavbar}>
                <Entypo name="menu" size={60} style={styles.IconStyle} />
                <Feather name="search" size={50} style={styles.IconStyle} />
             </View>
             
            <View style={{alignItems: "center", marginBottom: 50,}}>
                <Text style={{fontSize: 27, fontWeight: "bold"}}>Escolha uma das opçôes abaixo</Text>
                <Text style={{fontSize: 27, fontWeight: "bold"}}>para fazer login</Text>
            </View>

            <View>
                <TouchableOpacity 
                    style={styles.PathCliente}
                    onPress={() => navigation.navigate("Job")}
                >
                    <View style={{alignItems: "center"}}>
                            <Image 
                            source={require('../../../assets/apertos-de-mao.jpg')} 
                            style={{width: 478, height: 198}}
                        />
                        <View style={styles.ShadowView}></View>
                        <Text style={styles.textPath}>CLIENTE</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.PathWorker}
                    
                >
                    <View style={{alignItems: "center"}}>
                        <Image 
                        source={require('../../../assets/trabalhos.jpg')} 
                        style={{width: 478, height: 198}}
                    />
                    <View style={styles.ShadowView}></View>
                    <View style={{alignItems: "center", position: "absolute", marginTop: 45,}}>
                    <Text style={styles.secondTextPath}>PRESTADOR DE</Text>
                    <Text style={styles.thirdTextPath}>SERVIÇO</Text>
                    </View>
                    
                
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}
