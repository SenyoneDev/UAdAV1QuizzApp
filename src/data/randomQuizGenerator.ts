import { Question } from '../types/quiz';
import { questions1 } from './questions';
import { questions2 } from './questions2';
import { questions3 } from './questions3';

// Fonction pour mélanger un tableau (algorithme de Fisher-Yates)
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Fonction pour générer un quiz aléatoire de 20 questions
export function generateRandomQuiz(): Question[] {
  // Combiner toutes les questions
  const allQuestions = [
    ...questions1,
    ...questions2,
    ...questions3
  ];

  // Mélanger toutes les questions
  const shuffledQuestions = shuffleArray(allQuestions);

  // Sélectionner les 20 premières questions
  const selectedQuestions = shuffledQuestions.slice(0, 60);

  // Réassigner les IDs de 1 à 20 pour le nouveau quiz
  return selectedQuestions.map((question, index) => ({
    ...question,
    id: index + 1
  }));
}

// Fonction pour générer plusieurs quiz uniques
export function generateMultipleQuizzes(count: number): Question[][] {
  const quizzes: Question[][] = [];
  const usedQuestions = new Set<string>();

  for (let i = 0; i < count; i++) {
    let quiz: Question[];
    let isUnique = false;

    // Continuer à générer des quiz jusqu'à ce qu'on en trouve un unique
    while (!isUnique) {
      quiz = generateRandomQuiz();
      const quizKey = quiz.map(q => q.id).join(',');
      
      if (!usedQuestions.has(quizKey)) {
        usedQuestions.add(quizKey);
        isUnique = true;
        quizzes.push(quiz);
      }
    }
  }

  return quizzes;
} 