var {src,dest,watch} = require('gulp')
var scss = require('gulp-sass')

function compile(){
    return src('scss/main.scss')
    .pipe (scss({outputStyle : "expanded"}))
    .pipe (dest('css'))
}

exports.compile = compile
exports.default = function(){
    watch('scss/main.scss',compile)
}