import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IExpense } from "../../../types";

export const expenseApi = createApi({
  reducerPath: "expenseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://common-api-knng.onrender.com",
  }),
  tagTypes: ["Expenses"],
  endpoints: (builder) => ({
    // get all expenses
    getExpenses: builder.query<IExpense[], "expensesList">({
      query: () => ({
        url: "/expenses",
        validateStatus: (response, result) => {
          return response.status === 200 && !result.isError;
        },
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: "Expenses" as const,
                id,
              })),
              { type: "Expenses", id: "LIST" },
            ]
          : [{ type: "Expenses", id: "LIST" }],
    }),
    addNewExpense: builder.mutation({
      query: (expense) => ({
        url: "/expenses",
        method: "POST",
        body: {
          ...expense,
        },
      }),
      invalidatesTags: [{ type: "Expenses", id: "LIST" }],
    }),
  }),
});

export const { useGetExpensesQuery, useAddNewExpenseMutation } = expenseApi;
