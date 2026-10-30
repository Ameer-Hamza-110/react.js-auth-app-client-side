
import { Route, Routes, Navigate } from "react-router-dom";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

import ProtectedRoute from "./pages/routes/ProtectedRoute";

import Dashboard from "./pages/admin/Dashboard";
import Unauthorized from "./pages/admin/Unauthorized";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ManageProjects from "./pages/admin/ManageProjects";
import MainLayout from "./layouts/MainLayout";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route element={<ProtectedRoute />}>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
      </Route>

      <Route path="/dashboard" element={<Dashboard />} />
      <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/projects" element={<ManageProjects />} />
      </Route>

      <Route path="/unauthorized" element={<Unauthorized />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
