import SignOutButton from "@/components/SignOutButton";
import ServerUploadComponent from "@/components/upload/ServerUploadComponent";


const page = () => {
    return (
    <main  className="flex min-h-screen flex-col items-center justify-between p-24">
      <ServerUploadComponent />
         <SignOutButton/> 
    </main>
  )
}

export default page

