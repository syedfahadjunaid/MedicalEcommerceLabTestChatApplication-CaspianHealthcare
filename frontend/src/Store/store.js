import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

import adminLogin from "../Slice/adminLogin";
import toastify from "../Slice/tostify";
import banner from "../Slice/bannerSlice";
import userLogin from "../Slice/userLogin";
import brand from "../Slice/allBrands";
import category from "../Slice/allCategory";

import { labs } from "../services/labs";
import { labCategories } from "../services/labCategory";
import { labTests } from "../services/labTests";
import { labTestInfoPatient } from "../services/labTestInfoPatient";

export const store = configureStore({
  reducer: {
    adminLogin: adminLogin,
    userlogin: userLogin,
    tostify: toastify,
    banner: banner,
    brand: brand,
    category: category,
    [labs.reducerPath]: labs.reducer,
    [labCategories.reducerPath]: labCategories.reducer,
    [labTests.reducerPath]: labTests.reducer,
    [labTestInfoPatient.reducerPath]: labTestInfoPatient.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      labs.middleware,
      labCategories.middleware,
      labTests.middleware,
      labTestInfoPatient.middleware,
    ]),
});

setupListeners(store.dispatch);
