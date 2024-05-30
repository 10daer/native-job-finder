import { View, Text, FlatList, TouchableOpacity } from "react-native";

import styles from "./tabs.style";
import { SIZES } from "../../../constants";

const TabButton = ({ name, activeTab, handleClick }) => {
  return (
    <TouchableOpacity onPress={handleClick} style={styles.btn(name, activeTab)}>
      <Text style={styles.btnText(name, activeTab)}>{name}</Text>
    </TouchableOpacity>
  );
};

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={tabs}
        renderItem={({ item }) => (
          <TabButton
            activeTab={activeTab}
            name={item}
            handleClick={() => setActiveTab(item)}
          />
        )}
        horizontal
        keyExtractor={(item) => item}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ columnGap: SIZES.xSmall / 10 }}
      />
    </View>
  );
};

export default Tabs;
