const { ApolloServer } = require('apollo-server')
const gql = require('graphql-tag') // typeDefs tanımları için gerekli
const { MongoClient, ServerApiVersion } = require('mongodb')
const uri =
  'mongodb+srv://serihesap:blog1234@cluster0.kp9ua.mongodb.net/blogDB?retryWrites=true&w=majority'
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
})

client
  .connect()
  .then(() => {
    console.log(`Mongo db bağlantısı başarılı \n`)
    return server.listen({ port: 4000 })
  })
  .then((result) => {
    console.log(`server ${result.url} adresinde ${result.port} portta çalışıyor`)
  })
  .catch((err) => {
    console.log(`Server ${err} hatası veriyor`)
  })

const typeDefs = gql`
  type Makale {
    id: ID!
    baslik: String!
    icerik: String!
  }

  type Query {
    makalelerGetir: [Makale]
  }
`

const resolvers = {
  Query: {
    makalelerGetir() {
      const makaleler = [
        { id: 1, baslik: 'Makale1 başlık1', icerik: 'Makale1 içerik' },
        { id: 2, baslik: 'Makale2 başlık2', icerik: 'Makale2 içerik' },
        { id: 3, baslik: 'Makale3 başlık3', icerik: 'Makale3 içerik' },
      ]
      return makaleler
    },
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})
