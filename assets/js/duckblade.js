/*
	Custom JS
*/

// Loads functions as soon as the page displays in web browser
$(function() {
    initAllModals();
    initAllAnimatedThumbnails();
})

// Initialize all modal's behaviour
// Shows a modal when user clicks on a portfolio item
function initAllModals()
{
    // Dungeon Unlimited Modal
    initModal("dungeonUnlimited");
    // Eden Project Modal
    initModal("edenProject");
}

// Initialize all thumbnail's animations
function initAllAnimatedThumbnails()
{
    initAnimatedThumbnail("edenProject");
    initAnimatedThumbnail("dungeonUnlimited");
}

// Initialize a Thumbnail by it's id
function initAnimatedThumbnail(thumbnailId){
 $("#"+thumbnailId+" > img").hover(
         function() {
             $(this).attr("src", "assets/images/"+thumbnailId+"_animated.gif");
         },
         function() {
             $(this).attr("src", "assets/images/"+thumbnailId+"_static.jpg");
         }
     );
}

// Initialize a Modal by it's id
// Note : modal ids must have the prefix 'Modal'
function initModal(modalId){
    $("#"+modalId).click(function(){
        $("#"+modalId+"Modal").modal('show');
    });
    $("#"+modalId+"Modal").modal({
        closable: true
    });
}
