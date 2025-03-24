export interface Word {
  id: number;
  english: string;
  russian: string;
  correctAnswers: number;
}

// Исходный набор слов
const initialWords: Word[] = [
  { id: 1, english: 'apple', russian: 'яблоко', correctAnswers: 0 },
  { id: 2, english: 'book', russian: 'книга', correctAnswers: 0 },
  { id: 3, english: 'cat', russian: 'кот', correctAnswers: 0 },
  { id: 4, english: 'dog', russian: 'собака', correctAnswers: 0 },
  { id: 5, english: 'elephant', russian: 'слон', correctAnswers: 0 },
  { id: 6, english: 'flower', russian: 'цветок', correctAnswers: 0 },
  { id: 7, english: 'glasses', russian: 'очки', correctAnswers: 0 },
  { id: 8, english: 'house', russian: 'дом', correctAnswers: 0 },
  { id: 9, english: 'ice cream', russian: 'мороженое', correctAnswers: 0 },
  { id: 10, english: 'jacket', russian: 'куртка', correctAnswers: 0 },
  { id: 11, english: 'key', russian: 'ключ', correctAnswers: 0 },
  { id: 12, english: 'lamp', russian: 'лампа', correctAnswers: 0 },
  { id: 13, english: 'moon', russian: 'луна', correctAnswers: 0 },
  { id: 14, english: 'night', russian: 'ночь', correctAnswers: 0 },
  { id: 15, english: 'ocean', russian: 'океан', correctAnswers: 0 },
  { id: 16, english: 'pencil', russian: 'карандаш', correctAnswers: 0 },
  { id: 17, english: 'queen', russian: 'королева', correctAnswers: 0 },
  { id: 18, english: 'rain', russian: 'дождь', correctAnswers: 0 },
  { id: 19, english: 'sun', russian: 'солнце', correctAnswers: 0 },
  { id: 20, english: 'table', russian: 'стол', correctAnswers: 0 },
];

// Функция для загрузки слов из localStorage или использования начального набора
export const loadWords = (): Word[] => {
  if (typeof window === 'undefined') return initialWords;
  
  const storedWords = localStorage.getItem('words');
  if (storedWords) {
    return JSON.parse(storedWords);
  }
  
  // Если в localStorage ничего нет, сохраняем и возвращаем начальный набор
  localStorage.setItem('words', JSON.stringify(initialWords));
  return initialWords;
};

// Функция для сохранения слов в localStorage
export const saveWords = (words: Word[]): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('words', JSON.stringify(words));
  }
};

// Функция для получения случайного слова из активных слов
export const getRandomWord = (words: Word[]): Word | null => {
  // Отфильтруем слова, которые еще не были выучены (имеют менее 3 правильных ответов)
  const activeWords = words.filter(word => word.correctAnswers < 3);
  
  if (activeWords.length === 0) return null;
  
  const randomIndex = Math.floor(Math.random() * activeWords.length);
  return activeWords[randomIndex];
};

// Функция для генерации вариантов ответов
export const generateOptions = (word: Word, words: Word[]): string[] => {
  const options = [word.russian];
  const otherWords = words.filter(w => w.id !== word.id);
  
  // Перемешиваем массив и берем 3 первых слова для вариантов ответов
  const shuffledWords = [...otherWords].sort(() => Math.random() - 0.5);
  
  for (let i = 0; i < 3 && i < shuffledWords.length; i++) {
    options.push(shuffledWords[i].russian);
  }
  
  // Перемешиваем варианты ответов
  return options.sort(() => Math.random() - 0.5);
};

// Функция для обновления состояния слова после ответа
export const updateWordState = (words: Word[], wordId: number, isCorrect: boolean): Word[] => {
  return words.map(word => {
    if (word.id === wordId) {
      return {
        ...word,
        correctAnswers: isCorrect ? word.correctAnswers + 1 : 0
      };
    }
    return word;
  });
}; 