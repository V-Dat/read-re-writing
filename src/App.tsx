import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routes";

function App() {
  return (
    <div className="app-root">
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.component;
          let Layout = route.layout;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
