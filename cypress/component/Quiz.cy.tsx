// import React from 'react'
import Quiz from '../../client/src/components/Quiz'

describe('Quiz', () => {
  it('renders', () => {
    cy.mount(<Quiz />)
  })

  it('a button to start the quiz should appear on initial load', () => {
    cy.mount(<Quiz />)

    cy.get('button').should('have.text', 'Start Quiz')
  })
})