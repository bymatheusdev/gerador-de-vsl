

  $(document).ready(function(){
    $('#fontcolor').change(function() {
      $('#editorjs').css( 'color', $(this).val() );
    });

    $('#bgcolor').change(function() {
      $('#box_texto').css( 'background-color', $(this).val() );
    });

    $("#gerar_vsl").click(function(event){
    $("#loading").show();
    setTimeout(function() {
        $("#loading").hide();
    }, 2000);
    });


  });