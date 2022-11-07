import { createApi , fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const shazamCoreAPI = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key','d8373b4508msh12220bd295bb269p14f009jsnfc345686831a')

            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => '/charts/world' }),
    }),
});

export const {
    useGetTopChartsQuery,
} = shazamCoreAPI;