"use client";

import { useState } from "react";
import { X } from "lucide-react";
import Link from "next/link";

export default function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative isolate flex items-center justify-center gap-x-6 overflow-hidden bg-black px-6 py-2.5 sm:px-3.5">
      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
        {/* White Badge */}
        <span className="flex-none rounded-full bg-white px-2 py-1 text-xs font-medium text-black">
          New
        </span>
        <p className="text-center text-sm leading-6 text-white">
          We have launched our product GMB Business Listing Data{" "}
          <Link
            href="#"
            className="inline-flex items-center gap-x-1 font-semibold text-blue-400 hover:text-blue-300 transition-colors duration-200"
          >
            Check it out <span aria-hidden="true">→</span>
          </Link>
        </p>
      </div>
      {/* White Dismiss Button */}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-4 flex-none rounded-lg p-1 text-white hover:text-gray-300 transition-colors duration-200"
      >
        <X className="h-5 w-5" />
        <span className="sr-only">Dismiss announcement</span>
      </button>
    </div>
  );
}

