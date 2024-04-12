import { Routes, Route, Outlet } from "react-router-dom";

import Navigation from "./routes/navigation/navigation.components";
import Home from "./routes/home/home.components";
import SignIn from "./routes/sign-in/sign-in.components";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
