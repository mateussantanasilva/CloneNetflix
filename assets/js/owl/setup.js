/*
$('.owl-carousel').owlCarousel({ //chama o owl
    loop:true,
    margin:10,
    nav:false, //botões de navegação
    center: true,
    responsive:{ //verifica quantos px tem a tela de tamanho e exeibe quant de itens
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
}) */

$('.loop').owlCarousel({
    center: true,
    items:2,
    loop:true,
    margin:15,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:4
        },
        1000:{
            items:6
        }
    }
});
