var NeuralNetwork = require('../lib/neural').Network
var network = new NeuralNetwork()

// Layers
network.addLayer(10, 20) // Hidden layer: 10 neurons, 20 inputs each (# inputs = # inputs to process).
network.addLayer(2)      // Output layer: 2 neurons, outputting the results.

// Our character "images". Image `1`s as black pixels.
var zero = [
  0, 1, 1, 0,
  1, 0, 0, 1,
  1, 0, 0, 1,
  1, 0, 0, 1,
  0, 1, 1, 0
]

var one = [
  0, 0, 1, 0,
  0, 0, 1, 0,
  0, 0, 1, 0,
  0, 0, 1, 0,
  0, 0, 1, 0
]

var two = [
  0, 1, 1, 0,
  1, 0, 0, 1,
  0, 0, 1, 0,
  0, 1, 0, 0,
  1, 1, 1, 1
]

var three = [
  1, 1, 1, 1,
  0, 0, 0, 1,
  0, 1, 1, 1,
  0, 0, 0, 1,
  1, 1, 1, 1
]

network.train([
  // Training examples
  // inputs   outputs
  [  zero,    [0, 0]  ],
  [  one,     [0, 1]  ],
  [  two,     [1, 0]  ],
  [  three,   [1, 1]  ],
])

// Querying the network
var output = network.process([
  1, 1, 1, 1,
  1, 0, 0, 1,
  0, 0, 1, 0,
  0, 1, 0, 0,
  1, 1, 1, 0
])

// Convert the output to binary (base 2) and then to decimal (base 10).
var binary = output.map(function(v) { return Math.round(v) }).join("")
var decimal = parseInt(binary, 2)

console.log("Recognized", decimal, output)
