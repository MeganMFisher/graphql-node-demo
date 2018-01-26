# Graphql 

## Artist 

Get Artists 

<details>

{
    artists
}

</details>

Get Artist by ArtistId 

<details>

query artists($id:Int){
  artists(ArtistId: $id) {
    ArtistId
    Name
  }
}

{
  "id": 1
}

Get Artist by Name 

<details>

query artists($name:String){
  artists(Name: $name) {
    ArtistId
    Name
  }
}

{
  "name": "'AC/DC'"
}

</details>

</details>

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

Update Artist

<details>
mutation updateArtist($id: Int!, $Name: String!) {
  updateArtist(ArtistId: $id, Name: $Name) {
    ArtistId
    Name
  }
}

{
  "id": 1,
  "Name": "HelloGoodBye"
}
</details>

Delete Artist 

<details>

 mutation deleteArtist($id: Int!) {
      deleteArtist(ArtistId: $id) {
        ArtistId
      }
  }

  {
      "id": 2
  }
</details>


## Employee

Get Employees 

<details>
{employees}
</details>

Get Employee by LastName 

<details>
mutation updateEmployee($id: Int!, $Name: String!) {
  updateEmployee(EmployeeId: $id, LastName: $Name) {
    EmployeeId
    FirstName
    LastName
  }
}

{
  "Name": "Richardson",
  "id": 2
}
</details>

Create Employee

<details>
mutation {
  createEmployee(input: {
      	EmployeeId: 11,
    		LastName: "Flinstone",
    		FirstName: "Fred",
    		Title: "Manager",
    		ReportsTo: 2,
        Address: "11120 Jasper Ave NW",
        City: "Edmonton",
        State: "AB",
        Country: "Canada",
        PostalCode: "T5K 2N1",
        Phone: "+1 (780) 428-9482",
        Fax: "+1 (780) 428-3457",
        Email: "andrew@chinookcorp.com"
  }) {
    LastName
    FirstName
  } 
}
</details>

Update Employee's LastName

<details>
mutation updateEmployee($id: Int!, $Name: String!) {
  updateEmployee(EmployeeId: $id, LastName: $Name) {
    EmployeeId
    FirstName
    LastName
  }
}


{
  "id": 1,
  "Name": "Flintstone"
}

</details>

Update Who the Employee ReportsTo

<details>
mutation updateEmployee($id: Int!, $reportsTo: Int!) {
  updateEmployee(EmployeeId: $id, ReportsTo: $reportsTo) {
    EmployeeId
    FirstName
    LastName
    ReportsTo
  }
}

{
  "reportsTo": 3,
  "id": 2
}

</details>

Delete Employee 

<details>

 mutation deleteEmployee($id: Int!) {
      deleteEmployee(EmployeeId: $id) {
    		FirstName
      }
  }

{
  "id": 11
}

</details>