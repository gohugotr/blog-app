const { ApolloServer } = require('apollo-server')
const gql = require('graphql-tag') // typeDefs tanımları için gerekli

const client = require('mongoose')
const { ServerApiVersion } = require('mongodb')

const MakaleModel = require('./model/MakaleModel')

const typeDefs = gql`
  type Makale {
    id: ID!
    baslik: String!
    icerik: String!
  }

  type Query {
    makalelerGetir: [Makale]!,
    makaleGetir(id:ID!):Makale!  
  }

  type Mutation{
      makaleOlustur(baslik:String!, icerik: String!): Makale!
      makaleSil(id:ID!):String!
  }
`

const resolvers = {
  Query: {
    async makalelerGetir() {
      const makaleler = await MakaleModel.find()
      return makaleler
    },
    async makaleGetir(parent, args){
        try {
            const {id} = args;

            return await MakaleModel.findById(id);

        } catch (error) {
            throw new error;
        }
    }
    // makalelerGetir() {
    //   const makaleler = [
    //     { id: 1, baslik: 'Makale1 başlık1', icerik: 'Makale1 içerik' },
    //     { id: 2, baslik: 'Makale2 başlık2', icerik: 'Makale2 içerik' },
    //     { id: 3, baslik: 'Makale3 başlık3', icerik: 'Makale3 içerik' },
    //   ]
    //   return makaleler
    // },
  },
  Mutation: {
    makaleOlustur: async (parent, args) => {
      try {
            const makale = {
                baslik: args.baslik,
                icerik: args.icerik,
            }

            return await MakaleModel.create(makale);
      } catch (error) {
            throw new error;
      }
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
});

const uri =
  'mongodb+srv://serihesap:blog1234@blogcluster.kp9ua.mongodb.net/blogDB?retryWrites=true&w=majority'

client
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
  })
  .then(() => {
    console.log(`Mongodb bağlantısı başarılı \n`)
    return server.listen({ port: 4000 })
  })
  .then((result) => {
    console.log(`server ${result.url} adresinde ${result.port} portta çalışıyor`)
  })
  .catch((err) => {
    console.log(`Server ${err} hatası veriyor`)
  })

