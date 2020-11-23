const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const {name, email, password} = request.body;

        try {
            await connection('users').insert({name, email, password});

        } catch (error) {
            console.log(error);
            return response.json({error: 'Internal error'});

        }

        return response.json({status: 'success'}).status(200);
    },

    async read(request, response) {
        const {email, password} = request.body;

        try {
            const user_data = await connection('users').select('*')
                .where({'email': email, 'password': password}).first();

            if (!user_data) {
                return response.status(400).json({error: "No found user with this email and password"});

            } else {
                return response.status(200).json(user_data);

            }

        } catch (error) {
            console.log(error);
            return response.status(400).json({error: 'Internal error'});

        }
    }
}