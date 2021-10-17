let mobilenet
let classifier
let video
let label = ''
let detector
let results = []

let leftSide
let rightSide
let trainButton

function whileTraining(loss) {
  if (loss === null) {
    console.log('training completed')
    classifier.classify(gotResults)
  } else {
    console.log(loss)
  }
}

function gotResults(error, result) {
  if (error) {
    console.log('Error thrown', error)
  } else {
    // console.log(result)
    label = result[0].label
    classifier.classify(gotResults)
  }
}

function detectionResults(error, res) {
  if (error) {
    console.log('Error thrown', error)
  } else {
    results = res
  }
  detector.then((rs) => rs.detect(video, detectionResults))
}

function modelReady() {
  console.log('model is ready!!')
}

function videoReady() {
  console.log('video is ready!!')
}

function preload() {
  detector = ml5.objectDetector('cocossd')
}

function setup() {
  canvas = createCanvas(700, 600)
  canvas.parent('canvasForHTML')

  video = createCapture(VIDEO)
  video.hide()
  background(0)
  mobilenet = ml5.featureExtractor('MobileNet', { numLabels: 7 }, modelReady)
  classifier = mobilenet.classification(video, videoReady)

  // Detect image
  detector.then((rs) => rs.detect(video, detectionResults))
}

function draw() {
  image(video, 0, 0, 700, 600)
  fill(173, 255, 47)
  textSize(30)
  text(label, 10, height - 20)

  results.forEach((res) => {
    stroke(255, 255, 0)
    strokeWeight(3)
    noFill(0)
    rect(res.x, res.y, res.width, res.height)
    noStroke()
    fill(255)
    textSize(24)
    text(res.label, res.x + 12, res.y + 24)
  })
}
