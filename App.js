import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Favorite Movie</Text>
      </View>
      <View style={styles.containerImage}>
        <Image source={require('./assets/images/interestellar.jpg')} style={styles.image}></Image>
      </View>
      <View style={styles.containerDescription}>
        <Text style={styles.description}>
          Es un film de ciencia ficción situada en un futuro cercano donde la Tierra se está 
          volviendo inhabitable debido a plagas agrícolas y tormentas de polvo, 
          condenando a la humanidad a la extinción. Cooper, un ex piloto de la NASA y 
          ahora agricultor, descubre un mensaje codificado que lo lleva a una instalación 
          secreta de la NASA dirigida por el profesor Brand. Allí, se le informa sobre un 
          plan para salvar a la humanidad mediante la exploración.
        </Text>
      </View>
      <View style={styles.containerAdditionalInfo}>
        <Text style={styles.director}>by Christopher Nolan</Text>
        <Text style={styles.date}>Interstellar (2014)</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D1117',
    alignItems: 'center',
    justifyContent: 'center',
    justifyContent: 'flex-start',
    paddingTop: 40,
    gap: 20,
  },
  containerTitle:{
    height: 'auto',
    width: '90%',
    borderWidth: 2,
    borderColor: '#2E4057',
    borderRadius: 20,
    justifyContent: 'center',
  },
  title: {
    color: '#EAEAEA',
    fontWeight: 'bold',
    fontSize: 35,
    textAlign: 'center',
  },
  containerImage: {
    height: '40%',
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
    borderRadius: 25,
  },
  containerDescription: {
    borderRadius: 20,
    width: '90%',
    height: 'auto',
    justifyContent: 'justify',
  },
  containerAdditionalInfo: {
    borderWidth: 2,
    borderColor: '#2E4057',
    borderRadius: 20,
    width: '90%',
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  description: {
    color: '#EAEAEA',
    fontSize: 16,
    textAlign: 'justify',
  },
  director: {
    color: '#D9B382',
    fontSize: 14,
    textAlign: 'center',
  },
  date: {
    color: '#D9B382',
    fontSize: 14,
    textAlign: 'center',
  }
});
