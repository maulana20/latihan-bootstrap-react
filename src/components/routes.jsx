import { Routes, Route } from "react-router-dom";
import Home from '../modules/home';
import Notfound from '../modules/notfound';
import ResetPassword from '../modules/auth/reset-password';

const AppRoutes = () => {
  return (
    <div className="content">
      <div className="content__section-title"></div>
      <div className="content__section-content container-fluid">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth/reset-password" element={<ResetPassword />} />
          <Route path="/*" element={<Notfound />} />
        </Routes>
      </div>
    </div>
  );
}

export default AppRoutes;
