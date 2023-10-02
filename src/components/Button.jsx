import './Buttons.css'

export const Button = ({ name, icon, click, activo, copiado }) => {

    return (
        <button className='btn' onClick={click} style={activo === true ? { color: '#000000', backgroundColor: '#FF3C38' } : {}}>
            {icon ? <i className={icon} ></i> : ""}
            {copiado ? 
                <div className='copyToClickBoard'>
                    <label htmlFor="">Copiado al porta papeles</label>
                </div>
            : ""}
            {/* {icon ? <i className={copiado ? "fa-solid fa-clipboard-check" : icon} ></i> : ""} */}
            {name}
        </button>
    )
}