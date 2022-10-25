import React from 'react';
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { Routes, Route, BrowserRouter} from "react-router-dom";
import { PrivateRoute } from "./routers/PrivateRoute";

function App() {  
  
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute path="/register" />}>
          <Route exact path="/" element={<HomePage />} />
        </Route>
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
