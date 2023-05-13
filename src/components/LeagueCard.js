import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import getColorsByLeagues from "../utils/getColorByLeague";
import { API_HOST } from "../utils/constants";

const LeagueCard = (props) => {
  const { liga, allTeams } = props;
  //console.log("league card ----------------", allTeams);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false); //setting state for Loaders

  const leagueColor = getColorsByLeagues(liga.id);

  const bgStyles = { backgroundColor: leagueColor, ...styles.bgStyles };

  const goToLeague = () => {
    console.log(`REDIRECCIONANDO A ${liga.name} de id: ${liga.id}`);
    const filteredTeams = allTeams.filter((team) => team.league === liga.id); //Filter allTeams by leagueID
    navigation.navigate("Teams", { id: liga.id, filteredTeams: filteredTeams });
  };

  return (
    <TouchableWithoutFeedback onPress={goToLeague}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={bgStyles}>
            <Text style={styles.number}>#{`${liga.id}`.padStart(2, 0)}</Text>
            <Text style={styles.name}>{liga.name}</Text>
            {loading ? (
              <Text style={styles.loadingMessage}>Loading image </Text>
            ) : null}
            {liga.id === 0 ? (
              <Image
                source={require("../assets/fifa.png")}
                style={styles.image}
              />
            ) : (
              <Image
                source={{ uri: liga.image }}
                style={styles.image}
                onLoadStart={() => setLoading(true)}
                onLoad={() => setLoading(false)}
                onError={() => setLoading(true)}
              />
            )}
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 170,
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  bgStyles: {
    flex: 1,
    borderRadius: 15,
    padding: 5,
    alignItems: "center",
    justifyContent: "flex-start",
    borderColor: "#f0dc8a",
    borderWidth: 1,
  },
  number: {
    position: "absolute",
    right: 10,
    bottom: 10,
    color: "#fff",
    fontSize: 11,
  },
  image: {
    top: 10,
    width: 105,
    height: 105,
  },
  loadingMessage: {
    color: "#fff",
    fontSize: 10,
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
  },
});

export default LeagueCard;

// // REACT SUGIERE UTILIZAR ESTA CLASS PARA CARGAR MEJOR LA LISTA -- GPT
// import React, { PureComponent } from "react";
// import {
//   StyleSheet,
//   View,
//   Text,
//   Image,
//   TouchableWithoutFeedback,
// } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import getColorsByLeagues from "../utils/getColorByLeague";

// class LeagueCard extends PureComponent {
//   state = {
//     loading: false,
//   };

//   goToLeague = () => {
//     console.log(`REDIRECCIONANDO A ${this.props.liga.name}`);
//   };

//   render() {
//     const { liga } = this.props;
//     const leagueColor = getColorsByLeagues(liga.id);
//     const bgStyles = { backgroundColor: leagueColor, ...styles.bgStyles };

//     return (
//       <TouchableWithoutFeedback onPress={this.goToLeague}>
//         <View style={styles.card}>
//           <View style={styles.spacing}>
//             <View style={bgStyles}>
//               <Text style={styles.number}>#{`${liga.id}`.padStart(2, 0)}</Text>
//               <Text style={styles.name}>{liga.name}</Text>
//               {this.state.loading ? (
//                 <Text style={styles.loadingMessage}>Loading... </Text>
//               ) : null}
//               {liga.id === 0 ? (
//                 <Image
//                   source={require("../assets/fifa.png")}
//                   style={styles.image}
//                 />
//               ) : (
//                 <Image
//                   source={{ uri: liga.image }}
//                   style={styles.image}
//                   onLoadStart={() => this.setState({ loading: true })}
//                   onLoad={() => this.setState({ loading: false })}
//                   onError={() => this.setState({ loading: true })}
//                 />
//               )}
//             </View>
//           </View>
//         </View>
//       </TouchableWithoutFeedback>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   card: {
//     flex: 1,
//     height: 170,
//   },
//   spacing: {
//     flex: 1,
//     padding: 5,
//   },
//   bgStyles: {
//     flex: 1,
//     borderRadius: 15,
//     padding: 5,
//     alignItems: "center",
//     justifyContent: "flex-start",
//     borderColor: "#f0dc8a",
//     borderWidth: 1,
//   },
//   number: {
//     position: "absolute",
//     right: 10,
//     bottom: 10,
//     color: "#fff",
//     fontSize: 11,
//   },
//   image: {
//     top: 10,
//     width: 105,
//     height: 105,
//   },
//   loadingMessage: {
//     color: "#fff",
//     fontSize: 10,
//   },
//   name: {
//     color: "#fff",
//     fontWeight: "bold",
//     fontSize: 15,
//   },
// });

// export default LeagueCard;
