Create a table called Person that records a person's ID, Name, Age, Height ( in cm ), City, FavoriteColor.
ID should be an auto-incrementing id/primary key - Use type: INTEGER PRIMARY KEY AUTOINCREMENT
Add 5 different people into the Person database.
Remember to not include the ID because it should auto-increment.
List all the people in the Person table by Height from tallest to shortest.
List all the people in the Person table by Height from shortest to tallest.
List all the people in the Person table by Age from oldest to youngest.
List all the people in the Person table older than age 20.
List all the people in the Person table that are exactly 18.
List all the people in the Person table that are less than 20 and older than 30.
List all the people in the Person table that are not 27 (Use not equals).
List all the people in the Person table where their favorite color is not red.
List all the people in the Person table where their favorite color is not red and is not blue.
List all the people in the Person table where their favorite color is orange or green.
List all the people in the Person table where their favorite color is orange, green or blue (use IN).
List all the people in the Person table where their favorite color is yellow or purple (use IN).


Create a table called Orders that records: PersonID, ProductName, ProductPrice, Quantity.
Add 5 Orders to the Orders table.
Make orders for at least two different people.
PersonID should be different for different people.
Select all the records from the Orders table.
Calculate the total number of products ordered.
Calculate the total order price.
Calculate the total order price by a single PersonID.


Add 3 new Artists to the Artist table. ( It's already created )
Select 10 artists in reverse alphabetical order.
Select 5 artists in alphabetical order.
Select all artists that start with the word "Black".
Select all artists that contain the word "Black".


List all Employee first and last names only that live in Calgary.
Find the first and last name and birthdate for the youngest employee.
Find the first and last name and birthdate for the oldest employee.
Find everyone that reports to Nancy Edwards (Use the ReportsTo column).
You will need to query the employee table to find the Id for Nancy Edwards
Count how many people live in Lethbridge.

Count how many orders were made from the USA.
Find the largest order total amount.
Find the smallest order total amount.
Find all orders bigger than $5.
Count how many orders were smaller than $5.
Count how many orders were in CA, TX, or AZ (use IN).
Get the average total of the orders.
Get the total sum of the orders.




//// Query: 

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

//// Solution: 

{
  "data": {
    "albums": [
      {
        "AlbumId": 1,
        "ArtistId": 1,
        "Title": "For Those About To Rock We Salute You"
      }
    ]
  }
}