import React from 'react';
import HeaderBar from '../HeaderBar';
import BrowseTree from '../BrowseTree';
import FooterBar from '../FooterBar';

const MainContainer = () => (
  <div className="main-container">
    <HeaderBar />
    <BrowseTree />
    <FooterBar />
  </div>
);

export default MainContainer;
