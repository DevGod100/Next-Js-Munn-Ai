"use client";
import { useState, useEffect } from "react";
import {
     getAllProviderAccountIds,
} from "@/lib/actions/profile-actions";

const ViewAccounts = () => {
  const [account, setAccount] = useState<Record<string, any>[] | null>(null);

  useEffect(() => {
    async function fetchData() {
      const accountData = await getAllProviderAccountIds();
      // @ts-ignore
      setAccount(accountData);
    }

    fetchData();
  }, []);

  return (
    <div>
    {account &&
      account.map(id => (
      // @ts-ignore
        <div key={id}>{id}</div>
      ))}
  </div>
);
};

export default ViewAccounts;



   {/* {account && (
            <div>
              <h1>{account.providerAccountId}</h1>

            </div>
          )} */}