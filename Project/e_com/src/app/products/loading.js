import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      {/* Page Title */}
      {/* <Skeleton className="h-8 w-56 mb-8" /> */}

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="border rounded-2xl p-4 shadow-sm space-y-4"
          >
            {/* Product Image */}
            <Skeleton className="h-60 w-full rounded-xl" />

            {/* Category */}
            <Skeleton className="h-4 w-24" />

            {/* Product Title */}
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-3/4" />

            {/* Description */}
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-2/3" />

            {/* Rating & Price */}
            <div className="flex justify-between items-center">
              <Skeleton className="h-5 w-20" />
              <Skeleton className="h-6 w-16" />
            </div>

            {/* Button */}
            <Skeleton className="h-10 w-full rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loading;