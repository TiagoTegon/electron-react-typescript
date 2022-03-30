# electron-react-typescript
Desafio técnico para vaga de Estágio na empresa Valore.

## Instalação das dependências

Use o comando yarn para instalar todas as dependências.

```bash
yarn
```

## Utilização como Desenvolvedor

Execute o script `dev` para iniciar o projeto em modo Desenvolvedor. Ele recarrega com alterações no código.

```bash
yarn dev
```

## Utilização para Produção

Execute o script `package` para gerar a build de produção para o sistema operacional atual.

```bash
yarn package
```

## Cenário:

O time do Roberty atualmente está trabalhando em um projeto para um cliente que foi construído em Electron + React + MongoDB, usando Typescript. 
Nesse cenário, você irá trabalhar com um código já existente, dar manutenção em features já implementadas e implementar novas features solicitadas pelo cliente.
Portanto, você deve construir uma aplicação de acordo com esse cenário 🙂.

## Requisitos da aplicação:

- A aplicação deve ser construída em Electron, usando React e MongoDB, usando Typescript;
- Você precisa criar uma aplicação de cadastro (pode ser um todo-list, cadastro de produtos, etc. O importante é você mostrar como consegue utilizar os recursos das tecnologias 😁);
- Considere que o MongoDB esteja instalado localmente, não sendo necessário configurar usuário/senha, e o banco de dados tenha o nome "electronchallenge". (A string de conexão de seria: mongodb://localhost:27017/electronchallenge);

## Avaliação:

- Você deverá enviar pra gente o código da sua aplicação no GitHub, pode mandar o link do repositório público mesmo 🙂;
- O projeto deve ser executado através de um comando como "yarn start" ou "yarn dev";
- Seria muito legal se você passasse as instruções pra gente através do README.md;
- Não é necessário enviar a build do Electron em .exe ou .app pra gente;
- A data limite para envio do projeto é até o dia 01/04.

A aplicação deve ser simples, não queremos tomar o seu tempo fazendo uma avaliação! 🙂

Sabemos que fazer o setup de uma aplicação usando Electron + React é bem chatinho, então nosso template deve dar uma boa adiantada pra você criar a aplicação. Ele já é o modelo que usamos aqui, então é bem legal se você já se habituar com ele.
https://github.com/brcambui/electron-react-typescript

## Desenvolvimento:

Para a realização do Desafio, o template disponibilizado foi clonado e os pacotes do banco de dados exigido foram instalados:

Instalação do MongoDB:
```bash
yarn add mongodb
```

Instalação dos Types do MongoDB:
```bash
yarn add @types/mongodb
```

## License

[MIT](https://choosealicense.com/licenses/mit/)