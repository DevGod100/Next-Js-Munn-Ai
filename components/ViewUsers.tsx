"use client";
import { useState, useEffect } from "react";
import {
  GetFullProfile,
  getAllProviderAccountIds,
} from "@/lib/actions/profile-actions";
import Image from "next/image";

const ViewUsers = () => {
  const [fullProfile, setFullProfile] = useState<Record<string, any> | null>(
    null
  );
  const [accounts, setAccounts] = useState<Record<string, any>[] | null>(null);

  useEffect(() => {
    async function fetchData() {
      const data = await GetFullProfile();
      const accountData = await getAllProviderAccountIds();
      setFullProfile(data);
      // @ts-ignore
      setAccounts(accountData);
    }

    fetchData();
  }, []);

  return (
    <div>
      {fullProfile ? (
        <div className="border border-black rounded-md p-4">
          <p>Profile Image: </p>
          <Image
            className="rounded-full object-cover h-[40px] w-[40px]"
            width={35}
            height={35}
            src={`${fullProfile.image}`}
            alt="- Profile Image -"
          />

          {/* {Object.entries(fullProfile).map(([key, value]) => (
            <li key={key}>
              <strong>{key}:</strong> {value}
            </li>
          ))} */}
          <div>
          <h1>{fullProfile.name}</h1>
          <h1>{fullProfile.email}</h1>
          </div>
          <ul>
            {accounts.map((accountId, index) => (
              // @ts-ignore
              <li key={index}>{accountId}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ViewUsers;
