import styles from '../styles/home.module.scss'

export default function CharacterCardComponent({ name, img, nick }) {
    return(
        <div className={styles.charCard}>
            <img 
                src={img}
                alt={name}
            />
            <div className={styles.dataDisplay}>
                <h1>{name}</h1>
                <small>{nick}</small>
            </div>
        </div>
    )
}