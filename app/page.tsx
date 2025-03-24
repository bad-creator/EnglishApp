'use client';

import { useState, useEffect } from 'react';
import WordCard from '@/components/WordCard';
import StatsCard from '@/components/StatsCard';
import { 
  Word, 
  loadWords, 
  saveWords, 
  getRandomWord, 
  generateOptions, 
  updateWordState 
} from '@/lib/wordStore';

export default function Home() {
  const [words, setWords] = useState<Word[]>([]);
  const [currentWord, setCurrentWord] = useState<Word | null>(null);
  const [options, setOptions] = useState<string[]>([]);
  
  // Загружаем слова при первом рендере
  useEffect(() => {
    const initialWords = loadWords();
    setWords(initialWords);
  }, []);
  
  // Обновляем текущее слово при изменении списка слов
  useEffect(() => {
    if (words.length > 0) {
      const newWord = getRandomWord(words);
      setCurrentWord(newWord);
      
      if (newWord) {
        const newOptions = generateOptions(newWord, words);
        setOptions(newOptions);
      }
    }
  }, [words]);
  
  // Обработчик ответа пользователя
  const handleAnswer = (isCorrect: boolean) => {
    if (!currentWord) return;
    
    const updatedWords = updateWordState(words, currentWord.id, isCorrect);
    setWords(updatedWords);
    saveWords(updatedWords);
  };
  
  // Сброс прогресса (обнуление correctAnswers для всех слов)
  const handleReset = () => {
    const resetWords = words.map(word => ({ ...word, correctAnswers: 0 }));
    setWords(resetWords);
    saveWords(resetWords);
  };
  
  // Проверка, все ли слова выучены
  const allWordsLearned = words.length > 0 && words.every(word => word.correctAnswers >= 3);
  
  return (
    <div className="flex flex-col items-center">
      
      <StatsCard words={words} onReset={handleReset} />
      
      {!allWordsLearned && currentWord && (
        <WordCard 
          word={currentWord} 
          options={options} 
          onAnswer={handleAnswer} 
        />
      )}
      
      {allWordsLearned && (
        <div className="bg-dark-card p-8 rounded-lg shadow-lg w-full text-center">
          <h2 className="text-2xl font-bold text-white mb-4">🎉 Поздравляем! 🎉</h2>
          <p className="text-gray-300 mb-6">Вы выучили все слова!</p>
          <button
            onClick={handleReset}
            className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
          >
            Начать заново
          </button>
        </div>
      )}
    </div>
  );
} 