var menuBox = document.getElementById("menu-wrap");
var menuIcon = document.getElementById("hamburger");
var icon = document.querySelector('.icon');
var search = document.querySelector('.searchbar');
var cardtog = document.getElementById("cardtoggle");
var cardtogr = document.getElementById("cardtoggler")
var cardshow = document.querySelector('.load-more');
var arrow = document.getElementById('viewmore');
var view_m_para = document.getElementById('viewmore-para');
var view_l_para = document.getElementById('viewless-para');
menuIcon.onclick = function(){
  menuBox.classList.toggle("open-menu");
}
icon.onclick = function(){
  search.classList.toggle('active');
}
cardshow.onclick = function(){
  cardtog.classList.toggle('card');
  cardtogr.classList.toggle('card');
  arrow.classList.toggle('bi-arrow-up-short');
  arrow.classList.toggle('bi-arrow-down-short');
  if(arrow.classList.contains('bi-arrow-up-short')){
    view_l_para.hidden= false;
    view_m_para.hidden= true;
  }else {
    view_l_para.hidden= true;
    view_m_para.hidden= false;
  }
  
}
