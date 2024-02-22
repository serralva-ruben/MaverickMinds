let express = require('express')
let app = express()
const { TezosToolkit } = require('@taquito/taquito');
const { InMemorySigner } = require('@taquito/signer');
const Tezos = new TezosToolkit('https://testnet-tezos.giganode.io');

Tezos.setProvider({ signer: new InMemorySigner('your_private_key') });


app.post('/containers', async (req, res) => {
    res.send('POST request to the homepage')
})


app.listen(3000, () => {console.log('The server is running in port: ' + port )})