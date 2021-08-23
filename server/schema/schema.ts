import { GraphQLObjectType, GraphQLString, GraphQlSchema } from "graphql";

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        genre: { type: GraphQLString }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: {id: {type: GraphQLString}},
            resolve(parent, args){
                const id = args.id;
                console.log(id, parent);
                //code to get data from DB / other sources
            }
        }
    }
});

export default new GraphQlSchema({
    query: RootQuery
})