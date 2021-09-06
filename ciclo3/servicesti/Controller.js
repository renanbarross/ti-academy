// OS DESAFIOS ESTÃO NO FINAL

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

//EXERCÍCIO 1 - AULA 4 - Visualize todos os clientes.
/*app.get('/listaclientes', async(req,res)=>{
    await cliente.findAll({
        raw:true
    }).then(function(clientes){
        res.json({clientes})
    });
});*/

//EXERCÍCIO 2 - AULA 4 - Visualize os clientes em ordem de antiguidade.
/*app.get('/listaclientes', async(req,res)=>{
    await cliente.findAll({
        order: [['CreatedAt']]
    }).then(function(clientes){
        res.json({clientes})
    });
});*/

//EXERCÍCIO 3 - AULA 4 - Visualize todos os pedidos.
/*app.get('/listapedidos', async(req,res)=>{
    await pedido.findAll({
        raw:true
    }).then(function(pedidos){
        res.json({pedidos})
    });
});*/

//EXERCÍCIO 4 - AULA 4 - Visualize o pedido por ordem a partir do maior valor.
/*app.get('/listapedidos', async(req,res)=>{
    await pedido.findAll({
        order: [['valor', 'DESC']]
    }).then(function(pedidos){
        res.json({pedidos})
    });
});*/

//EXERCÍCIO 5 - AULA 4 - Informe quantos clientes estão na nossa base de dados.
/*app.get('/quantclientes', async(req,res)=>{
    await cliente.count('id')
    .then(function(clientes){
        res.json(clientes);
    });
});*/

//EXERCÍCIO 6 - AULA 4 - Informe a quantidade de pedidos solicitados.
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

app.get('/atualizaservico', async(req,res)=>{
    await servico.findByPk(1)
    .then(servico =>{
        servico.nome='HTML/CSS/JS';
        servico.descricao='Páginas estáticas e dinâmicas estilizadas'
        servico.save();
        return res.json({servico});
    });
});

app.put('/editarservico', (req,res)=>{
    servico.update(req.body,{
        where: {id: req.body.id}
    }).then(function(){
        return res.json({
            error: false,
            message: "Serviço foi alterado com sucesso."
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Erro na alteração do serviço."
        });
    });
});

app.get('/servicopedidos', async(req,res)=>{
    await servico.findByPk(1, {
        include:[{all:true}]
    }).then(servico =>{
        return res.json({servico});
    });
});

app.put('/editarpedido', (req,res)=>{
    pedido.update(req.body,{
        where: {ServicoId: req.body.ServicoId}
    }).then(function(){
        return res.json({
            error: false,
            message: "Pedido modificado com sucesso."
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Não foi possível modificar o pedido."
        });
    });
});

/*EXERCÍCIO 1 - AULA 5 - Faça a busca por serviços de clientes
passando o id do cliente no corpo da requisição.*/

//RESOLUÇÃO 1:
/*app.get('/listapedidos/:id', async (req,res)=>{
    await pedido.findAll({ where: { ClienteId: [req.params.id] } })
    .then(function(pedidos){
        res.json(pedidos)
    });
});*/

//RESOLUÇÃO 2:
/*app.get('/servicoscliente', async(req,res)=>{
    await cliente.findByPk(1, {
        include:[{all:true}]
    }).then(cliente =>{
        return res.json({cliente});
    });
});*/

/*EXERCÍCIO 2 - AULA 5 - Utilize a rota para consultar clientes e faça a
edição de um cliente pelo método put.*/

/*app.get('/cliente/:id', async(req,res)=>{
    cliente.findByPk(req.params.id)
    .then(servico =>{
        return res.json({
            error: false,
            servico
        });
    });
});    

app.put('/editarcliente', (req,res)=>{
    cliente.update(req.body,{
        where: {id: req.body.id}
    }).then(function(){
        return res.json({
            error: false,
            message: "Cliente modificado com sucesso."
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Não foi possível modificar o cliente."
        });
    });
});*/

/*EXERCÍCIO 3 - AULA 5 - Utilize a rota para consultar pedidos e faça a
edição de um pedido pelo método put.*/

/*app.get('/pedido/:id', async(req,res)=>{
    pedido.findByPk(req.params.id)
    .then(pedido =>{
        return res.json({
            error: false,
            pedido
        });
    });
});

app.put('/editarpedido_ex', (req,res)=>{
    pedido.update(req.body,{
        where: {id: req.body.id}
    }).then(function(){
        return res.json({
            error: false,
            message: "Pedido modificado com sucesso."
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Não foi possível modificar o pedido."
        });
    });
});*/

app.get('/excluircliente', async(req,res)=>{
    await cliente.destroy({
        where: {id: 2}
    });
});

app.delete('/apagarcliente/:id', (req,res)=>{
    cliente.destroy({
        where: {id: req.params.id}
    }).then(function(){
        return res.json({
            error: false,
            message: "Cliente foi excluído com sucesso."
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Não foi possível excluir o cliente."
        });
    });
});

//DESAFIO 1 - Que outras informações (objetos) para controle você incluiria no projeto da Services TIAcademy?
//Pense em um outro problema similar a controle da venda de serviços que você poderia implementar.

/*Eu incluiria a parte financeira. Acredito que o desenvolvimento seja muito complexo, porém penso que é muito
essencial. Por já ter sido sócio em uma empresa, entendo como a falta de um sistema que contemple as informações
financeiras de forma satisfatória dificulta o cotidiano de inserções e controle desses dados. Em minha opinião,
é muito importante que o gestor tenha a capacidade de inserir informações sobre receitas, custos, despesas, 
eventuais compras parceladas, etc., podendo alterá-las e excluí-las quando necessário, além de uma página onde
seja possível enxergar e manusear um fluxo de caixa (diário, mensal, anual) que demonstre a saúde financeira da
empresa do curto ao longo prazo.*/



//DESAFIO 2 - Implemente o cadastro de clientes (insira 5 novos clientes).
//Implemente o cadastro de pedidos (insira 10 novos clientes).

/*Embora não seja possível mostrar aqui, os clientes e pedidos foram cadastrados através dos
códigos abaixo e utilizando a forma padrão de inserção (a saber, {"nome": "João P", "endereco": "Rua do Céu, 07"}). */

/*app.post('/clientes', async(req,res)=>{
    let create=await cliente.create(
        req.body
    );
    res.send('Cliente foi inserido!');
});

app.post('/pedidos', async(req,res)=>{
    let create=await pedido.create(
        req.body
    );
    res.send('Pedido foi inserido!');
});*/



//DESAFIO 3 - Qual é o total que o cliente X gastou na ServicesTI?

/*app.get('/somapedidos/:id', async(req,res)=>{
    pedido.sum('valor', { where: { ClienteId: req.params.id } })
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
});*/



//DESAFIO 4 - Faça um rota que liste todos os pedidos de um cliente.
//Crie uma rota que permita alterar esse pedido utilizando o ClienteId.

/*app.get('/clientepedidos/:id', async (req,res)=>{
    await pedido.findAll({ where: { ClienteId: req.params.id } })
    .then(function(pedidos){
        res.json(pedidos)
    });
});

app.put('/editarpedidocliente', (req,res)=>{
    pedido.update(req.body, {
        where: {ClienteId: req.body.ClienteId} 
    }).then(function(){
        return res.json({
            error: false,
            message: "Pedido modificado com sucesso."
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Não foi possível modificar o pedido."
        });
    });
});*/

/*
TODAS AS ROTAS CRIADAS:
app.post '/clientes'
app.post '/servicos'
app.post'/pedidos'
app.get '/listaclientes'
app.get '/listapedidos'
app.get '/quantclientes'
app.get '/quantpedidos'
app.get '/listaservicos'
app.get '/ofertas'
app.get '/servico/:id'
app.get '/atualizaservico'
app.put '/editarservico'
app.get '/servicopedidos'
app.put '/editarpedido'
app.get '/listapedidos/:id' ou '/servicoscliente'
app.get '/cliente/:id'
app.put '/editarcliente'
app.get '/pedido/:id'
app.put '/editarpedido_ex'
app.get '/excluircliente'
app.delete '/apagarcliente/:id'
app.get '/somapedidos/:id'
app.get '/clientepedidos/:id'
app.put '/editarpedidocliente'
*/

let port=process.env.PORT || 3000;

app.listen(port,(req,res)=>{
    console.log('Servidor ativo');
});