import React from 'react'
import {View, Text, TouchableOpacity, FlatList} from 'react-native'

import styles from './tabs.style'
import { SIZES } from '../../../constants'

const Tabs = ({tabs, active, setActive}) => {
    const TabButton = ({name, active, onHandleSearchType}) => {
      return(<TouchableOpacity style={styles.btn(name, active)} onPress={onHandleSearchType}>
            <Text style={styles.btnText(name, active)}>{name}</Text>
        </TouchableOpacity>)
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={tabs}
                renderItem={({item}) => (
                    <TabButton
                        name={item}
                        active={active}
                        onHandleSearchType={() => setActive(item)}/>
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item}
                contentContainerStyle={{columnGap:SIZES.medium}}
                />
        </View>
    )
}

export default Tabs