import React from "react";
import { useSearchParams } from "react-router-dom";

export default function Callback() {
  const [searchParams] = useSearchParams();
  const requestToken = searchParams.get("request_token");

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <p className="text-xl">Request Token: {requestToken || "Not found"}</p>
      </div>
    </div>
  );
}
