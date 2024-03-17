import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/LoginPage";
import FileUpload from "./components/FileUpload";
import RegistrationForm from "./components/RegistrationForm";
import ForgetPassword from "./components/ForgetPassword";
import ResetPassword from "./components/ResetPassword";
import { Bounce, ToastContainer } from "react-toastify";
import Output from "./components/Output";
import UserGridComponent from "./components/UserGridComponent";

function App() {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <Router>
        <Routes>
          <Route path="/" Component={LoginPage} exact />
          <Route path="/upload" Component={FileUpload} exact />
          <Route path="/register" Component={RegistrationForm} exact />
          <Route path="/verify" Component={Output} exact />
          <Route path="/forgotpassword" Component={ForgetPassword} exact />
          <Route path="/resetpassword/:token" Component={ResetPassword} exact />
          <Route path="/users" Component={UserGridComponent} exact />
        </Routes>
      </Router>
    </>
  );
}

export default App;
