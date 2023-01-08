import { cartActions } from "./cart";
import { uiActions } from "./ui-slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-http-fdd39-default-rtdb.firebaseio.com/cart.json"
      );

      if (!response.ok) {
        throw Error("Failed to fetch cart data");
      }

      const data = await response.json();

      return data;
    };

    try {
      const cartData = await fetchData();

      dispatch(cartActions.uploadCart(cartData));
    } catch (err) {
      dispatch(
        uiActions.setNotification({
          status: "error",
          title: "Error occured",
          message: "Fetching cart data failed...",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.setNotification({
        status: "pending",
        title: "Pending...",
        message: "Sending cart data...",
      })
    );
    const fetchData = async () => {
      const response = await fetch(
        "https://react-http-fdd39-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw Error("Something went wrong!");
      }
    };

    try {
      await fetchData();
      dispatch(
        uiActions.setNotification({
          status: "success",
          title: "Succsess!",
          message: "Succsessfully sent cart data!",
        })
      );
    } catch (err) {
      dispatch(
        uiActions.setNotification({
          status: "error",
          title: "Error occured",
          message: "Sending cart data failed...",
        })
      );
    }
  };
};
