---
layout: page
title: IDD-AW A Benchmark for Safe and Robust Segmentation of Drive Scenes in Unstructured Traffic and Adverse Weather
description: Complete details of projects,  dataset and code will be available at [IDDAW](https://iddaw.github.io)
img: assets/img/project2/iddaw_bg.png
importance: 2
category: work
giscus_comments: true
---

Large-scale deployment of fully autonomous vehicles requires a very high degree of robustness to unstructured traffic, weather conditions, and should prevent unsafe mispredictions. While there are several datasets and benchmarks focusing on segmentation for drive scenes, they are not specifically focused on safety and robustness issues. We introduce the IDD-AW dataset, which provides 5000 pairs of high-quality images with pixel-level annotations, captured under rain, fog, low light, and snow in unstructured driving conditions. As compared to other adverse weather datasets, we provide 

- more annotated images
-  paired Near-Infrared (NIR) image for each frame
- larger label set with a 4-level label hierarchy to capture unstructured traffic conditions. 

We benchmark state-of-the-art models for semantic segmentation in IDD-AW. We also propose a new metric called" Safe mean Intersection over Union (Safe mIoU)" for hierarchical datasets which penalizes dangerous mispredictions that are not captured in the traditional definition of mean Intersection over Union (mIoU). The results show that IDD-AW is one of the most challenging datasets to date for these tasks. 



<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project2/idd_iddaw_pixel_comp1.png" title="CNN Residuals" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    We show the pixel level comparison between IDD and IDD-AW for all labels. We can see that even though IDD-AW was collected in various challenging adverse weather conditions, it still has all the classes and almost comparable to normal SOTA driving datasets

</div>