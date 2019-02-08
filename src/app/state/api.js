import graphqlClient from '../graphql';
import gql from "graphql-tag";

export async function getBrands() {
    return graphqlClient.query({
                    query: gql`
                    query GetBrands {
                        brands {
                            id
                            name
                        }
                    }
                    `
            })
            .then(result => {
                console.log(result);
                const {
                    data
                } = result;
                return data.brands; // return as promise object
            })
}

export async function clearCache() {
    return graphqlClient.clearStore()
}

export async function updateBrand(id, name) {
    return graphqlClient.mutate({
        mutation: gql`
            mutation UpdateBrand($id: ID!, $name: String!) {
                updateBrand(id: $id, name: $name) {
                    name
                  }
            }
        `,
        variables: {
            id: id,
            name: name
        }
    }).then ( result => {
        return result.data;
    })
}
