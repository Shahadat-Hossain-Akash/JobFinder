import React, {useEffect, useState} from 'react'
import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, ActivityIndicator, FlatList,Image } from "react-native";

import styles from "./nearbyjobs.style";
import { COLORS } from "../../../constants";
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard";
import useFetch from "../../../hook/useFetch";
import {FONT, SIZES,icons} from '../../../constants'
import axios from 'axios'

const Nearbyjobs = () => {
  const router = useRouter();
  const [page, setPage] = useState(1);

  {/*const { data, isLoading, error } = useFetch("search", {
    query: "React Native developer",
    num_pages: "1",
  })*/}

  const { data, isLoading, error, refetch } = useFetch("search", {
    query: "React Native developer",
    num_pages: page.toString(),
  })

  const handleClick =  () => {

      refetch()

        
  }


  const handlePagination = (direction) => {
    if (direction === 'left' && page > 1) {
        setPage(page - 1)
        handleClick()
    } else if (direction === 'right') {
        setPage(page + 1)
        handleClick()
    }
}

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby jobs</Text>
        <TouchableOpacity>
          {/*<Text style={styles.headerBtn}>View all</Text>*/}
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size='large' color={COLORS.tertiary} />
        ) : error ? (
          <Text style={{textAlign:'center',fontFamily:FONT.regular,color:COLORS.tertiary,fontSize:SIZES.large,paddingVertical:16}}>Something went wrong</Text>
        ) : (
          
          {/*data.slice(0,5)?.map((job) => (
            <NearbyJobCard
              job={job}
              key={`nearby-job-${job.job_id}`}
              handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
            />
          ))*/},

            
            data.slice(0,5)?.map((job) => (
            <NearbyJobCard
              job={job}
              key={`nearby-job-${job.job_id}`}
              handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
            />
            
          ))
                


          
        )}
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
      </View>
    </View>
  );
};

export default Nearbyjobs;