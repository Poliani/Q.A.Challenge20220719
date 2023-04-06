# Q.A. Challenge 20220719

### Automação site Coodesh

- Criar nova Conta
    -- Validação de campos presentes
    -- Campos obrigatórios
    -- Cadastro de todo fluxo da conta

- Busca por vagas
  -- Login na url
  -- Acesso as informações do Perfil
  -- Acesso a tela de vagas
  -- Busca por vagas

## Antes de começar
 
 ### Instalação
- Faça o clone ou download do projeto.
- Acesse o diretório "qa-challenge-20220719" e rode o comando:
  > npm install
- Ao terminar a instalação, rode o comando para iniciar o projeto:
  > npm run cypress

Automaticamente serão exibidas todas as features desenvolvidas no caminho: "cypress/e2e", onde exibira as telas automatizadas .feature, sendo possível rodar em diversos navegadores 1 a 1 ou rodar todos atráves da opção Run all test.

### Estrutura
##### Elementos mapeados

Na pasta support/elements centralizamos todos os elementos utilizados na automação, podendo ser por página ou funcionalidade. Tal organização permite que elementos sejam reutilizados e facilitam na manutenção do código.

Dentro do projeto e2e, temos também arquivos .feature onde são os testes em BDD para estruturação e organização dos testes em sua execução. 
Há também pasta das telas que foram automatizadas contendo "Conta" e "Vagas", nelas encontra-se o processo de criação de conta e o caminho para buscar por uma vaga no site da Coodesh.

##### Link do vídeo
> https://www.loom.com/share/8c0b920c5bbe40d4943a1e8a08a75d8b
