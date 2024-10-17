import {View, TouchableOpacity,Text, StyleSheet, TextInput} from 'react-native'
import { styles } from './styles'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../../routes/Types';

export default function LoginPage() {

    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    return (
        <View style={styles.container}>
            <View style={styles.SecondContainer}>
                    <Text style={styles.LoginText}>Fazer Login</Text>
                    <View style={{marginBottom: 100}}>
                        <View>
                        <Text style={{fontSize: 16, marginLeft: 12}}>Email</Text>
                        <TextInput 
                            
                            placeholder='Email'
                            style={styles.InputStyle}
                            />
                        </View>
                        <View style={{marginTop: 25}}>
                        <Text style={{fontSize: 16, marginLeft: 12}}>Senha</Text>
                        <TextInput 
                            secureTextEntry={true}
                            placeholder='Senha'
                            style={styles.InputStyle}
                            />
                        </View>
                    <TouchableOpacity>
                        <Text style={styles.ButtonPassword}>Esqueceu sua senha?</Text>
                    </TouchableOpacity>
                    </View>
                    
                    <View style={styles.ViewLoginBottom}>
                        <TouchableOpacity 
                            style={styles.ButtonLogin}
                            onPress={() => navigation.navigate("Job")}    
                        >
                            <Text style={styles.TextLogin}>Login</Text>
                        </TouchableOpacity>
                        <Text style={{fontSize: 17, marginTop: 10}}>Ainda não criou uma conta na Contratou?</Text>
                        <TouchableOpacity 
                            onPress={() => navigation.navigate("SignUp")}
                        >
                            <Text style={{fontSize: 17, color: "#5992E8"}}>Cadastrar-se</Text>
                        </TouchableOpacity>
                    </View>
                </View>
        </View>
    )
}