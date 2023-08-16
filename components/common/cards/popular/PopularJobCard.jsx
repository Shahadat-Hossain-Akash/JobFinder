import React from 'react'
import { View, Text, TouchableOpacity,Image } from 'react-native'

import styles from './popularjobcard.style'
import { checkImageURL } from '../../../../utils'
import {icons} from '../../../../constants'
const PopularJobCard = ({item, selectedJob, handleCardPress}) => {
  return (
    <View style={{paddingLeft:8,paddingRight:8}}>
    <TouchableOpacity style={styles.container(selectedJob,item)} onPress={() => handleCardPress(item)}>
      <TouchableOpacity style={styles.logoContainer(selectedJob,item)}>
        <Image source={ checkImageURL(item.employer_logo) ? {uri:item.employer_logo} : icons.jobs} resizeMode='contain' style={styles.logoImage}/>
        
      </TouchableOpacity>
      <Text style={styles.companyName(selectedJob,item)} numberOfLines={1}>{item.employer_name}</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob,item)} numberOfLines={1}>{item.job_title}</Text>
        <Text style={styles.location(selectedJob,item)} numberOfLines={1}>{item.job_country}</Text>
      </View>
    </TouchableOpacity>
    </View>
  )
}

export default PopularJobCard