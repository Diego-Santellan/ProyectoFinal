export default {
    fileSystem:{
        path: './DB'
    },

    mongodb:{
        cnxStr:  'mongodb://127.0.0.1:27017/ecommerceproyecto',
        options: {
            useNewUrlParser: true,   
            useUnifiedTopology:true,
            // useCreateIndex: true,
            serverSelectionTimeoutMS: 5000,
        }
    },

    firebase:{
        "type": "service_account",
        "project_id": "proyectofinalback-end",
        "private_key_id": "d347cbc739c19636a455e7726f98d685adbc5c9b",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDjX1rLDXiAD5jF\n6pmEF2E4MlGiTMPEyxdnqVxvqzz1dNKypv7XWcWGiWNLMHGKF9yCr9XIqyNMWDk7\nsUP18z0uUvois2EP/AzefBOtTv0oDH7Zk8NgnqyyQTbQl/rnXi7tG3rFOkZ3HlAB\nDcO45YgeH/lh+PSb/n5B00TWkqx7TfPGagGZ3dlc5NZQrdcjiaeGLVSr7jFPMBaU\nhrTNrRQmHAEW/N0KPhJ2eFA7asNuRNqjrGWf3nao5hvsTpsefSg3UYhhid7AK+lq\nA4KELogMIvkKM/EbJCkQoOHyrS/MNMpfvLeMAN6QijMyb+jsRUCo0uXuikgNHs+5\nbTbOt1vnAgMBAAECggEARDU6u2cTGveS0OyLmQCafY06yAFXSRXTs5kuzaEE7G1b\nN5S5Jkkb5DwauVeS9+YolFvDOit8r05X/Pw0cvfBBsCFoRtGptDp22RFUtw7PWRi\nOUsGdVmkXOULWI//CKFMWny/26KbuOgy/93tNO5GYyMcYLOaTaGOppiGMghWDbbI\nBT1Xrfas9MWllOu0bI9BSSi/ZDAYJmb8oprtRxUL5vdcK8ssKQXMztfSGwrqPNJu\nbLvnY1FAzYxb/ZXSEPPw5Ogc1lSpTOizkFIW0UuemV1MALh4WRgoHIXNGuY2/bmH\ndJZZgWpWN7Og6j2X8f9UVivyf6D7AF4he7aeSAKdYQKBgQDy26jdanTRXmBRgh+U\njnSRn1Be9lEW5XO9oP/7Q3mZ2wAqfJru5GNdbzE4qfyFsWVkuWqa+npGzTUeJwy0\nxAQDCzUqja9q4ru7Lr+2cI7ZYRbdauFURz0cXE+w7nbannBEUMzj6DVir5CCJFiq\nicC5ZPN+8HpF1s7jrQ6LgEF81QKBgQDvrSv05pBsAWaJ+2JwT1gYctej0aRxXPxs\n08KFOErglsxrUWtbu627yomybtUlNX58v8broFSp9kq6PhJ0WrUfo+TsxTKjWLLK\nrtIobqMsY75g6/yAXmQkp6KvGzDW0fyACnxuINqlQpyOB37QLWZkgSxtj4tCun2G\nWn8k/vdjywKBgQCVsLUN/M8SOdSuiMEEZSYOmB8G2VY0AavsZy9A5V8vaSBaD8HD\nm7xvW9j/7y66DRTNF8hQzDDQMS4bbsBTLzq10ZOsrfZAsI48Gt2KCyjRbhmU0ose\n0mYlc/Sevu09ZUkXoqIXnApD0KkGvnZ0b0H+Q+4eAQWsxHFzPjjn3V8AHQKBgBcq\n9yfKLcWy8PV/jklq8goS99NHDY1DvsbKRXBZO6uwB/yLt0P7xVR0xJCx8/qPzDVE\n2HaoXea7/wc3vtLufbmcPyHAAiAWD9pVwczUvQMqdRmrVhIWjbmZVrl0eGkbjTvX\nR6XhmSEGalm0UcbPzKkEb4X7rSt7GW0mTEoIN2O3AoGAdeuPJ1vgT7LC8DBx1WfJ\nK5eYOIPFXz7Bty6elKgENwcIiAhFd6BD3fQEhpgZGZCNprFriMd5c0YSDDFG5pl6\n+uHmM+zkVlxURkgushnYojznL3mAXJOX7GbzTkPyRQHzoqjNUI4sF5643E3Hf0YC\nFt4r110ymCTd19Fo71fm+bQ=\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-mc2y9@proyectofinalback-end.iam.gserviceaccount.com",
        "client_id": "105878764866648719097",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-mc2y9%40proyectofinalback-end.iam.gserviceaccount.com"
    },
      
    sqlite3: {
        client: 'sqlite3',
        connection: {
            filename: './DB/segundaPreentrega.sqlite'
        },
        useNullAsDefault: true
    },
    
    mariaDb: {
        client: 'mysql',
        connection: {
            host: 'localhost',
            user: 'root',
            database: 'segundaPreentrega'
        }
    }
}
