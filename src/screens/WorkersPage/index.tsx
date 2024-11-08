import { View, TouchableOpacity, Text, SafeAreaView, StatusBar} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { styles } from './styles'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../../routes/Types';

export default function WorkersPage() {

    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const trabalhadores = [
        {
          name: "Daniel Souza",
          location: "São Paulo",
          work: "Eletricista Residencial",
        },
        
        {
            name: "Lucas Vieira",
            location: "São Paulo",
            work: "Eletricista Residencial",
        },

        {
            name: "Kaue Marques",
            location: "São Paulo",
            work: "Eletricista Residencial",
        },

        {
            name: "Alexandre Lima",
            location: "São Paulo",
            work: "Eletricista Residencial",
        },
      ];


  return (
    <View style={styles.container}>
        <View>
            <View style={styles.ViewNavbar}>
                <TouchableOpacity>
                <Entypo name="menu" size={60} style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity>
                <Feather name="search" size={50} style={styles.icon} />
                </TouchableOpacity>
            </View>
        </View>

        <View>
            {trabalhadores.map((workers, index) => (
                <View key={index} style={styles.WorkerView} >
                    <View style={styles.WorkerViewSon}> 
                        <View style={styles.LeftWorkerView}>
                            <View style={styles.AlingItensView}>
                                <Ionicons name="person" size={25}/>
                                <Text style={styles.TextWorker}>{workers.name}</Text>
                            </View>
                            <View style={styles.AlingItensView}>
                                <Entypo name="location-pin" size={25}/>
                                <Text style={styles.TextWorker}>{workers.location}</Text>
                            </View>
                            <View style={styles.AlingItensView}>
                                <MaterialIcons name='work' size={25}/>
                                <Text style={styles.TextWorker}>{workers.work}</Text> 
                            </View>
                        </View>
                        <View style={styles.RightWorkerView}>
                            <Text style={styles.TextWorker}>Avaliação</Text>
                            <View style={styles.ViewStarAvaliation}>
                                <Entypo name='star' size={25} style={styles.Star} />
                                <Entypo name='star' size={25} style={styles.Star} />
                                <Entypo name='star' size={25} style={styles.Star} />
                                <Entypo name='star' size={25} style={styles.Star} />
                                <Entypo name='star' size={25} style={styles.Star} />
                            </View>
                        </View>
                    </View>
                    
                    
                    <View style={styles.DetailsViewFather}>
                        <TouchableOpacity 
                         style={styles.DetailsButton}
                         onPress={() => navigation.navigate("ProfileWorker")}
                        >
                            <Text style={styles.TextDetailsButton}>DETALHES</Text>
                            
                        </TouchableOpacity>
                    </View>
                    
                </View>
            ))}
        </View>
    </View>
  );
}