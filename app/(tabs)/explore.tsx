import React from 'react'
import { Image, Text, TouchableOpacity, View, StyleSheet, Linking, ToastAndroid  } from 'react-native';
import { BlurView } from 'react-native-blur';



import ParallaxScrollView from '@/components/ParallaxScrollView';

const fazerChamada = async () => {
  
  const numero = "18991207281"; 
  const url = `tel:${numero}`;
  try {
    await Linking.openURL(url);
  } catch (error) {
    console.error("Erro ao abrir o cliente de telefone:", error);
  }
};

export default function HomeScreen() {
  const openUrl = async (url) => {
    if (await Linking.canOpenURL(url)) {
      await Linking.openURL(url);
    } else {
      ToastAndroid.show("Can't open this URL", ToastAndroid.SHORT);
    }
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#FFFAFA', dark: '#4169E1' }}
      headerImage={
        <Image
          source={require('@/assets/images/praia.jpeg')}
          style={styles.profileImage}
          
        />

      }
      
      renderHeader={() => (
        <BlurView
          style={styles.blurContainer}
          blurType="light"
          blurAmount={10}
        >

        </BlurView>
      )}
    >

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View>
          <Image
          source={require('@/assets/images/perfil2.jpeg')}
          style={{width: 100, height: 100, borderRadius: 100 }}
        />
          </View>
        </View>

      <Text style={styles.title}>João Vitor Dutra Macedo</Text>  
          <Text style={styles.texto}>Estudante</Text>
          
          

      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => openUrl('https://www.facebook.com/')}
          style={styles.button}
        >
          <View 
          style={{ flexDirection: 'row', alignItems: 'center' }}
          >
            <Image   />
            </View>
            <Text style={styles.buttonText}>Facebook</Text>
          
        </TouchableOpacity>  
      </View>

      <View>
      <TouchableOpacity
          onPress={() => openUrl('instagram://user?username=joaovitordutramacedo')}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Instagram</Text>
        </TouchableOpacity>
      </View>

      <View>
      <TouchableOpacity
          onPress={() => openUrl('https://wa.me/5518991207281')}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Whatsapp</Text>
        </TouchableOpacity>
      </View>

      <View>
      <TouchableOpacity
          onPress={() => openUrl('https://www.linkedin.com/in/jo%C3%A3o-vitor-dutra-macedo-989b53313/')}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Linkedin</Text>
        </TouchableOpacity>
      </View>

      <View>
      <TouchableOpacity
          onPress={() => openUrl('https://github.com/xuxuReserva')}
          style={styles.button}
        >
          <Text style={styles.buttonText}>GitHub</Text>
        </TouchableOpacity>
      </View>

      <View>
      <TouchableOpacity
          onPress={fazerChamada}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Telefone</Text>
        </TouchableOpacity>
      </View>
     
    </ParallaxScrollView>
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  perfil: {
    borderRadius: 10,
    width: 22,
    height: 22,
    alignItems: 'center',
    justifyContent: 'center',

  },
  profileImage: {
    width: 395,
    height: 250,
    resizeMode: "cover",
    position: 'absolute'
    
  },
  blurContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    position: 'absolute'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: "center",
  },
  texto: {
    fontSize: 20,
    color: '#fff',
    textAlign: "center",
    fontWeight: 'bold',
    marginTop: -5
    
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  button: {
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 70,
    borderRadius: 8,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center'
  },
});