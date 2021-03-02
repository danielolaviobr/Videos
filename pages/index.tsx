import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-auto h-screen bg-warmGray-300">
      <Link href="/menu">
        <div className="flex items-center justify-center h-12 pl-2 m-4 bg-white rounded shadow cursor-pointer w-72">
          <span className="text-lg font-medium">Menu Animado</span>
        </div>
      </Link>
      <Link href="/card">
        <div className="flex items-center justify-center h-12 pl-2 m-4 bg-white rounded shadow cursor-pointer w-72">
          <span className="text-lg font-medium">Card Responsivo</span>
        </div>
      </Link>
    </main>
  );
}
