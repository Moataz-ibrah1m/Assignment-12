

$(".link-open").click(function()
{
    $("span").animate({marginLeft:'200px'})
    $(".link-menu").animate({width:'200px'},50);
    $('menu-text').animate({marginLeft:'50px'},50)
})
$(".close").click(function()
{
    $("span").animate({marginLeft:'0px'})
    $(".link-menu").animate({width:'0px'},50);
    $('menu-text').animate({marginLeft:'0px'},50)
})


  $("a[href^='#']").click(function(eventInfo){
    let aHref=eventInfo.target.getAttribute('href');
    let sectionOffset=$(aHref).offset().top;
    $('html','body').animate({scrollTop:sectionOffset},1000)
  })

$(".toggle-section").click(function()
{
    $(".content").not($(this).next(".content").slideToggle(500)).hide();
})

var countDownDate = new Date("10 october 2024 9:56:00").getTime();


var x = setInterval(function() {

  
  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  $(".days").html(`${days} D`);
  $(".hours").html(`${hours} H`);
  $(".minutes").html(`${ minutes } M`);
  $('.seconds').html(`${ seconds} S`)

})
var maxLength =100;
$('textarea').keyup(function() {
  var textlen = maxLength - $(this).val().length;
  $('#Character').text(textlen);
}); 