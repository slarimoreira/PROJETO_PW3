const express = require('express');

const modelNotas = require('../model/NotasModel');
const router = express.Router();

router.get('/listarAnotacao', (req, res)=>{
  modelNotas.findAll()
        .then(
            (anotacoes)=>{
                return res.status(200).json(anotacoes);
            }
        ).catch(
            (erro)=>{
                return res.status(400).json({
                    erroStatus: true,
                    erroMessagem: 'Houve um erro ao selecionar os dados de categoria',
                    erroBancoDados: erro
                });
            }
        );
});

router.post('/inserirAnotacao', (req, res)=>{
    let {titulo_nota, anotacao, date} = req.body;

    console.log(req.body);

    modelNotas.create(
        {
          titulo_nota,
          anotacao,
          date
        }
    ).then(
        ()=>{
                return res.status(201).json({
                    erroStatus: false,
                    menssagemStatus: 'Anotação inserida com sucesso!'
            });
        }
    ).catch(
        (erro)=>{
                    return res.status(400).json({
                        erroStatus: true,
                        erroMessagem: 'Houve um erro ao inserir a anotação',
                        erroBancoDados: erro
                    });
        }
    );
});

router.put('/alterarAnotacao', (req, res)=>{
  let {id, titulo_nota, anotacao, date} = req.body;

    console.log(req.body);

    modelNotas.update(
      {titulo_nota, anotacao,date},
      {where:{id}}
    ).then(
        ()=>{
                return res.status(201).json({
                    erroStatus: false,
                    menssagemStatus: 'Anotação inserida com sucesso!'
            });
        }
    ).catch(
        (erro)=>{
                    return res.status(400).json({
                        erroStatus: true,
                        erroMessagem: 'Houve um erro ao inserir a anotação',
                        erroBancoDados: erro
                    });
        }
    );
});

router.delete('/excluirNota/:id', (req, res)=>{
    let {id} = req.params;
    console.log(req.params);

    modelNotas.destroy(
        {where: {id}}

    ).then( ()=>{

        return res.status(200).json({
            erroStatus: false,
            menssagemStatus: 'Categoria excluida com sucesso!'
        });

    }).catch(
        (erro)=>{
                    return res.status(400).json({
                        erroStatus: true,
                        erroMessagem: 'Houve um erro ao excluir a categoria',
                        erroBancoDados: erro
                    });
        }
    );
});

module.exports = router;
