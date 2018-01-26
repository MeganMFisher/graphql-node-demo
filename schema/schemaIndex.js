var { buildSchema } = require('graphql');

module.exports = buildSchema(`
    input AlbumInput {
        AlbumId: Int
        Title: String
        ArtistId: Int
    }

    input ArtistInput {
        ArtistId: Int
        Name: String
    }

    input CustomerInput {
        CustomerId: Int,
        FirstName: String,
        LastName: String,
        Company: String,
        Address: String,
        City: String,
        State: String,
        Country: String,
        PostalCode: String,
        Phone: String,
        Fax: String,
        Email: String,
        SupportRepId: Int
    }

    input EmployeeInput {
        EmployeeId: Int
        LastName: String
        FirstName: String
        Title: String
        ReportsTo: Int
        BirthDate: String
        HireDate: String
        Address: String
        City: String
        State: String
        Country: String
        PostalCode: String
        Phone: String
        Fax: String
        Email: String

    }

    type Query {
        albums(AlbumId: Int, ArtistId: Int, Title: String): [Album]
        customers(CustomerId: Int, Name: String, Email: String, SupportRepId: Int): [Customer]
        artists(ArtistId: Int, Name: String): [Artist]
        employees(ReportsTo: Int, LastName: String, Email: String): [Employee]
        genres: [Genre]
        invoiceLines: [InvoiceLine]
        invoices: [Invoice]
        mediaTypes: [MediaType]
        playlists: [Playlist]
        playlistTracks: [PlaylistTrack]
        tracks: [Track]
    }

    type Mutation {
        createAlbum(input: AlbumInput): Album
        updateAlbum(id: Int!, Title: String, ArtistId: Int): Album
        deleteAlbum(id: Int!): Album

        createCustomer(input: CustomerInput): Customer
        updateCustomer(id: Int!, FirstName: String, LastName: String, Email: String, Phone: String, SupportRepId: Int): Customer
        deleteCustomer(id: Int!): Customer

        createArtist(input: ArtistInput): Artist
        updateArtist(ArtistId: Int!, Name: String!): Artist
        deleteArtist(ArtistId: Int!): Artist

        createEmployee(input: EmployeeInput): Employee
        updateEmployee(EmployeeId: Int!, LastName: String!, FirstName: String!, Title: String!, ReportsTo: Int!, Email: String!): Employee
        deleteEmployee(EmployeeId: Int!): Employee
    }

    type Album {
        AlbumId: Int
        Title: String
        ArtistId: Int
    }

    type Artist {
        ArtistId: Int
        Name: String
    }

    type Customer {
        CustomerId: Int
        FirstName: String
        LastName: String
        Company: String
        Address: String
        City: String
        State: String
        Country: String
        PostalCode: String
        Phone: String
        Fax: String
        Email: String
        SupportRepId: Int
    }

    type Employee {
        EmployeeId: Int
        LastName: String
        FirstName: String
        Title: String
        ReportsTo: Int
        BirthDate: String
        HireDate: String
        Address: String
        City: String
        State: String
        Country: String
        PostalCode: String
        Phone: String
        Fax: String
        Email: String
    }

    type Genre {
        GenreId: Int
        Name: String
    }

    type InvoiceLine {
        InvoiceLineId: Int
        InvoiceId: Int
        TrackId: Int
        UnitPrice: String
        Quantity: Int
    }

    type Invoice {
        InvoiceId: Int
        CustomerId: Int
        InvoiceDate: String
        BillingAddress: String
        BillingCity: String
        BillingState: String
        BillingCountry: String 
        BillingPostalCode: String
        Total: String
    }

    type MediaType {
        MediaTypeId: Int
        Name: String
    }

    type Playlist {
        PlaylistId: Int
        Name: String
    }

    type PlaylistTrack {
        PlaylistId: Int
        TrackId: Int
    }

    type Track {
        TrackId: Int
        Name: String
        AlbumId: Int
        MediaTypeId: Int
        GenreId: Int
        Composer: String
        Milliseconds: Int
        Bytes: Int
        UnitPrice: Float
    }

`)
