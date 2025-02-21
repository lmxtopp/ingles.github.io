// Iniciar Trivia
const startQuizButton = document.getElementById('start-quiz');
const quizContainer = document.getElementById('quiz-container');

startQuizButton.addEventListener('click', () => {
    quizContainer.innerHTML = ''; // Limpiar el contenedor antes de mostrar las preguntas
    startQuiz(); // Llamada a la función para empezar la trivia
});

// Función para iniciar la trivia
function startQuiz() {
    const questions = [
        // **Gramática**
        {
            question: 'What is the correct form of the verb "to be" in the present tense for "I"?',
            options: ['Am', 'Is', 'Are'],
            correctAnswer: 'Am'
        },
        {
            question: 'Which of the following sentences uses the verb "to have" correctly?',
            options: ['She have a book.', 'She has a book.', 'She haves a book.'],
            correctAnswer: 'She has a book.'
        },
        {
            question: 'Which sentence is an example of the second conditional?',
            options: ['If I study, I pass the exam.', 'If I studied, I would pass the exam.', 'If I had studied, I would have passed the exam.'],
            correctAnswer: 'If I studied, I would pass the exam.'
        },
        {
            question: 'Choose the correct sentence in the present perfect tense.',
            options: ['I has finished my homework.', 'I have finished my homework.', 'I am finished my homework.'],
            correctAnswer: 'I have finished my homework.'
        },
        {
            question: 'Which of the following is a phrasal verb?',
            options: ['To walk', 'To give up', 'To read'],
            correctAnswer: 'To give up'
        },

        // **Vocabulario**
        {
            question: 'What is the English word for "perro"?',
            options: ['Dog', 'Cat', 'Bird'],
            correctAnswer: 'Dog'
        },
        {
            question: 'Which of these is a fruit?',
            options: ['Carrot', 'Banana', 'Potato'],
            correctAnswer: 'Banana'
        },
        {
            question: 'What is the name of the part of the body we use to see?',
            options: ['Ear', 'Eye', 'Hand'],
            correctAnswer: 'Eye'
        },
        {
            question: 'Which of these professions is related to law?',
            options: ['Doctor', 'Lawyer', 'Teacher'],
            correctAnswer: 'Lawyer'
        },
        {
            question: 'Which of the following words is a verb?',
            options: ['Table', 'Run', 'Car'],
            correctAnswer: 'Run'
        },

        // **Trivia Rápida**
        {
            question: 'What is the capital of England?',
            options: ['London', 'Paris', 'Madrid'],
            correctAnswer: 'London'
        },
        {
            question: 'Which of these animals is a mammal?',
            options: ['Fish', 'Lion', 'Eagle'],
            correctAnswer: 'Lion'
        },
        {
            question: 'How do you say "gracias" in English?',
            options: ['Sorry', 'Thank you', 'Please'],
            correctAnswer: 'Thank you'
        },
        {
            question: 'What is the opposite of "hot"?',
            options: ['Warm', 'Cold', 'Cool'],
            correctAnswer: 'Cold'
        },
        {
            question: 'Which of these words is an adjective?',
            options: ['Fast', 'Run', 'Eat'],
            correctAnswer: 'Fast'
        },

        // **Juegos Interactivos**
        {
            question: 'Which word is used to describe a place where you can buy food?',
            options: ['Store', 'School', 'Bank'],
            correctAnswer: 'Store'
        },
        {
            question: 'Which of these is the correct order to form a question?',
            options: ['Do you like ice cream?', 'You do like ice cream?', 'Ice cream do you like?'],
            correctAnswer: 'Do you like ice cream?'
        },
        {
            question: 'Which image represents the action of eating?',
            options: ['🍎', '🏃', '💻'],
            correctAnswer: '🍎'
        },
        {
            question: 'What is the English word for "flor"?',
            options: ['Flower', 'Tree', 'Rock'],
            correctAnswer: 'Flower'
        },
        {
            question: 'Which of these words is an adverb?',
            options: ['Quickly', 'Quick', 'Quicker'],
            correctAnswer: 'Quickly'
        },

        // **Desafíos y Logros**
        {
            question: 'How many days are in a week?',
            options: ['5', '7', '10'],
            correctAnswer: '7'
        },
        {
            question: 'Which of these is a common greeting in English?',
            options: ['Goodbye', 'Please', 'Hello'],
            correctAnswer: 'Hello'
        },
        {
            question: 'Which number comes after 100?',
            options: ['99', '101', '102'],
            correctAnswer: '101'
        },
        {
            question: 'Which of these is a tool for measuring temperature?',
            options: ['Thermometer', 'Ruler', 'Hammer'],
            correctAnswer: 'Thermometer'
        },
        {
            question: 'Which of these is used for writing?',
            options: ['Pencil', 'Shoe', 'Table'],
            correctAnswer: 'Pencil'
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    function loadQuestion() {
        const questionData = questions[currentQuestionIndex];
        const questionElement = document.createElement('div');
        questionElement.innerHTML = `
            <p>${questionData.question}</p>
            <ul>
                ${questionData.options.map(option => `<li><button class="option">${option}</button></li>`).join('')}
            </ul>
        `;
        quizContainer.innerHTML = '';
        quizContainer.appendChild(questionElement);

        const optionButtons = document.querySelectorAll('.option');
        optionButtons.forEach(button => {
            button.addEventListener('click', () => {
                if (button.textContent === questionData.correctAnswer) {
                    alert('Correct!');
                    score++;
                } else {
                    alert('Wrong answer!');
                }

                currentQuestionIndex++;
                if (currentQuestionIndex < questions.length) {
                    loadQuestion();
                } else {
                    alert(`Quiz completed! Your score is: ${score} out of 25.`);
                }
            });
        });
    }

    loadQuestion(); // Cargar la primera pregunta
}
