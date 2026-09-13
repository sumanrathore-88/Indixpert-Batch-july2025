import React, {
  useContext,
} from "react";

import { WishlistContext } from "../context/WishlistContext";

const Wishlist = () => {
  const {
    wishlistState,
    wishlistDispatch,
  } = useContext(WishlistContext);

  return (
    <div>
      <h2>Wishlist</h2>

      {wishlistState.wishlistItems.map(
        (item) => (
          <div key={item.id}>
            {item.title}

            <button
              onClick={() =>
                wishlistDispatch({
                  type: "REMOVE_FROM_WISHLIST",
                  payload: item.id,
                })
              }
            >
              Remove
            </button>
          </div>
        )
      )}
    </div>
  );
};

export default Wishlist;