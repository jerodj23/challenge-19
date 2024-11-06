describe("Quiz Questions", () => {
    it('should display a question on screen after the Start Quiz button is hit', () => {
      cy.visit('http://localhost:3000')
  
      cy.get('button').click()
      cy.get('h2').should('exist')
    })
  })