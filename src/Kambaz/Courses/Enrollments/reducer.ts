import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    enrollments: [],
  };
const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    setEnrollments: (state, { payload }) => {
      state.enrollments = payload;
    },
    addEnrollment: (state, { payload }) => {
      state.enrollments = [...state.enrollments, payload] as any;
    },
    removeEnrollment: (state, { payload: enrollmentId }) => {
      state.enrollments = state.enrollments.filter(
        (e: any) => e._id !== enrollmentId);
    },
  },
});

export const { addEnrollment, removeEnrollment, setEnrollments } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;