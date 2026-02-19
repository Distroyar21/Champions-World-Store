import { Text, View, ScrollView } from "react-native"
import ProductCards from "./ProductCards";
import Footer from "./Footer";

const FootBall = () => {
  return(
    <ScrollView style={{ flex: 1, backgroundColor: '#f8f9fa' }}>
      <View style={{
        padding: 20,
        paddingTop: 50
      }}>
        <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 20 }}>Football</Text>
        
        <ProductCards
          title = "Nivia Shining Star"
          currentPrice = "999"
          oldPrice = "1499"
          discount = "31"
          rating = "4.9"
          reviews = "149"
          image="http://static.championsworld.store/products/variants/bf5a2cf784489da9764d7fcbed8657e84bb295abf3d56fb5bb31d28308f582c5.jpg"
          style={{backgroundColor: '#edededff'}}
          showCartIcon={true}
        />

        <ProductCards
          title = "Nivia Black & White"
          currentPrice = "999"
          oldPrice = "1499"
          discount = "31"
          rating = "4.9"
          reviews = "149"
          image="http://static.championsworld.store/products/variants/2d1e4ed481040ce418d704a776b931aa819750e8c774686fdf6f0ffd655ebad7.jpg"
          style={{backgroundColor: '#edededff'}}
          showCartIcon={true}
        />
        <ProductCards
          title = "Nivia Classic Super AIFF Standard Training Football"
          currentPrice = "999"
          oldPrice = "1499"
          discount = "31"
          rating = "4.9"
          reviews = "149"
          image="http://static.championsworld.store/products/variants/c6954475c954feeb635318f2ca2bf4a99d33d71ffbcc8e6b9b915596ced335cc.jpg"
          style={{backgroundColor: '#edededff'}}
          showCartIcon={true}
        />
        <ProductCards
          title = "Nivia Mercury Football"
          currentPrice = "999"
          oldPrice = "1499"
          discount = "31"
          rating = "4.9"
          reviews = "149"
          image="http://static.championsworld.store/products/variants/976ae102831b308430eb9f5ffb4f5a103078138f4c8f5a2d01f6c76189cd5325.jpg"
          style={{backgroundColor: '#edededff'}}
          showCartIcon={true}
        />
        <ProductCards
          title = "Nivia Trainer Football (Size-5)Material:Rubber (White / Blue)"
          currentPrice = "999"
          oldPrice = "1499"
          discount = "31"
          rating = "4.9"
          reviews = "149"
          image="http://static.championsworld.store/products/variants/d8df1993ee2e41b4e185d5db0f77a95d9294078950a7394f0c95f435442e187c.jpg"
          style={{backgroundColor: '#edededff'}}
          showCartIcon={true}
        />
        <ProductCards
          title = "Nivia World Fest Football"
          currentPrice = "999"
          oldPrice = "1499"
          discount = "31"
          rating = "4.9"
          reviews = "149"
          image="http://static.championsworld.store/products/variants/008e52f10b5d62bdf996c974fc692e0ccd8777783ab06424fd246115da86a428.jpg"
          style={{backgroundColor: '#edededff'}}
          showCartIcon={true}
        />
        <ProductCards
          title = "Nivia World Fest Football Size-3"
          currentPrice = "999"
          oldPrice = "1499"
          discount = "31"
          rating = "4.9"
          reviews = "149"
          image="http://static.championsworld.store/products/variants/7d996201805b4c13feaf9387614405a46dece4c5365017c3781aa6aab4c6a694.jpg"
          style={{backgroundColor: '#edededff'}}
          showCartIcon={true}
        />
        <ProductCards
          title = "Kaizen Crown Football Size-5"
          currentPrice = "999"
          oldPrice = "1499"
          discount = "31"
          rating = "4.9"
          reviews = "149"
          image="http://static.championsworld.store/products/variants/d6c695ab6323ff6d9f76792ffef94975a9d76696d74a6371e916d8b362baa01d.jpg"
          style={{backgroundColor: '#edededff'}}
          showCartIcon={true}
        />
        <ProductCards
          title = "Kaizen Scoin Football Size-5"
          currentPrice = "999"
          oldPrice = "1499"
          discount = "31"
          rating = "4.9"
          reviews = "149"
          image="http://static.championsworld.store/products/variants/3489048db0c5a7dd4e7c2161afbf7a4e6fcc81155777ce6c9188f8de5eb6e33d.jpg"
          style={{backgroundColor: '#edededff'}}
          showCartIcon={true}
        />
        <Footer />
      </View>
    </ScrollView>
  )
};

export default FootBall;