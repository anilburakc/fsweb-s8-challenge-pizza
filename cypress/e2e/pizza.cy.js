const ekler=[' pepperoni',' sosis',' kanada Jambonu',' jalepeno',' sarimsak',' domates',' misir',' ananas',' kabak',' biber']


describe('My First Test', () => {
    it('Does not do much!', () => {
        expect(true).to.equal(true)
    })
})


describe('Pizza Test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173/order')
    });
    it('Isim girme alani', function () {
        cy.get(".isim-not > input").type('burak').should('have.value', 'burak')
    })
    it('Ek malzeme secme', function () {
        cy.get('.checkbox-container [type="checkbox"]').not('[disabled]').check()
        cy.get('.checkbox-container [type="checkbox"]').not('[disabled]').should('be.checked')
        cy.get('.checkbox-container [type="checkbox"]')
        .not('[disabled]')
        .uncheck()
        cy.get('.checkbox-container [type="checkbox"]')
        .not('[disabled]')
        .should('not.be.checked')
    })
    it('Form gonderme', function(){

        //isim girme
        cy.get(".isim-not > input").type('burak').should('have.value', 'burak')
        
        //ek malzeme secme
        cy.get('.checkbox-container [type="checkbox"]')
        .check(ekler)
        cy.get('.checkbox-container [type="checkbox"][value=" pepperoni"]')
        .should('be.checked')
        cy.get('.checkbox-container [type="checkbox"][value=" domates"]')
        .should('be.checked')

        //boyut secme
        cy.get('.select-radio-item [type="radio"]').check('orta')
        cy.get('.select-radio-item [type="radio"]').should('be.checked')
        
        //hamur kalinligi secme
        cy.get('.cypress-select').select('kalin')
        cy.get('.cypress-select').should('have.value', 'kalin')

        //formu gonderme
        cy.get('[data-cy=submit]').click()
    })

})