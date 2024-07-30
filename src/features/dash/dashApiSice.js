import { createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice";

const dashboardAdapter = createEntityAdapter({
    selectId: item => item._id
});

const initialState = dashboardAdapter.getInitialState();

export const dashApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getDashboardData: builder.query({
            query: () => '/dash',
            validateStatus: (response, result) => {
                return response.status === 200 && !result.isError;
            },
            transformResponse: responseData => {
                const { list, ...otherData } = responseData;
                const loadedData = list.map(item => {
                    item.id = item._id;
                    return item;
                });
                const entities = dashboardAdapter.setAll(initialState, loadedData);
                return { ...entities, ...otherData };
            },
            providesTags: (result, error, arg) => {
                if (result?.ids) {
                    return [
                        { type: 'Dashboard', id: 'List' },
                        ...result.ids.map(id => ({ type: 'Dashboard', id }))
                    ];
                } else return [{ type: 'Dashboard', id: 'List' }];
            }
        })
    })
});

export const { useGetDashboardDataQuery } = dashApiSlice;
