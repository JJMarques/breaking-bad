import Link from 'next/link'
import styles from '../../styles/char.module.scss'
import { getAllCharacters, getCharacterInfo } from "../../util/util";
import { MdKeyboardReturn } from 'react-icons/md'
import { BiCake } from 'react-icons/bi'
import { ImHeart, ImHeartBroken } from 'react-icons/im'

export default function CharPage({ charInfo }) {

    return(
        <div className={styles.charPage}>
            <img src={charInfo.img} alt={charInfo.name} />
            <div className={styles.charInfo}>
                <Link href="/">
                    <a>
                        <MdKeyboardReturn style={{ marginRight: '10px' }} />RETURN
                    </a>
                </Link>
                <h1>{charInfo.name} <span>({charInfo.nickname})</span></h1>
                <div className={styles.occupationsList}>
                {charInfo.occupation.map((ocuppation, key) => (
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
                            marginTop: '2em',
                            display: 'flex', 
                            alignItems: 'center',
                            fontWeight: '200',
                            color: '#ff6b6b'
                        }}>
                            <ImHeart style={{ marginRight: '10px' }} /> Alive
                        </h3>
                    ) : (
                        <h3 style={{ 
                            marginTop: '2em',
                            display: 'flex', 
                            alignItems: 'center',
                            fontWeight: '200',
                            color: '#696969'
                        }}>
                            <ImHeartBroken style={{ marginRight: '10px' }} /> Dead
                        </h3>
                    )}
            </div>
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