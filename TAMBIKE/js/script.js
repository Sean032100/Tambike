	$(document).ready(function() {
  var counter = 0;

  // Start the changing images
  setInterval(function() {
    if(counter == 3) { 
      counter = 0; 
    }

    changeImage(counter);
    counter++;
  }, 3000);

  // Set the percentage off
  loading();
});

function changeImage(counter) {
  var images = [
  	'<i class="fa fa-cogs" aria-hidden="true"></i>',
    '<i class="fa fa-users" aria-hidden="true"></i>',
    '<i class="fa fa-bicycle" aria-hidden="true"></i>'

  ];

  $(".loader .image").html(""+ images[counter] +"");
}
function loading(){
  var num = 0;

  for(i=0; i<=100; i++) {
    setTimeout(function() { 
      $('.loader span').html(num+'%');

      if(num == 100) {
        document.getElementById("load").style.display = "hidden";
        document.getElementById("show").style.display = "block";
      }
      num++;
    },i*65);
  };

}