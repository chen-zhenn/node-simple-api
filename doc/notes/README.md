## :memo: Notas

### ORM Sequelize:

> Comece criando os modelos sempre pelas **entidades fortes**.  
__Motivo(s)__:  
    **1.** Por **entidades fortes** não ter dependências não irá gera conflitos para rodar as **migrations**.  
    **2.** As constraints são adicionadas por fora, depois que você criou os modelos da **entidade fraca**.

> Criar os modelos na ordem de sua dependência, se um atríbuto da **entidade x(fraca)** contém relacionamento com **entidade y(forte)**, porém esta mesma **entidade y(forte)** está relacionada ao atributo da **entidade z(fraca)**. Então comece pela **entidade z(fraca)**.

> Criar os modelos apenas com atríbutos/campos de tipo natural - que não é uma **chave estrangeira**.  
__Motivo(s)__: Pois as constraints é criada por fora.

* :fire: __Comandos__: 

    > :bulb: __Criar/gerar modelos__: `yarn dlx sequelize-cli:generate --name nome-da-entidade --attributes nome-do-atributo-a:string, nome-do-atributo-b:string`

    > :bulb: __Criar/gerar entidades-tabelas__: `yarn dlx sequelize-cli db:migrate`