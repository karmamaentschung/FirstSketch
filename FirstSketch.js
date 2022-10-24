/**
 * Draws circles on the archimedean spiral.
 *
 * Copyright (c) 2020 Fabian Dennler
 *
 * Permission is hereby granted, free of charge, to any person obtaining 
 * a copy of this software and associated documentation files (the "Software"), 
 * to deal in the Software without restriction, including without limitation the 
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or 
 * sell copies of the Software, and to permit persons to whom the Software is 
 * furnished to do so, subject to the following conditions:
 *
 *   The above copyright notice and this permission notice shall be included in 
 *   all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS".
 **/

let Increment = 1.5;  // Size of step increment 
let Radius = 150;       // Radius of Quarter PI
let ShapeRatio = 100;   // Shape scale ratio

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL); // Display settings
  initialize();
}

function draw() {
  let scaledRadius = Radius * ShapeRatio;
  let xPosition = cos(Radius) * scaledRadius;
  let yPosition = sin(Radius) * scaledRadius;
	arc(xPosition, yPosition, 100, 100, 0, PI + QUARTER_PI, CHORD); 
  Radius += Increment;
  // Restart
	if ((xPosition > windowWidth) || (yPosition > windowHeight)) {
		initialize();
	}
}

// 
function initialize() {
  background(255);   //changeable background 
  fill(random(0, 255), random(0, 255), random(0, 255)); //change rgb settings
	stroke(0); //changable outline
  Radius = 0; // Reset
  Increment = random(-0.3, -5.1);
  ShapeRatio = random(-1.4, 2.8);
}