import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Home/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import LoginContainer from "./components/ComponentsContainer/LoginContainer/LoginContainer";
import { Provider } from "react-redux";
import store from "./app/store";
function App() {
  return (
    <Provider store={store}>
      <div className="">
        <Navbar />
        <LoginContainer />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/LoginPage" element={<LoginPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
