---
layout: page
title: CNN based image resizing forensics for double compressed JPEG images
description: 
img: assets/img/project1/background.jpg
importance: 1
category: work
related_publications: true
---
#### Abstract

This paper investigates a novel CNN-based architecture for image resizing forensics in the presence of Double-JPEG compression. Two sub-problems are addressed as part of this paper: first, the detection of resizing in DJPEG images, and second, determining the factor used to resize the image before the second JPEG compression. The image resizing technique used in this paper is image scaling. The proposed network is based on utilizing specially chosen high pass filters that constitute the pre-processing layer, followed by four convolutional layers, two fully connected layers, and a final softmax layer. The high-pass filters preserve the resizing clues in the form of residuals applied at the pre-processing layer, followed by utilizing the residuals as inputs to a CNN to detect the presence of resizing and also for estimating the resizing factor. The proposed network is fully end-to-end and does not rely on any hand-crafting. Experimental validation is carried out utilizing images from the RAISE dataset. Comparative analysis with four state-of-the-art methods demonstrates the proposed CNN-based architecture’s superiority for resizing detection and resize factor determination sub-problems.

#### Motivation and Problem Formulation 

Tampering of images is used for committing various cyber crimes. Detection of any form of tampering in images is crucial.
Let I denote an uncompressed image. Resizing with a factor ξ involves resampling of I. Assuming that the resampling occurs under affine transformation, the original axes (n1,n2) are transformed to A(n1,n2)T where A = ξI2, I2 is 2x2 identity matrix If ξ<1,resizing results in downsampling and ξ>1 results in upsampling Resampling leaves clues in the image which have been exploited in various works to detect resizing using various statistical and handcrafted feature based methods as well as deep learning methods
    ---
    layout: page
    title: project
    description: a project with a background image
    img: assets/img/project1/network.png
    ---
#### Proposed Method

##### A: Pre-processing Layer
The pre-processing layer is based on utilizing a set of high pass filters on the image under investigation to pick the residuals that may have been left-over by applying resizing operation between the two JPEG cycles in a double compression scenario. These residuals serve as a clue for the presence/absence of resizing and are exploited by the proposed method. Henceforth we refer to these residuals as resizing residuals. The validation of this observation is carried out in Fig 1. The first row depicts a double compressed un-resized image passed through a set of high pass kernels, while the second row shows a double compressed resized image (resize factor (ξ= 0.6)) passed through the same set of high pass kernels
 
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project1/residual.png" title="CNN Residuals" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Fig. 1: Visualization of the result of Convolution with 7 types of high pass kernels (1st, 2nd, 3rd, SQUARE 3X3, SQUARE 5X5, EDGE 3X3, SQUARE 5X5 respectively). The first row is for the original image (not-resized DJPEG) and the second for resized DJPEG image
</div>

As observed, the edges and noises are less prominent in the un resized scenario than in the resized scenario, where the edges and noises are more prominent despite the presence of the second compression cycle, which generally tends to erase the clues. Therefore, it can be inferred that the image content is effectively suppressed, and only the edge and noise components in the image are retained, which serve as resizing forensic clues referred to as resizing residuals.

##### B. Network Architecture

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project1/network.png" title="Network Architecture" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
   Fig 2, Proposed CNN architecture. The softmax output is two in the case of resizing detection and ten for resizing factor  estimation
</div>

##### C. Data Set Preparation
Uncompressed TIFF images from RAISE dataset are passed through two JPEG compression cycles with one resizing operation in between the two compressions.
- Patches of 1024 X 1024 were generated from each sample. An average of 11 image patches were obtainedfrom each image.
-  Each of these patches was then passed through one cycle of JPEG compression using a set of 5 quality factors QF1 = [50, 60, 70, 80, 90].
- These single compressed image patches were then resized with resizing factors chosen from 10 candidate resizing factors ξ = [0.6, 0.7, 0.8, 0.9, 0.95, 1.05, 1.1, 1.2, 1.3, 1.4] using bicubic interpolation.
- The resulting images were then passed through the second cycle of JPEG compression with quality factors QF2 = [50, 60, 70, 80, 90, 99].
- A balanced dataset was created  with 33000 (30 X 11 X 100) images per candidate resizing factors, with 70-30 train-test splitting. In the end, the size of the dataset was 330000 images across all 10 resizing factors

#### Results

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/project1/acc.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    
</div>
<div class="caption">
    Accuracy in (%) for (a) different resizing factors with QF_2= 90 and QF_1 ∈ {50, 60, 70, 80, 90} (b) different quality factors for second compression (QF_2) averaged over all resizing factors (xi) and first quality factors (QF_1)
</div>


