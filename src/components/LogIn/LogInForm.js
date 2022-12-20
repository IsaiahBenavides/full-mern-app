import { useState } from "react";


export default function LogInForm(props) {
    return(
        <>
            <input 
            type="text"
            name="email"
            />
            <input 
            type="text"
            name="password"
            />
        </>
    )
}