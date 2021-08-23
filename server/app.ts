import express from 'express';
import { graphqlHTTP } from "express-graphql";

const app = express();
const port = process.env.PORT || 4000;

app.use('/graphql', graphqlHTTP({
    //will pass option later on
}));


app.listen(port, () => {
    console.log(`now listening for requests on - ${port}`)
});