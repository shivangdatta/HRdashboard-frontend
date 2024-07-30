import { createApi } from '@reduxjs/toolkit/query/react'
import { fetchBaseQuery } from '@reduxjs/toolkit/query'

const baseQuery = fetchBaseQuery({
    baseUrl : 'https://hrdashboard-backend001a.onrender.com',

})

export const apiSlice = createApi({
    baseQuery : baseQuery,
    tagTypes : ['Employee' , 'Dashboard'],
    endpoints : builder => ({})
})