import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, SafeAreaView, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // precisa do expo/vector-icons

const reservasAtuais = [
  {
    id: '1',
    nome: 'Super Pato Esportes',
    data: 'Seg, 24/11 - 16:00',
    descricao: 'Volei do Pato',
    imagem: 'https://via.placeholder.com/50',
  },
];

const historico = [
  {
    id: '2',
    nome: 'Super Pato Esportes',
    data: 'Seg, 27/10 - 16:00',
    descricao: 'Volei do Pato',
    imagem: 'https://via.placeholder.com/50',
  },
  {
    id: '3',
    nome: 'Super Pato Esportes',
    data: 'Seg, 20/10 - 18:00',
    descricao: 'Fute do Pato',
    imagem: 'https://via.placeholder.com/50',
  },
  {
    id: '4',
    nome: 'SportsClub',
    data: 'Seg, 20/10 - 21:00',
    descricao: 'Magic - 500',
    imagem: 'https://via.placeholder.com/50',
  },
];

export default function MinhasReservasScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [rating, setRating] = useState(0);

  const openModal = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const handleRating = (value) => {
    setRating(value);
  };

  const sendRating = () => {
    console.log(`Avaliação enviada: ${rating} estrelas para ${selectedItem?.nome}`);
    setModalVisible(false);
    setRating(0);
  };

  const CardReservaAtual = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.header}>
        <Image source={{ uri: item.imagem }} style={styles.image} />
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>{item.nome}</Text>
          <Text style={styles.subtitle}>{item.data}</Text>
        </View>
      </View>
      <Text style={styles.description}>{item.descricao}</Text>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={[styles.button, styles.leftButton]}>
          <Text style={styles.buttonText}>Ajuda</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.rightButton]}>
          <Text style={styles.buttonText}>Cancelar reserva</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const CardHistorico = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.header}>
        <Image source={{ uri: item.imagem }} style={styles.image} />
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>{item.nome}</Text>
          <Text style={styles.subtitle}>{item.data}</Text>
        </View>
      </View>
      <Text style={styles.description}>{item.descricao}</Text>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={() => openModal(item)}>
          <Text style={styles.buttonText}>Avaliar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.sectionTitle}>Minhas Reservas</Text>
      <FlatList
        data={reservasAtuais}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CardReservaAtual item={item} />}
      />

      <Text style={styles.sectionTitle}>Histórico</Text>
      <FlatList
        data={historico}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CardHistorico item={item} />}
      />

      {/* 🔹 Modal de avaliação */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Avalia sua experiência</Text>

            {selectedItem && (
              <View style={styles.modalHeader}>
                <Image source={{ uri: selectedItem.imagem }} style={styles.image} />
                <View>
                  <Text style={styles.title}>{selectedItem.nome}</Text>
                  <Text style={styles.subtitle}>{selectedItem.data}</Text>
                </View>
              </View>
            )}

            {/* Estrelas */}
            <View style={styles.starContainer}>
              {[1, 2, 3, 4, 5].map((star) => (
                <TouchableOpacity key={star} onPress={() => handleRating(star)}>
                  <Ionicons
                    name={star <= rating ? 'star' : 'star-outline'}
                    size={36}
                    color={star <= rating ? '#FF8000' : '#ccc'}
                  />
                </TouchableOpacity>
              ))}
            </View>

            <TouchableOpacity style={styles.modalButton} onPress={sendRating}>
              <Text style={styles.modalButtonText}>Enviar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 12,
    marginTop: 40,
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
  },
  description: {
    fontSize: 14,
    marginBottom: 12,
  },
  buttonRow: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    backgroundColor: '#0099FF',
    paddingVertical: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftButton: {
    borderRightWidth: 1,
    borderRightColor: '#807a7a46',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
  // 🔹 Estilos do modal
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  modalContainer: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    width: 280,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  starContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: '#0099FF',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  modalButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
