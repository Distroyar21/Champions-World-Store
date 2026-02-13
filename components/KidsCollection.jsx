import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import { X } from "lucide-react-native";
import Footer from "./Footer";

const KidsCollection = ({ onClose }) => {

  return (
    <View style={styles.screen}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Kids Collection</Text>
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
              source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSu53dzM286932hZQM17Qsj0gB6fiuNuNW8g&s' }} 
              style={styles.cardImage} 
            />
            <View style={styles.badgePosition}>
               <View style={styles.badge}>
                  <Text style={styles.badgeText}>K</Text>
               </View>
            </View>

            <View style={styles.centeredOverlay}>
              <Text style={styles.stackedTextMain}>KIDS</Text>
              <Text style={styles.stackedTextSub}>TOPWEAR</Text>
            </View>
          </View>
        
         
          <View style={styles.card}>
            <Image 
              source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8DYbgt6rvjyy8bJdgfmRn3rTxI6W2vmR1VA&s' }} 
              style={styles.cardImage} 
            />
            <View style={styles.badgePosition}>
               <View style={styles.badge}>
                  <Text style={styles.badgeText}>K</Text>
               </View>
            </View>
          
            <View style={styles.centeredOverlay}>
              <Text style={styles.stackedTextMain}>KIDS</Text>
              <Text style={styles.stackedTextSub}>BOTTOMWEAR</Text>
            </View>
          </View>
          <View style={styles.card}>
            <Image 
              source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSu53dzM286932hZQM17Qsj0gB6fiuNuNW8g&s' }} 
              style={styles.cardImage} 
            />
            <View style={styles.badgePosition}>
               <View style={styles.badge}>
                  <Text style={styles.badgeText}>K</Text>
               </View>
            </View>
          
            <View style={styles.centeredOverlay}>
              <Text style={styles.stackedTextSub}>T-SHIRTS</Text>
            </View>
          </View>
          <View style={styles.card}>
            <Image 
              source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvufbQjFrU8VS75hu5WRrifqRBTMID0CfeAQ&s'}} 
              style={styles.cardImage} 
            />
            <View style={styles.badgePosition}>
               <View style={styles.badge}>
                  <Text style={styles.badgeText}>K</Text>
               </View>
            </View>
          
            <View style={styles.centeredOverlay}>
              <Text style={styles.stackedTextSub}>SHORTS</Text>
            </View>
          </View>
          <View style={styles.card}>
            <Image 
              source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT86ivENw5vAYpJfi633RwwDNbwULgUx_aqzA&s' }} 
              style={styles.cardImage} 
            />
            <View style={styles.badgePosition}>
               <View style={styles.badge}>
                  <Text style={styles.badgeText}>K</Text>
               </View>
            </View>
          
            <View style={styles.centeredOverlay}>
              <Text style={styles.stackedTextSub}>TRACK PANTS</Text>
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
    width: '45%',
    height: 130,
    borderRadius: 18,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    marginBottom: 13,
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

export default KidsCollection;
