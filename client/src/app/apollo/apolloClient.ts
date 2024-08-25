import {ApolloClient, InMemoryCache} from '@apollo/client/core'

const cache = new InMemoryCache()

export const apolloClient = new ApolloClient({
    uri: import.meta.env.VITE_GQL_API,
    cache
})
