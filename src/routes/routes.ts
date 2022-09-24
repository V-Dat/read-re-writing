import { Fragment } from "react";
import { NAVIGATION_PATH } from "src/config/path";

// Layouts
import DefaultLayout, {
  DefaultLayoutProps,
} from "src/layouts/DefaultLayout/DefaultLayout";

// Pages
import Counter from "src/pages/Counter/Counter";
import Home from "src/pages/Home/Home";
import SelectMultiPage from "src/pages/SelectMultiPage/SelectMultiPage";
import TagInputExample from "src/pages/TagInputExample/TagInputExample";

// Public routes
const publicRoutes: PublicRoutes = [
  {
    path: NAVIGATION_PATH.HOME,
    name: "Home",
    component: Home,
    layout: DefaultLayout,
  },
  {
    path: NAVIGATION_PATH.SELECT_MULTI,
    name: "SELECT_MULTI",
    component: SelectMultiPage,
    layout: DefaultLayout,
  },
  {
    path: NAVIGATION_PATH.TAG_INPUT,
    name: "TAG_INPUT",
    component: TagInputExample,
    layout: DefaultLayout,
  },
  {
    path: NAVIGATION_PATH.ABOUT,
    name: "ABOUT",
    component: Counter,
    layout: Fragment,
  },
  {
    path: NAVIGATION_PATH.LOGIN,
    name: "LOGIN",
    component: Counter,
    layout: Fragment,
  },
];

const privateRoutes: any = [];

export { publicRoutes, privateRoutes };

type PublicRoutes = (
  | {
      path: string;
      name: string;
      component: () => JSX.Element;
      layout: (props: DefaultLayoutProps) => JSX.Element;
    }
  | {
      name: string;
      path: string;
      component: () => JSX.Element;
      layout: React.ExoticComponent<{
        children?: React.ReactNode;
      }>;
    }
)[];
