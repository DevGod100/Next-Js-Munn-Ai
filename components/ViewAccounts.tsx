"use client";
import { useState, useEffect } from "react";
import {
    getAccount, getAllProviderAccountIds,
} from "@/lib/actions/profile-actions";

const ViewAccounts = () => {
  const [account, setAccount] = useState<Record<string, any>[] | null>(null);

  useEffect(() => {
    async function fetchData() {
      const accountData = await getAllProviderAccountIds();
      setAccount(accountData);
    }

    fetchData();
  }, []);

  return (
    <div>
    {account &&
      account.map(id => (
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