describe('OrderSystem', () => {
  it('Make an Order', () => {
    cy.visit('/')
    cy.viewport('macbook-13')
    cy.findByRole('button', { name: 'Shop' }).click()
    cy.get('[data-testid="product_card"]').first().click()
    cy.get('[data-testid="quantity_up"]').click()
    cy.wait(1000)
    cy.findByRole('button', { name: 'add to cart' }).click()
  })
})
