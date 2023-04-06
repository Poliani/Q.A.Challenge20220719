import contaElements from "../../support/elements/contaElements.po";

const constants = {
    
  RequiredField: "Este campo é obrigatório",

};

let person 

const personData = async () => {
  const response = await fetch('https://randomuser.me/api/?inc=name,email,phone,gender,location&nat=br', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
    },
  })

  return response.json()
}


const registerPerson = async () => {
  const fullName = person.name.first +  ' ' + person.name.last

  cy.get(contaElements.inputNomeCompleto).should("be.visible").type(fullName);
  cy.get(contaElements.inputEmail).should("be.visible").type(person.email);
  cy.get(contaElements.inputSenha).should("be.visible").type("Teste@123"); 
}

const {
  Before,
  Given,
  When,
  Then,
  And,
} = require("cypress-cucumber-preprocessor/steps");

Before(async () => {
  const response = await personData()
  person = response.results[0]
});

Given("Acesso página inicial", () => {
  cy.visit("https://beta.coodesh.com/");
});

When("Verifico componentes presentes e aceito cookies", () => {
  cy.wait(1000);
  cy.get(contaElements.btnCookies).click();
  cy.get(contaElements.inputEmail).should("be.visible");
  cy.get(contaElements.inputSenha).should("be.visible");
  cy.get(contaElements.btnNovaConta).should("be.visible");
});

Then("Seleciono para criar nova conta", () => {
   cy.get(contaElements.btnNovaConta).click();
})

When("Campos devem ser exibidos para cadastro", () => {
  cy.wait(1000);
  cy.get(contaElements.slidePagina).should("be.visible");
  cy.get(contaElements.labelCadastrase).contains("Cadastre-se").should("be.visible");
  cy.get(contaElements.labelTitleNomeCompleto).contains("Nome completo").should("be.visible");
  cy.get(contaElements.inputEmail).should("be.visible");
  cy.get(contaElements.inputSenha).should("be.visible");
  cy.get(contaElements.labelTermoseCondicoes).should("be.visible");
  cy.get(contaElements.btnInscrevase).should("be.visible");
});

Then("Inscreva-se sem preencher nenhum campo", () => {
  cy.get(contaElements.btnInscrevase).should("be.disabled");
})

When("Preencher campos e apagar deve exibir validação de campos obrigatórios", async () => {
  await registerPerson();

  cy.get(contaElements.inputNomeCompleto).clear();
  cy.get(contaElements.inputEmail).clear();
  cy.get(contaElements.inputSenha).clear();

  cy.get(contaElements.invalideFeedback).contains(constants.RequiredField).should("exist", {force: true});
});

Then("Preencher nome, email, senha e aceitar termos", async () => {
  await registerPerson();
  cy.get(contaElements.checkboxTermoseCondicoes).click({ force: true });
  cy.get(contaElements.btnInscrevase).should("be.visible");
})

And("Deverá se inscrever e campos novos campos da tela devem ser exibidos e preenchidos", () => {
  cy.get(contaElements.btnInscrevase).click({ force: true });
  cy.wait(5000);
  
  cy.get(contaElements.btnProximo).should("be.disabled");

  cy.get(contaElements.inputNomeCompleto).should("be.visible");
  cy.get(contaElements.radioQaTestes).should("be.visible").click();
  cy.get(contaElements.radioProductOwner).should("be.visible").click();
  
  cy.get(contaElements.selectHabilidades).should("be.visible");
  cy.wait(1000);
  cy.get(contaElements.optionHabilidadesAutomacao).should("be.visible").click();
  cy.get(contaElements.optionHabilidadesCypress).should("be.visible").click();
  
  cy.get(contaElements.selectExperiencia).should("be.visible").contains("Quero começar");
  cy.get(contaElements.selectMomentoProfissional).should("be.visible").contains("Busco oportunidades para iniciar o trabalho imediatamente");

  cy.get(contaElements.inputWhatsApp).should("be.visible").type("(11) 92450-9787");
  cy.get(contaElements.checkboxReceberNotificacoes).should("be.visible");

  cy.get(contaElements.inputCidade).should("be.visible").type(person.location.city);
  cy.get(contaElements.checkboxReceberOfertas).should("be.visible");

  cy.get(contaElements.checkBoxRemota).should("be.visible").click();

  cy.get(contaElements.btnProximo).should("be.visible").click();
})

  When("Avançar para final do cadastro e novos campos devem ser exibidos",() => {
   
    cy.get(contaElements.selectComunidade).should("be.visible");
    cy.get(contaElements.selectCausasSocias).should("be.visible");
    cy.get(contaElements.selectRaca).should("be.visible");
    cy.get(contaElements.selectGenero).should("be.visible");
    cy.get(contaElements.selectOrientacaoSexual).should("be.visible");
    cy.get(contaElements.selectDeficiencia).should("be.visible");
    cy.get(contaElements.btnProximo).contains("Próximo");
  });

  Then("Validar campos obrigatórios e preenche-los",() => {

    cy.get(contaElements.selectCausasSocias).type('Saúde{enter}{enter}');
    cy.get(contaElements.selectRaca).select("Pessoa Branca");
    cy.get(contaElements.selectGenero).select(person.gender);
    cy.get(contaElements.selectOrientacaoSexual).select("Heterossexual");
    cy.get(contaElements.selectDeficiencia).select("Nenhuma deficiência");

    cy.wait(1000);
    cy.get(contaElements.btnProximoOnboarding).click();
    
  });
  
  And("Deverá avançar para final do cadastro e exibir Scorecard", () => {
    
    cy.get(contaElements.imageScorecard).should("be.visible");
    cy.get(contaElements.textoScorecard).should("be.visible");
    cy.get(contaElements.btnVoltar).should("be.visible");
    cy.get(contaElements.btnResponderAgora).should("be.visible");
  })
  

  


