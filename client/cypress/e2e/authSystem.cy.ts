describe('Login System', () => {
  const id = (Math.random() * 1000000).toFixed(0)
  const email = `test@example${id}.com`
  const password = 'Password123'

  it('Create account and Logout', () => {
    cy.viewport('macbook-13')
    cy.visit(`/`)
    cy.findByRole('button', { name: /sign in/i }).click()
    cy.findByRole('link', { name: /create one/i }).click()

    cy.findByPlaceholderText(/email/i).type(email)
    cy.findByPlaceholderText('Password').type(password)
    cy.findByPlaceholderText(/confirm password/i).type(password)
    cy.findByRole('button', { name: /create account/i }).click()
    cy.get('[data-testid="account_email"]').should('exist')
    cy.get('[data-testid="account_card"]').click()
    cy.contains(/exit/i).should('exist').parent().click()
    cy.findByRole('button', { name: /sign in/i }).should('exist')
  })

  it('Log in with an existing account', () => {
    cy.viewport('macbook-13')
    cy.visit(`/`)
    cy.findByRole('button', { name: /sign in/i }).click()

    cy.findByPlaceholderText('Email').type(email)
    cy.findByPlaceholderText('Password').type(password)
    cy.findByRole('button', { name: 'Sign in' }).click()

    cy.get('[data-testid="account_email"]').should('exist')
    cy.get('[data-testid="account_card"]').click()
  })
})
