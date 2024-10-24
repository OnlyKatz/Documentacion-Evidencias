const mongoose = require('mongoose')

const UserScheme = new mongoose.Schema({
    name: {
        type: String
    },
    age: {
        type: Number
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    role: {
        type: String,
        default: 'user'
    },
    bookmarks: [
        {
            carrera_id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'careers' // ID de la carrera
            },
            marked_at: {
                type: Date,
                default: Date.now
            }
        }
    ]
},
    {
        timestamps: true,
        versionKey: false
    })

module.exports = mongoose.model('users', UserScheme)