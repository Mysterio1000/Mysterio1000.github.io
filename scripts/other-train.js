
let bg_img;

let train_img;
let trainX = -500;
let trainSpeed = 4;

let bridge_img;

let image_offset;

// let waterfallShader;

function preload() {
	bg_img = loadImage("../assets/img/background.png");
	train_img = loadImage("../assets/img/train.png");
	bridge_img = loadImage("../assets/img/bridge.png");

	// waterfallShader = loadShader("scripts/test.vert", "scripts/test.frag");
}

function setup() {
    console.log("test");
	// See here for rendering pixel art:
	// https://developer.mozilla.org/en-US/docs/Games/Techniques/Crisp_pixel_art_look
	let canvas = createCanvas(windowWidth, windowHeight);//, WEBGL);
	canvas.position(0, 0);
	canvas.style("z-index", "-1"); // MAKE SURE THIS IS CROSS-PLATFORM!
	canvas.style("position", "fixed");

	pixelDensity(1);
	// frameRate(30);
	noStroke();

	image_offset = (height - 1080) / 2;

	frameRate(60);
}

// let clock = 0;

function draw() {
	// translate(-width / 2, -height / 2);

	// texture(bg_img);
	// shader(waterfallShader);
	// rect(0, 0, width, height);
	// background(255);
	image(bg_img, 0, image_offset);

	// fill(map(mouseY, 0, height, 0, 255), 255, map(mouseX, 0, width, 0, 255));
	// ellipse(mouseX, mouseY, 40, 40);

	// if (trainX < width) image(train_img, trainX, height - 210);//, 306, 114);
	for (let i = 0; i < 1; i++) {
		image(train_img, trainX - (153 * i), (image_offset + 1080) - 300);//height - 205);//, 306, 114);
	}

	/*if (mouseY < height - 210 || mouseY > height - 150 || mouseX > trainX + 153 + 50) */trainX += trainSpeed;

	if (trainX > width * 2)
		trainX = -900; // trainX = random(-1700, -700);

	image(bridge_img, 0, image_offset);

	// if (clock % 15 == 0) {
		// loadPixels();
		// for (let y = 100; y < (image_offset + 1080) - 200; y++)
		// for (let x = 300; x < 400; x++) {
		// 	let offset = floor(random(1, 9));
		// 	let cr = pixels[(x + (y + offset) * width) * 4    ];
		// 	let cg = pixels[(x + (y + offset) * width) * 4 + 1];
		// 	let cb = pixels[(x + (y + offset) * width) * 4 + 2];
		// 	pixels[(x + y * width) * 4] = cr;
		// 	pixels[(x + y * width) * 4 + 1] = cg;
		// 	pixels[(x + y * width) * 4 + 2] = cb;
		// 	pixels[(x + y * width) * 4 + 3] = 255;
		// }
		// updatePixels();
	// }

	// clock++;
}