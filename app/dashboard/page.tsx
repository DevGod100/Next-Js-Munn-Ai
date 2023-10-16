import SignOutButton from "@/components/SignOutButton";
import UploadDisLink from "@/components/discord-id-link/UploadDisLink";
import ServerUploadComponent from "@/components/upload/ServerUploadComponent";


const page = () => {
    return (
    <main  className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <ServerUploadComponent /> */}
      <UploadDisLink />
      <div className="fixed right-1 bottom-1">
      <SignOutButton/> 
      </div>
         
    </main>
  )
}

export default page

