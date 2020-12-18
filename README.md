# EC021-AV2

## Introdução
O livro “O Gene Egoísta” popularizou a ideia de que a seleção natural acontece a partir dos genes. Eles “buscam” a sobrevivência por meio de corpos capazes de sobreviver e de se reproduzir (para replicar os genes). O biólogo contou que queria terminar o livro com a proposta de que a cultura também se espalha como os genes. O meme é o equivalente cultural do gene, a unidade básica de transmissão cultural, que se dá por meio da imitação. Sotaques, moda, slogans... tudo isso são memes que se propagam. “Quando alguém assovia uma melodia na rua e outra pessoa ouve, começa a assoviá-la e isso se espalha como uma epidemia pela cidade”, exemplificou. O fenômeno dos memes é tão popular que já existem “geradores de memes”, como o Gerador de memes e o Meme Generator. São ferramentas que possibilitam a criação de imagens com texto em poucos segundos, um dos tipos mais famosos de memes. Neste trabalho, foi desenvolvido um sistema baseado em uma arquitetura de microsserviços que faz o gerenciamento de conteúdo de geradores de memes.

## Módulos utilizados
<strong>Linguagem: </strong> <i>JavaScript</i>

<strong>Dotenv: </strong> <i>Ferramenta utilizada para orquestrar as variáveis ambiente de um projeto. O nome dela sugere o arquivo em que as informações ficarão, `dot` que é acrescido de `env`, então temos o arquivo .env que é composto de chaves e valores</i>

<strong>Mongoose: </strong> <i>O Mongoose fornece uma solução direta e baseada em esquema para modelar os dados do aplicativo. Inclui conversão de tipo embutida, validação, construção de consulta, ganchos de lógica de negócios e muito mais, prontos para uso.</i>

<strong>Restify: </strong> <i>Estrutura de serviço otimizada para construir serviços da web RESTful semanticamente corretos, prontos para uso em produção em escala. O Restify otimiza para introspecção e desempenho</i>

<strong>Axios: </strong> <i>Usada para consumir APIs externas</i>

<strong>Nodemon: </strong> <i>Utilitário que monitora quaisquer mudanças em seu código e automaticamente reinicia seu servidor.</i>

## Execução

Para iniciar a aplicação execute os seguintes comandos no terminal dentro pasta do projeto:

    npm install
    npm start

<strong>Executando no postman </strong>
No postman, clique em import -> Upload files, procure pela pasta do projeto, abra a pasta postman e importe o Postman Collection e environment.

## Criar a imagem Docker
Configurar o docker: `docker build -t EC021 .`

Rodar o servidor na porta 5000: `docker run -p 5000:5000 -it EC021`
