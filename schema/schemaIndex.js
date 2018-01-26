var { buildSchema } = require('graphql');
// const albumSchema = require('./schemas/albumSchema')
// const artistSchema = require('./schemas/artistSchema')
// const customerSchema = require('./schemas/customerSchema')
// const employeeSchema = require('./schemas/employeeSchema')
// const genreSchema = require('./schemas/genreSchema')
// const invoiceSchema = require('./schemas/invoiceSchema')
// const invoiceLineSchema = require('./schemas/invoiceLineSchema')
// const mediaTypeSchema = require('./schemas/mediaTypeSchema')
// const playlistSchema = require('./schemas/playlistSchema')
// const playlistTrackSchema = require('./schemas/playlistTrackSchema')
// const trackSchema = require('./schemas/trackSchema')


// var string = `
//     type Query {
//         ${artistSchema.query}
//         ${albumSchema.query}
//         ${customerSchema.query}
//         ${employeeSchema.query}
//         ${genreSchema.query}
//         ${invoiceSchema.query}
//         ${invoiceLineSchema.query}
//         ${mediaTypeSchema.query}
//         ${playlistSchema.query}
//         ${playlistTrackSchema.query}
//         ${trackSchema.query}
//         ${playlistTrackSchema.musicPlaylistTracks}
//     }

//     type Mutation {
//         getAlbums: [Album]
//     }
// ${artistSchema.type}
// ${albumSchema.type}
// ${customerSchema.type}
// ${employeeSchema.type}
// ${genreSchema.type}
// ${invoiceSchema.type}
// ${invoiceLineSchema.type}
// ${mediaTypeSchema.type}
// ${playlistSchema.type}
// ${playlistTrackSchema.type}
// ${trackSchema.type}
// ${playlistTrackSchema.musicPlayListTracksType}
// `

// module.exports = buildSchema(string)



module.exports = buildSchema(`

    input AlbumInput {
        AlbumId: Int
        Title: String
        ArtistId: Int
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

    type Query {
        albums(AlbumId: Int, ArtistId: Int, Title: String): [Album]
        artists: [Artist]
        customers(CustomerId: Int, Name: String, Email: String, SupportRepId: String): [Customer]
        employees: [Employee]
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
        updateAlbum(id: Int!, title: String, artistId: Int): Album
        deleteAlbum(id: Int!): [Album]

        createCustomer(input: CustomerInput): Customer
        updateCustomer(id: Int!, FirstName: String, LastName: String, Email: String, Phone: String, SupportRepId: Int): Customer
        deleteCustomer(id: Int!): [Customer]
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
