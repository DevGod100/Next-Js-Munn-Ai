"use client"
import { useState, useEffect } from "react";
import { GetFullProfile } from "@/lib/actions/profile-actions";
import Image from "next/image";

const ViewUsers = () => {
    const [fullProfile, setFullProfile] = useState<{
        name: string | null;
        email: string | null;
        image: string | null;
      } | null>(null);
  
    useEffect(() => {
      async function fetchData() {
        const data = await GetFullProfile();
        setFullProfile(data);
      }
  
      fetchData();
    }, []);
  
    return (
      <div>
        {fullProfile ? (
          <div className="border border-black rounded-md p-4">
          <>
            </>
            <p>Profile Image: </p>
            <Image
              className="rounded-full object-cover h-[40px] w-[40px]"
              width={35}
              height={35}
              src={`${fullProfile.image}`}
              alt="- Profile Image -"
              />
              <p>{fullProfile.name}</p>
              <p>{fullProfile.email}</p>
              <p className="font-bold">NO RETRIEVAL MECHANISM FOR MY ID YET: <span className="bg-yellow-400">1059846969314525214</span></p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  };
  
  export default ViewUsers;