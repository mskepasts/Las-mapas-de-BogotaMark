var names = ["Cuenca Tintal", "Humedal Jaun Amerillo", "Quebrada de Fucha", "Quebrada Yomasa", "Rio Fucha", "Rio Salitre", "Rio Tunjuelo", "Torca"];
var info = ["in0.", "in1.", "in2.", "in3.", "in4.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolo", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolo", "in7."]
// $('.map').maphilight();
function writeInfo(name) {
  $(".title").text(name);
  $(".info").text(info[names.indexOf(name)]);
}








function main() {

  $(".mapIMG").on("click", function(event) {
    writeInfo(event.target.id);
  });
}


main();
