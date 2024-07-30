import { createApi } from '@reduxjs/toolkit/query/react'
import { fetchBaseQuery } from '@reduxjs/toolkit/query'

const baseQuery = fetchBaseQuery({
    baseUrl : 'http://localhost:5000/',

})

export const apiSlice = createApi({
    baseQuery : baseQuery,
    tagTypes : ['Employee' , 'Dashboard'],
    endpoints : builder => ({})
})