import { createBrowserRouter } from "react-router-dom";

import Rootlayout from "../components/Rootlayout";

// Context API Pages
import Products from "../pages/Products";
import Wishlist from "../pages/Wishlist";

// Basic Pages
import About from "../pages/About";
import Counter from "../pages/Counter";
import CounterReducer from "../pages/CounterReducer";
import StaticProfileCard from "../pages/StaticProfileCard";
import DynamicProfileCard from "../pages/DynamicProfileCard";
import Todolist from "../pages/Todolist";

// React Bootstrap Pages
import RRBadges from "../pages/RBBadges";
import RRBreadcrumbs from "../pages/RRBreadcrumbs";
import RBButtons from "../pages/RBButtons";
import RBButtonGroups from "../pages/RBButtonGroups";
import RBCards from "../pages/RBCards";
import RBImages from "../pages/RBImages";
import RBListGroup from "../pages/RBListGroup";
import RBFigure from "../pages/RBFigure";
import RBPagination from "../pages/RBPagination";
import RBProgressBars from "../pages/RBProgressBars";
import RBSpinners from "../pages/RBSpinners";
import RBTables from "../pages/RBTables";
import RBAccordion from "../pages/RBAccordion";
import RBCarousel from "../pages/RBCarousel";
import RBDropdowns from "../pages/RBDropdowns";
import RBModal from "../pages/RBModal";
import RBNavbarOffcanvas from "../pages/RBNavbarOffcanvas";
import RBNavTabs from "../pages/RBNavTabs";
import RBOverlays from "../pages/RBOverlays";

// React Hook Form
import RHFRegistration from "../pages/RHFRegistration";
import RHFFormYup from "../pages/RHFFormYup";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout />,

    children: [
      // Home
      {
        index: true,
        element: <Products />,
      },

      // Context API
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "wishlist",
        element: <Wishlist />,
      },

      // Basic Pages
      {
        path: "about",
        element: <About />,
      },
      {
        path: "counter",
        element: <Counter />,
      },
      {
        path: "counter-reducer",
        element: <CounterReducer />,
      },
      {
        path: "static-profile-card",
        element: <StaticProfileCard />,
      },
      {
        path: "dynamic-profile-card",
        element: <DynamicProfileCard />,
      },
      {
        path: "todolist",
        element: <Todolist />,
      },

      // React Bootstrap
      {
        path: "rrb",
        element: <RRBadges />,
      },
      {
        path: "breadcrumbs",
        element: <RRBreadcrumbs />,
      },
      {
        path: "buttons",
        element: <RBButtons />,
      },
      {
        path: "button-groups",
        element: <RBButtonGroups />,
      },
      {
        path: "cards",
        element: <RBCards />,
      },
      {
        path: "images",
        element: <RBImages />,
      },
      {
        path: "list-group",
        element: <RBListGroup />,
      },
      {
        path: "figure",
        element: <RBFigure />,
      },
      {
        path: "pagination",
        element: <RBPagination />,
      },
      {
        path: "progress",
        element: <RBProgressBars />,
      },
      {
        path: "spinners",
        element: <RBSpinners />,
      },
      {
        path: "tables",
        element: <RBTables />,
      },
      {
        path: "accordion",
        element: <RBAccordion />,
      },
      {
        path: "carousel",
        element: <RBCarousel />,
      },
      {
        path: "dropdowns",
        element: <RBDropdowns />,
      },
      {
        path: "modal",
        element: <RBModal />,
      },
      {
        path: "navbar-offcanvas",
        element: <RBNavbarOffcanvas />,
      },
      {
        path: "nav-tabs",
        element: <RBNavTabs />,
      },
      {
        path: "overlays",
        element: <RBOverlays />,
      },

      // React Hook Form
      {
        path: "registration-form",
        element: <RHFRegistration />,
      },
      {
        path: "rhf-form-yup",
        element: <RHFFormYup />,
      },

      // 404
      {
        path: "*",
        element: <h2>Page Not Found</h2>,
      },
    ],
  },
]);