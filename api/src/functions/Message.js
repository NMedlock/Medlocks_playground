const { app } = require('@azure/functions');

app.http('message', {
    methods: ['POST', 'GET'],
    handler: async (_request, context) => {
        context.log('Http function processed request');

        return { body: 'Hello, world!' };
    }
});