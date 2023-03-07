import Navbar from "./components/Navbar";
// import Router from "./routes/Router";
import { Toaster } from "react-hot-toast";
import { lazy, Suspense } from "react";

const LazyComponent = lazy(() => import("./routes/Router"));
function App() {
  return (
    <>
      <Toaster position="top-center" />
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <LazyComponent />
      </Suspense>
    </>
  );
}

export default App;
