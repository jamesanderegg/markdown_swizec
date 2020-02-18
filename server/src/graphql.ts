import { ApolloServer, gql } from "apollo-server-lambda"

const schema = gql`
    type Hello {
        world: String
    }
    type {
        hello: Hello
    }
`

const resolvers = {
    Query: {
        hello: () => ({
            world: "Hello World"
        })
    }
}

const server = new ApolloServer({ typeDefs: schema, resolvers})

export const handler = server.createHandler({
    cors: {
        origin: '*',// for security in production, lock this to your real endpoints
        credentials: true
    }
})