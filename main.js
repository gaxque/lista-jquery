$(document).ready(function(){

    $('header').click(function(){
        $('form').slideDown(); //ANIMACAO BARRA DESCENDO
    })

    $('header').on('dblclick', function(){
        $('form').slideUp(); //ANIMACAO BARRA DESCENDO
    })

    $('#botao-adicionar').click(function(event){
        event.preventDefault(); // Impede o envio do formulário

        let novaAtividade = $('#input-atividade').val().trim();

            //Adiciona linha
        if (novaAtividade !== '') {
            $('#lista-tarefa').append('<li>' + novaAtividade + '</li>');
            $('#input-atividade').val('');
        }
    });

    // Função para marcar/desmarcar uma tarefa como concluída
    $(document).on('click', 'li', function () {
        $(this).toggleClass('completed');
    });

    
    $(document).on('dblclick', 'li', function () {
        $(this).remove();
    });

    // Função para remover uma tarefa ao clicar no botão "Remover"
    $(document).on('click', '.botao-remover', function (event) {
        event.stopPropagation(); // Impede que o evento de clique do <li> seja acionado
        $(this).parent().remove(); // Remove o <li> pai do botão clicado
    });
});