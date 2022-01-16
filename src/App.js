import BottomNavbar from "./layouts/BottomNavbar";
import CenterPanel from "./layouts/CenterPanel";
import FriendActivity from "./layouts/FriendActivity";
import LeftPanel from "./layouts/LeftPanel";

function App() {
  return (
    <div className="relative grid grid-cols-3">
      <LeftPanel />
      <CenterPanel />
      <FriendActivity />
      <BottomNavbar />
    </div>
  );
}

export default App;
