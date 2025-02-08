$(document).ready(function(){

    $('header').click(function(){
        $('form').slideDown(); //ANIMACAO BARRA DESCENDO
    })

    $('header').on('dblclick', function(){
        $('form').slideUp(); //ANIMACAO BARRA SUBINDO
    })

    $('#botao-adicionar').click(function(event){
        event.preventDefault(); // Impede o envio do formulário

        let novaAtividade = $('#input-atividade').val().trim(); //ATRIBUINDO O VALOR DO CAMPO DE TEXTO

            //ADICIONANDO A LINHA
        if (novaAtividade !== '') {
            $('#lista-tarefa').append('<li>' + novaAtividade + '</li>'); // INSERINDO UM LI PARA CONTAR A LINHA
            $('#input-atividade').val(''); // VOLTANDO AO CAMPO VAZIO DE TEXTO
        }
    });

    // FUNCAO PARA MARCAR COMPLETED
    $(document).on('click', 'li', function () {
        $(this).toggleClass('completed');
    });

    // 2 CLIQUES REMOVE A LINHA OU A TAREFA DIRETAMENTE NO LI 
    $(document).on('dblclick', 'li', function () {
        $(this).remove();
    });

    // Função para remover uma tarefa ao clicar no botão "Remover"
    $(document).on('click', '.botao-remover', function (event) {
        event.stopPropagation(); // Impede que o evento de clique do <li> seja acionado
        $(this).parent().remove(); // Remove o <li> pai do botão clicado
    });
});