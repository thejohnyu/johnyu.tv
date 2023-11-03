import "./App.css";
import { HikingCollection } from "./ui-components";
import { MapView } from "@aws-amplify/ui-react-geo";
import { DataStore } from "aws-amplify";
import { useState, useEffect } from "react";
import { Hike } from "./models";
import { Marker } from "react-map-gl";
import "@aws-amplify/ui-react-geo/styles.css";

function App() {
  const [hikes, setHikes] = useState([]);

  useEffect(() => {
    const getHikes = async () => {
      try {
        const hikes = await DataStore.query(Hike);
        console.log(
          " =-=-=--=-==-where is my fucking data=--==-=--==--==-=--=-= ",
          hikes
        );
        setHikes(hikes);
      } catch (error) {
        console.log("Error retrieving posts", error);
      }
    };

    getHikes();
  }, []);
  console.log("useEffect -=-==--=", hikes);
  return (
    <div className="App">
      <HikingCollection />
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
    </div>
  );
}

export default App;
