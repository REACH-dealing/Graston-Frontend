import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Layout/Navbar";
import HomePage from "./pages/Home/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import RegisterAsPatient from "./pages/RegisterPage/RegisterAsPatient";
import RegisterAsDoctor from "./pages/RegisterPage/RegisterAsDoctor";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword(phoneNumber)";
import ForgotPasswordEmail from "./pages/ForgotPassword/ForgotPasswordEmail";
import VerifayPhone from "./pages/ForgotPassword/VerifayPhone";
import VerifayEmail from "./pages/ForgotPassword/VerifayEmail";
import CreateNewPassword from "./pages/RestPassword/CreateNewPassword";
import RestPassword from "./pages/RestPassword/RestPassword";
import { Provider } from "react-redux";
import store from "./app/store";
function App() {
  return (
    <Provider store={store}>
      <div className="">
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/LoginPage" element={<LoginPage />} />
            <Route path="/RegisterPage" element={<RegisterPage />} />
            <Route path="/RegisterAsPatient" element={<RegisterAsPatient />} />
            <Route path="/RegisterAsDoctor" element={<RegisterAsDoctor />} />
            <Route path="/ForgotPassword" element={<ForgotPassword />} />
            <Route
              path="/ForgotPasswordEmail"
              element={<ForgotPasswordEmail />}
            />
            <Route path="/VerifayEmail" element={<VerifayEmail />} />
            <Route path="/VerifayPhone" element={<VerifayPhone />} />
            <Route path="/CreateNewPassword" element={<CreateNewPassword />} />
            <Route path="/RestPassword" element={<RestPassword />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
