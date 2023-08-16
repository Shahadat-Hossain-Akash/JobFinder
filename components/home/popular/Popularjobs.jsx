import {View, Text, TouchableOpacity, ActivityIndicator, FlatList} from 'react-native'

import styles from './popularjobs.style'
import {useRouter} from 'expo-router'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'
import useFetch from '../../../hook/useFetch'
import {COLORS, FONT, SIZES} from '../../../constants'
import {useState} from "react";

const Popularjobs = () => {
    router = useRouter()
    //const isLoading = false const error = false

    const {data, loading, error} = useFetch('search', {
        query: "React Developer",
        num_pages: 1
    })
    const [selectedJob, setSelectedJob] = useState();

    const handleCardPress = (item) => {
        router.push(`/job-details/${item.job_id}`);
        setSelectedJob(item.job_id);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Popular jobs</Text>
                <TouchableOpacity>
                    {/*<Text style={styles.headerBtn}>View all</Text>*/}
                </TouchableOpacity>
            </View>

            <View style={styles.cardsContainer}>
                {
                    loading
                        ? (<ActivityIndicator size="large" color="#F66042"/>)
                        : error
                            ? (<Text style={{textAlign:'center',fontFamily:FONT.regular,color:COLORS.tertiary,fontSize:SIZES.large,paddingVertical:16}}>Something went wrong</Text>)
                            : (
                                <FlatList
                                    data={data.slice(0,5)}
                                    renderItem={({item}) => (<PopularJobCard item={item} selectedJob={selectedJob} handleCardPress={handleCardPress}/>)}
                                    keyExtractor={item => item
                                        ?.job_id}
                                    contentContainerStyle={{
                                        columnGap: 16
                                    }}
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                    />
                                    
                            )
                }
            </View>

        </View>
    )
}

export default Popularjobs