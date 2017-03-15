/**
 * @package Cattive.Site
 * @subpackage  Templates.cattive
 *
 * @copyright   Copyright (C) 2015, Inc. All rights reserved.
 * @license GNU General Public License version 2 or later; see LICENSE.txt
 */

/* global $ */

var propriedades = {
    isIndex: location.href.indexOf('index') >= 0
};

$(function () {

    var SubMenuShow = false;
    var larguraDaTela = 0;
    var travaMenu = false;


    limparMenu();

    larguraDaTela = $(document).width() - 730;
    larguraDaTela = (larguraDaTela / 2);

    $(window).resize(function (event) {

        if ($(document).width() <= 730) {
            travaMenu = true;
        } else {
            travaMenu = false;
        }
        larguraDaTela = $(document).width() - 730;
        larguraDaTela = (larguraDaTela / 2);
    });

    if ($(document).width() <= 730) {
        travaMenu = true;
    } else {
        travaMenu = false;
    }



    /* Colocar a margem no sub-menu-show pra cada item do menu */
    $('.menu-aempresa').mouseover(function () {
        var css = {
            marginLeft: propriedades.isIndex ? '730px' : '',
            width: '115px'
        };
        $('.sub-menu-show').css(css);
    });
    $('.comofunciona').mouseover(function () {
        var css = {
            marginLeft: propriedades.isIndex ? '830px' : '',
            width: '150px'
        };
        $('.sub-menu-show').css(css);

        $('.arrow-up, .arrow-up-border').css({
            marginLeft: '510px'
        });
    });
    $('.contato').mouseover(function () {
        var css = {
            marginLeft: propriedades.isIndex ? '930px' : '',
            width: '150px'
        };
        $('.sub-menu-show').css(css);

        $('.arrow-up, .arrow-up-border').css({
            marginLeft: '535px'
        });

    });

    /* Limpa o conteúdo interno do submenu */
    function limparMenu() {
        $('.sub-menu-show .row>div, .sub-menu-show').not('[class*="col-xs"]').css('display', 'none');
    }

    /* Remove o submenu da tela se clicar em qualquer parte da tela */
    $('body').on('click', function () {
        if (SubMenuShow === true) {
            $('.sub-menu-show .row>div, .sub-menu-show').not('[class*="col-xs"]').css('display', 'none');
            SubMenuShow = false;
        }
    });





    $('.menu-principal a:visible').each(function () {
        var a = $(this);
        var html = a.next('.sub-menu-show').html();

        a.tooltipster({
            content: html,
            contentAsHTML: true,
            interactive: true,
            theme: 'tooltipster-light',
            touchDevices: false,
            delay: 50,
            interactiveTolerance: 100
        });
    });

    $(".slider-topo").owlCarousel({
        singleItem: true,
        pagination: true
    });

    /* Botões Slider Topo */
    var owl = $(".slider-topo").data('owlCarousel');
    $('.slider-topo-seta-direita').on('click', function () {
        owl.next();
    });
    $('.slider-topo-seta-esquerda').on('click', function () {
        owl.prev();
    });

    /* Ativador da "Wilma */
    var dlgTrigger = document.querySelectorAll('[data-dialog]');
    var someDialog, dlg;
    for (var i = 0; i < dlgTrigger.length; i++) {
        someDialog = document.getElementById(dlgTrigger[i].getAttribute('data-dialog'));
        dlg = new DialogFx(someDialog);
        dlgTrigger[i].addEventListener('click', dlg.toggle.bind(dlg));

    }

    /* Accordion */
    var allPanels = $('.toggle-duvidas > p').hide();

    $('.toggle-duvidas').click(function () {
        allPanels.slideUp();
        $('.toggle-duvidas').find('span').html('+ ');
        $(this).find('span').html('- ');
        var p = $(this).find('p');
         if (p.is(':hidden')) {
             $(this).find('p').slideDown();
        }
        else {
             p.slideUp();
              $(this).find('span').html('+ ');
        }
        return false;
    });

});