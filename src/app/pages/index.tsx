import Botao from "../components/Botao";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {

    const clientes = [
        new Cliente('Bia', 45, '1'),
    ]

    function clienteSelecionado(cliente: Cliente) {

    }
    function clienteExcluido(cliente: Cliente) {

    }

    return (
        <div className={`
        flex justify-center items-center
        h-screen
        `}>
            <Layout titulo="Cadastro Simples">
                <div className="flex justify-end">
                <Botao cor="green" className="mb-4">Novo Cliente</Botao>
                </div>
              <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido}
              />
                </Layout>    

        </div>
    )
}