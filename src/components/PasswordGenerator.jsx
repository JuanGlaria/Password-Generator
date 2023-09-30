import { useState } from 'react'
import { Button } from './Button'
import './PasswordGenerator.css'

export const PasswordGenerator = () => {
    const [passwordLength, setPasswordLength] = useState(0)
    // const [setAllCharacters,setAllCharacters] = useState(true)
    const [password, setPassword] = useState("")
    const [letrasMayus, setLetraMayus] = useState(false)
    const [letrasMinus, setLetraMinus] = useState(false)
    const [numbers, setNumers] = useState(false)
    const [charactersEspeciales, setCharactersEspeciales] = useState(false)

    const handlePasswordChange = () => {
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


    return (
        <>
            <main className="container">
                <div className='passwordInputSection'>
                    <input type="text" value={password} readOnly />
                    <div className='passwordInputSection-btnGroup'>
                        <Button icon='fa-solid fa-rotate-right' />
                        <Button icon='fa-regular fa-clipboard' />
                    </div>
                </div>
                <div>
                    <label htmlFor="longitud">Longitud</label>
                    <label htmlFor="longitud">{passwordLength}</label>
                    <input type="range" name="longitud" id="valueRange" list='values' min="8" max="20" step="1" onChange={handlePasswordChange} />

                    <div>
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