import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <StatusBar backgroundColor="#000033" style="light" />
          {/* <View style={styles.statistics_View}>
            <Text style={styles.introTitle}>Statistics</Text>
            <Text style={styles.introTitle2}>reviews Goo</Text>
          </View> */}

          <View>
            {/*=============== total Cards ============= */}
            <Text style={styles.main_title}>In total</Text>
            <View style={styles.SectionStyle}>
              <View style={styles.viewIcon}>
                <MaterialCommunityIcons
                  name="email-outline"
                  size={60}
                  color="black"
                />
              </View>

              <View
                style={{
                  flexDirection: "column",
                  marginHorizontal: 10,
                  justifyContent: "center",
                }}
              >
                <Text style={styles.title}>E-MAILS</Text>
                <View style={{ flexDirection: "row" }}>
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 18,
                      marginVertical: 4,
                    }}
                  >
                    0
                  </Text>
                  <Text style={styles.sent_emailtxt}>emails sent</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Ionicons
                    style={{ marginTop: 4 }}
                    name="md-eye-outline"
                    size={20}
                    color="black"
                  />
                  <Text style={styles.sent_emailtxt}>More Informations</Text>
                </View>
              </View>
            </View>

            <View style={styles.SectionStyle}>
              <View style={styles.viewIcon}>
                <FontAwesome name="send-o" size={50} color="black" />
              </View>

              <View
                style={{
                  flexDirection: "column",
                  marginHorizontal: 10,
                  justifyContent: "center",
                }}
              >
                <Text style={styles.title}>SMS</Text>
                <View style={{ flexDirection: "row" }}>
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 18,
                      marginVertical: 4,
                    }}
                  >
                    6
                  </Text>
                  <Text style={styles.sent_emailtxt}>SMS sent</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Ionicons name="md-eye-outline" size={20} color="black" />
                  <Text style={styles.sent_emailtxt}>More Informations</Text>
                </View>
              </View>
            </View>

            {/*=============== Current month Cards ============= */}

            <Text style={styles.main_title2}>Current month 2021-05</Text>
            <View style={styles.SectionStyle}>
              <View style={styles.viewIcon}>
                <MaterialCommunityIcons
                  name="email-outline"
                  size={60}
                  color="black"
                />
              </View>

              <View
                style={{
                  flexDirection: "column",
                  marginHorizontal: 10,
                  justifyContent: "center",
                }}
              >
                <Text style={styles.title}>E-MAILS</Text>
                <View style={{ flexDirection: "row" }}>
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 18,
                      marginVertical: 4,
                    }}
                  >
                    0
                  </Text>
                  <Text style={styles.sent_emailtxt}>emails sent</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Ionicons
                    style={{ marginTop: 4 }}
                    name="md-eye-outline"
                    size={20}
                    color="black"
                  />
                  <Text style={styles.sent_emailtxt}>More Informations</Text>
                </View>
              </View>
            </View>

            <View style={styles.SectionStyle}>
              <View style={styles.viewIcon}>
                <FontAwesome name="send-o" size={50} color="black" />
              </View>

              <View
                style={{
                  flexDirection: "column",
                  marginHorizontal: 10,
                  justifyContent: "center",
                }}
              >
                <Text style={styles.title}>E-MAILS</Text>
                <View style={{ flexDirection: "row" }}>
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 18,
                      marginVertical: 4,
                    }}
                  >
                    0
                  </Text>
                  <Text style={styles.sent_emailtxt}>SMS sent</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Ionicons
                    style={{ marginTop: 4 }}
                    name="md-eye-outline"
                    size={20}
                    color="black"
                  />
                  <Text style={styles.sent_emailtxt}>More Informations</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#edeff5",
  },

  statistics_View: {
    flexDirection: "row",
    width: "100%",
    marginTop: 60,
  },
  introTitle: {
    fontSize: 30,
    marginLeft: 30,
  },
  introTitle2: {
    color: "#3e5cbc",
    marginVertical: 12,
    textAlign: "center",
    marginLeft: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  main_title: {
    fontSize: 20,
    marginVertical: 10,
    marginHorizontal: 27,
  },
  main_title2: {
    fontSize: 20,
    marginVertical: 10,
    marginTop: 40,
    marginHorizontal: 27,
  },
  SectionStyle: {
    backgroundColor: "white",
    elevation: 5,
    flexDirection: "row",
    width: "86%",
    height: 100,
    alignSelf: "center",
    margin: 10,
  },
  viewIcon: {
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    borderRadius: 1,
    backgroundColor: "#d3d4de",
  },
  input_labal: {
    marginHorizontal: 35,
    marginTop: 20,
    fontWeight: "bold",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  sent_emailtxt: {
    marginHorizontal: 10,
    marginVertical: 5,
  },
});


export default HomeScreen;
