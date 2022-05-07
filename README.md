# Blog Uygulaması

`git rm -r --cached .` bununla git cache temizlenir.
`node_modules/` Tüm alt klasördekileri node_modules klasörlerini git depomuzdan hariç tutar.

npm init -y // package.json

package.json içinde "main": "server.js", olarak değiştir.

npm i apollo-server graphql mongoose

<https://www.apollographql.com/docs/apollo-server/getting-started/>

server.js oluştur ve içini doldur.

npm i -g nodemon // Global olarak bilg. yükle ki heryerden çalışsın.

server klasörüne gir ve "nodemon server" komutu ile server ayağa kalksın.

Normalde "node server" ile de çalışır fakat değişiklikler anında yansısın diye

"nodemon server" şeklinde çalıştırıyoruz.

GRAPHQL
=======

`typeDefs     :` Veritabanında bulunan tablo ve alanların tanımı yapılır.

`Query        :` Sorgulamalar buraya yazılır. Bu tanımlamalar dışında
sorgu çalıştıramayız.

`resolvers    :` Graphql çalıştığı zaman yapılacak işlemlerin tanımlandığı alanlardır.

`Mutations    :` Veri oluşturma, güncelleme ve silme işlemleri için kullanılır.

`Subscriptions:` Server tarafında belirli bir event gerçekleştiğinde WebSocket
kullanılarak belirtilen datayı gerçek zamanlı olarak client'e gönderir.

## Temel `Apollo Server` yapılandırması

**pacakage.json** içinde  `"main": "server.js",`

`nodemon server` terminal komutu ile çalıştırılır.

```js script
// Dosya adı server.js
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
```

### GRAPHQL play içinde sorgulama örnekleri
===========================================

`Örnek 1`

```js script
mutation MakaleOlustur($baslik: String!, $icerik: String!) {
  makaleOlustur(baslik: $baslik, icerik: $icerik) {
    baslik: baslik, 
    icerik: icerik
  }
}

query MakalelerGetir {
  makalelerGetir {
    id
    baslik
    icerik
  }
}
```

`Örnek 2`

```js script
query MakalelerGetir {
  makalelerGetir {
    id
    baslik
    icerik
  }
}

query Query($makaleGetirId: ID!) {  
  makaleGetir(id: $makaleGetirId) {
    id
    baslik
    icerik
  }
}

Variables
{
  "makaleGetirId": "6275a00ac7a03cb6dcfb16af"
}
```

`Örnek 3`

```js script
query Query($makaleGetirId: ID!) {  
  makaleGetir(id: $makaleGetirId) {
    id
    baslik
    icerik
  }
  
  makalelerGetir {
    id
    baslik
    icerik
  }
}
```

Apollo Developer Tools
https://chrome.google.com/webstore/detail/apollo-client-devtools/jdkknkkbebbapilgoeccciglkfbmbnfm
