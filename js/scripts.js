


// We need to set up the SCENE, CAMERA and RENDERER
// WHAT and WHERE is to be rendered
var scene = new THREE.Scene();

//There are several cameras...
//attributes: Field of view (in degrees)
// Aspect Ratio width / height (to get even aspect)
// near clipping plane
// far clipping plane
// i.e. what scope of things will be rendered (for performance)
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//There are other renderers for fallbacks
//WHAT ARE THEY
var renderer = new THREE.WebGLRenderer();

//The size at which we want it to render our app. I.E. the width and height of the area we want to fill with our app.
renderer.setSize( window.innerWidth, window.innerHeight );

//adding the renderer element to our html document
//It will append a canvas element
document.body.appendChild( renderer.domElement );

//The first step is the box geometry that contains all the points (vertices) and fill (faces) of the cube
var geometry = new THREE.BoxGeometry( 6,6,6 );

// Material to color it with. Objects with properties.
var material = new THREE.MeshBasicMaterial( { color: 99999999} );

//Basic
//Phong


// The mesh is an object that takes a geometry and applies a material to it.
var cube = new THREE.Mesh( geometry, material );

// adds it to the (0,0,0)
scene.add( cube );

// var pointLight = new THREE.PointLight(0xff0000);
// pointLight.position.set(0, 200, 500);

// scene.add(pointLight);

//so we move our camera out (away)
camera.position.z = 20;

//the render/animate loop
//This causes the renderer to draw the scene every time the screen is refreshed
function animate() {
   requestAnimationFrame( animate );
   // cube.rotation.x += 0.02;
   // cube.rotation.y += 0.01;
	renderer.render( scene, camera );
}
animate();

// http://www.larsberg.net/#/thumpThump
// https://beinternetawesome.withgoogle.com/interland
// http://letsplay.ouigo.com/