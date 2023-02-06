import styles from './Button.module.css'

const Button = function (props) {

    return (
        <button onClick={props.onClick} type={props.type} className={styles.button || 'button'}>{props.children}</button>
    )
}

export default Button;