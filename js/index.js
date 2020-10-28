$(function() {
    $("[data-toggle='tooltip']").tooltip();
    $("[data-toggle='popover']").popover();
    $('.carousel').carousel({
      interval: 2000
    });
    $('#reservation').on('show.bs.modal', (function(e){
      $('#reservaBtn1').prop('disabled', true);
    }))
    $('#reservation').on('shown.bs.modal', (function(){
      $('#reservaBtn1').removeClass('btn-primary');
      $('#reservaBtn1').addClass('btn-outline-primary');
    }))
    $('#reservation').on('hide.bs.modal', (function(){
      $('#reservaBtn1').removeClass('btn-outline-primary');
      $('#reservaBtn1').addClass('btn-primary');
    }))
    $('#reservation').on('hidden.bs.modal', (function(){
      $('#reservaBtn1').prop('disabled', false);
    }))
    $('#reservation').on('show.bs.modal', (function(){
      $('#reservaBtn2').prop('disabled', true);
    }))
    $('#reservation').on('shown.bs.modal', (function(){
      $('#reservaBtn2').removeClass('btn-primary');
      $('#reservaBtn2').addClass('btn-outline-primary');
    }))
    $('#reservation').on('hide.bs.modal', (function(){
      $('#reservaBtn2').removeClass('btn-outline-primary');
      $('#reservaBtn2').addClass('btn-primary');
    }))
    $('#reservation').on('hidden.bs.modal', (function(){
      $('#reservaBtn2').prop('disabled', false);
    }))
    $('#reservation').on('show.bs.modal', (function(){
      $('#reservaBtn3').prop('disabled', true);
    }))
    $('#reservation').on('shown.bs.modal', (function(){
      $('#reservaBtn3').removeClass('btn-primary');
      $('#reservaBtn3').addClass('btn-outline-primary');
    }))
    $('#reservation').on('hide.bs.modal', (function(){
      $('#reservaBtn3').removeClass('btn-outline-primary');
      $('#reservaBtn3').addClass('btn-primary');
    }))
    $('#reservation').on('hidden.bs.modal', (function(){
      $('#reservaBtn3').prop('disabled', false);
    }))
    $('#reservation').on('show.bs.modal', (function(){
      $('#reservaBtn4').prop('disabled', true);
    }))
    $('#reservation').on('shown.bs.modal', (function(){
      $('#reservaBtn4').removeClass('btn-primary');
      $('#reservaBtn4').addClass('btn-outline-primary');
    }))
    $('#reservation').on('hide.bs.modal', (function(){
      $('#reservaBtn4').removeClass('btn-outline-primary');
      $('#reservaBtn4').addClass('btn-primary');
    }))
    $('#reservation').on('hidden.bs.modal', (function(){
      $('#reservaBtn4').prop('disabled', false);
    }))
    $('#reservation').on('show.bs.modal', (function(){
      $('#reservaBtn5').prop('disabled', true);
    }))
    $('#reservation').on('shown.bs.modal', (function(){
      $('#reservaBtn5').removeClass('btn-primary');
      $('#reservaBtn5').addClass('btn-outline-primary');
    }))
    $('#reservation').on('hide.bs.modal', (function(){
      $('#reservaBtn5').removeClass('btn-outline-primary');
      $('#reservaBtn5').addClass('btn-primary');
    }))
    $('#reservation').on('hidden.bs.modal', (function(){
      $('#reservaBtn5').prop('disabled', false);
    }))
    $('#reservation').on('show.bs.modal', (function(){
      $('#reservaBtn6').prop('disabled', true);
    }))
    $('#reservation').on('shown.bs.modal', (function(){
      $('#reservaBtn6').removeClass('btn-primary');
      $('#reservaBtn6').addClass('btn-outline-primary');
    }))
    $('#reservation').on('hide.bs.modal', (function(){
      $('#reservaBtn6').removeClass('btn-outline-primary');
      $('#reservaBtn6').addClass('btn-primary');
    }))
    $('#reservation').on('hidden.bs.modal', (function(){
      $('#reservaBtn6').prop('disabled', false);
    }))
    $('#reservation').on('show.bs.modal', (function(){
      $('#reservaBtn7').prop('disabled', true);
    }))
    $('#reservation').on('shown.bs.modal', (function(){
      $('#reservaBtn7').removeClass('btn-primary');
      $('#reservaBtn7').addClass('btn-outline-primary');
    }))
    $('#reservation').on('hide.bs.modal', (function(){
      $('#reservaBtn7').removeClass('btn-outline-primary');
      $('#reservaBtn7').addClass('btn-primary');
    }))
    $('#reservation').on('hidden.bs.modal', (function(){
      $('#reservaBtn7').prop('disabled', false);
    }))
  });