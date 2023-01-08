import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "./store/ui-slice";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";

let isInitial = true;

function App() {
  const cartState = useSelector((state) => state.cart);
  const uiState = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    const fetchData = async () => {
      dispatch(
        uiActions.setNotification({
          status: "pending",
          title: "Pending...",
          message: "Sending cart data...",
        })
      );
      const response = await fetch(
        "https://react-http-fdd39-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cartState),
        }
      );

      if (!response.ok) {
        throw Error("Something went wrong!");
      }

      dispatch(
        uiActions.setNotification({
          status: "success",
          title: "Succsess!",
          message: "Succsessfully sent cart data!",
        })
      );
    };
    fetchData().catch((err) => {
      dispatch(
        uiActions.setNotification({
          status: "error",
          title: "Error occured",
          message: "Sending cart data failed...",
        })
      );
    });
  }, [cartState, dispatch]);
  return (
    <>
      {uiState.notification && (
        <Notification
          status={uiState.notification.status}
          title={uiState.notification.title}
          message={uiState.notification.message}
        />
      )}
      <Layout>
        {uiState.isShown && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
