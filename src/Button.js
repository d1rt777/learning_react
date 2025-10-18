import React, { useEffect, useState } from "react"

const Button = (props) => {
    let [click, setClick] = useState(0)

    useEffect(()=>{
        document.title = `вы нажали ${click}`
    })

    const { text = "кнопка" } = props
    return (
        <button onClick={()=> setClick(click++)}>{text} {click}</button>
    )
}

export default Button