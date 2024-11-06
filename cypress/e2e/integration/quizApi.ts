describe('Quiz API', () => {

    interface Answer {
        text: string;
        isCorrect: boolean;
      }

    interface Question {
        _id: string;
        question: string;
        answers: Answer[];
    }

    const mockQuestions: Question[] = [
        {
            _id: '1',
            question: 'What is the capital of France?',
            answers: [
                { text: 'London', isCorrect: false },
                { text: 'Paris', isCorrect: true },
                { text: 'Berlin', isCorrect: false },
                { text: 'Madrid', isCorrect: false },
            ],
        },
        {
            _id: '2',
            question: 'What is the capital of Spain?',
            answers: [
                { text: 'London', isCorrect: false },
                { text: 'Paris', isCorrect: false },
                { text: 'Berlin', isCorrect: false },
                { text: 'Madrid', isCorrect: true },
            ],
        },
    ];

    context('Quiz requests with starting data', () => {

        beforeEach(() => {
            cy.intercept('GET', '/api/quiz', mockQuestions).as('getQuiz');
            cy.visit('/');
        });

        it('should display one question', () => {
            cy.wait('@getQuiz');
            cy.get('[data-cy=question]').should('have.text', 'What is the capital of France?');
        });
    });
});