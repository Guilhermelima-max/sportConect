import React from "react";
import {View,Text,TextInput,StyleSheet,FlatList,Image,TouchableOpacity,ScrollView,} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import navegacao from '../components/tabNavigation';



const mockData = [
  {
    id: "1",
    name: "Arena da Gloria",
    type: "Quadra de areia",
    image: "https://via.placeholder.com/80",// substitua pela imagem real
  },
  {
    id: "2",
    name: "Super Pato Esportes",
    type: "Quadra",
    image: "https://via.placeholder.com/80",
  },
];

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.greeting}>
          Olá <Text style={styles.username}>Usuário</Text>
        </Text>

        <TouchableOpacity onPress={() => alert("Notificações!")}>
          <Image source={require("../assets/home/notifi-icon.png")} style={{ width: 26.82, height: 30.25 }}resizeMode="contain"/>
        </TouchableOpacity> {/*Icone de notificações */}
      </View>

      {/* Search bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={18} color="#888" style={{ marginRight: 6 }} />
        <TextInput
          placeholder="Buscar quadras ou arenas"
          style={styles.searchInput}
          placeholderTextColor="#999"
        />
      </View>

      {/* Último agendamento */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Último agendamento</Text>
        <TouchableOpacity style={styles.card}>
          <Image source={{ uri: mockData[0].image }} style={styles.cardImage} />
          <View style={{ flex: 1 }}>
            <Text style={styles.cardTitle}>{mockData[0].name}</Text>
            <Text style={styles.cardSubtitle}>{mockData[0].type}</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#FF6A00" />
        </TouchableOpacity>
      </View>

      {/* Favoritos */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Favoritos</Text>
        <FlatList
          horizontal
          data={mockData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.favoriteItem}>
              <Image source={{ uri: item.image }} style={styles.favoriteImage} />
              <Text style={styles.favoriteTitle}>{item.name}</Text>
              <Text style={styles.favoriteSubtitle}>{item.type}</Text>
            </View>
          )}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      {/* Quadras Próximas */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Quadras Próximas</Text>
        {mockData.map((item) => (
          <View key={item.id} style={styles.nearbyItem}>
            <Image source={{ uri: item.image }} style={styles.nearbyImage} />
            <View style={{ flex: 1 }}>
              <Text style={styles.cardTitle}>{item.name}</Text>
              <Text style={styles.cardSubtitle}>{item.type}</Text>
            </View>
            <Ionicons name="heart-outline" size={22} color="#555" />
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", paddingHorizontal: 16 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 50,
  },
  greeting: { fontSize: 24 },
  username: { fontWeight: "600", color: "#0099FF" },

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F6F7F9",
    borderRadius: 10,
    padding: 10,
    marginVertical: 16,
    width: 380,
    height: 55,
     borderWidth: 0.2,
    borderColor: "#575757"
  },
  searchInput: { flex: 1, fontSize: 14 },
  section: { marginBottom: 24 },
  sectionTitle: { fontSize: 25, fontWeight: "700", marginBottom: 10 },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
    width: 380,
    height: 55
  },
  cardImage: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
  cardTitle: { fontSize: 15, fontWeight: "600" },
  cardSubtitle: { fontSize: 12, color: "#777" },
  favoriteItem: {
    alignItems: "center",
    marginRight: 15,
    width: 90,
  },
  favoriteImage: { width: 70, height: 70, borderRadius: 35, marginBottom: 5 },
  favoriteTitle: { fontSize: 11, fontWeight: "600", textAlign: "center" },
  favoriteSubtitle: { fontSize: 10, color: "#666", textAlign: "center" },
  nearbyItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  nearbyImage: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
});
