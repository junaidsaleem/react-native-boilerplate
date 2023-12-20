import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import useColorStore from '~store/useColorStore';

const Contacts = () => {
  const {colors} = useColorStore();
  return (
    <ScrollView
      style={[styles.container, {backgroundColor: colors.background}]}>
      <View style={styles.headerContainer}>
        {/* Background Image or SVG for the Header */}
      </View>
      <View style={styles.profileSection}>
        <Image
          source={{
            uri: 'https://www.rollingstone.co.uk/wp-content/uploads/sites/2/2021/12/Cillian-Murphy-Peaky-Blinders.jpg',
          }}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Richa Darly</Text>
        <Text style={styles.profileLocation}>London, UK</Text>
        <Text style={styles.profileTitle}>Product Designer</Text>
        <TouchableOpacity style={styles.followButton}>
          <Text style={styles.followButtonText}>Follow</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.statsSection}>
        {/* Repeat this block for 'FOLLOWER' and 'FOLLOWING' */}
        <View style={styles.statBlock}>
          <Text style={styles.statValue}>257</Text>
          <Text style={styles.statLabel}>POSTS</Text>
        </View>
        {/* ... */}
      </View>
      <View style={styles.skillsSection}>
        <Text style={styles.skillsTitle}>Skills</Text>
        <View style={styles.skillRow}>
          {/* Repeat this block for each skill */}
          <View style={styles.skillItem}>
            <Image
              source={{
                uri: 'https://www.rollingstone.co.uk/wp-content/uploads/sites/2/2021/12/Cillian-Murphy-Peaky-Blinders.jpg',
              }}
              style={styles.skillIcon}
            />
            <Text style={styles.skillText}>Adobe Photoshop</Text>
          </View>
          {/* ... */}
        </View>
        {/* Additional rows as needed */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: '60%',
  },
  headerContainer: {
    // Add your styles for the header background
  },
  profileSection: {
    alignItems: 'center',
    marginTop: -50, // Adjust based on the header background
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: '#fff',
  },
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 8,
  },
  profileLocation: {
    fontSize: 16,
    color: '#666',
  },
  profileTitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
  },
  followButton: {
    marginTop: 12,
    backgroundColor: '#ff3b30',
    paddingVertical: 8,
    paddingHorizontal: 32,
    borderRadius: 20,
  },
  followButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
  statsSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
  },
  statBlock: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
  },
  skillsSection: {
    alignItems: 'center',
    marginTop: 20,
  },
  skillsTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginBottom: 16,
  },
  skillRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 16,
  },
  skillItem: {
    alignItems: 'center',
  },
  skillIcon: {
    // Your icon size
  },
  skillText: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  // Add more styles as needed
});

export default Contacts;
