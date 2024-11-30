import { createBrowserRouter } from "react-router";
import {
  MAIN_PAGE,
  ERROR_PAGE_500,
  ERROR_PAGE_404,
  ERROR_PAGE_400,
} from "./utils/paths";
import Main from "./pages/Main";
import ErrorPage from "./pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: MAIN_PAGE,
    element: <Main />,
    errorElement: (
      <ErrorPage>
        <h1>Unknown error</h1>
      </ErrorPage>
    ),
  },
  {
    path: "*",
    element: (
      <ErrorPage>
        <h1>Error 404. Invalid link</h1>
      </ErrorPage>
    ),
  },
  {
    path: ERROR_PAGE_500,
    element: (
      <ErrorPage>
        <h1>Error 500. Server doesn't response</h1>
      </ErrorPage>
    ),
  },
  {
    path: ERROR_PAGE_400,
    element: (
      <ErrorPage>
        <h1>Error 400. Can't access geolocation</h1>
      </ErrorPage>
    ),
  },
  {
    path: ERROR_PAGE_404,
    element: (
      <ErrorPage>
        <h1>Error 404. Geolocation is not supported</h1>
      </ErrorPage>
    ),
  },
]);
