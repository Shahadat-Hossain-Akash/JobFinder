import {View, Text, TouchableOpacity, Image} from "react-native";

import styles from "./nearbyjobcard.style";
import {checkImageURL} from "../../../../utils"
import {COLORS, icons} from '../../../../constants'
import JobPost from "./JobPost";

const NearbyJobCard = ({job, handleNavigate}) => {
    return (
        <View
            style={{
                paddingLeft: 8,
                paddingRight: 8
            }}>
            <TouchableOpacity style={styles.container} onPress={handleNavigate}>
                <TouchableOpacity style={styles.logoContainer}>
                    <Image
                        source={checkImageURL(job.employer_logo)
                            ? {
                                uri: job.employer_logo
                            }
                            : icons.jobs}
                        resizeMode='contain'
                        style={styles.logoImage}/>
                </TouchableOpacity>

                <View style={styles.textContainer}>
                    <Text style={styles.companyName} numberOfLines={1}>{
                            job
                                ?.employer_name
                        }</Text>
                    <Text style={styles.jobName} numberOfLines={1}>
                        {
                            job
                                ?.job_title
                        }
                    </Text>

                    <Text style={styles.jobType}>{
                            job
                                ?.job_employment_type
                        }</Text>
                    <View
                        style={styles.salaryDate}>
                        <Text style={styles.jobSalary}>
                            <Text
                                style={{
                                    color: COLORS.primary
                                }}>Salary: </Text>
                            {
                                job
                                    ?.job_max_salary && job
                                        ?.job_min_salary !== null
                                            ? +job
                                                ?.job_max_salary + ' - ' + job
                                                    ?.job_min_salary
                                                    : <Text
                                                            style={{
                                                                textTransform: "uppercase"
                                                            }}>{"TBA"}</Text>
                            }</Text>
                        <Text style={styles.jobPost}>{
                                JobPost(
                                    job
                                        ?.job_posted_at_datetime_utc
                                )
                            }</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default NearbyJobCard;