import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { AuthContextProvider } from "./contact/AuthContext";
import Home from "./pages/Home";
import SignIn from "./pages/Signin";
import SignUp from "./pages/Signup";
import Account from "./pages/Account";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
