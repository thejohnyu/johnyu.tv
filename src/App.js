import "./App.css";
import { HikingCollection } from "./ui-components";
import { MapView } from "@aws-amplify/ui-react-geo";
import "@aws-amplify/ui-react-geo/styles.css";
function App() {
  return (
    <div className="App">
      <HikingCollection />
      <MapView
        initialViewState={{
          latitude: 37.8,
          longitude: -122.4,
          zoom: 14,
        }}
      />
    </div>
  );
}

export default App;
