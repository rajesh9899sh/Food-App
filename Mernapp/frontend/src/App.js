import "./App.css";
import AppRouter from "./routes/AppRouter";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Component/Navbar";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./store/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <AppRouter />
        </BrowserRouter>
      </div>
    </Provider>
  );
};

export default App;
