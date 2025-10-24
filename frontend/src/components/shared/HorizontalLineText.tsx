import React from "react";

export default function HorizontalLineText({text}:{text:string}) {
  return (
    <div className="flex items-center gap-4 my-6">
      <div className="flex-grow h-px bg-gray-300"></div>
      <span className="text-sm text-gray-500 whitespace-nowrap">{text}</span>
      <div className="flex-grow h-px bg-gray-300"></div>
    </div>
  );
}
