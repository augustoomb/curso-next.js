// quase igual ao modelo anterior (estatico2)
// porém, ao usar o revalidate, o math.random vai gerar um novo num
// aleatório depois de 7 segundos

// INCREMENTAL STATIC REGENERATION

export function getStaticProps() {
    return {
        revalidate: 7, // segundos
        props: {
            numero: Math.random()
        }
    }
}

export default function Estatico3(props) {
    return (
        <div>
            <h1>Estático 03</h1>
            <h2>{ props.numero }</h2>
        </div>
    )
}

