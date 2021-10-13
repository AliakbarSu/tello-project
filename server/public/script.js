let mobilenet
let classifier
let video
let label = ''

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
    //console.log(result)
    label = result[0].label
    classifier.classify(gotResults)
  }
}

function modelReady() {
  console.log('model is ready!!')
}

function videoReady() {
  console.log('video is ready!!')
}

function setup() {
  canvas = createCanvas(400, 400)
  canvas.parent('canvasForHTML')

  video = createCapture(VIDEO)
  video.hide()
  background(0)
  mobilenet = ml5.featureExtractor('MobileNet', modelReady)
  classifier = mobilenet.classification(video, videoReady)

  // leftSide = document.getElementById('left-btn')
  // leftSide.mousePressed(() => {
  //   classifier.addImage('left')
  // })

  // rightSide = document.getElementById('right-btn')
  // rightSide.mousePressed(() => {
  //   classifier.addImage('right')
  // })

  // trainButton = document.getElementById('train-btn')
  // trainButton.mousePressed(() => {
  //   classifier.train(whileTraining)
  // })
}

function draw() {
  image(video, 0, 0)
  fill(0)
  textSize(64)
  text(label, 10, height - 100)
}
