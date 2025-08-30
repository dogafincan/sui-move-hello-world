"use client";

import { useGetMessage } from "./hooks/useGetMessage";

export default function Home() {
  const { data: message, isLoading, error } = useGetMessage();

  if (isLoading) {
    return (
      <main className="p-8">
        <p>Loading message from blockchain...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="p-8">
        <p>Error loading message: {error.message}</p>
        <p className="text-sm text-gray-600 mt-2">Fallback: Hello, world!</p>
      </main>
    );
  }

  return (
    <main className="p-8">
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Sui Move Hello World</h1>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-lg">
            Message from blockchain:{" "}
            <span className="font-semibold">{message}</span>
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Retrieved from contract: 0x159b80f...9c6aed
          </p>
        </div>
      </div>
    </main>
  );
}
