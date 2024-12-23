import { Routes, Route, Navigate } from 'react-router-dom';
import Home from "../view/Home";
import About from "../view/About";
import Projects from "../view/Projects";
import Knowledge from "../view/Knowledge";
import Interview from "../view/Interview";
import ProjectDetail from "../view/Projects/detail";
import KnowledgeDetail from "../view/Knowledge/detail";
import InterviewDetail from "../view/Interview/detail";

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
    path: "/projects/:id",
    element: <ProjectDetail />,
  },
  {
    path: "/knowledge",
    element: <Knowledge />,
  },
  {
    path: "/knowledge/:id",
    element: <KnowledgeDetail />,
  },
  {
    path: "/interview",
    element: <Interview />,
  },
  {
    path: "/interview/:id",
    element: <InterviewDetail />,
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