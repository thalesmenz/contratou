import {View, TouchableOpacity,Text, StyleSheet, TextInput} from 'react-native'

export default function LoginPage() {
    return (
        <View style={{alignItems: 'center'}}>
            <Text style={styles.LoginText}>Fazer Login</Text>
            <View style={{marginBottom: 100}}>
                <View>
                   <Text style={{fontSize: 16, marginLeft: 12}}>Email</Text>
                   <TextInput 
                    value={Text}
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
                <TouchableOpacity style={styles.ButtonLogin}>
                    <Text style={styles.TextLogin}>Login</Text>
                </TouchableOpacity>
                <Text style={{fontSize: 17, marginTop: 10}}>Ainda não criou uma conta na Contratou?</Text>
                <TouchableOpacity>
                    <Text style={{fontSize: 17, color: "#5992E8"}}>Cadastrar-se</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    LoginText: { 
        fontSize: 35,
        marginBottom: 45,
    },

    InputStyle: {
        marginTop: 5,
        width: 410,
        height: 61,
        borderWidth: 2,
        borderColor: "#6B6464",
        borderRadius: 20,
        paddingLeft: 15,
    },

    ButtonPassword: {
        color: "#5992E8",
        marginLeft: 240,
        marginTop: 20,
        fontSize: 17,
    },

    ButtonLogin: {
        backgroundColor: "#5992E8",
        width: 410,
        height: 61,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center"
    },

    TextLogin: {
        color:  "white",
        fontSize: 25,
        fontWeight: "bold",
    },

    ViewLoginBottom: {
        position: "absolute",
        top: 520,
        alignItems: "center"
    }
})