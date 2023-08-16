import {
    View,
    Text,
    TouchableOpacity,
    ActivityIndicator,
    SafeAreaView,
    RefreshControl,
    Share
} from "react-native";
import {Stack, useRouter, useSearchParams} from 'expo-router'
import {useState, useCallback} from 'react'
import {
    Company,
    JobAbout,
    JobFooter,
    JobTabs,
    ScreenHeaderBtn,
    Specifics
} from "../../components";
import {COLORS, FONT, icons, SIZES} from "../../constants";
import useFetch from "../../hook/useFetch";
import {ScrollView} from "react-native-gesture-handler";
import Skills from "../../components/jobdetails/skills/Skills";

const JobDetails = () => {
    const params = useSearchParams()
    const router = useRouter()
    const tabs = ["About","Qualifications","Skills"]
    const [refreshing, setRefreshing] = useState(false)
    const [active, setActive] = useState(tabs[0])

    const onRefresh = useCallback(() => {
        setRefreshing(true)
        refetch
        setRefreshing(false)
    },[])
    const displayTabContent = () => {
      switch(active){
        case "About":
          return(<JobAbout item={data[0].job_description ?? "Nothing to display"}/>)
        case "Qualifications":
          return(<Specifics title='Qualifications' points={data[0].job_highlights?.Qualifications ?? ['N/A']}/>)
        case "Skills":
          return(<Specifics title='Responsibilities' points={data[0].job_highlights?.Responsibilities  ?? ['N/A']}/>)
        default:
          break
      }
        
    }
    const onShare = async () => {
        try {
          const result = await Share.share({
            title: 'Job Link',
            message: `${data[0]?.job_google_link ?? 'https://careers.google.com/jobs/results'}`, 
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          alert(error.message);
        }
      };

    const {data, loading, error, refetch} = useFetch(
        'job-details',
        {job_id: params.id}
    )
    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: COLORS.white
            }}>
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: COLORS.white
                    },
                    headerBackVisible: false,
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn
                            iconUrl={icons.back}
                            dimension='50%'
                            bgColor={COLORS.white}
                            handlePress={() => router.back()}/>
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl={icons.share} dimension='50%' bgColor={COLORS.white} handlePress={onShare}/>
                    ),
                    headerTitleAlign: 'center',
                    headerTitle: 'Job Description',
                    headerTitleStyle: {
                        fontFamily: FONT.medium,
                        color: COLORS.primary
                    }
                }}/>
            <>
                <ScrollView
                showsVerticalScrollIndicator={false}
                refreshControl={<RefreshControl refreshing = {
                    refreshing
                }
                onRefresh = {
                    onRefresh
                } />}>
                {
                    loading
                        ? (<ActivityIndicator size="large" color="#F66042"/>)
                        : error
                            ? (<Text>"Something went wrong!"</Text>)
                            : data.length === 0
                                ? (<Text>Nothing to display!!</Text>)
                                : (
                                    <View
                                        style={{
                                            padding: SIZES.medium,
                                            paddingBottom: 100
                                        }}>
                                        <Company
                                            companyLogo={data[0].employer_logo}
                                            jobTitle={data[0].job_title}
                                            companyName={data[0].employer_name}
                                            location={data[0].job_country}/>
                                        <JobTabs tabs={tabs} active={active} setActive={setActive}/>
                                        {displayTabContent()}
                                    </View>

                                )
                }
            </ScrollView>
            <JobFooter url={data[0]?.job_google_link ?? 'https://careers.google.com/jobs/results'} siteUrl={data[0]?.job_apply_link ?? 'https://careers.google.com/jobs/results'}/>
        </>
    </SafeAreaView>
    )
}

export default JobDetails
