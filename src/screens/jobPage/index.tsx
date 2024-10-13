import { View, TouchableOpacity, Text, SafeAreaView, StatusBar, Image } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function LoginPage() {

  const [visibility, setVisibility] = useState<Record<number, boolean>>({});

  const profissoes = [
    {
      nome: "Engenheiro",
      subcategorias: ["Engenheiro Civil", "Engenheiro Elétrico", "Engenheiro Mecânico", "Engenheiro de Software", "Engenheiro Ambiental"],
      image: require("../../components/imagenstemporarias/engenheiro.png")
    },
    {
      nome: "Médico",
      subcategorias: ["Cardiologista", "Dermatologista", "Pediatra", "Neurologista", "Ortopedista"],
      image: require("../../components/imagenstemporarias/medico.webp")
    },
    {
      nome: "Professor",
      subcategorias: ["Professor de Matemática", "Professor de História", "Professor de Inglês", "Professor de Física", "Professor de Educação Física"],
      image: require("../../components/imagenstemporarias/professor.png")
    },
    {
      nome: "Advogado",
      subcategorias: ["Advogado Criminalista", "Advogado Trabalhista", "Advogado de Família", "Advogado Civil", "Advogado Previdenciário"],
      image: require("../../components/imagenstemporarias/advogado.png")
    },
    {
      nome: "Designer",
      subcategorias: ["Designer Gráfico", "Designer de Produto", "Designer de Interiores", "Designer de Moda", "Designer UX/UI"],
      image: require("../../components/imagenstemporarias/designer.png")
    },
  ];

  const toggleSubcategories = (index: number) => {
    setVisibility(prev => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent={false} />
      <View style={styles.ViewNavbar}>
        <TouchableOpacity>
          <Entypo name="menu" size={60} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="search" size={50} style={styles.icon} />
        </TouchableOpacity>
      </View>

      <View style={styles.JobViewFather}>
        {profissoes.map((profissao, index) => (
          <View key={index}>

            <View style={styles.JobViewSon}>
              <Image source={profissao.image} 
                style={styles.ImageJob}
              />

              <Text style={styles.JobText}>{profissao.nome}</Text>
              
              <TouchableOpacity 
                style={styles.ShowJobViewSonBtn} 
                onPress={() => toggleSubcategories(index)}
              >
                <AntDesign name="caretleft" style={styles.ShowJobViewSon} />
              </TouchableOpacity>
            </View>

    
            {visibility[index] && (
              <View style={styles.SubCategoriesViewFather}>
                {profissao.subcategorias.map((subcategoria, subIndex) => (
                  <View key={subIndex} style={styles.SubCategoriesViewSon}>
                    <TouchableOpacity style={styles.TouchableOpacitySubCategorie}>
                      <Text style={styles.SubCategoriesText}>{subcategoria}</Text>
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            )}
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
}