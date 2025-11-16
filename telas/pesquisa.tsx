import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Modal,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen() {
  const [arenas, setArenas] = useState([
    {
      id: "1",
      nome: "Mighty Mick's Gym",
      avaliacao: 4.9,
      tipo: "Quadra",
      distancia: "1,9 km",
      esporte: "Vôlei",
      horario: "Hoje - 16:00",
      imagem:
        "https://upload.wikimedia.org/wikipedia/en/5/53/Mighty_Mick%27s_Gym_logo.png",
      favorito: false,
    },
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [arenaSelecionada, setArenaSelecionada] = useState(null);

  const alternarFavorito = (id) => {
    setArenas((prev) =>
      prev.map((arena) =>
        arena.id === id ? { ...arena, favorito: !arena.favorito } : arena
      )
    );
  };

  const fazerReserva = (arena) => {
    setArenaSelecionada(arena);
    setModalVisible(true);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.greeting}>
          Olá <Text style={styles.username}>Usuário</Text>
        </Text>

        <TouchableOpacity onPress={() => alert("Notificações!")}>
          <Image
            source={require("../assets/home/notifi-icon.png")}
            style={{ width: 26.82, height: 30.25 }}
            resizeMode="contain"
          />
        </TouchableOpacity>
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

      {/* Botão de ordenação */}
      <TouchableOpacity style={styles.sortButton}>
        <Text style={styles.sortText}>Ordenar ▼</Text>
      </TouchableOpacity>

      {/* Lista de Arenas */}
      {arenas.length > 0 ? (
        <FlatList
          data={arenas}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.cardContainer}>
              {/* Card principal */}
              <View style={styles.card}>
                <Image source={{ uri: item.imagem }} style={styles.cardImage} />

                <View style={styles.cardInfo}>
                  <Text style={styles.cardTitle}>{item.nome}</Text>
                  <Text style={styles.cardSubtitle}>
                    ⭐ {item.avaliacao} • {item.tipo} • {item.distancia}
                  </Text>
                </View>

                <TouchableOpacity onPress={() => alternarFavorito(item.id)}>
                  <Ionicons
                    name={item.favorito ? "heart" : "heart-outline"}
                    size={24}
                    color="#FF4B4B"
                  />
                </TouchableOpacity>
              </View>

              {/* Informações extras */}
              <View style={styles.extraInfo}>
                <Text style={styles.extraText}>🏐 {item.esporte}</Text>
                <Text style={styles.extraText}>🕓 {item.horario}</Text>
              </View>

              {/* Botão de reserva preenchendo toda a parte inferior */}
              <TouchableOpacity
                style={styles.reserveButton}
                onPress={() => fazerReserva(item)}
              >
                <Text style={styles.reserveText}>Fazer Reserva</Text>
              </TouchableOpacity>
            </View>
          )}
          scrollEnabled={false}
        />
      ) : (
        <View style={styles.content}>
          <Text style={styles.title}>Encontre uma arena</Text>
          <Text style={styles.subtitle}>
            Pesquise pelo nome do estabelecimento ou localização
          </Text>
        </View>
      )}

      {/* Modal de confirmação */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalBox}>
            <Ionicons name="checkmark-circle" size={70} color="#00C851" />
            <Text style={styles.modalTitle}>Reserva Confirmada!</Text>
            <Text style={styles.modalSubtitle}>
              Sua reserva em{" "}
              <Text style={{ fontWeight: "bold" }}>
                {arenaSelecionada?.nome}
              </Text>{" "}
              para {arenaSelecionada?.horario} foi registrada com sucesso!
            </Text>

            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.modalButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
    width: "100%",
    height: 55,
    borderWidth: 0.2,
    borderColor: "#575757",
  },
  searchInput: { flex: 1, fontSize: 14 },

  sortButton: {
    alignSelf: "flex-start",
    backgroundColor: "#F6F7F9",
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginBottom: 12,
    borderWidth: 0.4,
    borderColor: "#aaa",
  },
  sortText: { fontSize: 14, color: "#000" },

  cardContainer: {
    backgroundColor: "#FFF",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    overflow: "hidden",
    marginBottom: 16,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  cardImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  cardInfo: { flex: 1 },
  cardTitle: { fontSize: 16, fontWeight: "bold", color: "#000" },
  cardSubtitle: { fontSize: 14, color: "#555" },

  extraInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  extraText: {
    fontSize: 14,
    color: "#333",
  },

  // 🔵 Botão de reserva ocupa toda a base do card
  reserveButton: {
    backgroundColor: "#0099FF",
    paddingVertical: 16,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  reserveText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },

  // Modal
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalBox: {
    backgroundColor: "#FFF",
    borderRadius: 20,
    width: "80%",
    alignItems: "center",
    padding: 25,
    elevation: 10,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "700",
    marginTop: 10,
    color: "#00C851",
  },
  modalSubtitle: {
    fontSize: 15,
    color: "#333",
    textAlign: "center",
    marginVertical: 10,
  },
  modalButton: {
    backgroundColor: "#0099FF",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginTop: 10,
  },
  modalButtonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },

  content: {
    alignItems: "center",
    marginTop: 250,
  },
  title: {
    color: "#000000",
    fontWeight: "700",
    fontSize: 24,
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "500",
    color: "#00000099",
    textAlign: "center",
    paddingHorizontal: 20,
  },
});
