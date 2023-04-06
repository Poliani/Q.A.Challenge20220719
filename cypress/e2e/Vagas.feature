Feature: Vagas

  Scenario: Busca por Vagas
    Given Acessar página inicial
    When Verifica componentes presentes e realiza login
    Then Irá exibir informações do Perfil

    When Acessar opção vagas para busca
    Then Realizará busca por vagas
