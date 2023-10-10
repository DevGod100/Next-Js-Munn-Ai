"use client";

import { useEffect } from "react";
import { UpdateDiscordId} from "@/lib/actions/profile-actions";
import { Button } from "./ui/button";


const ClickDiscordId = () => {


  // useEffect(() => {
  //   async function fetchData() {
  //     const data = await UpdateDiscordId();
  //   }

  //   fetchData();
  // }, []);

  function DisId(){
      UpdateDiscordId();
  }
  return (
    <div  className="py-2" >
      <div className="flex flex-col">
        <div className="flex">
         
         <Button type="button" className="self-center" onClick={DisId}>
          Reveal me
        </Button>
        </div>
      </div>
    </div>
  );
};

export default ClickDiscordId;