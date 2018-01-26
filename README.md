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
</details>
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
  "name": "AC/DC"
}
```

</details>

<br/>

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

## Album 

Get Albums 

<details>

<summary>Solution</summary>

<br />

```
{
    albums
}
```

</details>

<br />

Get Album by ArtistId 

<details>
<summary>Solution</summary>

<br />

```

query albums($id:Int){
  albums(ArtistId: $id) {
    ArtistId
    Title
  }
}

{
  "id": 2
}
```
</details>
<br/>

Get Album by Title 

<details>
    
<summary>Solution</summary>

<br />

```

query albums($title:String){
  albums(Name: $title) {
    ArtistId
    Title
  }
}

{
  "title": "Balls to the Wall"
}
```

</details>

<br/>

Create new Album

<details>
<summary>Solution</summary>

<br />

```    

mutation {
  createAlbum(input: {
        ArtistId: 2,
    		Name: "To the Window!"
  }) {
    AlbumId
    Name
  } 
}
```

</details>

<br/>

Update Album

<details>
    
<summary>Solution</summary>

<br />

```
mutation updateAlbum($id: Int!, $Title: String!) {
  updateAlbum(id: $id, Title: $Title) {
    AlbumId
    Title
  }
}

{
  "id": 38,
  "Title": "To the Window! To the Walls!"
}
```
</details>

<br/>

Delete Album 

<details>
    
<summary>Solution</summary>

<br />

```

 mutation deleteAlbum($id: Int!) {
      deleteAlbum(id: $id) {
        AlbumId
        AlbumTitle
      }
  }

  {
      "id": 38
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
query employees($name:String){
  employees(LastName: $name) {
    FirstName
    LastName
  }
}


{
  "name": "Fred"
}

```
</details>

<br/>

Get List of Employees who ReportTo the Same Person

<details>
    
<summary>Solution</summary>

<br />

```
query employees($id:Int){
  employees(ReportsTo: $id) {
    FirstName
    LastName
  }
}

{
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

## Customer

Get Customers 

<details>
    
<summary>Solution</summary>

<br />

```
{
  customers
}
```
</details>

<br/>

Get Customer by Full Name 

<details>
    
<summary>Solution</summary>

<br />

```
query customers($Name:String){
  customers(Name: $Name) {
    FirstName
    LastName,
    Email
    CustomerId
  }
}


{
  "name": "Meredith Grey"
}

```
</details>

<br/>

Get Customers By Email

<details>
    
<summary>Solution</summary>

<br />

```
query customers($email:String){
  customers(Email: $email) {
    FirstName
    LastName
    Email
    CustomerId
  }
}

{
  "email": "addison_montgomery_shepherd@sgh.org"
}
```
</details>

<br/>

Get Customers By Support Rep

<details>
    
<summary>Solution</summary>

<br />

```
query customers($id:Int){
  customers(SupportRepId: $id) {
    FirstName
    LastName
    Email
    CustomerId
    SupportRepId
  }
}

{
  "id": 1
}
```
</details>

<br/>

Create Customer

<details>
    
<summary>Solution</summary>

<br />

```
mutation {
  createCustomer(input: {
    FirstName: "Cristina",
    LastName: "Yang",
    Company: "Seattle Grace Hospital",
    Address: "123 Pike Place",
    City: "Seattle",
    State: "WA",
    Country: "USA",
    PostalCode: "84093",
    Phone: "123-456-7890",
    Fax: "123-456-7890",
    Email: "dryang@sgh.org",
    SupportRepId: 1
  }){
    	FirstName
    	LastName
			Email
			SupportRepId
			CustomerId
  }
}
```
</details>
<br/>

Update Customer: You can update First Name, Last Name, Email, Phone, and / or Suport Rep Id

Update Customer's Last Name

<details>
<summary>Solution</summary>

<br />

```
mutation updateCustomer($id: Int!, $Name: String) {
  updateCustomer(id: $id, LastName: $Name) {
    CustomerId
    FirstName
    LastName
    Email
  }
}


{
  "id": 21,
  "Name": "Grey-Shepherd"
}
```
</details>

<br/>

Update the Customer's Last Name, Email, and Phone 

<details>
<summary>Solution</summary>

<br />

```
mutation updateCustomer($id: Int!, $LastName: String, $Email: String, $Phone: String) {
  updateCustomer(id: $id, LastName: $LastName, Email: $Email, Phone: $Phone) {
    CustomerId
    FirstName
    LastName
    Email
    Phone
  }
}

{
  "LastName": "Montgomery",
  "Email": "addison_montgomery@sgh.org",
  "Phone": "908-765-4321"
}
```
</details>

<br/>

Delete Employee 

<details>
    
<summary>Solution</summary>

<br />

```
 mutation deleteCustomer($id: Int!) {
      deleteCustomer(id: $id) {
    		FirstName
        LastName
        Email
        CustomerId
      }
  }

{
  "id": 28
}
```
</details>
