## :rocket: Configurações

### Passos(incremental) para setup da API em Node com ORM Sequelize:

> __Obs__: Não necessariamente deve-se seguir a ordem, pois trata o mesmo de forma incremental para entendimento de como o ORM atua/se encaixa juntamente com o Framework **Express**.  
:bulb: __Nota: Poderia muito bem instalar todas as dependências primeiro incluindo as do ORM.__

1. __yarn init__:

    Cria o arquivo de configuração do projeto bem como dependências e meta informações do mesmo.
`yarn init`
            
2. __Instalar dependência Express__:

    Framework que adiciona camada para http e features da aplicação web no back-end.
`yarn add express`  

3. __Criar arquivo de entrada__:
    Ex: `app/api/index.js`
4. __Instalar dependências para ORM(Sequelize) - banco de dados__:

    * Drive do banco de dados(tipo banco):
        `yarn add mysql2`
        __sqlite__: sqlite3
        __postgres__: pg pg-hstore
        __mysql__: mysql2       
    * ORM(Sequelize):  `yarn add sequelize`
    * CLI do ORM(Sequelize): `yarn add sequelize-cli --dev`
    * path `yarn add path`

5. __Rode CLI do sequelize__:

    Cria/inicia toda estrutura de arquivos como setup, migrations para ORM(Bootstrapping).
    `yarn dlx sequelize-cli init`

6. __Mover estrutura de diretório do ORM__:

    Mover estrutura de diretórios criada pelo CLI do Sequelize como `/config /models /migrations /seeders` para raiz da aplicação. Ex: `app/api/diretórios-aqui`

7. __Configuração para resolver paths das migrations__:

    * Instalar dependência: `yarn add babel-register --dev`
    * Criar arquivo .sequelizerc na raiz do projeto.

8. __Criar um banco de dados__:
...

9. __Variáveis de ambiente__:

    * Instalar dependência dotenv: `yarn add dotenv`
    * Criar um arquivo `.env` na raiz da aplicação e setar variáveis.    

10. __Configuração base do banco__:

    * Alterar o nome do arquivo `config/config.json` para `config/config.js`
    * Alterar os valores default do arquivo `config/config.js` bem como setup do banco de dados passando variáveis de ambiente setado no arquivo `.env`

11. __Criar models__:

    Criar os **modelos** das entidade/tabelas através do CLI do Sequelize:
    `yarn dlx sequelize-cli model:generate --name nome-da-entidade/tabela --attributes nome-do-campo-1:string<tipo-de-dado>, nome-campo-2:string`  
    
    > __Obs__: Definir nome de entidades/tabela no plural.

12. __Criar migrations__:

    Criar as **entidades/tabelas** no banco de dados baseado nos modelos através do CLI do Sequelize:
    `yarn dlx sequelize-cli db:migrate`

13. __Criar seeders__:

    * Criar arquivo de seed através do CLI do Sequelize: `yarn dlx sequelize-cli seed:generate --name demo-nome-da-entidade/tabela`  

        > __Obs__: Nome do arquivo de seed é arbitrário, porém é interessante ter relação com entidade/tabela.

    * Configurar nome de tabela e nome/valor dos atríbutos no arquivo de seed, pois o mesmo vem com default.
    * Popular entidade/tabela através do CLI do Sequelize: `yarn dlx sequelize-cli db:seed:all`

    


