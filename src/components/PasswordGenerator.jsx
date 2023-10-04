import { useEffect, useState } from 'react'
import { Button } from './Button'
import './PasswordGenerator.css'

export const PasswordGenerator = () => {
    const [passwordLength, setPasswordLength] = useState(0)
    const [password, setPassword] = useState("")
    const [letrasMayus, setLetraMayus] = useState(true)
    const [letrasMinus, setLetraMinus] = useState(false)
    const [numbers, setNumers] = useState(false)
    const [charactersEspeciales, setCharactersEspeciales] = useState(false)
    const [copyToClipboard, setCopyToClipboard] = useState(false)
    // const [allowGeneratePassword, setAllowGeneratePassword] = useState(true)
    const allowGeneratePassword = true


    useEffect(() => {
        setCopyToClipboard(false)
        let valueRange = document.getElementById('valueRange')
        valueRange.value = 8
        setPasswordLength(8)
    }, [])

    const handlePasswordChange = () => {
        if (allowGeneratePassword === true) {
            let valueRange = document.getElementById('valueRange').value
            setPasswordLength(valueRange)
            let finalPassword = '';
            let characters = '';
            console.log(characters)
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
            console.log(characters)
        }
    }

    const handleClickMayus = () => {
        setLetraMayus(prevValue => !prevValue)
        handlePasswordChange()
    }
    const handleClickMinus = () => {
        setLetraMinus(prevValue => !prevValue)
        handlePasswordChange()
    }
    const handleClickNumeros = () => {
        setNumers(prevValue => !prevValue)
        handlePasswordChange()
    }
    const handleClickCharEspeciales = () => {
        setCharactersEspeciales(prevValue => !prevValue)
        handlePasswordChange()
    }
    const handleResetPassword = () => {
        handlePasswordChange()
    }

    const AllowGeneratePassword = () => {
        handlePasswordChange()
    }

    const copyToClipBoard = () => {
        navigator.clipboard.writeText(password)


    }

    return (
        <>
            <main className="container">
                <div className='passwordInputSection'>
                    <input type="text" value={password} readOnly />
                    <div className='passwordInputSection-btnGroup'>
                        <Button icon='fa-solid fa-rotate-right' click={handleResetPassword} />
                        <Button icon='fa-regular fa-clipboard' click={copyToClipBoard} copiado={copyToClipboard} />
                    </div>
                </div>
                <div className='optionsSections'>
                    <div className='optionsSections-lengthParams'>
                        <div>
                            <label htmlFor="longitud">Longitud:</label>
                            <label htmlFor="longitud">{passwordLength}</label>
                        </div>
                        <input type="range" name="longitud" id="valueRange" list='values' min="8" max="20" step="1" onChange={handlePasswordChange} />
                    </div>
                    <div className='optionsSections-Characters'>
                        <Button name='A-Z' click={handleClickMayus} activo={letrasMayus} />
                        <Button name='a-z' click={handleClickMinus} activo={letrasMinus} />
                        <Button name='0-9' click={handleClickNumeros} activo={numbers} />
                        <Button name='>/=+%...' click={handleClickCharEspeciales} activo={charactersEspeciales} />
                    </div>
                    <div className='btn-generatePassword'>
                        <Button name='Generar Contraseña' click={AllowGeneratePassword} ></Button>
                    </div>
                </div>
            </main>
        </>
    )
}