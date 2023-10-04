import './Buttons.css'

export const Button = ({ name, icon, click, activo}) => {

    return (
        <button className='btn' onClick={click} style={activo === true ? { color: '#000000', backgroundColor: '#FF3C38' } : {}}>
            {icon ? <i className={icon} ></i> : ""}
            {name}
        </button>
    )
}