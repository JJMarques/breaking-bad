import { useEffect, useState } from "react"
import { getAllCharacters, getSpecificCharacter } from "../util/util"
import styles from '../styles/home.module.scss'
import SearchInputComponent from "../components/SearchInput"
import Link from 'next/link'

export default function Index({ characters }) {
    const [searchInput, setSearchInput] = useState("")
    const [characterList, setCharacterList] = useState(characters)

    useEffect(() => {
        const changeCharList = async () => {
            const newCharacterList = await getSpecificCharacter(searchInput)
            setCharacterList(newCharacterList)
        }
        changeCharList()
    }, [searchInput])

    return(
        <div>
            <SearchInputComponent searchInput={searchInput} setSearchInput={setSearchInput} />
            <ul>
            {characterList.map((char) => (
                <Link href={`/character/${char.char_id}`} key={char.char_id}>
                    <a><li>{char.name}</li></a>
                </Link>
            ))}
            </ul>
        </div>
    )
}

export async function getStaticProps() {
    const characters = await getAllCharacters()

    return {
        props: {
            characters
        }
    }

}