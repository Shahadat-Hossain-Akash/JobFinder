import React from 'react'
import {View, Text, TouchableOpacity, Linking, Image} from 'react-native'

import styles from './footer.style'
import {icons} from '../../../constants'

const Footer = ({url, siteUrl}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.likeBtn} onPress={() => Linking.openURL(url)}>
                <Image
                    source={icons.google}
                    resizeMode='contain'
                    style={styles.likeBtnImage}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.applyBtn} onPress={() => Linking.openURL(siteUrl)}>
                <Text style={styles.applyBtnText}>Apply for the job</Text>

            </TouchableOpacity>
        </View>
    )
}

export default Footer