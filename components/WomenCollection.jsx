import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import { X } from "lucide-react-native";
import Footer from "./Footer";

const WomenCollection = ({ onClose }) => {
  return (
    <View style={styles.screen}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Women Collection</Text>
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
              source={{ uri: 'https://plus.unsplash.com/premium_photo-1690350731538-57344931ac02?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29tZW4lMjB0b3B8ZW58MHx8MHx8fDA%3D' }} 
              style={styles.cardImage} 
            />
            <View style={styles.badgePosition}>
               <View style={styles.badge}>
                  <Text style={styles.badgeText}>W</Text>
               </View>
            </View>

            <View style={styles.centeredOverlay}>
              <Text style={styles.stackedTextMain}>WOMEN</Text>
              <Text style={styles.stackedTextSub}>TOPWEAR</Text>
            </View>
          </View>
        
         
          <View style={styles.card}>
            <Image 
              source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb4BjzunbCYsFobbeXK3iaQGp-DjKy8_VEksIcipqtuw&s' }} 
              style={styles.cardImage} 
            />
            <View style={styles.badgePosition}>
               <View style={styles.badge}>
                  <Text style={styles.badgeText}>W</Text>
               </View>
            </View>
          
            <View style={styles.centeredOverlay}>
              <Text style={styles.stackedTextMain}>WOMEN</Text>
              <Text style={styles.stackedTextSub}>BOTTOMWEAR</Text>
            </View>
          </View>
          <View style={styles.card}>
            <Image 
              source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5qf5-Zf0Yd6GvUgc95VmGN_HBD_8xDNKzIQ&s' }} 
              style={styles.cardImage} 
            />
            <View style={styles.badgePosition}>
               <View style={styles.badge}>
                  <Text style={styles.badgeText}>W</Text>
               </View>
            </View>
          
            <View style={styles.centeredOverlay}>
              <Text style={styles.stackedTextMain}>WOMEN</Text>
              <Text style={styles.stackedTextSub}>FOOTWEAR</Text>
            </View>
          </View>
          <View style={styles.card}>
            <Image 
              source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJIT7kYa6712prE4YXRgdF1VM4h08VkUriIA&s'}} 
              style={styles.cardImage} 
            />
            <View style={styles.badgePosition}>
               <View style={styles.badge}>
                  <Text style={styles.badgeText}>W</Text>
               </View>
            </View>
          
            <View style={styles.centeredOverlay}>
              <Text style={[styles.stackedTextMain, styles.stackedTextMain2]}>WOMEN</Text>
              <Text style={styles.stackedTextSub}>JACKETS & TRACKSUITS</Text>
            </View>
          </View>
          <View style={styles.card}>
            <Image 
              source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb4BjzunbCYsFobbeXK3iaQGp-DjKy8_VEksIcipqtuw&s' }} 
              style={styles.cardImage} 
            />
            <View style={styles.badgePosition}>
               <View style={styles.badge}>
                  <Text style={styles.badgeText}>W</Text>
               </View>
            </View>
          
            <View style={styles.centeredOverlay}>
              <Text style={styles.stackedTextMain}>WOMEN</Text>
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

export default WomenCollection;