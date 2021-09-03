const express=require('express');
const cors=require('cors');

const models=require('./models');

const app=express();
app.use(cors());
app.use(express.json());

let cliente=models.Cliente;
let servico=models.Servico;
let pedido=models.Pedido;

app.get('/', function(req,res){
    res.send('Olá Mundo!');
});

app.post('/clientes', async(req,res)=>{
    let create=await cliente.create(
        req.body
    );
    res.send('Cliente foi inserido!');
});

app.post('/servicos', async(req,res)=>{
    let create=await servico.create(
        req.body
    );
    res.send('Serviço foi inserido!');
});

app.post('/pedidos', async(req,res)=>{
    let create=await pedido.create(
        req.body
    );
    res.send('Pedido foi inserido!');
});

/*app.get('/clientes', function(req,res){
    res.send('Lista de Clientes.');
});

app.get('/servicos', function(req,res){
    res.send('Lista de Serviços.');
});

app.get('/pedidos', function(req,res){
    res.send('Lista de Pedidos.');
});*/

//EXERCÍCIO 1 - AULA 4
/*app.get('/listaclientes', async(req,res)=>{
    await cliente.findAll({
        raw:true
    }).then(function(clientes){
        res.json({clientes})
    });
});*/

//EXERCÍCIO 2 - AULA 4
/*app.get('/listaclientes', async(req,res)=>{
    await cliente.findAll({
        order: [['CreatedAt']]
    }).then(function(clientes){
        res.json({clientes})
    });
});*/

//EXERCÍCIO 3 - AULA 4
/*app.get('/listapedidos', async(req,res)=>{
    await pedido.findAll({
        raw:true
    }).then(function(pedidos){
        res.json({pedidos})
    });
});*/

//EXERCÍCIO 4 - AULA 4
/*app.get('/listapedidos', async(req,res)=>{
    await pedido.findAll({
        order: [['valor', 'DESC']]
    }).then(function(pedidos){
        res.json({pedidos})
    });
});*/

//EXERCÍCIO 5 - AULA 4
/*app.get('/quantclientes', async(req,res)=>{
    await cliente.count('id')
    .then(function(clientes){
        res.json(clientes);
    });
});*/

//EXERCÍCIO 6 - AULA 4
/*app.get('/quantpedidos', async(req,res)=>{
    await pedido.count('id')
    .then(function(pedidos){
        res.json(pedidos);
    });
});*/

app.get('/listaservicos', async(req,res)=>{
    await servico.findAll({
        order: [['nome', 'DESC']]
    }).then(function(servicos){
        res.json({servicos})
    });
});

app.get('/ofertas', async(req,res)=>{
    await servico.count('id')
    .then(function(servicos){
        res.json(servicos);
    });
});

app.get('/servico/:id', async(req,res)=>{
    servico.findByPk(req.params.id)
    .then(servico =>{
        return res.json({
            error: false,
            servico
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Código não está cadastrado!"
        });
    });
});

//desafio aula 4:
app.get('/pedido/:id', async(req,res)=>{
    pedido.sum('valor', { where: { 'ClienteId': req.params.id } })
    .then(pedido =>{
        return res.json({
            error: false,
            pedido
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Código não está cadastrado!"
        });
    });
});

let port=process.env.PORT || 3000;

app.listen(port,(req,res)=>{
    console.log('Servidor ativo');
});