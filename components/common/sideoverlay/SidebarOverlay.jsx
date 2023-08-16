import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Alert,
  Animated,
} from 'react-native';

import Modal from 'react-native-modal';
import ScreenHeaderBtn from '../header/ScreenHeaderBtn';
import {COLORS, FONT, icons, images, SHADOWS, SIZES} from '../../../constants'
import Search from '../../../app/search/[id]'
import { useRouter } from 'expo-router';

const SidebarOverlay = () => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false);
  const [isTextInputModalOpen, setIsTextInputModalOpen] = useState(false);
  const [textInputValue, setTextInputValue] = useState('');
  const sidebarWidth = 160;
  const sidebarAnimation = useState(new Animated.Value(-sidebarWidth))[0];


  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleTextInputModal = () => {
    setIsTextInputModalOpen(!isTextInputModalOpen);
  };

  const handleTextInputChange = (value) => {
    setTextInputValue(value);
  };

  const handleClick = () => {
    router.push('/search/Internship')
    toggleSidebar()
  }

  const handleSubmit = () => {
    router.push(`/search/${textInputValue}`)
    setTextInputValue('')
    toggleTextInputModal()
    toggleSidebar()
  };


  return (
    <View style={styles.container}>
      <ScreenHeaderBtn iconUrl={icons.menu} dimension='50%' bgColor={COLORS.tertiary} shadow={SHADOWS.small} handlePress={toggleSidebar}/>
      <Modal
        isVisible={isOpen}
        
        onRequestClose={toggleSidebar}
        animationIn="slideInLeft"
        animationOut="slideOutLeft"
        backdropOpacity={0} style={{height:'100%'}}>
        <View style={styles.sidebarContainer}>
          <TouchableOpacity
            onPress={toggleSidebar}
            style={styles.sidebarOverlay}
          />

          <View style={styles.sidebar}>
            <Text style={styles.sidebarTitle}>Filter Search</Text>
            <TouchableOpacity style={styles.items}  onPress={handleClick}>
              <Text style={styles.sidebarItem}>Internship</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.items}  onPress={toggleTextInputModal}>
              <Text style={styles.sidebarItem}>Company</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal style={{}} visible={isTextInputModalOpen} animationType="slide">
        <View style={styles.textInputModalContainer}>
          <Text style={styles.modalTitle}>Enter your Specifics</Text>
          <TextInput
            style={styles.textInputModal}
            value={textInputValue}
            onChangeText={handleTextInputChange}
            placeholder="Type Here!"
          />
          <View
            style={styles.textButton}>
            <TouchableOpacity
              onPress={() => setIsTextInputModalOpen(false)}
              style={styles.modalButton}>
              <Text style={styles.modalButtonText}>Close</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSubmit} style={styles.modalButton}>
              <Text style={styles.modalButtonText}>Search</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  sidebarContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  sidebar: {
    width: 250,
    backgroundColor: COLORS.white,
    padding: 24,
    position: 'absolute',
    left: -6,
    top: -5,
    bottom: 0,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    borderTopRightRadius:12,
    borderBottomEndRadius:12,
    borderTopLeftRadius:12,
    borderBottomLeftRadius:12,
    elevation:20,
    shadowColor:'#C9C9C9',
    height:'100%'
  },
  sidebarTitle: {
    fontSize: 24,
    marginBottom: 24,
    color: COLORS.primary,
    fontFamily: FONT.medium,
  },
  sidebarItem: {
    width:'100%',
    fontSize: 20,
    marginBottom: 16,
    color: COLORS.primary,
    fontFamily: FONT.regular,
    paddingVertical:18,
    paddingHorizontal:16,
    elevation:12,
    backgroundColor:COLORS.white,
    borderRadius:12,
    elevation:20,
    shadowColor:'#C9C9C9',
    rowGap:16
  },
  textInputModalContainer: {
    width:'100%',
    height:250,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:COLORS.white,
    borderRadius:16,
    elevation:16,
    shadowColor:'#C9C9C9',
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 20,
    color: COLORS.primary,
    fontFamily: FONT.medium,
  },
  textInputModal: {
    width: '80%',
    height: 48,
    marginBottom: 20,
    paddingHorizontal: 15,
    borderRadius:10,
    elevation:16,
    shadowColor:'#808080',
    backgroundColor: COLORS.white
  },
  modalButton: {
    backgroundColor: COLORS.secondary,
    borderRadius: 12,
    marginBottom: 10,
    height:46,
    width:96,
    paddingVertical:10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation:12,
  },
  modalButtonText: {
    color: COLORS.white,
    fontSize: 16,
    fontFamily:FONT.regular,
  },
  sidebarOverlay: {
    flex: 1,
    flexDirection: 'row',
  },
  textButton: {
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '60%',
            },
  items:{
    width:'100%'
  }
});

export default SidebarOverlay;
