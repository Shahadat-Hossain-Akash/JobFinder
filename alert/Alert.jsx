import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import AwesomeAlert from 'react-native-awesome-alerts';

const Alert = () => {
    const [alert, setAlert] = useState(false)

    return (

        <AwesomeAlert
          show={alert}
          showProgress={false}
          title=""
          message="An error occured!!!"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={true}
          showConfirmButton={true}
          cancelText="No, cancel"
          confirmButtonColor="#233158"
          onCancelPressed={() => setAlert(false)}
        />)
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f4f4f4',
    },
    button: {
      margin: 10,
      paddingHorizontal: 10,
      paddingVertical: 7,
      borderRadius: 5,
      backgroundColor: "#AEDEF4",
    },
    text: {
      color: '#fff',
      fontSize: 15
    }
  });

export default Alert
