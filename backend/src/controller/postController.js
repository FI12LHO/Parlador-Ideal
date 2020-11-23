const connection = require('../database/connection');

module.exports = {
    async index (require, response) {
        try {
            const posts = await connection('posts').select('*');
            return response.status(200).json(posts);

        } catch (error) {
            console.log(error);
            return response.status(400).json({error: 'Internal error'});

        }
    },

    async create(require, response) {
        const {author_id, author, date, text} = require.body;

        try {
            await connection('posts').insert({author_id, author, date, text});

        } catch (error) {
            console.log(error);
            return response.json({error: 'Internal error'});

        }

        return response.status(200).json({status: 'success'});
    },

    async update(require, response) {
        const {id, author_id, text} = require.body;

        try {
            const post = await connection('posts').select('*').where({'id': id}).first();

            // Validando o resultado da busca, caso esteja vazio
            if (!post) {
                return response.status(400).json({error: 'No found an post with this ID'});
            }

            // Validando se o ID do author e igual ao a ID do usuario que deseja atualizar a postagem
            if (post.author_id !== author_id) {
                return response.status(400).json({error: 'Operation not permitted.'});
            }

            await connection('posts').update({text: text})
                .where({'id': id, 'author_id': author_id});

            return response.status(200).json({'status': 'success'});

        } catch (error) {
            console.log(error);
            return response.status(400).json({error: 'Internal error'});

        }
    },

    async delete(require, response) {
        const {author_id, id} = require.body;

        try {
            const post = await connection('posts').select('*').where({'id': id}).first();

            if (!post) {
                return response.status(400).json({error: 'No found an post with this ID'});
            }

            // Validando se o ID do author e igual ao a ID do usuario que deseja deletar a postagem
            if (post.author_id !== author_id) {
                return response.status(400).json({error: 'Operation not permitted.'});
            }

            await connection('posts').where({'id': id, 'author_id': author_id}).delete();

            return response.status(200).json({'status': 'success'});

        } catch (error) {
            console.log(error);
            return response.status(400).json({error: 'Internal error'});

        }
    }
}