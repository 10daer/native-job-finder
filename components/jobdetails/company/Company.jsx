import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./company.style";
import { checkImageURL } from "../../../utils";
import { icons, images } from "../../../constants";

const Company = ({ companyLogo, jobtitle, companyName, location }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image
          // source={{ uri: checkImageURL(companyLogo) }}
          source={images.profile}
          style={styles.logoImage}
        />
      </View>

      <View style={styles.jobTitleBox}>
        <View>
          <Text style={styles.jobTitle}>{jobtitle}</Text>
        </View>

        <View style={styles.companyInfoBox}>
          <Text style={styles.companyName}>{companyName} / </Text>

          <View style={styles.locationBox}>
            <Image
              source={icons.location}
              resizeMode="contain"
              style={styles.locationImage}
            />
            <Text style={styles.locationName}>{location}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Company;
