import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Userlist } from '../models/userlist.model'

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://reqres.in/" }),
    endpoints: (builder) => ({
        userList: builder.query<Userlist[]>({
            query: (page) => `/api/users?page=${page}`,
        })
    })
})


export const { useUserListQuery } = userApi;