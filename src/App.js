import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { sendCartData, fetchCartData } from "./store/cart-actions";

let isInitial = true;

function App() {
  const cartState = useSelector((state) => state.cart);
  const uiState = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  useEffect(() => {
    isInitial = true;
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    dispatch(sendCartData(cartState));
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
