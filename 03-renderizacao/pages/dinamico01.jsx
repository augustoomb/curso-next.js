//aqui é o SSR

/*gera o conteudo das paginas dinamicamente no servidor.
 não cria o arquivo de fato no servidor como o SSG faz.
 Tem como se fosse um cache dinamico lá, que é montado quando necessário
*/
export function getServerSidoProps() {
    return {
        props: {
            numero: Math.random()
        }
    }
}

export default function Dinamico1(props) {
    return (
        <div>
            <h1>Dinâmico 01</h1>
        </div>
    )
}