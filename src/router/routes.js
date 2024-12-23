import { Routes, Route, Navigate } from 'react-router-dom';
import Home from "../view/Home";
import About from "../view/About";
import Projects from "../view/Projects";
import Knowledge from "../view/Knowledge";
import Interview from "../view/Interview";

const routes = [
  { path: "/", element: <Navigate to="/home" /> },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/knowledge",
    element: <Knowledge />,
  },
  {
    path: "/interview",
    element: <Interview />,
  }
];

const RouterConfig = () => (
  <Routes>
    {routes.map(({ path, element, children }) => (
      <Route key={path} path={path} element={element}>
        {children && children.map(({ path: childPath, element: childElement }) => (
          <Route key={childPath} path={childPath} element={childElement} />
        ))}
      </Route>
    ))}
  </Routes>
);

export default RouterConfig;