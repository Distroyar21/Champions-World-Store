import { View, Text, StyleSheet, ImageBackground } from 'react-native';

 const SportCard = ({ title, subtitle, image }) => {
  return (
    <View style={styles.card}>
      <ImageBackground source={{ uri: image }} style={styles.image}>
        <View style={styles.container}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: 15,
    width: '47%',
    borderRadius: 12,
    marginBlockEnd: 15,
    overflow: 'hidden',
    height: 180,
  },

  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },

  container: {
    padding: 15,
  },

  title: {
    color: '#fff',
    fontSize: 19,
    fontWeight: '400',
  },

  subtitle: {
    color: '#fff',
    fontSize: 13,
    marginTop: 3,
  },
});

export default SportCard;


