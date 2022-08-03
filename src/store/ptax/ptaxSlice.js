import { createSlice } from "@reduxjs/toolkit";

export const ptaxSlice = createSlice({
  name: "propertytax",
  initialState: {
    dataFetched: false,
    fetchedYear: 0,
    giIsEmpty: true,
    mcIsEmpty: true,
    mcIsFull: false,
    ptaxData: {
      _id: "",
      userId: "",
      collectionType: "",
      startYear: 0,
      endYear: 0,
      openingBalance: 0,
      currentYearDemand: 0,
      commercial: 0,
      residential: 0,
      vacant: 0,
      monthlyCollection: [
        {
          CYD: 0,
          OBC: 0,
          month: 0,
          year: 0,
          _id: "",
        },
      ],
    },
  },
  reducers: {
    addPtax: (state, action) => {
      state.dataFetched = true;
      let ptax = action.payload.ptaxData;
      if (ptax._id === undefined) {
        state.giIsEmpty = true;
        state.mcIsEmpty = true;
        state.mcIsFull = false;
      } else if (ptax.monthlyCollection.length === 0) {
        state.giIsEmpty = false;
        state.mcIsEmpty = true;
        state.mcIsFull = false;
      } else if (ptax.monthlyCollection.length > 0) {
        state.giIsEmpty = false;
        state.mcIsEmpty = false;
        state.mcIsFull = false;
      } else if (ptax.monthlyCollection.length === 11) {
        state.giIsEmpty = false;
        state.mcIsEmpty = false;
        state.mcIsFull = true;
      }
      state.fetchedYear = action.payload.fetchedYear;
      state.ptaxData = ptax;
    },
    updatePtax: (state, action) => {
      state.ptaxData = action.payload;
    },
    updateGenInfoStatus: (state) => {
      state.giIsEmpty = false;
    },
    resetPtax: (state) => {
      state.dataFetched = false;
      state.ptaxData = {};
    },
  },
});

export const { addPtax, updatePtax, resetPtax, updateGenInfoStatus } =
  ptaxSlice.actions;

export default ptaxSlice.reducer;
