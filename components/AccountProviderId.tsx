"use client"
// import { SetDiscordIdtoAccountProviderId } from '@/lib/actions/profile-actions';
import React, { useEffect, useState } from 'react';

const AccountProviderId = () => {
    const [user, setUser] = useState<Record<string, any> | null>(null);
    // useEffect(() => {
    //     async function fetchData() {
    //       const DisId = await SetDiscordIdtoAccountProviderId();
    //       setUser(DisId);
    //     }
    
    //     fetchData();
    //   }, []);

  return (
    <div>
      {user && (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Discord ID: {user.discordId}</p>
        </div>
      )}
    </div>
  );
}

export default AccountProviderId;




