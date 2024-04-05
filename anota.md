# IONIC - Instalando e rodando o servidor
1. Instalar o `NPM` na sua máquina, caso não tenha.
2. Instalar a extensão `IONIC` do ionic
3. Instalar o IONIC globalmente `npm i -g @ionic/cli`
4. Entrar pelo `CMD`
5. Criar um novo projeto IONIC com o comando `ionic start`
6. Selecionar a opção `n`
7. Selecionar a opção do framework `Angular`
8. Informar o nome do projeto ***snake_case***
9. Selecionar a opção ngModules
10. Entrar na pasta do projeto através do comando `cd nome_projeto`
11. Rodar o projeto com o comando `ionic serve`

# IONIC - Criando pastas dentro do projeto
1. Para ver os arquivos/pastas disponíveis para serem criados, utilize
o comando `ionic g`

# IONIC - Criando o primeiro serviço para a nossa API
1. Escolher a opção `service`, depois escolher o nome do PATH.
2. Digitar no terminal `ionic g service service/correios.service`


# SOBRE AS PASTAS
1. PASTA SRC
* `global.scss` => Arquivo global onde ficam localizadas as propriedades que todos os arquivos possuem por padrão.
* `index.html` => Arquivo responsável pela chamada da página inicial.

2. PASTA ASSETS - Arquivos que podem ser incorporados no projeto, imagens e qualquer outro tipo de arquivo.

3. PASTA APP - Pages que foram criadas automaticamente na hora da criação do projeto. 
Cada página possui os seguintes arquivos:
`routing.modules.ts` => Arquivo que contém o TS do módulo. Responsável pelas rotas.
`modules.ts`= > Responsável por guardar as importações dos componentes.
`page.html` => Página renderizada contendo o HTML.
`page.scss` => Um css próprio da page.
`page.spec.ts` => Arquivo de teste. `Não iremos utilizar`.
`page.ts` => Arquivo que cotém uma classe em TS da página.`Onde eu posso programar, chamar alguma API, declarar variáveis para utilizar em telas`.

4. PASTA APP
`app.module.ts` => Arquivo onde fica implementadas alguns providers e declarações que iremo chamar.
`app.routing.modules.ts` => Arquivo aonde ficam localizadas as rotas das páginas.

# CRIANDO PASTAS DENTRO DO PROJETO
1. Para ver arquivos/pastas disponíveis para serem criadas, utilizamos o comando `ionic g`.

Pages => São as telas.
Components => São os componentes e páginas que você consegue abrir e realizar chamadas.
Directive=> Para que possamos trabalhar com classes.
Services => Voltados para requisição de API's.

# PROJETO COMPONENTES
## CRIANDO PAGES
1. Gerar um novo projeto em `blank` e nomear como `componentes`.
2. Apagar a pasta home, para criarmos novamente.
3. Criar uma nova `page` usando o comando `ionic g page pages/inicio`
4. Alterar a rota no arquivo `app-routing.modules.ts` para apontar para a page inicio.

## INSERINDO BOTÕES
1. ION-ALERT => Criar uma page chamada alert `ionic g page pages/alert`
2. ION-ACTION-SHEET => Criar uma page chamada action-sheet `ionic g page pages/action-sheet`
3. Criar na página `inicio.page.html` uma `tag` button para o `Alert` e outra para o `Modal`.

## CHAMANDO ROTAS

# ATALHOS
CTRL + ' => Abre o terminal
CTRL + C => Você sai do comando atual

# COMANDOS
CD => Para entrar uma pasta 
CD .. => Para voltar uma pasta
dir => Exibir os arquivos na pasta atual
cls => Apaga todos os arquivos


## ALTERAÇÕES DO IONIC CEP
1. Criar a pasta chamada pages e colocar a page home dentro dela;
2. Verificar se as nossas rotas estão certa;
3. Incluir no arquivo `app.modules.ts` o `HttpClienteModule;`