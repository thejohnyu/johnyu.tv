import "./App.css";
import { HikingCollection } from "./ui-components";
import { MapView } from "@aws-amplify/ui-react-geo";
import { DataStore } from "aws-amplify";
import { useState, useEffect } from "react";
import { Hike } from "./models";
import { Marker } from "react-map-gl";
import "@aws-amplify/ui-react-geo/styles.css";
import { Grid, View, useTheme } from "@aws-amplify/ui-react";

function App() {
  const [hikes, setHikes] = useState([]);
  const { tokens } = useTheme();
  useEffect(() => {
    const getHikes = async () => {
      const hikes = await DataStore.query(Hike);
      setHikes(hikes);
    };

    getHikes();
  }, []);
  return (
    <Grid templateColumns="250px 1fr" templateRows="100vh">
      <View backgroundColor={tokens.colors.blue[20]}></View>
      <View>
        <MapView
          initialViewState={{
            latitude: 33.743281,
            longitude: -117.868986,
            zoom: 7,
          }}
        >
          {hikes.map((hike) => (
            <Marker latitude={hike.lat} longitude={hike.long} key={hike.id} />
          ))}
        </MapView>
      </View>
    </Grid>
  );
}

export default App;
