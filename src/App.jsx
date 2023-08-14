import React, { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import Loading from "./components/UI/loading";
import AppNavigation from "./navigation";

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <AppNavigation />
      <Toaster position="top-center" reverseOrder={false} />
    </Suspense>
  );
}

export default App;
