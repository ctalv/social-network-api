const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: new Types.ObjectId
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
        }
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
)
  
// reactionSchema
//     .virtual('')
//     .get(function () {
//         // will not be a model, but rather 
//         // will be used as the reaction field's subdocument schema in the Thought model

//     })


reactionSchema
    .virtual('formattedDate')
    .get(function () {
        // will not be a model, but rather 
        // will be used as the reaction field's subdocument schema in the Thought model
        return this.createdAt.toLocaleString('en-US', { timeZone: 'UTC' })
    })

module.exports = reactionSchema;