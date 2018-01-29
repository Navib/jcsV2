import React, {Component} from 'react';

import MainHero from '../../ui/components/heroModule/mainHero';
import FeedMasonry from '../../ui/components/feedModule/feedMasonry';


// This component - represents a single page
export const Home = () => <div>
  <div className="jcs-home" id="desktop-sites">
    <MainHero />
    <div className="smooth-scrolling">
    <FeedMasonry props="1"/>
    <FeedMasonry props="2"/>
    <FeedMasonry props="3"/>
    <FeedMasonry props="4"/>
  </div>
  </div>
</div>
