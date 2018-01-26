# Graphql 

## Artist 

Get Artists 

<details>
    
<summary>Solution</summary>

<br />

```
{
    artists
}
```
</details>

<br />

Get Artist by ArtistId 

<details>
<summary>Solution</summary>

<br />

```

query artists($id:Int){
  artists(ArtistId: $id) {
    ArtistId
    Name
  }
}

{
  "id": 1
}
```

<br/>

Get Artist by Name 

<details>
    
<summary>Solution</summary>

<br />

```

query artists($name:String){
  artists(Name: $name) {
    ArtistId
    Name
  }
}

{
  "name": "'AC/DC'"
}
```

<br/>

</details>

Create new Artist

<details>
<summary>Solution</summary>

<br />

```    

mutation {
  createArtist(input: {
        ArtistId: 780,
    		Name: "HelloGoodbye"
  }) {
    ArtistId
    Name
  } 
}
```

</details>

<br/>

Update Artist

<details>
    
<summary>Solution</summary>

<br />

```
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
```
</details>

<br/>

Delete Artist 

<details>
    
<summary>Solution</summary>

<br />

```

 mutation deleteArtist($id: Int!) {
      deleteArtist(ArtistId: $id) {
        ArtistId
      }
  }

  {
      "id": 2
  }
```
</details>
<br/>

## Employee

Get Employees 

<details>
    
<summary>Solution</summary>

<br />

```
{employees}
```
</details>

<br/>

Get Employee by LastName 

<details>
    
<summary>Solution</summary>

<br />

```
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
```
</details>

<br/>

Create Employee

<details>
    
<summary>Solution</summary>

<br />

```
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
```
</details>
<br/>

Update Employee's LastName

<details>
<summary>Solution</summary>

<br />

```
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
```
</details>

<br/>

Update Who the Employee ReportsTo

<details>
<summary>Solution</summary>

<br />

```
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
```
</details>
<br/>
Delete Employee 

<details>
<summary>Solution</summary>

<br />

```
 mutation deleteEmployee($id: Int!) {
      deleteEmployee(EmployeeId: $id) {
    		FirstName
      }
  }

{
  "id": 11
}
```
</details>
