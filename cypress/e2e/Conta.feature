Feature: Conta Coodesh
  
  Scenario: Conta Coodesh
    Given Acesso página inicial
    When Verifico componentes presentes e aceito cookies
    Then Seleciono para criar nova conta

    When Campos devem ser exibidos para cadastro
    Then Inscreva-se sem preencher nenhum campo
    When Preencher campos e apagar deve exibir validação de campos obrigatórios
    Then Preencher nome, email, senha e aceitar termos
    And  Deverá se inscrever e campos novos campos da tela devem ser exibidos e preenchidos
   

    When Avançar para final do cadastro e novos campos devem ser exibidos
    Then Validar campos obrigatórios e preenche-los
    And Deverá avançar para final do cadastro e exibir Scorecard





    
    





