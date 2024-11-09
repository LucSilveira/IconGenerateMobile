import React, { useEffect, useState } from "react";
import Svg, { SvgUri, LocalSvg, Path } from "react-native-svg";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Touchable,
  TouchableOpacity,
} from "react-native";

// Importanto o svg
import svg from "./assets/angle-left-solid.svg";
import { useNavigation } from "@react-navigation/native";

const ViewIcon = ({ route }) => {
  const navigation = useNavigation();
  const [avatar, setAvatar] = useState("");
  const [search, setSearch] = useState({});

  useEffect(() => {
    setSearch({ ...route.params });
  }, []);

  useEffect(() => {
    SearchAvatar();
  }, [search.seed]);

  const SearchAvatar = () => {
    search.seed &&
      setAvatar(
        `https://api.dicebear.com/9.x/${search.type}/svg?seed=${search.seed}`
      );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="30px" height="30px" fill="#359dd2">
            <Path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
          </Svg>
        </TouchableOpacity>

        <Text style={[styles.title, styles.titleWhite]}>
          Tipo de avatar :{" "}
          <Text style={styles.title}>{search.type && search.name}</Text>
        </Text>

        <View style={styles.containerView}>
          <Text style={styles.texts}>
            Informe o seu nome do campo abaixo para gerarmos um novo avatar de
            acordo com você!
          </Text>

          <TextInput
            onChangeText={(txt) => setSearch({ ...search, seed: txt })}
            style={styles.input}
            placeholder="Informe o seu nome"
            placeholderTextColor="#ffffff"
            keyboardType="text"
          />

          <View style={styles.container}>
            <SvgUri width="100%" height="100%" uri={avatar} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 15,
    alignContent: "center",
    justifyContent: "flex-start",

    paddingVertical: 30,
    paddingHorizontal: 20,
    backgroundColor: "#1F1F1F",
  },
  containerView: {
    flex: 2,
    gap: 15,
    paddingVertical: 30,
    paddingHorizontal: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "left",
    color: "#359dd2",
  },
  titleWhite: {
    color: "#ffffff",
  },
  texts: {
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    color: "#fafafa",
    lineHeight: 25,
  },
  input: {
    padding: 15,
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 8,
    color: "#ffffff",
    borderColor: "#298DD2",
    backgroundColor: "#2F2F2F",
  },
});

export default ViewIcon;
