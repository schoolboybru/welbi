# welbi

This graphql server has the functionality to search for a resident by their ID, and it displays the programs the resident would be interested in. If the resident has hobbies then we try to match the programs to those hobbies. If they don't have any hobbies then we look at programs that they are able to do based on their level of care. We can also set a limit on how many programs we want to display.

### Example Query
```gql
query GetResident($id: String, $limit: Int) {
 resident (id: $id, limit: $limit) {
   name
   programs {
     name
     start
     end
   }
 }
}
```
