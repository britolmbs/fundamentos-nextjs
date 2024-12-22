import { useEffect, useState } from "react"
import ClienteRepositorio from "../core/ClienteRepositorio"
import ColecaoCliente from "../backend/db/ColecaoCliente"
import Cliente from "../core/Cliente"
import useTabela from "./useTabela"

export default function useClientes() {
    const repo: ClienteRepositorio = new ColecaoCliente()

    const { tabelaVisivel, exibirTabela, exibirFormulario} = useTabela ()
    const [clientes, setClientes] = useState<Cliente[]>([])
    const [cliente , setCliente] = useState<Cliente>(Cliente.vazio())
   useEffect((obterTodos), [])

   function obterTodos() {
    repo.obterTodos().then(clientes => {
        setClientes(clientes)
        exibirTabela()
    })
   }

    function selecionarCliente(cliente: Cliente) {
        setCliente(cliente)
        exibirFormulario()
    }
   async function excluirCliente(cliente: Cliente) {
        await repo.excluir(cliente)
        obterTodos()
    }
   async function salvarCliente(cliente: Cliente){
      await  exibirTabela()
        obterTodos()
    }
    function novoCliente(){
        setCliente(Cliente.vazio())
        exibirFormulario()
    }

    return {
        exibirTabela,
        tabelaVisivel,
        clientes,
        cliente,
        salvarCliente,
        novoCliente,
       excluirCliente, 
       selecionarCliente,
       obterTodos,
    }

}