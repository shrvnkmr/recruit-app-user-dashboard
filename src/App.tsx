import CandidateDetails from "./pages/CandidateDetails";
import MenuBar from "./components/molecules/MenuBar/MenuBar";
import SideNav from "./components/molecules/SideNav/SideNav";
import "boxicons";
import "./App.css";

function App() {
  return (
    <div className="appLayout">
      <SideNav />
      <div className="contentWrapper">
        <MenuBar />
        <CandidateDetails />
      </div>
    </div>
  );
}

export default App;
