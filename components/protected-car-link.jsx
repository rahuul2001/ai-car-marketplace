"use client";

import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

/**
 * A component that redirects to login if user is not logged in,
 * otherwise navigates to the car details page.
 */
export const ProtectedCarLink = ({ 
  carId, 
  children, 
  className = "", 
  showToast = true 
}) => {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    
    if (!isSignedIn) {
      if (showToast) {
        toast.error("Please sign in to view car details");
      }
      router.push("/sign-in");
      return;
    }

    // User is signed in, navigate to the car details
    router.push(`/cars/${carId}`);
  };

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  );
};
