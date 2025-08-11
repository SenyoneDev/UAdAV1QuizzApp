'use client';
import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, RotateCcw, Trophy, CheckCircle, XCircle } from 'lucide-react';
import { questions5 } from '@/data/questions5';
import { useRouter } from 'next/router';

const UiPathQuiz3 = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  const allQuestions = questions5

  const questions = allQuestions;

  const handleAnswerSelect = (questionId: number, answerIndex: number) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }));
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach(question => {
      if (selectedAnswers[question.id] === question.correctAnswer) {
        correct++;
      }
    });
    return correct;
  };

  const getScoreColor = (score: number, total: number) => {
    const percentage = (score / total) * 100;
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowResults(false);
    setQuizStarted(false);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const finishQuiz = () => {
    setShowResults(true);
  };

  if (!quizStarted) {
    return (
      <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="mb-6">
            <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Quiz UiPath UiADAv1</h1>
            <p className="text-lg text-gray-600 mb-4">Questions d'Examen - Automation Developer Associate</p>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold text-blue-800 mb-3">À propos de ce quiz</h2>
            <div className="text-left text-gray-700 space-y-2">
              <p>• <strong>{questions.length} questions</strong> basées sur l'examen officiel UiPath UiADAv1</p>
              <p>• Couvre les concepts clés de l'automatisation UiPath</p>
              <p>• Questions à choix multiples avec explications</p>
              <p>• Score minimum recommandé : 80% pour réussir</p>
            </div>
          </div>

          <button
            onClick={() => setQuizStarted(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            Commencer le Quiz 
          </button>

        </div>
      </div>
    );
  }

  if (showResults) {
    const score = calculateScore();
    const percentage = Math.round((score / questions.length) * 100);
    
    return (
      <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <Trophy className={`w-20 h-20 mx-auto mb-4 ${score >= questions.length * 0.8 ? 'text-yellow-500' : 'text-gray-400'}`} />
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Résultats du Quiz</h1>
            <div className={`text-4xl font-bold mb-2 ${getScoreColor(score, questions.length)}`}>
              {score}/{questions.length} ({percentage}%)
            </div>
            <p className="text-lg text-gray-600">
              {percentage >= 80 ? '🎉 Excellents résultats !' : 
               percentage >= 60 ? '👍 Bon travail !' : 
               '📚 Continuez à étudier !'}
            </p>
          </div>

          <div className="space-y-6 mb-8">
            {questions.map((question, index) => {
              const userAnswer = selectedAnswers[question.id];
              const isCorrect = userAnswer === question.correctAnswer;
              
              return (
                <div key={question.id} className="border rounded-lg p-4">
                  <div className="flex items-start gap-3 mb-3">
                    {isCorrect ? 
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" /> : 
                      <XCircle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                    }
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 mb-2">
                        Question {index + 1}: {question.question}
                      </h3>
                      
                      <div className="space-y-2 mb-3">
                        {question.options.map((option, optionIndex) => {
                          let className = "p-2 rounded border ";
                          if (optionIndex === question.correctAnswer) {
                            className += "bg-green-100 border-green-300 text-green-800";
                          } else if (optionIndex === userAnswer && userAnswer !== question.correctAnswer) {
                            className += "bg-red-100 border-red-300 text-red-800";
                          } else {
                            className += "bg-gray-50 border-gray-200";
                          }
                          
                          return (
                            <div key={optionIndex} className={className}>
                              {option}
                            </div>
                          );
                        })}
                      </div>
                      
                      <div className="bg-blue-50 border-l-4 border-blue-400 p-3">
                        <p className="text-sm text-blue-800">
                          <strong>Explication:</strong> {question.explanation}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <button
              onClick={resetQuiz}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center gap-2"
            >
              <RotateCcw className="w-5 h-5" />
              Recommencer le Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      <div className="bg-white rounded-xl shadow-lg p-8">
        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600">
              Question {currentQuestion + 1} sur {questions.length}
            </span>
            <span className="text-sm font-medium text-gray-600">
              {Math.round(progress)}% complété
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-6">
            {currentQ.question}
          </h2>
          
          <div className="space-y-3">
            {currentQ.options.map((option, index) => (
              <label
                key={index}
                className={`block p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                  selectedAnswers[currentQ.id] === index
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                <input
                  type="radio"
                  name={`question-${currentQ.id}`}
                  value={index}
                  checked={selectedAnswers[currentQ.id] === index}
                  onChange={() => handleAnswerSelect(currentQ.id, index)}
                  className="sr-only"
                />
                <div className="flex items-center">
                  <div className={`w-4 h-4 rounded-full border-2 mr-3 ${
                    selectedAnswers[currentQ.id] === index
                      ? 'border-blue-500 bg-blue-500'
                      : 'border-gray-300'
                  }`}>
                    {selectedAnswers[currentQ.id] === index && (
                      <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
                    )}
                  </div>
                  <span className="text-gray-700">{option}</span>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button
            onClick={prevQuestion}
            disabled={currentQuestion === 0}
            className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-5 h-5" />
            Précédent
          </button>
          
          <div className="text-center">
            <span className="text-sm text-gray-500">
              {Object.keys(selectedAnswers).length}/{questions.length} réponses
            </span>
          </div>

          {currentQuestion === questions.length - 1 ? (
            <button
              onClick={finishQuiz}
              disabled={Object.keys(selectedAnswers).length !== questions.length}
              className="bg-green-600 hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2"
            >
              <Trophy className="w-5 h-5" />
              Terminer
            </button>
          ) : (
            <button
              onClick={nextQuestion}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors duration-200"
            >
              Suivant
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default UiPathQuiz3;