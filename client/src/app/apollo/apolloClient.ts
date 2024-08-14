import {ApolloClient, InMemoryCache} from '@apollo/client/core'

const cache = new InMemoryCache()

export const apolloClient = new ApolloClient({
    uri: 'https://graphqlzero.almansi.me/api',
    cache
})
