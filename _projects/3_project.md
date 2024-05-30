<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <!-- Meta tags for social media banners, these should be filled in appropriatly as they are your "business card" -->
  <!-- Replace the content tag with appropriate information -->
  <meta name="description" content="IDDAW: Indian Driving Dataset for Adverse Weather and Unstructured Roads, Published at WACV 2024.">
  <meta property="og:title" content="IDD-AW"/>
  <meta property="og:description" content="IDDAW: Indian Driving Dataset for Adverse Weather and Unstructured Roads, Published at WACV 2024."/>
  <meta property="og:url" content="iddaw.github.io"/>
  <!-- Path to banner image, should be in the path listed below. Optimal dimenssions are 1200X630-->
  <!-- <meta property="og:image" content="static/image/your_banner_image.png" /> -->
  <meta property="og:image:width" content="1200"/>
  <meta property="og:image:height" content="630"/>
  
  
  <meta name="twitter:title" content="IDDAW Project page">
  <meta name="twitter:description" content="Complete project description for IDD-AW">
  <!-- Path to banner image, should be in the path listed below. Optimal dimenssions are 1200X600-->
  <!-- <meta name="twitter:image" content="static/images/your_twitter_banner_image.png"> -->
  <!-- <meta name="twitter:card" content="summary_large_image"> -->
  <!-- Keywords for your paper to be indexed by-->
  <meta name="keywords" content="IDD IDD-AW">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  
  
  <title>IDD-AW: A Benchmark for Safe and Robust Segmentation of Drive Scenes
    in Unstructured Traffic and Adverse Weather</title>
  <!-- <link rel="icon" type="image/x-icon" href="static/images/favicon.ico"> -->
  <link href="https://fonts.googleapis.com/css?family=Google+Sans|Noto+Sans|Castoro"
  rel="stylesheet">
  
  <link rel="stylesheet" href="static/css/bulma.min.css">
  <link rel="stylesheet" href="static/css/bulma-carousel.min.css">
  <link rel="stylesheet" href="static/css/bulma-slider.min.css">
  <link rel="stylesheet" href="static/css/fontawesome.all.min.css">
  <link rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/jpswalsh/academicons@1/css/academicons.min.css">
  <link rel="stylesheet" href="static/css/index.css">
  
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://documentcloud.adobe.com/view-sdk/main.js"></script>
  <script defer src="static/js/fontawesome.all.min.js"></script>
  <script src="static/js/bulma-carousel.min.js"></script>
  <script src="static/js/bulma-slider.min.js"></script>
  <script src="static/js/index.js"></script>
</head>
<body>
  
  
  <section class="hero">
    <div class="hero-body">
      <div class="container is-max-desktop">
        <div class="columns is-centered">
          <div class="column has-text-centered">
            <h1 class="title is-1 publication-title">IDD-AW: A Benchmark for Safe and Robust Segmentation of Drive Scenes
              in Unstructured Traffic and Adverse Weather</h1>
            <div class="is-size-5 publication-authors">
              <!-- Paper authors -->
              <span class="author-block"><a href="https://scholar.google.com/citations?hl=en&user=rzHNVVgAAAAJ&view_op=list_works&gmla=AH70aAVFl52xdyC0D9ybjPOO9-1pDTQqKS4Oj3vdGk_AoqE6Wd08m70JRbhrLaHx1_0EWoDww4SsXX_64ADEedNZ" target="_blank">Furqan Ahmed Shaik</a><sup>1</sup>,</span>
              <span class="author-block"> Abhishek Malreddy</a><sup>1</sup>,</span>
              <span class="author-block"> Nikhil Reddy Billa</a><sup>1</sup></span>
              <br>
              <span class="author-block"> Kunal Chaudhary</a><sup>2</sup></span>
              <span class="author-block"><a href="https://scholar.google.com/citations?hl=en&user=lAS7WHUAAAAJ" target="_blank">Sunny Manchanda</a><sup>2</sup></span>
              <span class="author-block"><a href="https://girishvarma.in/" target="_blank">Girish Varma</a><sup>1</sup></span> 
 
              </div>
              
              <div class="is-size-5 publication-authors">
                <span class="author-block"><sup>1</sup>IIIT Hyderabad, India, <sup>2</sup>DYSL-AI Lab, DRDO, <br>WACV 2024</span>
                <!-- <span class="eql-cntrb"><small><br><sup>*</sup>Indicates Equal Contribution</small></span> -->
              </div>
              
              <div class="column has-text-centered">
                <div class="publication-links">
                  <!-- Arxiv PDF link -->
                  <span class="link-block">
                    <a href="static/pdfs/IDDAW_WACV24_final.pdf" target="_blank"
                      class="external-link button is-normal is-rounded is-dark">
                      <span class="icon">
                        <i class="fas fa-file-pdf"></i>
                      </span>
                      <span>Paper</span>
                    </a>
                  </span>
                  <!-- Supplementary PDF link -->
                  <span class="link-block">
                    <a href="static/pdfs/IDDAW_WACV24_supp.pdf" target="_blank"
                    class="external-link button is-normal is-rounded is-dark">
                    <span class="icon">
                      <i class="fas fa-file-pdf"></i>
                    </span>
                    <span>Supplementary</span>
                  </a>
                </span>

                <!-- Presentation link -->
                <span class="link-block">
                  <a href="static/pdfs/WACV_IDD-AW.pdf" target="_blank"
                  class="external-link button is-normal is-rounded is-dark">
                  <span class="icon">
                    <i class="fas fa-file-pdf"></i>
                  </span>
                  <span>Presentation</span>
                </a>
              </span>
                
                <!-- Github link -->
                <span class="link-block">
                  <a href="https://github.com/Furqan7007/IDDAW_kit" target="_blank"
                  class="external-link button is-normal is-rounded is-dark">
                  <span class="icon">
                    <i class="fab fa-github"></i>
                  </span>
                  <span>Code</span>
                </a>
              </span>
              
              <!-- ArXiv abstract Link -->
              <span class="link-block">
                <a href="https://arxiv.org/abs/2311.14459" target="_blank"
                  class="external-link button is-normal is-rounded is-dark">
                  <span class="icon">
                    <i class="ai ai-arxiv"></i>
                  </span>
                  <span>arXiv</span>
                </a>
              </span>

              <!-- Dataset Link -->
              <span class="link-block">
                <a href="https://idd.insaan.iiit.ac.in/dataset/download/" target="_blank"
                  class="external-link button is-normal is-rounded is-dark">
                  <span class="icon">
                    <i class=""></i>
                  </span>
                  <span>Dataset</span>
                </a>
              </span>

              <!-- Sa  fe mIoU calculation -->
              <span class="link-block">
                <a href="https://girish-lab.github.io/Safe-Segmentation-Competition-ICPR-24/index.html" target="_blank"
                  class="external-link button is-normal is-rounded is-dark">
                  <span class="icon">
                    <i class=""></i>
                  </span>
                  <span>Challenge</span>s
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>




<!-- Create section for Teaser Image and a caption -->
<section class="hero teaser">
  <div class="container is-max-desktop">
    <div class="hero-body has-text-centered">
            <img src="static/images/iddaw_bg.png" alt="IDD-AW Teaser image" width="100%"/>
      <h2 class="subtitle has-text-centered">
        Some examples from the dataset showing different weather conditions
        along with paired RGB-NIR images for each rain, fog, lowlight and snow. 
      </h2>
    </div>
  </div>

<!-- Paper abstract -->
<section class="section hero is-light">
  <div class="container is-max-desktop">
    <div class="columns is-centered has-text-centered">
      <div class="column is-four-fifths">
        <h2 class="title is-3">Abstract</h2>
        <div class="content has-text-justified">
          <p>
            Large-scale deployment of fully autonomous vehicles requires a very high degree of robustness to unstructured traffic, weather conditions, and should prevent unsafe mispredictions. While there are several datasets and benchmarks focusing on segmentation for drive scenes, they are not specifically focused on safety and robustness issues.
We introduce the IDD-AW dataset, which provides 5000 pairs of high-quality images with pixel-level annotations, captured under rain, fog, low light, and snow in unstructured driving conditions. As compared to other adverse weather datasets,
we provide i.) more annotated images, ii.) paired Near-Infrared (NIR) image for each frame, iii.) larger label set with a 4-level label hierarchy to capture unstructured traffic conditions. We benchmark state-of-the-art models for semantic
segmentation in IDD-AW. We also propose a new metric called “Safe mean Intersection over Union (Safe mIoU)” for hierarchical datasets which penalizes dangerous mispredictions that are not captured in the traditional definition of mean Intersection over Union (mIoU). The results show that IDD-AW is one of the most challenging datasets to date for these tasks. The dataset and code will be available here: http://iddaw.github.io.          </p>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- End paper abstract -->

<!-- Make a section for a summary of IDD-3D -->
<section class="section hero is-dark">
  <div class="container is-max-desktop">
    <div class="columns ">
      <div class="column is-four-fifths">
        <h2 class="title is-3">IDD-AW Summary</h2>
        <div class="content has-text-justified">
          <p>
            IDD-AW is a groundbreaking dataset designed to address the challenges of autonomous driving in adverse weather conditions and unstructured environments. While existing datasets have primarily focused on well-organized, controlled settings, IDD-AW takes a different approach by capturing the complexities of real-world driving scenarios. The dataset is particularly unique for its focus on adverse weather conditions like rain, fog, snow and lowlight, collected in cities all across India.

            <h3 class="title is-4">Key Features:</h3>
              <ul>
                <li><strong>Diverse Geographical Coverage:</strong> IDD-AW is collected across various states and terrains of India, from the highways of Hyderabad to the snowy hills of Manali and the foggy roads of Delhi and Ooty encompassing a range of road types, traffic densities, and adverse weather conditions like rain, fog, snow and lowlight</li>
                <li><strong>Rich Annotations:</strong> The dataset includes both NIR and RGB paired components for each image and annotated for semantic and instance segmentation. </li>
                <li><strong>High-Quality Data:</strong> The dataset is meticulously curated, with high-resolution RGB and NIR camera sensors capturing over 1 million frames. However, through thorough inspection and high quality checks, the final dataset has shortlisted 5000 RGB-NIR image pairs. </li>
                <li><strong>Unique Object Categories:</strong> Unlike other datasets that often generalize objects into broad categories, IDD-AW provides a more nuanced classification, including unique vehicle types and pedestrian behaviors commonly seen in unstructured environments and adverse weather conditions. </li>
              </ul>

          </p>
        </div>
      </div>
    </div>
  </div>
</section>


<!-- Image carousel -->
<section class="hero is-small">
  <div class="hero-body">
    <div class="container">
      <!-- <h2 class="title is-3">Some Interesting Cases</h2>
      <p>
        We highlight some interesting cases in the images below from the data collection and the traffic scenarios encountered and present in the dataset. The cases highlight different aspects of the dataset, the diversity available, and how the data can be used for different applications.
      </p> -->
      <div id="results-carousel" class="carousel results-carousel">
        <div class="item has-text-centered">
          <!-- Your image here -->
          <img src="static/images/idd_iddaw_pixel_comp (1)-1.png" alt="multiple directions"/>
          <h2 class="subtitle has-text-centered">
            We show the pixel level comparison between IDD and IDD-AW for all labels. We can see that even though IDD-AW was collected in various challenging adverse weather conditions, it still has all the classes and almost comparable to normal SOTA driving datasets
          </h2>
        </div>
        <div class="item has-text-centered">
          <!-- Your image here -->
          <img src="static/images/acdc_iddaw_labelcomp_tp-1 (1)-1.png" alt="road levels"/>
          <h2 class="subtitle has-text-centered">
            We highlight multiple levels of drivable surfaces including roads, highways, flyovers etc. The data collection vehicles were driven across different parts of the city to capture the diversity in the road layouts and different heights. It is important to note that the objects in the scene are annotated irrespective of their height as long as they are visible in the LiDAR data. This allows for better understanding of geometric layouyt of the traffic scenes.
          </h2>
        </div>
        <div class="item has-text-centered">
          <!-- Your image here -->
          <!-- <img src="static/images/interesting_03.png" alt="traffic safety"/>
          <h2 class="subtitle has-text-centered">
            This image shows an example of a traffic safety critical scenario where we can see pedestrians crossing the road in front of a vehicle. The dataset includes such scenarios which are important for developing safety critical systems. Analysis of objects in detection and tracking systems can lead to safer roads.
          </h2> -->
        </div>
        <div class="item has-text-centered">
          <!-- Your image here -->
          <!-- <img src="static/images/interesting_04.png" alt="high density"/>
          <h2 class="subtitle has-text-centered">
            We highlight high density traffic scenarios in the dataset with a higher number of objects based on distance thresholds compared to other popular datasets, especially in unstructured scenarios. The importance of using the LiDAR sensor especially is clear in this scenario where there exists heavy occlusion in the camera FoV due to the heavy traffic condition and the vehicles being in close proximity.
          </h2> -->
        </div>
      </div>
    </div>
  </div>
</section> 
<!-- End image carousel -->

<!-- Make a section for a summary of IDD-3D -->
<!-- <section class="section hero is-dark">
  <div class="container is-max-desktop">
    <div class="columns ">
      <div class="column is-four-fifths">
        <h2 class="title is-3">IDD-3D Summary</h2>
        <div class="content has-text-justified">            
            <h3 class="title is-4">Experimental Insights:</h3>
              <p>The paper presents a comprehensive analysis of the dataset using popular object detection methods like CenterPoint, SECOND, and PointPillars. The results validate the robustness and applicability of IDD-3D for developing more adaptive driving systems.</p>

              <p>IDD-3D also includes a 3D object tracking evaluation, offering valuable metrics that can be used to understand object motion and behavior in complex scenarios.</p>

              <h3 class="title is-4">Applications Beyond Autonomous Driving:</h3>
              <p>The dataset is not just limited to autonomous driving; its rich annotations and diverse scenarios make it applicable in other domains like road safety, traffic management, and surveillance.</p>

          </p>
        </div>
      </div>
    </div>
  </div>
</section> -->






<!-- Paper poster -->
<section class="hero is-small is-light">
  <div class="hero-body">
    <div class="container">
      <h2 class="title">Poster</h2>
      <iframe  src="static/pdfs/wacv24-2398.pdf" width="100%" height="550">
      </iframe>
      
    </div>
  </div>
</section>
<!--End paper poster -->


<!--BibTex citation -->
<section class="section" id="BibTeX">
  <div class="container is-max-desktop content">
    <h2 class="title">BibTeX</h2>
    <pre><code>
<!-- @InProceedings{_2024_WACV,
  author    = {Dokania, Shubham and Hafez, A. H. Abdul and Subramanian, Anbumani and Chandraker, Manmohan and Jawahar, C. V.},
  title     = {IDD-3D: Indian Driving Dataset for 3D Unstructured Road Scenes},
  booktitle = {Proceedings of the IEEE/CVF Winter Conference on Applications of Computer Vision (WACV)},
  month     = {January},
  year      = {2023},
  pages     = {4482-4491}
} -->
@inproceedings{shaik2024idd,
  title={IDD-AW: A Benchmark for Safe and Robust Segmentation of Drive Scenes in Unstructured Traffic and Adverse Weather},
  author={Shaik, Furqan Ahmed and Reddy, Abhishek and Billa, Nikhil Reddy and Chaudhary, Kunal and Manchanda, Sunny and Varma, Girish},
  booktitle={Proceedings of the IEEE/CVF Winter Conference on Applications of Computer Vision},
  pages={4614--4623},
  year={2024}
}

    </code></pre>
  </div>
</section>
<!--End BibTex citation -->


<footer class="footer">
  <div class="container">
    <div class="columns is-centered">
      <div class="column is-10">
        <div class="content">
          
          <p>
            This page was built using the <a href="https://github.com/eliahuhorwitz/Academic-project-page-template" target="_blank">Academic Project Page Template</a> which was adopted from the <a href="https://nerfies.github.io" target="_blank">Nerfies</a> project page. This website is licensed under a <a rel="license"  href="http://creativecommons.org/licenses/by-sa/4.0/" target="_blank">Creative
              Commons Attribution-ShareAlike 4.0 International License</a>.
            </p>
            
          </div>
        </div>
      </div>
    </div>
  </footer>
  
  <!-- Statcounter tracking code -->
  
  <!-- You can add a tracker to track page visits by creating an account at statcounter.com -->
  
  <!-- End of Statcounter Code -->
  
</body>
</html>
