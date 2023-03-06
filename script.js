


// Variante correcte de la fonctionnalité 1 - que je préfère

// var clickerFooter = document.querySelectorAll('footer')[0];
// var OnFooterClick = function () {
//     console.log ('Le mot CLIQUE est affiché');
// }
// clickerFooter.addEventListener("click", OnFooterClick)

//  Fonctionnalité 1 - celle demandée- avec fonction anonyme

var clickerFooter = document.querySelectorAll('footer')[0];
clickerFooter.addEventListener("click", function(){ 
    console.log('Clique est affiché');
});

//  Fonctionnalité 1 bis-  avec compteur
// var x=1
// var clickerFooter = document.querySelectorAll('footer')[0];
// clickerFooter.addEventListener("click", function(){ 
//     console.log('Clic n° ' + x);
//     x=x+1
// });

//  Fonctionnalité 2   -  



//  Pointage des éléments 
var collapseNavbar = document.getElementById('navbarHeader');
var buttonNavbar = document.getElementsByClassName('navbar-toggler')[0];
// Vérification du pointage  = OK
console.log(collapseNavbar);  
console.log(buttonNavbar);  

// Essai de Toggle  sans clic  = Pb
// collapseNavbar.classList.toggle("collapse")
// console.log("Vérification sur la navBar"); 
// console.log(collapseNavbar);  

// Demande de l'exercice

buttonNavbar.addEventListener("click", function(){ 
        collapseNavbar.classList.toggle("collapse") ;
 // Vérification de leffet Toggle après le clic   = Pb  
    console.log("Effet de Toggle après le clic sur Hamburger"); 
    console.log(collapseNavbar); 
 })


//  Fonctionnalité 3 -  

//  Pointage des éléments Pb avec getElements
// var vert2 = document.getElementsByClassName('button.btn.btn-sm.btn-outline-secondary')[0];

//  Pointage des éléments 
var roug1 = document.querySelector('.card-text');
var roug2 = document.querySelector('button.btn.btn-sm.btn-outline-secondary');
// // Vérification du pointage  = OK
// console.log(roug1);  
// console.log(roug2);  
// // Test pour colorer en rouge sans clic
// // roug1.style.color = "red" 

roug2.addEventListener("click", function(){ 
    roug1.style.color = "red" ;
})


//  Fonctionnalité 4 -  

//  Pointage des éléments 
var vert1 = document.querySelectorAll('.card-text')[1];
var vert2 = document.querySelectorAll('.btn.btn-sm.btn-outline-secondary')[1];
console.log(vert1); 
console.log(vert2); 


vert2.addEventListener("click", function() {
    if (vert1.style.color == "green") {
      vert1.style.color = "red";
    } else {
      vert1.style.color = "green";
    }
  });
  

//  Fonctionnalité 5 -  





//  Fonctionnalité 2  Mauvaise piste -  

// // Pointer l'élément
// var collapseNavbar = document.querySelectorAll('.collapse')[0];

// // Vérification du pointage OK
// console.log(collapseNavbar);  
// // Test Elimination de la classe Collapse = OK
// // collapseNavbar.classList.remove("collapse")
// // Test Toggle de la classe Collapse  = OK
// // collapseNavbar.classList.toggle("collapse")
// // Toggle asocié au clic -exercice demandé 
// collapseNavbar.addEventListener("click", function(){ 
//     collapseNavbar.classList.toggle("collapse") ;








