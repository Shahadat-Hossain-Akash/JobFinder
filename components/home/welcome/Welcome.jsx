import React, {useState} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Image,
    FlatList
} from 'react-native'

import styles from './welcome.style'
import {COLORS, icons, SIZES} from '../../../constants'
import {useRouter} from 'expo-router'

const Welcome = ({search, setSearch, handleClick}) => {
    const router = useRouter()
    const jobTypes = ["Full-time", "Part-time", "Contractual"]
    const [activeJobType, setJobType] = useState("Full-time")
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.userName}>Hello, User</Text>
                <Text style={styles.welcomeMessage}>Find your dream job!</Text>
            </View>

            <View style={styles.searchContainer}>
                <View style={styles.searchWrapper}>
                    <TextInput
                        style={styles.searchInput}
                        value={search}
                        onChangeText={(text) => {setSearch(text)}}
                        placeholder='Search for job'
                        placeholderTextColor={COLORS.gray2}/>
                </View>
                <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
                    <Image
                        source={icons.search}
                        resizeMode='contain'
                        style={styles.searchBtnImage}/>
                </TouchableOpacity>
            </View>

            <View style={styles.tabsContainer}>
                <FlatList
                    data={jobTypes}
                    renderItem={({item}) => (
                        <TouchableOpacity
                            style={styles.tab(activeJobType, item)}
                            onPress={() => {
                                setJobType(item),
                                router.push(`/search/${item}`)
                            }}>
                            <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
                        </TouchableOpacity>
                    )}
                      keyExtractor={item => item}
                      contentContainerStyle={{columnGap:16}}
                      showsHorizontalScrollIndicator={false}
                      horizontal
                    />
            </View>
        </View>
    )
}

export default Welcome