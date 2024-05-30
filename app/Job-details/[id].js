import {
  Text,
  View,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import { useState, useCallback } from "react";
import {
  useRouter,
  Stack,
  useGlobalSearchParams as useSearchParams,
} from "expo-router";
import { COLORS, icons, SIZES } from "../../constants";
import {
  JobAbout,
  JobFooter,
  JobTabs,
  Company,
  ScreenHeaderBtn,
  Specifics,
} from "../../components";
import useFetch from "../../hook/useFetch";

const tabs = ["Abouts", "Qualifications", "Responsibilities"];

const JobDetails = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const router = useRouter();
  const params = useSearchParams();
  const { data, isLoading, error, refetch } = useFetch("job-details", {
    job_id: params.id,
  });
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch();
    setRefreshing(false);
  }, []);

  function displayTabContent(activeTab) {
    switch (activeTab) {
      case "Abouts":
        return <JobAbout info={data.job_description ?? "No data provided"} />;

      case "Qualifications":
        return (
          <Specifics
            title="Qualifications"
            points={data.job_highlights?.Qualifications ?? ["N / A"]}
          />
        );

      case "Responsibilities":
        return (
          <Specifics
            title="Descriptions"
            points={data.job_highlights?.Responsibilities ?? ["N / A"]}
          />
        );

      default:
        break;
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerTitle: "",
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimensions="60%"
              handlePress={() => router.back()}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={icons.share} dimensions="60%" />
          ),
        }}
      ></Stack.Screen>

      <>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {isLoading ? (
            <ActivityIndicator size="large" colors={COLORS.primary} />
          ) : error ? (
            <Text> Something went wrong </Text>
          ) : data.length === 0 ? (
            <Text> No data found </Text>
          ) : (
            <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
              <Company
                companyLogo={data.employer_logo}
                jobtitle={data.job_title}
                companyName={data.employer_name}
                location={data.job_country}
              />
              <JobTabs
                tabs={tabs}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />

              {displayTabContent(activeTab)}
              <JobFooter url={data.job_apply_link} />
            </View>
          )}
        </ScrollView>
      </>
    </SafeAreaView>
  );
};

export default JobDetails;
