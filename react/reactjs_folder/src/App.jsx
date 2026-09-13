import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/MainRoutes";

import WishlistProvider from "./context/providers/WishlistProvider";

function App() {
  return (
    <WishlistProvider>
      <RouterProvider router={router} />
    </WishlistProvider>
  );
}

export default App;