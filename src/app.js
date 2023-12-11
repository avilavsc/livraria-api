import express from 'express'
import conectaNaDataBase from './config/dbConnection.js'
import routes from './routes/index.js'

const app = express()
const conexao = await conectaNaDataBase()

conexao.on('error', erro => console.error('Erro na conexão com o banco de dados', erro))
conexao.once('open', () => console.log('Conectado ao banco de dados'))

routes(app)

export default app
