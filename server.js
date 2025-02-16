import { ApolloServer } from '@apollo/server';
import {startStandaloneServer} from '@apollo/server/standalone';



const typeDefs=`
type Query{
greeting: String
}`
const observers={
Query:{
greeting:()=>'Hello World'
}
}

const server = new ApolloServer({typeDefs,observers});
const {url}=await startStandaloneServer(server,{listen:{port:9000}});
console.log(`server running at ${url}`);
