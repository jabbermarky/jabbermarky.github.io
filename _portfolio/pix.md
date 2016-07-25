--- 
layout: portfolio 
title: Portfolio Publisher for Photographers 
subtitle: iPixFolio
description: 
    Artist's mobile portfolio app built by Mark, Atlanta CTO who builds custom apps. Get a free consultation now!

permalink: /portfolio/ipixfolio/
styles:
    - name:     "/css/lightbox.min.css"
scripts:
    - name:     "/js/lightbox.min.js"
weight: 2010.07
tags: mobile web api

xbackground-image: "/images/domino1.png"
company-name: iPixFolio
company-description: >
    iPixFolio provided artist portfolio apps for iPhone. 
company-picture: |
    <img
            src="/images/ipix-landscape.png"
            alt="iPixFolio">
blurb:
    For iPixFolio, I developed a service that publishes an artist's portfolio as a semi-custom iPhone app. I launched several artist’s apps in the iTunes App Store. 
brief-description: |
    I developed a service that publishes an artist's portfolio as a semi-custom iPhone app. I launched several artist’s apps in the iTunes App Store. 

    The overall solution is comprised of 2 components: a web-based portfolio management application and a mobile portfolio viewing application.

    The portfolio management web application is basically a custom content management system ("CMS") that I wrote to house their virtual portfolio images and data files. It's where the artist manages their portfolio: uploading photos, organizing photos into groups/galleries, creating their artist's statement, and managing their social meeting settings. 

    The iPhone app communicates with this application using a RESTful API to pull down images and artist info to display on the iPhone.

    These screen captures show the web management application. 

    <div class="inner align-center">
        <a class="lightbox-link" href="/images/pix-web-home,full.png" data-lightbox="example-set" data-title="Portfolio Publisher Web App - Home">
            <img class="example-image" src="/images/pix-web-home,thumb.png" alt=""/>
        </a>
        <a class="lightbox-link" href="/images/pix-web-gallery,full.png" data-lightbox="example-set" data-title="Portfolio Publisher Web App - Gallery">
            <img class="example-image" src="/images/pix-web-gallery,thumb.png" alt=""/>
        </a>
    </div>

    <br/>
    The portfolio viewing application is a semi-custom iPhone application used by fans of the artist to download and view the artist's portfolio, follow their blog, read their tweets, and communicate with the artist.  
    
    This iPhone app is "semi-custom", meaning that I created one unique version per artist, using their unique identity/brand, so every one is different, but the functionality/code is the same. Each artist gets a unique application submitted to the app store under their own name.

    These screen captures show the semi-custom iPhone application. 

    <div class="inner align-center">
        <a class="lightbox-link" href="/images/pix-dw-home,full.png" data-lightbox="example-set" data-title="Portfolio Publisher iPhone App - Home">
            <img class="example-image" src="/images/pix-dw-home,thumb.png" alt=""/>
        </a>
        <a class="lightbox-link" href="/images/pix-dw-gallery-index,full.png" data-lightbox="example-set" data-title="Portfolio Publisher iPhone App - Gallery">
            <img class="example-image" src="/images/pix-dw-gallery-index,thumb.png" alt=""/>
        </a>
    </div>
    
technology-description: |
    Primary technologies for the custom web application include: Push Notification using Apple Push Notification Service (APNS), Django, Python, PostgreSQL. <br>The custom iPhone app was written in Objective-C using Xcode.


technology-logos:
    -   src:    "/images/logo-python.png" 
        alt:    "Ember Logo"
    -   src:    "/images/logo-django.gif" 
        alt:    "Ember Logo"
    -   src:    "/images/logo-postgres.gif" 
        alt:    "Postgres Logo"
    -   src:    "/images/logo-xcode.png"             
        alt:    "Xcode Logo"
---
