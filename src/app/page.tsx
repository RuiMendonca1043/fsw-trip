"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import TripSearch from "./components/TripSearch";

export default function Home() {
  return (
    <div>
      <TripSearch />
    </div>
  );
}
