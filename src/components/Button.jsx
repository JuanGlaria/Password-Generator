import './Buttons.css'

export const Button = ({ name, icon, click, activo}) => {
    console.log(activo)
    return (
        <button className='btn' onClick={click} style={activo === true ? { color: '#FF0000', backgroundColor: '#0015FF' } : {}}>
            {icon ? <i className={icon}></i> : ""}
            {name}
        </button>
    )
}