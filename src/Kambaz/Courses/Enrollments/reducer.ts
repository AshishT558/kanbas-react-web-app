import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "../../Database";

const initialState = {
    enrollments: enrollments,
  };
const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    addEnrollment: (state, { payload }) => {
      state.enrollments = [...state.enrollments, payload];
    },
    removeEnrollment: (state, { payload: enrollmentId }) => {
      state.enrollments = state.enrollments.filter(
        (e: any) => e._id !== enrollmentId);
    },
  },
});

export const { addEnrollment, removeEnrollment } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;