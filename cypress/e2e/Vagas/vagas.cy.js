import contaElements from "../../support/elements/contaElements.po";
import vagasElements from "../../support/elements/vagasElements.po";

const {

  Given,
  When,
  Then,

} = require("cypress-cucumber-preprocessor/steps");

Given("Acessar página inicial", () => {

  cy.visit("https://beta.coodesh.com/");
});

When("Verifica componentes presentes e realiza login", () => {

  cy.wait(1000);
  cy.get(contaElements.btnCookies).click();
  cy.get(vagasElements.btnEntrar).should("be.disabled");

  cy.get(contaElements.inputEmail).should("be.visible").type("polianifidencio@gmail.com");
  cy.get(contaElements.inputSenha).should("be.visible").type("Teste@123")
  cy.get(vagasElements.btnEntrar).should("be.visible").click();
  cy.wait(1000);
});

Then("Irá exibir informações do Perfil", () => {

  cy.get(vagasElements.btnMeuPerfil).should("be.visible");
  cy.get(vagasElements.btnDesafios).should("be.visible");
  cy.get(vagasElements.btnVagas).should("be.visible");

  cy.get(vagasElements.btnCompletarPerfil).should("be.visible");
})

When("Acessar opção vagas para busca", () => {

  cy.get(vagasElements.btnVagas).contains("Vagas").click();
  cy.wait(1000);

  cy.get(vagasElements.componenteBuscaGeral).should("be.visible");
  cy.get(vagasElements.btnBuscar).should("be.visible");
});

Then("Realizará busca por vagas", function () {
  
  cy.get(vagasElements.filtroCarreiras)
    .click()
  cy.wait(1000);
  cy.get(vagasElements.opcaofiltroDevops).click();

  cy.get(vagasElements.filtroFormato)
    .click()
  cy.wait(1000);
  cy.get(vagasElements.opcaofiltroHomeOffice).click();

  cy.get(vagasElements.btnBuscar).should("be.visible").click();
  cy.get(vagasElements.buscaResultado).should("be.visible");
});

