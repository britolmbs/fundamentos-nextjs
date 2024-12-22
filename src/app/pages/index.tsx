
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import useClientes from "../hooks/useClientes";

export default function Home() {

    const { selecionarCliente, excluirCliente, cliente, clientes, novoCliente, salvarCliente, tabelaVisivel, exibirTabela } = useClientes()

    return (
        <div className={`
        flex justify-center items-center
        h-screen
        `}>
            <Layout titulo="Cadastro Simples">
                {tabelaVisivel ? (
                <>
                <div className="flex justify-end">
                <Botao cor="green" className="mb-4" onClick={novoCliente}>Novo Cliente</Botao>
                </div>
              <Tabela clientes={clientes} clienteSelecionado={selecionarCliente}
              clienteExcluido={excluirCliente}
              />
              </>

                ):(
                    
                    <Formulario cliente={cliente}
                    cancelado={ exibirTabela}
                   clienteMudou={salvarCliente}
                    />
                )}
                </Layout>    

        </div>
    )
}