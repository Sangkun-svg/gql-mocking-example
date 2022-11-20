<h1>How to use live data when it is ready</h1>

Ok, so we have mocked some fields, queries, and mutations, and you may ask what you should do when the backend team implements all requested fields and operations in the API.

It's pretty simple. You should:

1. remove @client annotations - when a particular field or operation is ready, just remove the @client directive from query/mutation

2. remove client resolvers - remove resolvers because they are not needed anymore when data is populated from API

3. remove client type definitions - same here, the schema should be implemented on the backend side, so it's no need anymore

<h1>Summary</h1>

In this article, I showed you how to mock GraphQL queries and mutations. Compared to a REST API, mocking GraphQL queries is much easier. The subsequent transition to real data only really involves a change in GraphQL queries and resolvers’ removal. In my opinion, mocking data in GraphQL is much easier than in REST, which is unquestionably beneficial for everyone.

When you want to mock some fields or operations on the client side using Apollo Client, please follow these steps:

1. Create client-side GraphQL schema

2. Define custom resolvers/read function

3. Use @client directive in queries/mutations

I hope you liked this article. Thanks for reading!


<p>Reference : https://marcinkwiatkowski.com/blog/graphql/how-to-mock-graphql-queries-and-mutations</p>
