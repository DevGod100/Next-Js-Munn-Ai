"use client"

import { Button } from "./ui/button"
import {signIn} from 'next-auth/react'

type Props = {
    text: string
    className?: string;

}

const SignInButton = ({text, className}: Props) => {
  return (
    <Button
    onClick={() =>{
        signIn('discord').catch(console.error);
    }}
    className={className}
    >
        {text}
    </Button>
  )
}

export default SignInButton