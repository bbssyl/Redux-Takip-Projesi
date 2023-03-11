import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import Router from "./routes/Router";

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
