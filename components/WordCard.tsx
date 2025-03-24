import { useState } from 'react';
import { Word } from '@/lib/wordStore';

interface WordCardProps {
  word: Word;
  options: string[];
  onAnswer: (isCorrect: boolean) => void;
}

export default function WordCard({ word, options, onAnswer }: WordCardProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  
  const handleSelectAnswer = (answer: string) => {
    if (isAnswered) return;
    
    setSelectedAnswer(answer);
    setIsAnswered(true);
    
    const isCorrect = answer === word.russian;
    
    // Небольшая задержка перед переходом к следующему слову
    setTimeout(() => {
      onAnswer(isCorrect);
      setSelectedAnswer(null);
      setIsAnswered(false);
    }, 500);
  };
  
  const getButtonClass = (option: string) => {
    if (!isAnswered || selectedAnswer !== option) {
      return 'bg-dark-card hover:bg-gray-700 text-white';
    }
    
    if (option === word.russian) {
      return 'bg-green-600 text-white';
    }
    
    return 'bg-red-600 text-white';
  };
  
  return (
    <div className="flex flex-col items-center space-y-6 py-6">
      <div className="bg-dark-card p-8 rounded-lg shadow-lg w-full">
        <h2 className="text-3xl font-bold text-center text-white mb-2">{word.english}</h2>
        <p className="text-sm text-center text-gray-400">
          Правильных ответов: {word.correctAnswers}/3
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-4 w-full">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleSelectAnswer(option)}
            className={`${getButtonClass(option)} py-4 px-6 rounded-lg text-lg font-medium transition-colors duration-200`}
            disabled={isAnswered}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
} 