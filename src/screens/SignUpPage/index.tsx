import {View, TouchableOpacity,Text, StyleSheet, TextInput} from 'react-native'
import { styles } from './styles'
import Icon from 'react-native-vector-icons/AntDesign'
import { CheckBox } from 'react-native-elements'
import { useState } from 'react'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../../routes/Types';

export default function Page() {
    const [isChecked, setIsChecked] = useState(false)

    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    return (
        <View style={styles.container}>
            <View style={styles.SecondContainer}>
                    <Text style={styles.SignUpText}>Criar uma Conta</Text>
                    <View style={{marginBottom: 100}}>
                        <View>
                        <Text style={styles.LabelInput}>Email</Text>
                        <TextInput 
                            
                            placeholder='Email'
                            style={styles.InputStyle}
                            />
                        </View>


                        <View style={{marginTop: 25}}>
                        <Text style={styles.LabelInput}>Nome de Usuario</Text>
                        <TextInput 
                            placeholder='Nome de Usuario'
                            style={styles.InputStyle}
                            />
                        </View>


                        <View style={{marginTop: 25}}>
                        <Text style={styles.LabelInput}>Senha</Text>
                        <TextInput 
                            secureTextEntry={true}
                            placeholder='Senha'
                            style={styles.InputStyle}
                            />
                        </View>

                        <View style={{marginTop: 25}}>
                        <Text style={styles.LabelInput}>Repita a Senha</Text>
                        <TextInput 
                            secureTextEntry={true}
                            placeholder='Repita a Senha'
                            style={styles.InputStyle}
                            />
                        </View>

                    <View style={{width: 490, flexDirection: "row"}}>
                        <TouchableOpacity
                            onPress={() => setIsChecked(!isChecked)}
                            style={{
                                width: 30,
                                height: 30,
                                backgroundColor: isChecked ? "green" : "white",
                                borderWidth: 2,
                                borderColor: "#6B6464",
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: 10,
                                marginTop: 20,
                            }}
                        >
                            {isChecked && (
                                <Icon name="check" size={20} color="white" />
                            )}
                        </TouchableOpacity>
                        <View style={{marginLeft: 10, marginTop: 22, }}>
                            <Text style={styles.TextDefault}>Ao marcar essa caixa, você esta aceitando os</Text>
                            <View style={{flexDirection: "row"}}>
                                <TouchableOpacity>
                                    <Text style={styles.ButtonTerm}>
                                        Termos de Serviço
                                    </Text>
                                </TouchableOpacity>
                                <Text style={styles.TextDefault}>e</Text>
                                <TouchableOpacity>
                                    <Text style={styles.SecondButtonTerm}>
                                        Politica de Privacidade
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <Text style={styles.TextDefault}>da Contratou.</Text>
                            </View>
                            <Text></Text>
                        </View>
                        
                    </View>
                    
                    </View>
                    
                    
                    <View style={styles.ViewLoginBottom}>
                        <TouchableOpacity 
                            style={styles.ButtonSignUp}
                            onPress={() => navigation.navigate("FilterLocation")}
                        >
                            <Text style={styles.TextLogin}>Crie sua Conta</Text>
                        </TouchableOpacity>
                            <Text style={{fontSize: 17, marginTop: 10}}>Você já é registrado na Contratou?</Text>
                            <TouchableOpacity
                                onPress={() => navigation.navigate("Login")}
                            >
                                <Text style={{fontSize: 17, color: "#5992E8"}}>Fazer Login</Text>
                            </TouchableOpacity>
                        
                    </View>
                </View>
        </View>
    )
}