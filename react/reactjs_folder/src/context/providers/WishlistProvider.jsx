

import { useReducer } from "react";
import { WishlistContext } from "../WishlistContext";
import { WishlistReducer } from "../reducers/WishlistReducer";

const WishlistProvider = ({ children }) => {
  const [wishlistState, wishlistDispatch] = useReducer(
    WishlistReducer,
    {
      userId: 1,
      wishlistItems: [],
    }
  );

  return (
    <WishlistContext.Provider
      value={{
        wishlistState,
        wishlistDispatch,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistProvider;