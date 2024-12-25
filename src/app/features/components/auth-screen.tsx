"use client"
import { useState } from "react"
import { SignInFlow } from "../types"
import { SignIncard } from "./sign-in-card"
import { SignUpcard } from "./sign-up-card"

export const AuthScreen = () => {
    const [state,setState] = useState<SignInFlow>("SingIn")
    return (
        <div className="h-full flex items-center justify-center bg-[#5C3B58]">
            <div className="md:h-auto md:w-[420px]">
                { state === "SignUp" ? <SignUpcard/> : <SignIncard/>}
            </div>
        </div>
    )
}