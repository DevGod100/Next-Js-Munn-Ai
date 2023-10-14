"use client"
import { LogOut } from 'lucide-react';
import { Button } from './ui/button';
import { signOut } from 'next-auth/react';

const SignOutButton = () => {
  return (
    <Button
    className="text-white cursor-pointer flex items-center"
    onClick={(e: any) => {
      e.preventDefault();
      signOut().catch(console.error);
    }}
  >
    {" "}
    Log out
    <LogOut className="text-red-500 w-4 h-4 ml-2" />


</Button>
  )
}

export default SignOutButton