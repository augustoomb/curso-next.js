// função abaixo é executada apenas do lado do servidor
// para provar isso, fizemos o console.log. Posso abrir o console do navegador e não verei a mensagem lá
// só a vejo no console do terminal do vscode

/*
rodamos npm run dev e deixamos durante a criação do código
depois, o prof parou e rodou o npm run build pra gerar o build
Isso da erro. Pois, ao parar tudo, o programa não encontra mais 
a chamada à API para abaster o arquivo com os dados.
O que ele fez foi rodar npm run dev novamente,
e em outro terminal rodou o npm run build simultaneamente.
Isso fez o next criar um arquivo estático do lado do servidor, já com
os dados (caneta, caderno, etc)
*/
export async function getStaticProps() {
    console.log("Essa mensagem só será exibida no lado do servidor.")
    const resp = await fetch('http://localhost:3000/api/produtos')
    const produtos = await resp.json();

    return {
        props: {
            produtos
        }
    }
}

export default function Estatico4(props) {
    function renderizarProdutos() {
        return props.produtos.map(produto => {
            return <li key={ produto.id }>{ produto.nome }</li>
        })
    }

    return (
        <div>
            <h1>Estático 04</h1>
            <ul>
                { renderizarProdutos() }
            </ul>
        </div>
    )
}

