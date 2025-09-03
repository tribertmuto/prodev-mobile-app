import { View, Text, StyleSheet, FlatList } from 'react-native';
import React from 'react';

const messages = [
  { id: '1', from: 'John Doe', preview: 'Hi, I\'m interested in your property...', time: '2h ago' },
  { id: '2', from: 'Jane Smith', preview: 'Is this property still available?', time: '1d ago' },
  { id: '3', from: 'Acme Realty', preview: 'Your booking has been confirmed!', time: '2d ago' },
];

const InboxScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.messageContainer}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{item.from.charAt(0)}</Text>
      </View>
      <View style={styles.messageContent}>
        <Text style={styles.sender}>{item.from}</Text>
        <Text style={styles.preview} numberOfLines={1}>{item.preview}</Text>
      </View>
      <Text style={styles.time}>{item.time}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inbox</Text>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  list: {
    paddingBottom: 16,
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#34967C',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  messageContent: {
    flex: 1,
  },
  sender: {
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 4,
  },
  preview: {
    color: '#666',
    fontSize: 14,
  },
  time: {
    color: '#999',
    fontSize: 12,
  },
});

export default InboxScreen;
