import { useState } from "react";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {

    const [visivel, setVisivel] = useState <'tabela' | 'from'>('tabela')
const [cliente , setCliente] = useState<Cliente>(Cliente.vazio())
    const clientes = [
        new Cliente('Bia', 45, '1'),
    ]

    function clienteSelecionado(cliente: Cliente) {
        setCliente(cliente)
        setVisivel('from')
    }
    function clienteExcluido(cliente: Cliente) {
    }
    function salvarCliente(cliente: Cliente){
        setVisivel('tabela')
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