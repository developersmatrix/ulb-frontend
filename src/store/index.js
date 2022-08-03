import { configureStore } from "@reduxjs/toolkit";

import ptaxReducer from "./ptax/ptaxSlice";

export default configureStore({
  reducer: { ptax: ptaxReducer },
});
