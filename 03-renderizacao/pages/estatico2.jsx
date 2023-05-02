// o nome dessa função é um nome reservado next
// essa função é chamada uma unica vez, na hora da compilação
// rodando aqui, em modo dev, não dá pra perceber o efeito, apenas em produçao

// por isso, após gerar o build e roda, vou ver na pag um numero aleatório gerado
// e vai ser esse que vai ficar. Não será gerado outro

// o next sempre tentar usar estático(SSG).
//No caso aqui, pelo conteudo do código ele teria
// que gerar dinamico.
// porem com o getStaticProps,
//eu forço um estático (acho q é isso)
export function getStaticProps() {
    return {
        props: {
            numero: Math.random()
        }
    }
}

export default function Estatico2(props) {
    return (
        <div>
            <h1>Estático 02</h1>
            <h2>{ props.numero }</h2>
        </div>
    )
}

