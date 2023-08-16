import React, {useEffect, useState} from 'react'
import {ActivityIndicator, FlatList, Image, TouchableOpacity, View} from 'react-native'
import {Stack, useRouter, useSearchParams} from 'expo-router'
import {Text, SafeAreaView} from 'react-native'
import axios from 'axios'

import {ScreenHeaderBtn, NearbyJobCard} from '../../components'
import {COLORS, icons, SIZES, FONT} from '../../constants'
import styles from '../../styles/search'

const Search = () => {
    const params = useSearchParams();
    const router = useRouter()

    const [searchResult, setSearchResult] = useState([]);
    const [searchLoader, setSearchLoader] = useState(false);
    const [searchError, setSearchError] = useState(null);
    const [page, setPage] = useState(1);
    const [location, setLocation] = useState('')

    const handleSearch = async () => {
        setSearchLoader(true);
        setSearchResult([])

        try {
            const options = {
                method: "GET",
                url: `https://jsearch.p.rapidapi.com/search`,
                headers: {
                    "X-RapidAPI-Key": 'cec96679f4msh706d06fbad5d556p13d778jsnf41437293317',
                    "X-RapidAPI-Host": "jsearch.p.rapidapi.com"
                },
                params: {
                    query: params.id,
                    page: page.toString()
                }
            };

            const response = await axios.request(options);
            setSearchResult(response.data.data);
        } catch (error) {
            setSearchError(error);
            console.log(error);
        } finally {
            setSearchLoader(false);
        }
    };
    const handlePagination = (direction) => {
        if (direction === 'left' && page > 1) {
            setPage(page - 1)
            handleSearch()
        } else if (direction === 'right') {
            setPage(page + 1)
            handleSearch()
        }
    }

    useEffect(() => {
        handleSearch()
    }, [])
    return (
        <SafeAreaView>
            <Stack.Screen
                options={{
                    headerShadowVisible: false,
                    headerStyle: {
                        backgroundColor: COLORS.white
                    },
                    headerLeft: () => (
                        <ScreenHeaderBtn
                            iconUrl={icons.back}
                            dimension='50%'
                            bgColor={COLORS.white}
                            handlePress={() => router.back()}/>
                    ),
                    headerTitle: ""
                }}
                />
            <FlatList
                style={{backgroundColor:COLORS.white, height:'100%'}}
                data={searchResult}
                renderItem={({item}) => (
                    <NearbyJobCard
                        job={item}
                        handleNavigate={() => router.push(`/job-details/${item.job_id}`)}/>
                )}
                keyExtractor={(item) => item.job_id}
                contentContainerStyle={{
                    padding: SIZES.medium,
                    rowGap: SIZES.small
                }}
                ListHeaderComponent={() => (
                    <>
                        <View style={styles.container}>
                            <Text style={styles.searchTitle} numberOfLines={1}>{params.id}</Text>
                            <Text style={styles.noOfSearchedJobs}>Job Opportunities</Text>
                        </View>
                        <View style={styles.loaderContainer}>
                            {searchLoader ? (
                                <ActivityIndicator size='large' color={COLORS.tertiary} />
                            ) : searchError && (
                                <Text style={{textAlign:'center',fontFamily:FONT.regular,color:COLORS.tertiary,fontSize:SIZES.large,paddingVertical:16}}>
                                Something went wrong</Text>
                            )}
                        </View>
                    </>
                )}
                ListFooterComponent={() => (
                    <View style={styles.footerContainer}>
                        <TouchableOpacity
                            style={styles.paginationButton}
                            onPress={() => handlePagination('left')}>
                            <Image
                                source={icons.back}
                                style={styles.paginationImage}
                                resizeMode="contain"/>
                        </TouchableOpacity>
                        <View style={styles.paginationTextBox}>
                            <Text style={styles.paginationText}>{page}</Text>
                        </View>
                        <TouchableOpacity
                            style={styles.paginationButton}
                            onPress={() => handlePagination('right')}>
                            <Image
                                source={icons.forward}
                                style={styles.paginationImage}
                                resizeMode="contain"/>
                        </TouchableOpacity>
                    </View>
                )}/>
        </SafeAreaView>
    )
}

export default Search
