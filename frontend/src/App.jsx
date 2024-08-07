import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import PageLoading from "./Components/PageLoading";
const SignUp = lazy(() => import("./pages/SignUp"));
const Login = lazy(() => import("./pages/Login"));
const Dashboard = lazy(() => import("./pages/Dashboard"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoading />}>
        <Routes>
          <Route path="signin" element={<Login />}></Route>
          <Route path="signup" element={<SignUp />}></Route>
          <Route path="dashboard" element={<Dashboard />}></Route>
          <Route path="transfer"></Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
