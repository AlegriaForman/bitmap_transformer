#Bitmap Transformer

Code Fellows assignment for the Code 401 class.

Pair programming by Tim Forman and Ali Forman

User instructions:

In the terminal, navigate to the root folder containing the bitmap transformer.

From command-line, enter 'node index.js [name of bitmap file]'.

The selected bitmap file must be present in the 'imagesIn' folder.

The imported bitmap file will be transformed and output to the 'imagesOut' folder.

Currently, the transform program will convert a non-palette bitmap (no color table)
by inverting all of the colors, filtering red and green (turns blue) and filtering
blue and green (turns red).

There will be 3 images output for each input.

The objective of this exercise is to improve understanding of using NodeJs
buffers to manipulate binary data. It includes tests, as well as using Gulp.

Tests can be executed from the command-line by entering 'mocha' for the TDD-type
test or by entering 'gulp' for the linter and TDD-type tests.
