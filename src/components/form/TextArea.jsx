import React from "react";
import { useFormContext } from "react-hook-form";

function TextArea() {
  const { register } = useFormContext();
  return (
    <div className="flex flex-col gap-2">
      <textarea
        id="message"
        rows="3"
        className="block p-2.5 w-full text-sm text-gray-900  rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  "
        placeholder="Children's ages if you have children
                  Any locations you want to visit or any specific needs
"
        {...register("comment", { required: true })}
      ></textarea>
    </div>
  );
}

export default TextArea;
