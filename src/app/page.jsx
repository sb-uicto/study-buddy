"use client";
import {useState, useEffect} from "react";
import Link from "next/link"

export default function Home() {
  return (
    <main>
      <h1>Welcome to Study Buddy</h1>
      <p>Get to studying!</p>
      <p>Study Buddy helps you study better with quizzes, flashcards and an ai study assistant. Go to dashboard to get started now!</p>
      <Link href="/dashboard">Go to Dashboard</Link>
    </main>
  );
}
 