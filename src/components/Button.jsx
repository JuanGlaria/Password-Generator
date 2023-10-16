import './Buttons.css'

export const Button = ({ name, icon, click, activo}) => {

    return (
        <button className='btn' onClick={click} style={activo === true ? { color: '#FFFFFF', backgroundColor: '#008000' } : {}}>
            {icon ? <i className={icon} ></i> : ""}
            {name}
        </button>
    )
}