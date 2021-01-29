import { useEffect, useState } from "react"
import { getAllCharacters, getSpecificCharacter } from "../util/util"
import styles from '../styles/home.module.scss'
import SearchInputComponent from "../components/SearchInput"
import Link from 'next/link'
import CharacterCardComponent from "../components/CharacterCard"
import Head from 'next/head'

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
        <div className={styles.page}>
            <Head>
                <title>Breaking Bad - Characters</title>
            </Head>
            <div className={styles.headerContainer}>
                <Link href="/">
                    <a><img src="https://upload.wikimedia.org/wikipedia/commons/7/77/Breaking_Bad_logo.svg" alt="Breaking Bad logo" /></a>
                </Link>
                <div className={styles.inputContainer}>
                    <SearchInputComponent searchInput={searchInput} setSearchInput={setSearchInput} />
                </div>
            </div>
            <div className={styles.gridCharacters}>
                {characterList.map((char) => (
                    <Link href={`/character/${char.char_id}`} key={char.char_id}>
                        <a>
                            <CharacterCardComponent 
                                name={char.name} 
                                img={char.img} 
                                nick={char.nickname}
                            />
                        </a>
                    </Link>
                ))}
            </div>
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