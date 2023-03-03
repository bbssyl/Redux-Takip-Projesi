import Navbar from "./components/Navbar";
import Router from "./routes/Router";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster position="top-center" />
      <Navbar />
      <Router />
    </>
  );
}

export default App;
