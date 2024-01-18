import "./App.css";
import { HikingCollection } from "./ui-components";
import { MapView } from "@aws-amplify/ui-react-geo";
import { DataStore } from "aws-amplify";
import { useState, useEffect } from "react";
import { Hike } from "./models";
import { Marker } from "react-map-gl";
import "@aws-amplify/ui-react-geo/styles.css";
import {
  Grid,
  View,
  useTheme,
  Button,
  SearchField,
  Flex,
} from "@aws-amplify/ui-react";

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
  console.log('=--==-=-=->>>', hikes)
  return (
    <Grid templateColumns="1fr 1fr" templateRows="100vh">
      <div style={{ marginTop: '60px'}}>
        <HikingCollection />
      </div>
      <View>
        <Grid
          justifyContent="center"
          alignItems="center"
          templateColumns="60% 40%"
          templateRows="60px"
          backgroundColor={tokens.colors.blue[30]}
        >
          <Flex justifyContent="center">
            <View>
              <Button
                size="small"
                loadingText=""
                onClick={() => alert("hello")}
              >
                Map
              </Button>
              <Button
                size="small"
                loadingText=""
                onClick={() => alert("hello")}
              >
                Satelite
              </Button>
              <Button
                size="small"
                loadingText=""
                onClick={() => alert("hello")}
              >
                Grid
              </Button>
            </View>
          </Flex>
          <Flex justifyContent="center">
            <View>
              <SearchField
                label="Search"
                placeholder="Search"
                size="small"
                hasSearchButton={false}
                hasSearchIcon={true}
              />
            </View>
          </Flex>
        </Grid>
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
