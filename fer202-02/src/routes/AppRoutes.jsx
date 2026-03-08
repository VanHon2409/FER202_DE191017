import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginForm from "../pages/LoginForm";
import AccountList from "../pages/AccountList";
import AccountDetail from "../pages/AccountDetail";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/accounts" element={<AccountList />} />
        <Route path="/accounts/:id" element={<AccountDetail />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;