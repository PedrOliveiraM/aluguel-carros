import {
  createCategoria,
  deleteCategoria,
  getCategoria,
  getCategorias,
  updateCategoria,
} from '../controllers/CategoriaController'
import { createContratoLocacao, deleteContratoLocacao, getContratoLocacao, updateContratoLocacao } from '../controllers/ContratoLocacaoController'

import {
  createManutencao,
  deleteManutencao,
  getManutencao,
  getManutencoes,
  updateManutencao,
} from '../controllers/ManutencaoController'

import {
  createMarca,
  deleteMarca,
  getMarca,
  getMarcas,
  updateMarca,
} from '../controllers/MarcaController'

import {
  createModelo,
  deleteModelo,
  getModelo,
  getModelos,
  updateModelo,
} from '../controllers/ModeloController'
import { createOcorrencia, deleteOcorrencia, getOcorrencia, getOcorrencias, updateOcorrencia } from '../controllers/OcorrenciaController'
import { createPagamento, deletePagamento, getPagamento, getPagamentos, updatePagamento } from '../controllers/PagamentoController'

import {
  createVeiculo,
  deleteVeiculo,
  getVeiculo,
  getVeiculos,
  updateVeiculo,
} from '../controllers/VeiculoController'

const express = require('express')
const router = express.Router()

/**
 * @swagger
 * /createCategoria:
 *   post:
 *     summary: Cria uma nova categoria
 *     description: Cria uma nova categoria no sistema.
 *     responses:
 *       201:
 *         description: Categoria criada com sucesso.
 *       400:
 *         description: Erro de validação de dados.
 */
router.post('/createCategoria', createCategoria)

/**
 * @swagger
 * /getCategorias:
 *   get:
 *     summary: Obtém todas as categorias
 *     description: Retorna uma lista com todas as categorias cadastradas.
 *     responses:
 *       200:
 *         description: Lista de categorias retornada com sucesso.
 *       500:
 *         description: Erro interno do servidor.
 */
router.get('/getCategorias', getCategorias)

/**
 * @swagger
 * /getCategoria/{id}:
 *   get:
 *     summary: Obtém uma categoria por ID
 *     description: Retorna uma categoria específica com base no ID fornecido.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID da categoria
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Categoria encontrada com sucesso.
 *       404:
 *         description: Categoria não encontrada.
 */
router.get('/getCategoria/:id', getCategoria)

/**
 * @swagger
 * /updateCategoria/{id}:
 *   put:
 *     summary: Atualiza uma categoria
 *     description: Atualiza os dados de uma categoria existente com base no ID fornecido.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID da categoria
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Categoria atualizada com sucesso.
 *       400:
 *         description: Erro de validação de dados.
 *       404:
 *         description: Categoria não encontrada.
 */
router.put('/updateCategoria/:id', updateCategoria)

/**
 * @swagger
 * /deleteCategoria/{id}:
 *   delete:
 *     summary: Deleta uma categoria
 *     description: Deleta uma categoria existente com base no ID fornecido.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID da categoria
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Categoria deletada com sucesso.
 *       404:
 *         description: Categoria não encontrada.
 */
router.delete('/deleteCategoria/:id', deleteCategoria)

/**
 * @swagger
 * /createManutencao:
 *   post:
 *     summary: Cria uma nova manutenção
 *     description: Cria uma nova manutenção no sistema.
 *     responses:
 *       201:
 *         description: Manutenção criada com sucesso.
 *       400:
 *         description: Erro de validação de dados.
 */
router.post('/createManutencao', createManutencao)

/**
 * @swagger
 * /getManutencoes:
 *   get:
 *     summary: Obtém todas as manutenções
 *     description: Retorna uma lista com todas as manutenções registradas.
 *     responses:
 *       200:
 *         description: Lista de manutenções retornada com sucesso.
 *       500:
 *         description: Erro interno do servidor.
 */
router.get('/getManutencoes', getManutencoes)

/**
 * @swagger
 * /getManutencao/{id}:
 *   get:
 *     summary: Obtém uma manutenção por ID
 *     description: Retorna uma manutenção específica com base no ID fornecido.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID da manutenção
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Manutenção encontrada com sucesso.
 *       404:
 *         description: Manutenção não encontrada.
 */
router.get('/getManutencao/:id', getManutencao)

/**
 * @swagger
 * /updateManutencao/{id}:
 *   put:
 *     summary: Atualiza uma manutenção
 *     description: Atualiza os dados de uma manutenção existente com base no ID fornecido.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID da manutenção
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Manutenção atualizada com sucesso.
 *       400:
 *         description: Erro de validação de dados.
 *       404:
 *         description: Manutenção não encontrada.
 */
router.put('/updateManutencao/:id', updateManutencao)

/**
 * @swagger
 * /deleteManutencao/{id}:
 *   delete:
 *     summary: Deleta uma manutenção
 *     description: Deleta uma manutenção existente com base no ID fornecido.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID da manutenção
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Manutenção deletada com sucesso.
 *       404:
 *         description: Manutenção não encontrada.
 */
router.delete('/deleteManutencao/:id', deleteManutencao)

/**
 * @swagger
 * /createMarca:
 *   post:
 *     summary: Cria uma nova marca
 *     description: Cria uma nova marca no sistema.
 *     responses:
 *       201:
 *         description: Marca criada com sucesso.
 *       400:
 *         description: Erro de validação de dados.
 */
router.post('/createMarca', createMarca)

/**
 * @swagger
 * /getMarcas:
 *   get:
 *     summary: Obtém todas as marcas
 *     description: Retorna uma lista com todas as marcas cadastradas.
 *     responses:
 *       200:
 *         description: Lista de marcas retornada com sucesso.
 *       500:
 *         description: Erro interno do servidor.
 */
router.get('/getMarcas', getMarcas)

/**
 * @swagger
 * /getMarca/{id}:
 *   get:
 *     summary: Obtém uma marca por ID
 *     description: Retorna uma marca específica com base no ID fornecido.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID da marca
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Marca encontrada com sucesso.
 *       404:
 *         description: Marca não encontrada.
 */
router.get('/getMarca/:id', getMarca)

/**
 * @swagger
 * /updateMarca/{id}:
 *   put:
 *     summary: Atualiza uma marca
 *     description: Atualiza os dados de uma marca existente com base no ID fornecido.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID da marca
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Marca atualizada com sucesso.
 *       400:
 *         description: Erro de validação de dados.
 *       404:
 *         description: Marca não encontrada.
 */
router.put('/updateMarca/:id', updateMarca)

/**
 * @swagger
 * /deleteMarca/{id}:
 *   delete:
 *     summary: Deleta uma marca
 *     description: Deleta uma marca existente com base no ID fornecido.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID da marca
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Marca deletada com sucesso.
 *       404:
 *         description: Marca não encontrada.
 */
router.delete('/deleteMarca/:id', deleteMarca)

/**
 * @swagger
 * /createModelo:
 *   post:
 *     summary: Cria um novo modelo
 *     description: Cria um novo modelo no sistema.
 *     responses:
 *       201:
 *         description: Modelo criado com sucesso.
 *       400:
 *         description: Erro de validação de dados.
 */
router.post('/createModelo', createModelo)

/**
 * @swagger
 * /getModelos:
 *   get:
 *     summary: Obtém todos os modelos
 *     description: Retorna uma lista com todos os modelos cadastrados.
 *     responses:
 *       200:
 *         description: Lista de modelos retornada com sucesso.
 *       500:
 *         description: Erro interno do servidor.
 */
router.get('/getModelos', getModelos)

/**
 * @swagger
 * /getModelo/{id}:
 *   get:
 *     summary: Obtém um modelo por ID
 *     description: Retorna um modelo específico com base no ID fornecido.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID do modelo
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Modelo encontrado com sucesso.
 *       404:
 *         description: Modelo não encontrado.
 */
router.get('/getModelo/:id', getModelo)

/**
 * @swagger
 * /updateModelo/{id}:
 *   put:
 *     summary: Atualiza um modelo
 *     description: Atualiza os dados de um modelo existente com base no ID fornecido.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID do modelo
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Modelo atualizado com sucesso.
 *       400:
 *         description: Erro de validação de dados.
 *       404:
 *         description: Modelo não encontrado.
 */
router.put('/updateModelo/:id', updateModelo)

/**
 * @swagger
 * /deleteModelo/{id}:
 *   delete:
 *     summary: Deleta um modelo
 *     description: Deleta um modelo existente com base no ID fornecido.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID do modelo
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Modelo deletado com sucesso.
 *       404:
 *         description: Modelo não encontrado.
 */
router.delete('/deleteModelo/:id', deleteModelo)

/**
 * @swagger
 * /createVeiculo:
 *   post:
 *     summary: Cria um novo veículo
 *     description: Cria um novo veículo no sistema.
 *     responses:
 *       201:
 *         description: Veículo criado com sucesso.
 *       400:
 *         description: Erro de validação de dados.
 */
router.post('/createVeiculo', createVeiculo)

/**
 * @swagger
 * /getVeiculos:
 *   get:
 *     summary: Obtém todos os veículos
 *     description: Retorna uma lista com todos os veículos cadastrados.
 *     responses:
 *       200:
 *         description: Lista de veículos retornada com sucesso.
 *       500:
 *         description: Erro interno do servidor.
 */
router.get('/getVeiculos', getVeiculos)

/**
 * @swagger
 * /getVeiculo/{id}:
 *   get:
 *     summary: Obtém um veículo por ID
 *     description: Retorna um veículo específico com base no ID fornecido.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID do veículo
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Veículo encontrado com sucesso.
 *       404:
 *         description: Veículo não encontrado.
 */
router.get('/getVeiculo/:id', getVeiculo)

/**
 * @swagger
 * /updateVeiculo/{id}:
 *   put:
 *     summary: Atualiza um veículo
 *     description: Atualiza os dados de um veículo existente com base no ID fornecido.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID do veículo
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Veículo atualizado com sucesso.
 *       400:
 *         description: Erro de validação de dados.
 *       404:
 *         description: Veículo não encontrado.
 */
router.put('/updateVeiculo/:id', updateVeiculo)

/**
 * @swagger
 * /deleteVeiculo/{id}:
 *   delete:
 *     summary: Deleta um veículo
 *     description: Deleta um veículo existente com base no ID fornecido.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID do veículo
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Veículo deletado com sucesso.
 *       404:
 *         description: Veículo não encontrado.
 */
router.delete('/deleteVeiculo/:id', deleteVeiculo)

/**
 * @swagger
 * /createContratoLocacao:
 *   post:
 *     summary: Cria um novo contrato de locação
 *     description: Cria um novo contrato de locação no sistema.
 *     responses:
 *       201:
 *         description: Contrato de locação criado com sucesso.
 *       400:
 *         description: Erro de validação de dados.
 */
router.post('/createContratoLocacao', createContratoLocacao)

/**
 * @swagger
 * /getContratosLocacao:
 *   get:
 *     summary: Obtém todos os contratos de locação
 *     description: Retorna uma lista com todos os contratos de locação cadastrados.
 *     responses:
 *       200:
 *         description: Lista de contratos de locação retornada com sucesso.
 *       500:
 *         description: Erro interno do servidor.
 */
router.get('/getContratosLocacao', getContratoLocacao)

/**
 * @swagger
 * /getContratoLocacao/{id}:
 *   get:
 *     summary: Obtém um contrato de locação por ID
 *     description: Retorna um contrato de locação específico com base no ID fornecido.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID do contrato de locação
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Contrato de locação encontrado com sucesso.
 *       404:
 *         description: Contrato de locação não encontrado.
 */
router.get('/getContratoLocacao/:id', getContratoLocacao)

/**
 * @swagger
 * /updateContratoLocacao/{id}:
 *   put:
 *     summary: Atualiza um contrato de locação
 *     description: Atualiza os dados de um contrato de locação existente com base no ID fornecido.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID do contrato de locação
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Contrato de locação atualizado com sucesso.
 *       400:
 *         description: Erro de validação de dados.
 *       404:
 *         description: Contrato de locação não encontrado.
 */
router.put('/updateContratoLocacao/:id', updateContratoLocacao)

/**
 * @swagger
 * /deleteContratoLocacao/{id}:
 *   delete:
 *     summary: Deleta um contrato de locação
 *     description: Deleta um contrato de locação existente com base no ID fornecido.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID do contrato de locação
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Contrato de locação deletado com sucesso.
 *       404:
 *         description: Contrato de locação não encontrado.
 */
router.delete('/deleteContratoLocacao/:id', deleteContratoLocacao)

/**
 * @swagger
 * /createOcorrencia:
 *   post:
 *     summary: Cria uma nova ocorrência
 *     description: Cria uma nova ocorrência no sistema.
 *     responses:
 *       201:
 *         description: Ocorrência criada com sucesso.
 *       400:
 *         description: Erro de validação de dados.
 */
router.post('/createOcorrencia', createOcorrencia)

/**
 * @swagger
 * /getOcorrencias:
 *   get:
 *     summary: Obtém todas as ocorrências
 *     description: Retorna uma lista com todas as ocorrências registradas.
 *     responses:
 *       200:
 *         description: Lista de ocorrências retornada com sucesso.
 *       500:
 *         description: Erro interno do servidor.
 */
router.get('/getOcorrencias', getOcorrencias)

/**
 * @swagger
 * /getOcorrencia/{id}:
 *   get:
 *     summary: Obtém uma ocorrência por ID
 *     description: Retorna uma ocorrência específica com base no ID fornecido.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID da ocorrência
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Ocorrência encontrada com sucesso.
 *       404:
 *         description: Ocorrência não encontrada.
 */
router.get('/getOcorrencia/:id', getOcorrencia)

/**
 * @swagger
 * /updateOcorrencia/{id}:
 *   put:
 *     summary: Atualiza uma ocorrência
 *     description: Atualiza os dados de uma ocorrência existente com base no ID fornecido.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID da ocorrência
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Ocorrência atualizada com sucesso.
 *       400:
 *         description: Erro de validação de dados.
 *       404:
 *         description: Ocorrência não encontrada.
 */
router.put('/updateOcorrencia/:id', updateOcorrencia)

/**
 * @swagger
 * /deleteOcorrencia/{id}:
 *   delete:
 *     summary: Deleta uma ocorrência
 *     description: Deleta uma ocorrência existente com base no ID fornecido.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID da ocorrência
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Ocorrência deletada com sucesso.
 *       404:
 *         description: Ocorrência não encontrada.
 */
router.delete('/deleteOcorrencia/:id', deleteOcorrencia)

/**
 * @swagger
 * /createPagamento:
 *   post:
 *     summary: Cria um novo pagamento
 *     description: Cria um novo pagamento no sistema.
 *     responses:
 *       201:
 *         description: Pagamento criado com sucesso.
 *       400:
 *         description: Erro de validação de dados.
 */
router.post('/createPagamento', createPagamento)

/**
 * @swagger
 * /getPagamentos:
 *   get:
 *     summary: Obtém todos os pagamentos
 *     description: Retorna uma lista com todos os pagamentos registrados.
 *     responses:
 *       200:
 *         description: Lista de pagamentos retornada com sucesso.
 *       500:
 *         description: Erro interno do servidor.
 */
router.get('/getPagamentos', getPagamentos)

/**
 * @swagger
 * /getPagamento/{id}:
 *   get:
 *     summary: Obtém um pagamento por ID
 *     description: Retorna um pagamento específico com base no ID fornecido.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID do pagamento
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Pagamento encontrado com sucesso.
 *       404:
 *         description: Pagamento não encontrado.
 */
router.get('/getPagamento/:id', getPagamento)

/**
 * @swagger
 * /updatePagamento/{id}:
 *   put:
 *     summary: Atualiza um pagamento
 *     description: Atualiza os dados de um pagamento existente com base no ID fornecido.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID do pagamento
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Pagamento atualizado com sucesso.
 *       400:
 *         description: Erro de validação de dados.
 *       404:
 *         description: Pagamento não encontrado.
 */
router.put('/updatePagamento/:id', updatePagamento)

/**
 * @swagger
 * /deletePagamento/{id}:
 *   delete:
 *     summary: Deleta um pagamento
 *     description: Deleta um pagamento existente com base no ID fornecido.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID do pagamento
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Pagamento deletado com sucesso.
 *       404:
 *         description: Pagamento não encontrado.
 */
router.delete('/deletePagamento/:id', deletePagamento)


export default router
