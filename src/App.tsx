import Navbar from "./components/app/Navbar";
import Portfolio from "./components/app/Portfolio";
import { Sidebar } from "./components/app/Sidebar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="flex bg-gray-50">
        <div className="w-[20%]">
          <Sidebar />
        </div>
        <div className="w-[80%]">
          <Portfolio />
        </div>
      </div>
    </div>
  );
}

export default App;
