import { useEffect, useState } from 'react'
import { Button } from './Button'
import Swal from 'sweetalert2'
import './PasswordGenerator.css'

export const PasswordGenerator = () => {
    const [passwordLength, setPasswordLength] = useState(0)
    const [password, setPassword] = useState("")
    const [letrasMayus, setLetraMayus] = useState(true)
    const [letrasMinus, setLetraMinus] = useState(false)
    const [numbers, setNumers] = useState(false)
    const [passwordDifficulty, setPasswordDifficulty] = useState("")
    const [charactersEspeciales, setCharactersEspeciales] = useState(false)

    window.onload = function () {
        handlePasswordChange()
        setPasswordDifficulty('Weak')
    }

    useEffect(() => {
        let valueRange = document.getElementById('valueRange')
        valueRange.value = 8
        setPasswordLength(8)
    }, [])

    const handlePasswordChange = () => {
        let valueRange = document.getElementById('valueRange').value
        setPasswordLength(valueRange)
        let finalPassword = '';
        let characters = '';
        const letrasMayusValues = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        const letrasMinusValues = 'abcdefghijklmnopqrstuvwxyz';
        const numbersValues = '0123456789'
        const charactersEspecialesValues = '!"#$%&/()=?¡*-+¨*[]{}_:;,.-'
        if (letrasMayus === true) {
            characters = characters + letrasMayusValues
        }
        if (letrasMinus === true) {
            characters = characters + letrasMinusValues
        }
        if (numbers === true) {
            characters = characters + numbersValues
        }

        if (charactersEspeciales === true) {
            characters = characters + charactersEspecialesValues
        }

        const charactersLength = characters.length;
        let contador = 0;
        while (contador < passwordLength) {
            finalPassword += characters.charAt(Math.floor(Math.random() * charactersLength));
            contador += 1;
        }

        setPassword(finalPassword);
        if (finalPassword.length >= 8 && finalPassword.length <= 12) {
            setPasswordDifficulty('Weak')
        } else if (finalPassword.length < 18) {
            setPasswordDifficulty('Good')
        } else {
            setPasswordDifficulty('Strong')
        }
    }

    const handleClickMayus = () => {
        setLetraMayus(prevValue => !prevValue)
    }
    const handleClickMinus = () => {
        setLetraMinus(prevValue => !prevValue)
    }
    const handleClickNumeros = () => {
        setNumers(prevValue => !prevValue)
    }
    const handleClickCharEspeciales = () => {
        setCharactersEspeciales(prevValue => !prevValue)
    }
    const handleResetPassword = () => {
        handlePasswordChange()
    }

    const copyToClipBoard = () => {
        navigator.clipboard.writeText(password)
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })
        Toast.fire({
            icon: 'success',
            title: 'Copiado a Portapapeles'
        })
    }

    return (
        <>
            <main className="container">
                <div className='passwordInputSection'>
                    <div className='passwordInputSection-labelgroup'>
                        <input type="text" id='finalPassword' value={password} readOnly />
                        <label htmlFor='finalPassword' style={passwordDifficulty == 'Weak' ? { color: '#FF0000', border:'1px solid #FF0000' } : passwordDifficulty == 'Good' ? { color: '#00F3FF', border:'1px solid #00F3FF' } : { color: '#08FF00', border:'1px solid #08FF00'}}>{passwordDifficulty}</label>
                    </div>
                    <div className='passwordInputSection-btnGroup'>
                        <Button icon='fa-solid fa-rotate-right' click={handleResetPassword} />
                        <Button icon='fa-regular fa-clipboard' click={copyToClipBoard} />
                    </div>
                </div>
                <div className='optionsSections'>
                    <div className='optionsSections-lengthParams'>
                        <div>
                            <label htmlFor="valueRange">Longitud:</label>
                            <label htmlFor="valueRange">{passwordLength}</label>
                        </div>
                        <input type="range" name="longitud" id="valueRange" list='values' min="8" max="20" step="1" onChange={handlePasswordChange} />
                    </div>
                    <div className='optionsSections-Characters'>
                        <Button name='A-Z' click={handleClickMayus} activo={letrasMayus} />
                        <Button name='a-z' click={handleClickMinus} activo={letrasMinus} />
                        <Button name='0-9' click={handleClickNumeros} activo={numbers} />
                        <Button name='>/=+%...' click={handleClickCharEspeciales} activo={charactersEspeciales} />
                    </div>
                </div>
            </main>
        </>
    )
}