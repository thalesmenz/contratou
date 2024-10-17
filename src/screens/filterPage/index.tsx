import {View, TouchableOpacity,Text, StyleSheet, TextInput} from 'react-native'
import { styles } from './styles'
import { Picker } from '@react-native-picker/picker'
import { useState } from 'react'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../../routes/Types';


export default function LoginPage() {
    const [selectedState, setSelectedState] = useState()

    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    return (
        <View style={styles.container} >
            <View>
                    <View style={styles.TextView}>
                        <Text style={styles.ContratouH1}>Contratou</Text>
                        <View style={styles.ExplicationView}>
                            <Text style={styles.ExplicationText}>Selecione sua localização para</Text>
                            <Text style={styles.ExplicationText}>encontrar prestadores de serviços</Text>
                            <Text style={styles.ExplicationText}>proximos</Text>  
                        </View>
                    </View>
                    <View style={styles.InputsView}>
                        <View style={styles.InputElement}>
                            <Picker
                        selectedValue={selectedState}
                        onValueChange={(itemValue, itemIndex) => setSelectedState(itemValue)}
                        
                        >
                            <Picker.Item label="Acre" value="Acre" />
                            <Picker.Item label="Alagoas" value="Alagoas" />
                            <Picker.Item label="Amapá" value="Amapá" />
                            <Picker.Item label="Amazonas" value="Amazonas" />
                            <Picker.Item label="Bahia" value="Bahia" />
                            <Picker.Item label="Ceará" value="Ceará" />
                            <Picker.Item label="Espírito Santo" value="Espírito Santo" />
                            <Picker.Item label="Goiás" value="Goiás" />
                            <Picker.Item label="Maranhão" value="Maranhão" />
                            <Picker.Item label="Mato Grosso" value="Mato Grosso" />
                            <Picker.Item label="Mato Grosso do Sul" value="Mato Grosso do Sul" />
                            <Picker.Item label="Minas Gerais" value="Minas Gerais" />
                            <Picker.Item label="Pará" value="Pará" />
                            <Picker.Item label="Paraíba" value="Paraíba" />
                            <Picker.Item label="Paraná" value="Paraná" />
                            <Picker.Item label="Pernambuco" value="Pernambuco" />
                            <Picker.Item label="Piauí" value="Piauí" />
                            <Picker.Item label="Rio de Janeiro" value="Rio de Janeiro" />
                            <Picker.Item label="Rio Grande do Norte" value="Rio Grande do Norte" />
                            <Picker.Item label="Rio Grande do Sul" value="Rio Grande do Sul" />
                            <Picker.Item label="Rondônia" value="Rondônia" />
                            <Picker.Item label="Roraima" value="Roraima" />
                            <Picker.Item label="Santa Catarina" value="Santa Catarina" />
                            <Picker.Item label="São Paulo" value="São Paulo" />            
                            <Picker.Item label="Sergipe" value="Sergipe" />
                            <Picker.Item label="Tocantins" value="Tocantins" />
                        </Picker>
                        </View>
                        
                        <View style={styles.InputElement}>
                            <Picker
                        selectedValue={selectedState}
                        onValueChange={(itemValue, itemIndex) => setSelectedState(itemValue)}
                        
                        >
                            <Picker.Item label="Cidade" value="Cidade" />
                            
                        </Picker>
                        </View>

                        <View style={styles.InputElement}>
                            <Picker
                        selectedValue={selectedState}
                        onValueChange={(itemValue, itemIndex) => setSelectedState(itemValue)}
                        
                        >
                            <Picker.Item label="Bairro" value="Bairro" />
                            
                        </Picker>
                        </View>

                        <View>
                        <TextInput 
                            placeholder='Rua'
                            style={styles.InputStyle}
                            />
                        </View>
                    </View>
                    <View style={styles.ViewButtonAccess}>
                        <TouchableOpacity 
                            style={styles.ButtonAccess}
                            onPress={() => navigation.navigate("PathJob")} 
                        >
                            <Text style={styles.TextAccess}>Acessar</Text>
                        </TouchableOpacity>
                    </View>
            </View>
        </View>
    )
}