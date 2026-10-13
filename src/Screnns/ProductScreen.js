import { StyleSheet, View, Image, FlatList } from "react-native";
import products from '../data/products/products';

const ProductItem = ({ item }) => (
  <View style={styles.itemContainer}>
    <Image source={{ uri: item.image }} style={styles.image} />
  </View>
);

export default function ProductScreen() {
  return (
    <FlatList
      data={products}
      renderItem={ProductItem}
      numColumns={2}
      keyExtractor={(item) => item.id}
    />
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    width: "50%",
    padding: 1,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
});