import { Link, Outlet, useRoutes } from "react-router-dom";

const RouteAsObj = () => {
  let element = useRoutes([
    { path: "/", element: <Route1 /> },
    { path: "/route2", element: <Route2 /> },
    {
      path: "/route3",
      element: <Route3 />,
      children: [
        { path: "child1", element: <Child1 /> },
        { path: "child2", element: <Child2 /> },
      ],
    },
    { path: "*", element: <NotFound /> },
  ]);

  return (
    <div>
      <ul>
        <li>
          <Link to={""}>Route 1</Link>
        </li>
        <li>
          <Link to={"route2"}>Route 2</Link>
        </li>
        <li>
          <Link to={"route3"}>Route 3</Link>
        </li>
      </ul>
      {element}
    </div>
  );
};

const Route1 = () => {
  return <h1>Route 1</h1>;
};

const Route2 = () => {
  return <h1>Route 2</h1>;
};

const Route3 = () => {
  return (
    <div>
      <h1>Route 3</h1>
      <ul>
        <li>
          <Link to={"child1"}>Child 1</Link>
        </li>
        <li>
          <Link to={"child2"}>Child 2</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

const Child1 = () => {
  return <h1>Child 1</h1>;
};

const Child2 = () => {
  return <h1>Child 2</h1>;
};

const NotFound = () => {
  return <h1>Not Found</h1>;
};

export default RouteAsObj;
