/* no SSG preciso usar o método abaixo. Nele eu digo quais IDs
eu vou renderizar. (já que estamos na pag de id)
*/
/* na getStaticProps que tbm é obrigatória, eu vou receber o id
passado na url (ex 100 de http://localhost:3000/alunos/100) e
trabalhar com essa URL, por fim passando os dados pra exibir no "AlunoPorId"
*/

export async function getStaticPaths() {
    const resp = await fetch('http://localhost:3000/api/alunos/tutores');
    const ids = await resp.json();

    const paths = ids.map(id => {
        return { params: { id: `${ id }` } } // $id foi pra corrigir formato num/string
    })

    return {
        fallback: true,
        paths: paths
    }
}

/*
    FALLBACK
    ao rodar o método getStaticProps, ele precisa encontrar o id passado na url
    dentro da lista de ids que gerei acima. Se encontrar ele roda ok e monta a pag.
    Se não encontrar:
        - e o fallback estiver como FALSE, vai dar erro 404
        - e o fallback estiver como TRUE, ele vai tentar montar o componente normalmente
            caso eu não tenha um controle dos componentes de HTML
            (como usar ternário para saber se o valor é nulo/undefined, por ex.), vai quebrar.

*/



// a função abaixo é chamada tantas vezes quanto forem a quantidade de elementos
// no arr 'paths' acima. No caso aqui, chama 4 vezes e gera 4 páginas estáticas
export async function getStaticProps(context) { //context é opcional
    const resp = await fetch(`http://localhost:3000/api/alunos/${context.params.id}`)
    const aluno = await resp.json();

    return {
        props: {
            aluno
        }
    }
}

export default function AlunoPorId(props) {
    const { aluno } = props;

    return (
        <div>
            <h1>Detalhes do Aluno</h1>
            { aluno ?
                <ul>
                    <li>{ aluno.id }</li>
                    <li>{ aluno.nome }</li>
                    <li>{ aluno.email }</li>
                </ul>
                : false
            }
        </div>
    )
}


// fallback false: gera error 404 quando não encontra
// os IDs específico que eu informei