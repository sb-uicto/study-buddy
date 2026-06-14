"use client";

import { useState } from 'react';
import ModeSelection from '@/components/Quiz/ModeSelection';
import QuestionCard from '@/components/Quiz/QuestionCard';
import QuizResults from '@/components/Quiz/QuizResults';
import { QuizData, QuizResult } from '@/types/quiz';

export default function QuizPage() {
  const [step, setStep] = useState<'selection' | 'loading' | 'active' | 'results'>('selection');
  const [quizData, setQuizData] = useState<QuizData | null>(null);
  const [results, setResults] = useState<QuizResult | null>(null);

  const startQuiz = async (mode: 'practice' | 'exam') => {
    setStep('loading');
    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        body: JSON.stringify({ mode }),
      });
      const data = await res.json();
      setQuizData(data);
      setStep('active');
    } catch (err) {
      console.error("Failed to load quiz", err);
      setStep('selection');
    }
  };

  const handleComplete = (finalResults: QuizResult) => {
    setResults(finalResults);
    setStep('results');
  };

  return (
    <div className="w-full">
      {step === 'selection' && <ModeSelection onSelect={startQuiz} />}
      
      {step === 'loading' && (
        <div className="flex flex-col items-center justify-center py-20 animate-pulse">
          <div className="w-16 h-16 border-4 border-[#7C4DFF] border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-lg font-medium text-[#1A237E]">AI is generating your study set...</p>
        </div>
      )}

      {step === 'active' && quizData && (
        <QuestionCard 
          data={quizData} 
          onComplete={handleComplete} 
        />
      )}

      {step === 'results' && results && (
        <QuizResults 
          results={results} 
          onRestart={() => setStep('selection')} 
        />
      )}
    </div>
  );
}