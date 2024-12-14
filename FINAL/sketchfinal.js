
let circles = []; // Array to circle objects
let score = 0; // Player's score

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  //circles array with random positions and sizes
  for (let i = 0; i < 20; i++) {
    circles.push({
      x: random(width),
      y: random(height),
      size: random(30, 50),
      color: [random(100, 255), random(100, 255), random(100, 255)],
      speedX: random(-2, 2),
      speedY: random(-2, 2),
      active: true, // Track if the circle is "alive"
    });
  }
}

function draw() {
  background("black"); //background

  // Display score
  fill("white");
  textSize(24);
  text(`Score: ${score}`, 20, 40);

  // Draw and update each circle
  for (let i = 0; i < circles.length; i++) {
    let circle = circles[i];

    if (!circle.active) continue; // Skip inactive circles

    // Keep the color constant to prevent flickering
    fill(circle.color[0], circle.color[1], circle.color[2], 200);
    ellipse(circle.x, circle.y, circle.size);

    // Update position with speed and bounce off edges
    circle.x += circle.speedX;
    circle.y += circle.speedY;

    if (circle.x < 0 || circle.x > width) circle.speedX *= -1;
    if (circle.y < 0 || circle.y > height) circle.speedY *= -1;
  }

  // End the game if all circles are inactive
  if (circles.every(circle => !circle.active)) {
    noLoop();
    fill("white");
    textSize(32);
    textAlign(CENTER, CENTER);
    text("Game Over! Final Score: " + score, width / 2, height / 2);
  }
}

function mousePressed() {
  // Check if the player clicks on any active circle
  for (let i = 0; i < circles.length; i++) {
    let circle = circles[i];

    if (circle.active && dist(mouseX, mouseY, circle.x, circle.y) < circle.size / 2) {
      circle.active = false; // Deactivate the circle
      score += 10; // Increase score
      break; // Stop checking after the first hit
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
