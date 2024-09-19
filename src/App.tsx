import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ConfigProvider } from "antd";
import Register from "./pages/auth/Register";
import UserPages from "./pages/UserPages";
import Login from "./pages/auth/Login";

export default function App() {
  return (
    // <ConfigProvider >
    <ConfigProvider theme={{ token: { colorPrimary: "#007D53" } }}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/otp" element={<OtpScreen />} /> */}
          {/* <Route path="/forgot" element={<ForgotPassword />} /> */}
          
          <Route path="/*" element={<UserPages />} />
          {/* <Route path="/admin/login" element={<AdminLogin />} /> */}
          {/* <Route path="/admin/staff-password" element={<StaffPassword />} /> */}
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}
