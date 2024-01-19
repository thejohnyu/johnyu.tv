import "./App.css";
import {
  HikingCollection,
  MarketingFooter,
  NavBarHeader,
} from "./ui-components";
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

  return (
    <div class="container">
      <header>
        <NavBarHeader width={'100%'} />
      </header>
      <nav>
        <HikingCollection />
      </nav>
      <main>
        <MapView
          initialViewState={{
            latitude: 33.743281,
            longitude: -117.868986,
            zoom: 7,
          }}
          style={{ width: "100%", height: "100%" }}
        >
          {hikes.map((hike) => (
            <Marker latitude={hike.lat} longitude={hike.long} key={hike.id} />
          ))}
        </MapView>
      </main>
      <footer>
        <MarketingFooter width={'100%'} />
      </footer>
    </div>
  );
}

export default App;
