
import { Navigate, Route, Routes } from "react-router-dom";
import DashBoard from "./DashBoard";
import Layout from "../components/Layout";


export default function UserPages() {
  // if (!useAuth()) {
  //   return <Navigate replace to="/login" />;
  // }
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate replace to="/dashboard" />} />
        <Route path="/dashboard" element={<DashBoard />} />
       
      </Routes>
    </Layout>
  );
}



