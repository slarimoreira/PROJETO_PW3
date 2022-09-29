const express = require('express');
const router = express.Router();
const modelUsuario = require('../model/UsuarioModel');

router.get('/home', (req, res)=>{

    modelUsuario.findAll()
        .then(
            (categorias)=>{
                return res.status(200).json(categorias);
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

router.post('/inserirEmail', (req, res)=>{

    let {email_usuario, senha_usuario} = req.body;

    console.log(req.body);

    modelUsuario.create(
        {
        email_usuario,
        senha_usuario
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


router.put('/alterarEmail', (req, res)=>{
    let {id, email_usuario, senha_usuario} = req.body;

    //ALTERANDO OS DADOS:
    modelUsuario.update(
        {email_usuario, senha_usuario},
        {where:{id}}

    ).then( ()=>{

        return res.status(200).json({
            erroStatus: false,
            menssagemStatus: 'Nota alterada com sucesso!'
        });

    }).catch(
        (erro)=>{
                    return res.status(400).json({
                        erroStatus: true,
                        erroMessagem: 'Houve um erro ao alterar a anotação',
                        erroBancoDados: erro
                    });
        }
    );

});

router.delete('/excluirEmail/:id', (req, res)=>{

    let {id} = req.params;
    console.log(req.params);

    modelUsuario.destroy(
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