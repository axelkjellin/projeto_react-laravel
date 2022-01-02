<html>
    <body>
        <p>Equipe 2BChosen Agency! </p>
        <p>Recebemos um contato pelo nosso site!</p>
        <p>Segue os dados do visitante para que possamos entrar em contato!</p>
        <p>Nome do contato: {{$contact->name}}</p>
        <p>E-mail do contato: {{$contact->email}}</p>
        @if ($contact->phone)
            <p>Telefone do contato: {{$contact->phone}}</p>
        @else
            <p>Telefone do contato: <em>Não informado</em></p>
        @endif
        @if ($contact->message)
            <p>Mensagem do contato: {{$contact->message}}</p>
        @else
            <p>Mensagem do contato: <em>Não informado</em></p>
        @endif
        <p></p>
    </body>
</html>
