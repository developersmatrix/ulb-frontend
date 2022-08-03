import axios from "axios";

import { addPtax } from "./ptaxSlice";

export const getPtaxCollection = (data) => {
  return async (dispatch) => {
    const getPtax = async () => {
      const url = "http://localhost:8080/dcb/property-tax";
      // const params = new URLSearchParams();
      // params.append("collectionType", data.collectionType);
      // params.append("startYear", data.startYear);

      const config = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      };

      const response = await axios.get(
        url,
        {
          params: {
            collectionType: data.collectionType,
            startYear: data.startYear,
          },
        },
        config
      );
      // console.log(response.data);

      if (response.statusText !== "OK") {
        throw new Error("Failed loading Ptax data");
      }

      return response.data;
    };

    try {
      const ptaxData = await getPtax();
      console.log(data.startYear);
      if (ptaxData === null) {
        dispatch(addPtax({ fetchedYear: data.startYear, ptaxData: {} }));
      } else {
        console.log(ptaxData);
        dispatch(addPtax({ fetchedYear: data.startYear, ptaxData: ptaxData }));
      }
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const updatePtaxCollection = (updatedData) => {
  return async (dispatch) => {
    const updatePtaxData = async () => {
      let url, response;
      if (updatedData.id === undefined) {
        console.log(updatedData);
        url = "http://localhost:8080/dcb/property-tax/general-data/";
        response = await axios.post(url, { ...updatedData });
      } else {
        url =
          "http://localhost:8080/dcb/property-tax/general-data/" +
          updatedData.id;
        response = await axios.patch(url, { ...updatedData });
      }

      console.log(response.statusText);
      if (response.statusText !== "OK") {
        throw new Error("Failed loading Ptax data");
      } else if (response.statusText !== "Created") {
        throw new Error("Unable to post General Data");
      }

      return response.data;
    };

    try {
      const ptaxArray = await updatePtaxData();
      console.log("UpdateD");
      // dispatch(addPtax(data));
      // if (ptaxArray.length === 0) {
      //   dispatch(addPtax({}));
      // } else {
      //   const ptaxData = ptaxArray[0];
      //   dispatch(addPtax(ptaxData));
      console.log(ptaxArray);
    } catch (error) {
      console.log(error);
    }
  };
};
