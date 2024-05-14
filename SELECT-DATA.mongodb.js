const database = 'libri-database'
const collection = 'libri-collection'

use(database)

// /*Busca os dados*/
// db[collection].find()

// /*Busca dados com criterios*/
// db[collection].find({"categoria": "Ficção Científica"})

/*Exclue dados da busca*/
db[collection].find({}, {"_id":0, "codigo":0, "imagem":0})

/*Pesquisa todos os dados com um criterio*/
db[collection].find({"titulo": /robôs/i}, {"_id":0, "codigo":0, "imagem":0})