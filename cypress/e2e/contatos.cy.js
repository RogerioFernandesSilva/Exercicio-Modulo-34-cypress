import { faker as _faker } from '@faker-js/faker';

describe('Agenda de Contatos - Testes', () => {
  const baseUrl = 'https://ebac-agenda-contatos-tan.vercel.app/';

  beforeEach(() => {
    cy.visit(baseUrl);
  });

  // 🟢 Inclusão de Contatos
  it('Deve adicionar um contato válido', () => {
    cy.get('input[type="text"]').type('Roberval Silveira');
    cy.get('input[type="email"]').type('roberval@ig.com');
    cy.get('input[type="tel"]').type('51981205709');
    cy.contains('Adicionar').click();
    cy.screenshot("teste-incluir")
  });

  // 🟡 Alteração de Contatos
  it('Deve editar um contato existente', () => {
    cy.get(":nth-child(2) > .sc-gueYoa > .edit").click();
    cy.get('input[type="text"]').clear().type("Marcelo Souza");
    cy.get('input[type="email"]').clear().type("mmarcelo@gmail.com.br");
    cy.get('input[type="tel"]').clear().type("11912345678");
     cy.get(".alterar").click();
    cy.screenshot("teste-editar"); 
  });

  // 🔴 Remoção de Contatos
  it('Deve remover um contato existente', () => {
    cy.get(":nth-child(3) > .sc-gueYoa > .delete").click();
    cy.screenshot("teste-remover");
  });
});