import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JDMLogisticsWebsite from "../components/jdm-groups";

const PageLoader = ({ children }) => {
  return <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>;
};

// Router configuration
const AppRouter = () => {
  return (
    <Router>
      <PageLoader>
        <Routes>
          <Route path="/" element={<JDMLogisticsWebsite />} />
        </Routes>
      </PageLoader>
    </Router>
  );
};

export default AppRouter;
