import React, { useEffect } from "react";
import Home from "./pages/Home";
import { Route, Routes , Navigate} from "react-router-dom";
import Auth from "./pages/Auth";
import { getCurrentUser } from "./services/Api";
import { useDispatch, useSelector } from "react-redux";
export const serverUrl = "http://localhost:8000";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getCurrentUser(dispatch);
  }, [dispatch]);

  const { userData } = useSelector((state) => state.user);
  console.log(userData);

  return (
    <>
      <Routes>
        <Route path="/" element={userData ? <Home /> : <Navigate to= '/auth' replace />} />
        <Route path="/auth" element={ userData ? <Navigate to='/'replace /> : <Auth />} />
      </Routes>
    </>
  );
};

export default App;
