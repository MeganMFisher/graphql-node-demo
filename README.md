# Graphql 

## Artist 

Create new Artist

<details>
mutation {
  createArtist(input: {
        ArtistId: 780,
    		Name: "HelloGoodbye"
  }) {
    ArtistId
    Name
  } 
}
</details>

Select 5 artists in alphabetical order.

<details></details>

Select all artists that start with the word "Black".

<details></details>

Select all artists that contain the word "Black".

<details></details>

## Employee

List all Employee first and last names only that live in Calgary.

Find the first and last name and birthdate for the youngest employee.

Find the first and last name and birthdate for the oldest employee.

Find everyone that reports to Nancy Edwards (Use the ReportsTo column).
You will need to query the employee table to find the Id for Nancy Edwards

Count how many people live in Lethbridge.

## Invoice

Count how many orders were made from the USA.

Find the largest order total amount.

Find the smallest order total amount.

Find all orders bigger than $5.

Count how many orders were smaller than $5.

Count how many orders were in CA, TX, or AZ (use IN).

Get the average total of the orders.

Get the total sum of the orders.


<details>


Query: 

query albums($id:String){
  albums(Title: $id) {
    AlbumId
    ArtistId
    Title
  }
}

{
  "id": "'For Those About To Rock We Salute You'"
}


</details>