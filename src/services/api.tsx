import axios from "axios";

const BASE_URL = 'https://localhost:3000/'

const api = axios.create({
  baseURL: BASE_URL,
});

export interface Cliente {
  username: string,
  password: string,
  nome_completo: string,
  celular: string,
  data_nasc: string,
  sexo: string,
  email: string
}

export interface Estabelecimento {
  username: string,
  password: string,
  horario_abertura: string,
  horario_fechamento: string,
  email: string,
  endereco: string,
  cep: string,
  categoria_id: number,
}

export interface Fila {
  id: number,
  estabelecimento_id: number,
  horario_abertura: string,
  horario_fechamento: string,

}

const API = {
  cliente: {
    login: (username: string, passoword: string) => api.post('/login', { username, passoword }),
    logout: () => api.post('/logout'),
    refreshToken: () => api.post('/token/refresh'),
    cadastrar: (data: Estabelecimento) => api.post('/register', data),
    listarFilas: () => api.get('/cliente/fila'),
    entrarNaFila: (id_fila: number) => api.post('/cliente/fila', { id_fila }),
    sairDaFila: (id_fila: number) => api.delete('/cliente/fila', { data: { id_fila } })

  },
  estabelecimento: {
    login: (username: string, passoword: string) => api.post('/login', { username, passoword }),
    logout: () => api.post('/logout'),
    refreshToken: () => api.post('/token/refresh'),
    cadastrar: (data: Estabelecimento) => api.post('/register', data),
    listar: (categoria_id?: number) => api.get('/estabelecimento', { data: { categoria_id } }),
    get: (id_estabelecimento: number) => api.get('/estabelecimento', { data: { id_estabelecimento } }),
    listarFilas: () => api.get('/fila'),
    getFila: (id_fila: number) => api.get('/fila', { data: { id_fila } }),
    criarFila: (data: Fila) => api.post('/fila', data),
    deletarFila: (id_fila: number) => api.delete('/fila', { data: { id_fila } }),
    finalizarAtendimentoDoCliente: (id_fila: number) => api.delete('/fila/atendimento-encerrado', { data: { id_fila } }),
    getPriximoDaFila: (id_fila: number) => api.get('/fila/proximo', { data: { id_fila } }),
    listarOrdemDasFilas: () => api.get('/fila/ordem'),
    getOrdemDaFila: (id_fila: number) => api.get('/fila/ordem', { data: { id_fila } }),
  },

};

export default API;