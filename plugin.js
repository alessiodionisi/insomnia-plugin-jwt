const jwt = require('jsonwebtoken')

module.exports.templateTags = [
  {
    name: 'jwt',
    displayName: 'JSON Web Token',
    description: 'generate json web token',

    args: [
      {
        displayName: 'Payload',
        type: 'string',
      },
      {
        displayName: 'Secret',
        type: 'string',
      },
    ],

    run(context, payload, secret) {
      return jwt.sign(payload, secret)
    },
  },
]
