import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import PageLoading from "./Components/PageLoading";
import Protected from "./Components/Protected";

const SignUp = lazy(() => import("./pages/SignUp"));
const Login = lazy(() => import("./pages/Login"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const SendMoney = lazy(() => import("./pages/SendMoney"));

function App() {
  return (
    <BrowserRouter>
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
          <Route path="/sendMoney" element={<SendMoney />}></Route>
          <Route path="/transfer"></Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
