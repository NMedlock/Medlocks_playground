const { app } = require('@azure/functions');

app.http('message', {
    methods: ['POST', 'GET'],
    handler: async (_request, context) => {
        return {
            headers: { 'content-type': 'application/json' },
            jsonBody: {"message": "Test"}
          };
    }
});