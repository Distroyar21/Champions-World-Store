import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import { X } from "lucide-react-native";
import Footer from "./Footer";

const MenCollection = ({ onClose }) => {
  return (
    <View style={styles.screen}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Men Collection</Text>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <X size={28} color={'#000000'} />
        </TouchableOpacity>
      </View>

      <ScrollView 
        style={styles.scrollArea} 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>
          <View style={styles.card}>
            <Image 
              source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO3xbSvDlCyt14-7MQqJRkZqgVQMtPyL_NyNzM_mDtPA&s' }} 
              style={styles.cardImage} 
            />
            <View style={styles.badgePosition}>
               <View style={styles.badge}>
                  <Text style={styles.badgeText}>M</Text>
               </View>
            </View>

            <View style={styles.centeredOverlay}>
              <TouchableOpacity onPress={() =>{
                console.log("Men Topwear");
              }}>
                <X size={24} color={'#000000'} />
                <Text style={styles.stackedTextMain}>MEN</Text>
                <Text style={styles.stackedTextSub}>TOPWEAR</Text>
              </TouchableOpacity>
            </View>
          </View>
        
         
          <View style={styles.card}>
            <Image 
              source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShMqvIJ-A_Yh2_H0cFLuSnaKG_IiQxd1D74gLPQXlY3-wi7OXAX_5C7Vs&s' }} 
              style={styles.cardImage} 
            />
            <View style={styles.badgePosition}>
               <View style={styles.badge}>
                  <Text style={styles.badgeText}>M</Text>
               </View>
            </View>
          
            <View style={styles.centeredOverlay}>
              <Text style={styles.stackedTextMain}>MEN</Text>
              <Text style={styles.stackedTextSub}>BOTTOMWEAR</Text>
            </View>
          </View>
          <View style={styles.card}>
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff' }} 
              style={styles.cardImage} 
            />
            <View style={styles.badgePosition}>
               <View style={styles.badge}>
                  <Text style={styles.badgeText}>M</Text>
               </View>
            </View>
          
            <View style={styles.centeredOverlay}>
              <Text style={styles.stackedTextMain}>MEN</Text>
              <Text style={styles.stackedTextSub}>FOOTWEAR</Text>
            </View>
          </View>
          <View style={styles.card}>
            <Image 
              source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsToGHOnjaUAzMOkyzOx9hEvU5rqaUvDQtfQ&s'}} 
              style={styles.cardImage} 
            />
            <View style={styles.badgePosition}>
               <View style={styles.badge}>
                  <Text style={styles.badgeText}>M</Text>
               </View>
            </View>
          
            <View style={styles.centeredOverlay}>
              <Text style={[styles.stackedTextMain, styles.stackedTextMain2]}>MEN</Text>
              <Text style={styles.stackedTextSub}>JACKETS & TRACKSUITS</Text>
            </View>
          </View>
          <View style={styles.card}>
            <Image 
              source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShMqvIJ-A_Yh2_H0cFLuSnaKG_IiQxd1D74gLPQXlY3-wi7OXAX_5C7Vs&s' }} 
              style={styles.cardImage} 
            />
            <View style={styles.badgePosition}>
               <View style={styles.badge}>
                  <Text style={styles.badgeText}>M</Text>
               </View>
            </View>
          
            <View style={styles.centeredOverlay}>
              <Text style={styles.stackedTextMain}>MEN</Text>
              <Text style={styles.stackedTextSub}>INNERWEAR</Text>
            </View>
          </View>
        </View>
        <Footer />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: '#ffffff',
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    marginBottom: 5
  },
  closeButton: {
    padding: 5,
  },
  scrollArea: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    backgroundColor: '#f8f9fa'
  },
  content: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 15,
    paddingVertical: 15,
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    height: 150,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    marginBottom: 15,
  },
  fullWidthCard: {
    width: '100%',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  badgePosition: {
    position: 'absolute',
    top: 15,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  badge: {
    backgroundColor: 'rgba(239, 251, 240, 0.4)', 
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)', 
    shadowColor: '#000',
    shadowOpacity: 0.1,
    elevation: 2,
  },
  badgeText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000000ff',
  },
  titleOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    paddingVertical: 12,
    alignItems: 'center',
  },
  footwearTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 1,
  },
  centeredOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    paddingHorizontal: 10,
  },
  stackedTextMain: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '800',
    letterSpacing: 2,
  },
  stackedTextMain2: {
    paddingTop: 15
  },
  stackedTextSub: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 1,
    textAlign: 'center',
    
  }
});

export default MenCollection;