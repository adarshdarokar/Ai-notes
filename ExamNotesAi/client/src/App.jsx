import React, { useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Notes from "./pages/Notes";
import Pricing from "./pages/Pricing";
import HistoryPage from "./pages/History"; // 🔥 renamed safely

import { getCurrentUser } from "./services/Api";

export const serverUrl = "http://localhost:8000";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getCurrentUser(dispatch);
  }, [dispatch]);

  const { userData } = useSelector((state) => state.user);

  return (
    <Routes>
      
      <Route
        path="/"
        element={userData ? <Home /> : <Navigate to="/auth" replace />}
      />

      <Route
        path="/auth"
        element={!userData ? <Auth /> : <Navigate to="/" replace />}
      />

      <Route
        path="/history"
        element={userData ? <HistoryPage /> : <Navigate to="/auth" replace />}
      />

      <Route
        path="/notes"
        element={userData ? <Notes /> : <Navigate to="/auth" replace />}
      />

      <Route
        path="/pricing"
        element={userData ? <Pricing /> : <Navigate to="/auth" replace />}
      />

    </Routes>
  );
};

export default App;