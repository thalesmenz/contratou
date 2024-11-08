import { View, TouchableOpacity, Text, SafeAreaView, StatusBar, Image} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from './styles'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../../routes/Types';

export default function WorkersPage() {

    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

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

        <View style={styles.ProfileView}>
            <Image 
                source={require("../../components/imagenstemporarias/profile.png")}
                style={styles.image}
            />
            <Text style={styles.TextInfo}>
                Pedro Souza Gomes
            </Text>
            <Text style={styles.TextInfo}>
                Eletricista Residencial
            </Text>
            <Text style={styles.TextInfo}>
                São Paulo - SP
            </Text>

            <View style={styles.ViewStarAvaliation}>
                <Entypo name='star' style={styles.star} />
                <Entypo name='star' style={styles.star} />
                <Entypo name='star' style={styles.star} />
                <Entypo name='star' style={styles.star} />
                <Entypo name='star' style={styles.star} />
            </View>

            <View style={styles.AboutMe}>
                <Text style={styles.TextAboutMeH1}>Sobre Mim</Text>
                <View>
                    <Text style={styles.TextAboutMe}>
                        Meu nome é Pedro e sou eletricista residencial.
                    </Text>
                </View>
            </View>

            <View style={styles.AboutMe}>
                <Text style={styles.TextAboutMeH1}>Sobre Meu Trabalho</Text>
                <View>
                    <Text style={styles.TextAboutMe}>
                        Sou o melhor eletricista residencial e termino o serviço em menos de 10 minutos .
                    </Text>
                </View>
            </View>

            <View style={styles.ImagesJobView}>
                <Text style={styles.TextH1}>Imagens do Trabalho</Text>
                <View style={styles.ImagesJobSubView}>
                    
                </View>
            </View>

            <View style={styles.ViewMargin}>
                <Text style={styles.TextH1}>Contato</Text>
                <View style={styles.BorderView}>
                    <View style={styles.ContactView}>
                        <Entypo name="phone" size={50} />
                        <Text style={styles.ContactText}>+55 011 12345-6789</Text>
                    </View>
                    <View style={styles.ContactView}>
                        <MaterialCommunityIcons name='email' size={50} />
                        <Text style={styles.ContactText}>emailteste@gmail.com</Text>
                    </View>
                </View>
            </View>

            <View style={styles.ViewMargin}>
                <Text style={styles.TextH1}>Comentarios</Text>
                <View style={styles.BorderView}>
                    
                </View>
            </View>

        </View>
    </View>
  );
}