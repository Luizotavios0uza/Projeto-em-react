import styles from './Triangle.module.css'

export function Triangle() {
    return(
    <div>
        <h1>Triangulo</h1>
        <h2>Quantidade de lados: 3</h2>
        <div className={styles.round}></div>
    </div>
    
    )
}