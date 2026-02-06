import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native';

 const SportCard = ({ title, subtitle, image }) => {
  return (
    <Pressable style={styles.card}>
      <ImageBackground source={{ uri: image }} style={styles.image}>
        <View style={styles.container}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </ImageBackground>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 270,
    borderRadius: 12,
    overflow: 'hidden',
    marginRight: 20,
  },

  image: {
    width: '100%',
    height: 160,
    justifyContent: 'flex-end', 
  },

  container: {
    padding: 10,
  },

  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },

  subtitle: {
    color: '#fff',
    fontSize: 12,
    marginTop: 2,
  },
});

export default SportCard;


