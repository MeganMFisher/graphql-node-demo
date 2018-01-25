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
query employees($name:String){
  employees(LastName: $name) {
    LastName
  }
}

{
  "name": "'Edwards'"
}
</details>

Create Employee

<details></details>

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

Delete Employee 

<details></details>