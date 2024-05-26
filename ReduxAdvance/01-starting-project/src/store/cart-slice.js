import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    changed: false
  },
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },

    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      state.totalQuantity++;
      state.changed = true;

      if (!existingItem) {
        // we should not manipulate the state directly, but here redux will change the state in immutable way
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          name: newItem.title,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      }
    },

    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      state.totalQuantity--;
      state.changed = true;

      if (existingItem.quantity === 1)
        state.items = state.items.filter((item) => item.id !== id);
      else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
    },
  },
});

// 2. Placeing sideeffect code in action creator function
export const sendCartData = (cartData) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending",
        message: "Sending cart data",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://react-http-64a6.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cartActions.items,
            totalQuantity: cartActions.totalQuantity
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
    };

    try {
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success",
          message: "Sent cart data successfully",
        })
      );
    } catch (err) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed",
        })
      );
    }
  };
};

export const fetchCartData = () => {
  return async dispatch => {

    const fetchData = async () => {
      const response = await fetch(
        "https://react-http-64a6.firebaseio.com/cart.json");
      
      if(!response.ok) {
        throw new Error('Could not fetch data');
      }
      const data = await response.json();
      return data;
    }

    try{
      const cartData = await fetchData();
      dispatch(replaceCart({items: cartData.items || [],
        totalQuantity: cartData.totalQuantity
      }));
    }catch(err) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching cart data failed",
        })
      );     
    }

  }
}

export const cartActions = cartSlice.actions;

export default cartSlice;
