use('libri-database')

db['libri-collection'].deleteOne(
    {codigo: '2'}
)

use('libri-database')
db['libri-collection'].find()