import Post from './Post.js'
import png_example from './assets/png-example.png'
import './styles/styles.css'
import './babel.js'

const post = new Post('Webpack post title', png_example)

console.log(post)