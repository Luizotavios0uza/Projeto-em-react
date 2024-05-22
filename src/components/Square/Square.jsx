import styles from './Square.module.css'

export function Square() {
    return(
    <div>
        <h1>Quadrado</h1>
        <h2>Quantidade de lados: 4</h2>
         
            <div className={styles.square}></div>
         

    </div>
    )
}