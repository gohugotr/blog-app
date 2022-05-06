# Blog Uygulaması

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
