"use client";

import { useState } from 'react';
import { QuizData, QuizResult } from '@/types/quiz';

interface Props {
  data: QuizData;
  onComplete: (results: QuizResult) => void;
}

export default function QuestionCard({ data, onComplete }: Props) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [attempts, setAttempts] = useState(0);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [userAnswers, setUserAnswers] = useState<{questionId: number, firstAttemptCorrect: boolean}[]>([]);

  const currentQuestion = data.questions[currentIdx];
  const isPractice = data.mode === 'practice';

  const handleAnswer = (optionId: string) => {
    if (isCorrect && isPractice) return; // Prevent clicking after correct in practice

    setSelectedOption(optionId);
    const correct = optionId === currentQuestion.correctAnswer;
    
    if (attempts === 0) {
      setUserAnswers([...userAnswers, { questionId: currentQuestion.id, firstAttemptCorrect: correct }]);
    }

    if (correct) {
      setIsCorrect(true);
    } else {
      setAttempts(prev => prev + 1);
      setIsCorrect(false);
    }
  };

  const handleNext = () => {
    if (currentIdx < data.questions.length - 1) {
      setCurrentIdx(prev => prev + 1);
      setSelectedOption(null);
      setAttempts(0);
      setIsCorrect(null);
    } else {
      const score = userAnswers.filter(a => a.firstAttemptCorrect).length;
      onComplete({
        score,
        total: data.questions.length,
        percentage: Math.round((score / data.questions.length) * 100)
      });
    }
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#D8DADD] max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <span className="text-sm font-semibold text-[#7C4DFF] uppercase tracking-wider">
          Question {currentIdx + 1} of {data.questions.length}
        </span>
        {isPractice && (
          <span className="text-xs font-medium px-2 py-1 bg-[#F2F4F7] text-[#4A4A4A] rounded">
            Attempts: {attempts}/3
          </span>
        )}
      </div>

      <h2 className="text-xl font-bold text-[#1A237E] mb-8 leading-tight">
        {currentQuestion.text}
      </h2>

      <div className="space-y-4 mb-8">
        {currentQuestion.options.map((option) => (
          <button
            key={option.id}
            onClick={() => handleAnswer(option.id)}
            disabled={isPractice && attempts >= 3 && !isCorrect}
            className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-center justify-between
              ${selectedOption === option.id 
                ? (isCorrect ? 'border-[#4CAF50] bg-[#E8F5E9]' : 'border-[#F44336] bg-[#FFEBEE]') 
                : 'border-[#F2F4F7] hover:border-[#7C4DFF] bg-white'}
            `}
          >
            <span className="font-medium">{option.text}</span>
            {selectedOption === option.id && (
              <span className={isCorrect ? 'text-[#4CAF50]' : 'text-[#F44336]'}>
                {isCorrect ? '✓' : '✕'}
              </span>
            )}
          </button>
        ))}
      </div>

      {isPractice && (isCorrect || attempts >= 3) && (
        <div className="mb-8 p-4 bg-[#E3F2FD] rounded-xl border border-[#2196F3]/20">
          <p className="text-sm font-bold text-[#1A237E] mb-1">AI Explanation:</p>
          <p className="text-sm text-[#4A4A4A]">{currentQuestion.explanation}</p>
        </div>
      )}

      <div className="flex justify-end">
        <button
          onClick={handleNext}
          disabled={!selectedOption && isPractice}
          className="px-8 py-3 bg-[#1A237E] text-white rounded-full font-bold hover:bg-[#1A237E]/90 transition-colors disabled:opacity-50"
        >
          {currentIdx === data.questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
        </button>
      </div>
    </div>
  );
}