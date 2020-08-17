import React from 'react';
import { StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

const ModalSelector = (props) => {
  const { listItem, onSave } = props;
};

ModalSelector.defaultProps = {
  onSave: () => {},
  listItem: [],
};

export default ModalSelector;
