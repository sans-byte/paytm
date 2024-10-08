import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import PageLoading from "./Components/PageLoading";
import Protected from "./Components/Protected";
import { RecoilRoot } from "recoil";

const SignUp = lazy(() => import("./pages/SignUp"));
const Login = lazy(() => import("./pages/Login"));
const Dashboard = lazy(() => import("./pages/Dashboard"));

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Suspense fallback={<PageLoading />}>
          <Routes>
            <Route
              path="/"
              element={
                <Protected reverse={true}>
                  <Login />
                </Protected>
              }
            ></Route>
            <Route
              path="/signup"
              element={
                <Protected reverse={true}>
                  <SignUp />
                </Protected>
              }
            ></Route>
            <Route
              path="dashboard"
              element={
                <Protected>
                  <Dashboard />
                </Protected>
              }
            ></Route>
            <Route path="/transfer"></Route>
          </Routes>
        </Suspense>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
