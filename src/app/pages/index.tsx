import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
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
    function salvarCliente(cliente: Cliente){

    }

    const [visivel, setVisivel] = useState <'tabela' | 'from'>('tabela')

    return (
        <div className={`
        flex justify-center items-center
        h-screen
        `}>
            <Layout titulo="Cadastro Simples">
                {visivel ==='tabela' ? (
                <>
                <div className="flex justify-end">
                <Botao cor="green" className="mb-4" onClick={()=> setVisivel('form')}>Novo Cliente</Botao>
                </div>
              <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido}
              />
              </>

                ):(
                    
                    <Formulario cliente={clientes[2]}
                    cancelado={() => setVisivel('tabela')}
                   clienteMudou={salvarCliente}
                    />
                )}
                </Layout>    

        </div>
    )
}