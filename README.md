# projeto_react-laravel

faça o git clone do projeto, a pasta front-end contem o front da aplicação feito em React, e o back-end possui a API do site feito em laravel.

distro linux:
    ferramentas necessarias instaladas:
    - docker
    - docker-compose

    front-end:
        1. para rodar a aplicação com o Docker, pelo terminal entre na pasta raiz do front-end e rode o comando 
            docker-compose up -d --build
        
        esse comando irá criar a aplicação em um container onde sera acessado pelo http://localhost:3000/ no seu navegador de preferencia.
    
    back-end:
        1. não esqueça de configurar o mailtrap no .env da aplicação larevel
            MAIL_MAILER=smtp
            MAIL_HOST=smtp.mailtrap.io
            MAIL_PORT=2525
            MAIL_USERNAME=USER
            MAIL_USERNAME=PASSWORD
            MAIL_ENCRYPTION=tls
        
        o mailtrap ira fornecer o password e a senha necessaria para você colocar no lugar do MAIL_USERNAME e do MAIL_USERNAME

        3. na pasta raiz do back-end rode o segundo comando no terminal
            ./vendor/bin/sail up

            esse comando irá criar a aplicação em um container onde sera acessado pelo http://localhost:80/ no seu navegador e será usado como API para sua aplicação front-end

        2. você precisara rodar o comando dentro do container para rodar as migrações
            - no terminal use o comando 
                -> docker ps
            - procure o container com o nome sail-8.0/app
            - copie o valor da coluna NAMES (no meu é algo desse tipo 4ca1b27bf673)
            - use o comando no terminal 
                -> docker exec -it VALOR_COPIADO bash
            - você estará acessando o container da aplicação
            - use o comando
                -> php artisan migrate

            Pronto, seu banco ja deve conter as devidas tabelas relacionadas a aplicação e esta pronta para ser utiliza

    Horas trabalhadas:
        25/12/2021 - 6 horas terminado todo layout basico do front-end
        28/12/2021 - 3 horas terminado a responsividade do site
        31/12/2021 - 30 minutos ajuste permissoes de pastas (dificuldade encontrada)
        31/12/2021 - 2 horas criado formulario para envio de contato do cliente
        02/01/2022 - 7 horas criado toda aplicação back-end com o email ja funcionando model criada, 
                    salvando dados do contato, recebendo e validando informação do contato, criado repository e interface.
        03/01/2022 - tentativa de colocar um loader no botão de envio de formulario, implementação de campos nao validos e finalização da aplicação.

    Considerações finais:
        Foi muito interessante criar esse projeto, simples mas que botaram meus conhecimentos em prova, react com certeza é uma ferramenta muito interessante onde quero
        me aprofundar cada vez mais, tive que procurar alguns tutorias para fazer a composição do docker rodar com live-reload no ambiente de desenvolvimento, o laravel
        esta muito interessante com essa att 8.0 trazendo o sails como composição do docker, espero me aprofundar nas outras composições que vem no "pacote" sails, como mailhog e outros.

        Dificuldade: 
            criar o formulario no react usando o useState()
        Facilidades:
            styled-components,
            laravel,
            criaçao do email,
            responsividade.


