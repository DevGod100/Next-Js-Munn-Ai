import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const ServerUploadComponent = () => {
  const addMetadataFile = async (formData: FormData) => {
    "use server";
    const mFile = formData.get("metadataFile");

    const fileContents = await mFile.text(); // Read file contents as text
    console.log("File Contents:", fileContents);

  }
  return (
    <form
      action={addMetadataFile}
      className="flex items-center justify-center max-w-[750px]"
    >
      <Input type="file" accept=".jsonl" name="metadataFile" required className="hover:cursor-pointer"/>
      <div>
        <Button type="submit">Confirm</Button>
      </div>
    </form>
  );
};

export default ServerUploadComponent;


//styling
//<Label>Metadata.jsonl file</Label>
