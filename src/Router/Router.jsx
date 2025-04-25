import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import MainLayout from "../Layout/MainLayout";
import ErrorPages from "../Pages/ErrorPages";
import ListedBook from "../Pages/ListedBook"
import ReadPage from "../Pages/ReadPage"
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPages />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: '/listedbook',
        element: <ListedBook/>
      },
      {
        path: '/readpage',
        element : <ReadPage/>
      }
    ],
  },
]);

export default router;
