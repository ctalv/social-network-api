const { Schema, model } = require('mongoose');

const reactionSchema = new Schema (
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: new Schema.Types.ObjectId
        },
        reactionBody: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            // get
        }
    }
)

reactionSchema
    .virtual
    .get(function () {
        // will not be a model, but rather 
        // will be used as the reaction field's subdocument schema in the Thought model
    })

module.export = reactionSchema;