export interface Option {
  id: string;
  text: string;
}

export interface Question {
  id: number;
  text: string;
  options: Option[];
  correctAnswer: string;
  explanation: string;
}

export interface QuizData {
  id: string;
  title: string;
  mode: 'practice' | 'exam';
  questions: Question[];
}

export interface QuizResult {
  score: number;
  total: number;
  percentage: number;
}