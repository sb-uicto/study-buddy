"use client";
import {useState, useEffect} from "react";
import Link from "next/link"

export default function Home() {
  return (
    <main>
      <h1>Welcome to the Home Page</h1>
      <p>This is the main content of the home page.</p>
      <p>Autosave is on!</p>
      <p>hello, world!</p>
      <Link href="/users">Users</Link>
    </main>
  );
}
