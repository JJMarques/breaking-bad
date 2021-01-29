import Link from 'next/link'
import styles from '../../styles/char.module.scss'
import { getAllCharacters, getCharacterInfo } from "../../util/util";
import { MdKeyboardReturn } from 'react-icons/md'
import { BiCake } from 'react-icons/bi'
import { ImHeart, ImHeartBroken } from 'react-icons/im'
import { BsArrow90DegLeft, BsArrow90DegRight } from 'react-icons/bs'
import Head from 'next/head'

export default function CharPage({ charInfo, charOcuppations }) {
    return(
        <div className={styles.charPage}>
            <Head>
                <title>{charInfo.name} - Breaking Bad</title>
                <meta name="description" content={`Information about Breaking Bad character ${charInfo.name}.`} />
                <meta property="og:title" content={`${charInfo.name} - Breaking Bad`} />
                <meta property="og:description" content={`Information about Breaking Bad character ${charInfo.name}.`} />
            </Head>
            <div className={styles.imageContainer}>
                <img src={charInfo.img} alt={charInfo.name} />
            </div>
            <div className={styles.charInfo}>
                <Link href="/">
                    <a>
                        <MdKeyboardReturn style={{ marginRight: '10px' }} />RETURN
                    </a>
                </Link>
                <h1>{charInfo.name} <span>({charInfo.nickname})</span></h1>
                <div className={styles.occupationsList}>
                {charOcuppations.map((ocuppation, key) => (
                    <div key={key} className={styles.occupation}>
                        <h2 >{ocuppation}</h2>
                    </div>
                ))}
                </div>
                <h2 className={styles.birthday}>
                    <BiCake style={{ marginRight: '10px', color: 'rgb(103, 134, 117)' }} />
                    {charInfo.birthday !== "Unknown" ? charInfo.birthday : 'Date unknown'}
                </h2>
                    {charInfo.status === 'Alive' ? (
                        <h3 style={{ 
                            marginTop: '1em',
                            display: 'flex', 
                            alignItems: 'center',
                            fontWeight: '200',
                            color: '#ff6b6b'
                        }}>
                            <ImHeart style={{ marginRight: '10px' }} /> Alive
                        </h3>
                    ) : (
                        <h3 style={{ 
                            marginTop: '1em',
                            display: 'flex', 
                            alignItems: 'center',
                            fontWeight: '200',
                            color: '#696969'
                        }}>
                            <ImHeartBroken style={{ marginRight: '10px' }} /> Dead
                        </h3>
                    )}
                <div className={styles.navigation}>
                    {charInfo.char_id > 1 && (
                        <Link href={`/character/${String(charInfo.char_id - 1)}`}>
                            <a>
                                <BsArrow90DegLeft style={{ marginRight: '10px' }} /> PREVIOUS
                            </a>
                        </Link>
                    )}
                    {charInfo.char_id < 57 && (
                        <Link href={`/character/${String(charInfo.char_id + 1)}`}>
                            <a style={{ marginLeft: '30px' }}>
                                NEXT <BsArrow90DegRight style={{ marginLeft: '10px' }} />
                            </a>
                        </Link>
                    )}
                    
                </div>
            </div>
        </div>
    )
}

/* export async function getStaticPaths() {
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
    const { charInfo, charOcuppations } = await getCharacterInfo(params.id)

    return {
        props: {
            charInfo,
            charOcuppations
        },
        revalidate: 1
    }
}  
 */
export async function getServerSideProps({ params }) {
    const { charInfo, charOcuppations } = await getCharacterInfo(params.id)

    return {
        props: {
            charInfo,
            charOcuppations 
        }
    }
}  