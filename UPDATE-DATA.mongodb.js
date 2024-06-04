
use('libri-database');

db['libri-collection'].updateOne(
    {titulo: 'O Senho dos anéis: A Sociendade do Anel'},
    {
        $set:{valor: 260},
    }
)

use('libri-database');

db['libri-collection'].updateMany(
    {categoria: 'Ficção Científica'},
    {
        $set:{valor: 250},
    }
)