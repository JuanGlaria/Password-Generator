import './Buttons.css'

export const Button = ({ name, icon, click, activo, copiado }) => {

    return (
        <button className='btn' onClick={click} style={activo === true ? { color: '#FF0000', backgroundColor: '#0015FF' } : {}}>
            {icon ? <i className={copiado ? "fa-solid fa-clipboard-check" : icon} ></i> : ""}
            {name}
        </button>
    )
}