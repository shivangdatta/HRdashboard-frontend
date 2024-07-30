import { createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice";

const employeeAdapter = createEntityAdapter();

const initialState = employeeAdapter.getInitialState();

export const employeeApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getEmployees: builder.query({
            query: ({ page = 1, limit = 10 } = {}) => `/employees?page=${page}&limit=${limit}`,
            validateStatus: (response, result) => {
                return response.status === 200 && !result.isError;
            },
            transformResponse: (responseData) => {
                const loadedData = responseData.map(item => {
                    item.id = item._id;
                    return item;
                });
                return employeeAdapter.setAll(initialState, loadedData);
            },
            providesTags: (result, error, arg) => {
                if (result?.ids) {
                    return [
                        { type: 'Employee', id: 'List' },
                        ...result.ids.map(id => ({ type: 'Employee', id }))
                    ];
                } else return [{ type: 'Employee', id: 'List' }];
            }
        }),
        getEmployeebyId: builder.query({
            query: (id) => `/employees/${id}`,
            validateStatus: (response, result) => {
                return response.status === 200 && !result.isError;
            },
            transformResponse: (responseData) => {
                responseData.id = responseData._id;
                return responseData;
            },
            providesTags: (result, error, arg) => [{ type: 'Employee', id: arg }]
        })
    })
});

export const { useGetEmployeesQuery, useGetEmployeebyIdQuery } = employeeApiSlice;