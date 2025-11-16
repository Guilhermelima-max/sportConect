import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  Switch,
  ScrollView,
} from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';

export default function PerfilUsuarioScreen() {
  const [notificacoes, setNotificacoes] = useState(true);
  const [nome, setNome] = useState('Guilherme');
  const [email, setEmail] = useState('guilherme@email.com');
  const [telefone, setTelefone] = useState('(75) 99999-9999');

  return (
    <ScrollView style={styles.container}>
      {/* 🔹 Cabeçalho */}
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://via.placeholder.com/100' }}
          style={styles.avatar}
        />
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.name}>{nome}</Text>
          <Text style={styles.email}>{email}</Text>
          <TouchableOpacity>
            <Text style={styles.editPhoto}>Editar foto</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* 🔹 Informações pessoais */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Ionicons name="person-outline" size={22} color="#0099FF" />
          <Text style={styles.cardTitle}>Informações Pessoais</Text>
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Nome</Text>
          <TextInput
            style={styles.input}
            value={nome}
            onChangeText={setNome}
            placeholder="Digite seu nome"
          />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Telefone</Text>
          <TextInput
            style={styles.input}
            value={telefone}
            onChangeText={setTelefone}
            placeholder="(00) 00000-0000"
            keyboardType="phone-pad"
          />
        </View>

        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>Salvar Alterações</Text>
        </TouchableOpacity>
      </View>

      {/* 🔹 Configurações de Notificação */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Ionicons name="notifications-outline" size={22} color="#0099FF" />
          <Text style={styles.cardTitle}>Configurações de Notificação</Text>
        </View>

        <View style={styles.switchRow}>
          <Text style={styles.optionText}>Receber notificações por e-mail</Text>
          <Switch
            value={notificacoes}
            onValueChange={setNotificacoes}
            thumbColor={notificacoes ? '#0099FF' : '#ccc'}
            trackColor={{ true: '#b3e0ff', false: '#ddd' }}
          />
        </View>

        <TouchableOpacity style={styles.optionRow}>
          <Feather name="settings" size={22} color="#0099FF" />
          <Text style={styles.optionText}>Gerenciar preferências</Text>
        </TouchableOpacity>
      </View>

      {/* 🔹 Botão de Sair */}
      <TouchableOpacity style={styles.logoutButton}>
        <Ionicons name="log-out-outline" size={20} color="#FFF" />
        <Text style={styles.logoutText}>Sair da Conta</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9FB',
  },
  header: {
    backgroundColor: '#0099FF',
    alignItems: 'center',
    paddingVertical: 32,
    marginBottom: 20,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 60,
    marginBottom: 10,
    borderWidth: 3,
    borderColor: '#FFF',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
  },
  email: {
    color: '#EAF6FF',
    fontSize: 14,
  },
  editPhoto: {
    color: '#FFF',
    marginTop: 6,
    textDecorationLine: 'underline',
    fontSize: 14,
  },
  card: {
    backgroundColor: '#FFF',
    marginHorizontal: 16,
    borderRadius: 14,
    padding: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 8,
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: '#333',
  },
  field: {
    marginBottom: 12,
  },
  label: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
  },
  input: {
    backgroundColor: '#F2F4F5',
    borderRadius: 10,
    padding: 10,
    fontSize: 15,
    color: '#333',
  },
  actionButton: {
    backgroundColor: '#0099FF',
    paddingVertical: 12,
    borderRadius: 10,
    marginTop: 8,
    alignItems: 'center',
  },
  actionText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 15,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 10,
  },
  optionText: {
    fontSize: 15,
    color: '#333',
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 6,
  },
  logoutButton: {
    backgroundColor: '#FF4B4B',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
    marginHorizontal: 60,
    marginTop: 10,
    marginBottom: 40,
    paddingVertical: 12,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  logoutText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
