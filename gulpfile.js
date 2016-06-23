var gulp = require("gulp");

var server = require("browser-sync");

gulp.task("show", function(){
  server.init({
    server: ".",
    notify: false,
    open: true,
    ui: false
  });
  
  
  gulp.watch("*.html", ["copyHtml"]).on("change", server.reload);
  gulp.watch("js/*.js", ["minjs"]).on("change", server.reload);
  
});


