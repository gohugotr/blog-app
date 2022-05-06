const {ApolloServer} = require('apollo-server');
const gql = require('graphql-tag'); // typeDefs tanımları için gerekli

const typeDefs = gql`
    type Query{
        ilkTip:String!
    }
`;

const resolvers = {
    Query:{
        ilkTip:()=>{
            return 'ilk Tip oluşturuldu'
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen({port:4000}).then((res) => {
    console.log(`server ${res.url} adresinde ${res.port} portta çalışıyor`);
});