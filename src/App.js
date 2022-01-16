import BottomNavbar from "./layouts/BottomNavbar";
import LeftPanel from "./layouts/LeftPanel";

function App() {
  return (
    <div className="relative h-screen bg-spotify-black">
      <LeftPanel />
      <BottomNavbar />
    </div>
  );
}

export default App;
