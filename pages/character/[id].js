import { getAllCharacters, getCharacterInfo } from "../../util/util";

export default function CharPage({ charInfo }) {
    return(
        <div>
            <h1>{charInfo.name}({charInfo.nickname})</h1>
            <img src={charInfo.img} alt={charInfo.name} />
        </div>
    )
}

export async function getStaticPaths() {
    const chars = await getAllCharacters()
    const paths = []
    chars.forEach(char => {
        paths.push({ params: { id: String(char.char_id) } })
    })

    return {
        paths,
        fallback: false 
      };    
}

export async function getStaticProps({ params }) {
    const charInfo = await getCharacterInfo(params.id)

    return {
        props: {
            charInfo
        }
    }
}