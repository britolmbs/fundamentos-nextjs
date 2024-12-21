import { useEffect, useState } from "react";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";
import ClienteRepositorio from "../core/ClienteRepositorio";
import ColecaoCliente from "../backend/db/ColecaoCliente";

export default function Home() {

    const repo: ClienteRepositorio = new ColecaoCliente()

    const [visivel, setVisivel] = useState <'tabela' | 'from'>('tabela')
    const [clientes, setClientes] = useState<Cliente[]>([])
    const [cliente , setCliente] = useState<Cliente>(Cliente.vazio())
   useEffect((obterTodos), [])

   function obterTodos() {
    repo.obterTodos().then(clientes => {
        setClientes(clientes)
        setVisivel('tabela')
    })
   }

    function clienteSelecionado(cliente: Cliente) {
        setCliente(cliente)
        setVisivel('from')
    }
   async function clienteExcluido(cliente: Cliente) {
        await repo.excluir(cliente)
        obterTodos()
    }
   async function salvarCliente(cliente: Cliente){
      await  setVisivel('tabela')
        obterTodos()
    }
    function novoCliente(){
        setCliente(Cliente.vazio())
        setVisivel('form')
    }


    return (
        <div className={`
        flex justify-center items-center
        h-screen
        `}>
            <Layout titulo="Cadastro Simples">
                {visivel ==='tabela' ? (
                <>
                <div className="flex justify-end">
                <Botao cor="green" className="mb-4" onClick={novoCliente}>Novo Cliente</Botao>
                </div>
              <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido}
              />
              </>

                ):(
                    
                    <Formulario cliente={cliente}
                    cancelado={() => setVisivel('tabela')}
                   clienteMudou={salvarCliente}
                    />
                )}
                </Layout>    

        </div>
    )
}