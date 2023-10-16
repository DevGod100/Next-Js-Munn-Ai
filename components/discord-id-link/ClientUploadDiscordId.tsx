"use client";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Check, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Label } from "../ui/label";
import {
  GetUploadedDisId,
} from "@/lib/actions/profile-actions";

const ClientUploadDiscordId = () => {
  const [loading, setLoading] = useState(false);

  const [oldField, setOldField] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const data = await GetUploadedDisId();
      setOldField(data?.uploadeddiscordid || "");
      setLoading(false);
    }

    fetchData();
  }, []);

  const loadForThreeSec = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  return (
    <div className="py-2">
      <div className="flex flex-col">
        <Label className="text-gray-500 py-2">Discord Id</Label>
        <div className="flex">
          <Input
            type="text"
            name="uploadedDiscordId" //for the form data!!!
            value={oldField || ""}
            placeholder="Your Discord Id..."
            required
            onChange={(e) => setOldField(e.target.value)}
          />
          <div>
            <Button
              type="submit"
              className="self-center"
              onClick={loadForThreeSec}
            >
              {!loading && <Check size={20} strokeWidth={2} />}
              {loading && <Loader2 size={20} strokeWidth={2} />}
            </Button>

            <p>
              Warning: Must match the id of your account you logged in with!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ClientUploadDiscordId;

// const ClientUploadDiscordId = () => {
//   const [loading, setLoading] = useState(false);

//   const [oldField, setOldField] = useState<string | null>(null);
//   const [areEqual, setAreEqual] = useState<string | null>(null);

//   useEffect(() => {
//     async function fetchData() {
//       setLoading(true);
//       const data = await GetUploadedDisId();
//       setOldField(data?.uploadeddiscordid || "");
//       setLoading(false);
//       const result = await CheckIfIdsAreEqual();
//       setAreEqual(result ? "true" : "false");
//     }

//     fetchData();
//   }, []);

//   const loadForThreeSec = () => {
//     setLoading(true);

//     setTimeout(() => {
//       setLoading(false);
//     }, 3000);
//   };

//   return (
//     <div className="py-2">
//       <div className="flex flex-col">
//         <Label className="text-gray-500 py-2">Discord Id</Label>
//         <div className="flex">
//           <Input
//             type="text"
//             name="uploadedDiscordId" //for the form data!!!
//             value={oldField || ""}
//             placeholder="Your Discord Id..."
//             required
//             onChange={(e) => setOldField(e.target.value)}
//           />

//           {areEqual === "true" ? (
//             <Button
//               type="submit"
//               className="self-center"
//               onClick={loadForThreeSec}
//             >
//               {!loading && <Check size={20} strokeWidth={2} />}
//               {loading && <Loader2 size={20} strokeWidth={2} />}
//             </Button>
//           ) : (
//             <div>
//               <Button disabled>Confirm</Button>
//               <p>Must match the id of your account you logged in with!</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };
// export default ClientUploadDiscordId;

// Provider Account ID: 1059846969314525214

// {areEqual === "true" && (
//   <Button
//     type="submit"
//     className="self-center"
//     onClick={loadForThreeSec}
//   >
//     {!loading && <Check size={20} strokeWidth={2} />}
//     {loading && <Loader2 size={20} strokeWidth={2} />}
//   </Button>
// )}
// {areEqual === "false" && (
//   <div>
//     <Button disabled>Confirm</Button>
//     <p>
//       Must match the id of your account you logged in with!
//     </p>
//   </div>
// )}
