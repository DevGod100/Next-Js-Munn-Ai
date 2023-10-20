"use client";

import { Input } from "../ui/input";
import { Check } from "lucide-react";
import { useEffect, useState } from "react";
import { GetEmailInputted } from "@/lib/actions/profile-actions";

const ClientSideEmailInput = () => {
  const [oldField, setOldField] = useState<string | null>(null);
//   const [hide, setHide] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const data = await GetEmailInputted();
      setOldField(data?.emailcontact || "");
    }

    fetchData();
  }, []);

//   function HideEntireInputSection() {
//     setHide(true)
//   }

  return (
        <div
        className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6"
      >
        <div className="mx-auto max-w-screen-md sm:text-center">
          <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl dark:text-white">
            How should we contact you?
          </h2>
          {/* <p className="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400">Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email.</p> */}
            <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
              <div className="relative w-full">
                <label className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Email address
                </label>
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </div>
                <input
                  className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                  type="text"
                  name="emailContact" //for the form data!!!
                  value={oldField || ""}
                  placeholder="example@gmail.com"
                  required
                  onChange={(e) => setOldField(e.target.value)}
                />
                {/* <input  placeholder="Enter your email" type="email" id="email" required=""> */}
              </div>
              <div>
                <button
                  type="submit"
                  className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-purple-700 border-purple-600 sm:rounded-none sm:rounded-r-lg hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
                >
                  Confirm
                </button>
              </div>
            </div>
        </div>
      </div>
   
   

    //     <div className="py-2" >
    //     <div className="flex flex-col">
    //       <Label className="text-3xl text-purple-700 py-2"></Label>
    //       <div className="flex">
    //       <Input
    //         type="text"
    //         name="emailContact" //for the form data!!!
    //         value={oldField || ""}
    //         placeholder="example@gmail.com"
    //         required
    //         onChange={(e) => setOldField(e.target.value)}
    //       />
    //        <Button type="submit" className="self-center" onClick={SuccessAlert}>
    //       <CheckIcon />
    //       </Button>
    //       </div>
    //     </div>
    //   </div>
  );
};

export default ClientSideEmailInput;
