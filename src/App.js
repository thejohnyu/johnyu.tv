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
          latitude: 33.743281,
          longitude: -117.868986,
          zoom: 11,
        }}
      />
    </div>
  );
}

export default App;
