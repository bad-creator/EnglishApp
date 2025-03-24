import { Word } from '@/lib/wordStore';

interface StatsCardProps {
  words: Word[];
  onReset: () => void;
}

export default function StatsCard({ words, onReset }: StatsCardProps) {
  const totalWords = words.length;
  const totalPossibleAnswers = totalWords * 3; // Максимальное количество правильных ответов
  const totalCorrectAnswers = words.reduce((sum, word) => sum + word.correctAnswers, 0);
  const progressPercentage = Math.round((totalCorrectAnswers / totalPossibleAnswers) * 100);
  const learnedWords = words.filter(word => word.correctAnswers >= 3).length;

  return (
    <div className="bg-dark-card p-6 rounded-lg shadow-lg w-full mb-6">
      <h2 className="text-xl font-bold text-white mb-4">Ваш прогресс</h2>
      
      <div className="w-full bg-gray-700 rounded-full h-4 mb-4">
        <div 
          className="bg-purple-600 h-4 rounded-full" 
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
      
      <div className="flex justify-between text-sm">
        <p className="text-gray-400">Изучено слов: {learnedWords}/{totalWords}</p>
        <p className="text-purple-400">{progressPercentage}%</p>
      </div>
      
      {learnedWords === totalWords && (
        <div className="mt-6">
          <p className="text-green-400 mb-4">Поздравляем! Вы выучили все слова!</p>
          <button
            onClick={onReset}
            className="bg-purple-600 md:hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg w-full transition-colors duration-200"
          >
            Начать заново
          </button>
        </div>
      )}
    </div>
  );
} 