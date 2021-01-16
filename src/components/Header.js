import React from 'react'

import AppbarWithDrawerMUI from './resuableComponents/AppbarWithDrawerMUI/index';


const navList = {
    onLoggedInList: [
      {title: "Streams", url: "/"},
      {title: "Create", url: "/streams/new"},
      // {title: "Delete", url: "/streams/delete"},
      // {title: "Edit", url: "/streams/edit"},
    ],
    onLoggedOutList: [
      {title: "Stream", url: "/"},
      // {title: "title7", url: "url7"},
      // {title: "title8", url: "url8"}
    ],
    authNavList: {
      //following list is for use without react router
      onLoggedInList: [
        // {title: "authOnLogin1", url: "url1"},
        // {title: "authOnLogin2", url: "url2"},
      ],
      onLoggedOutList: [
        {title: "authOnLogout1", url: "url1"},
        {title: "authOnLogout2", url: "url2"},
      ]
    },
    home: {title: "home", url: "/"}
}

/******************************************************
*******************************************************
                   COMPONENT STARTS
*******************************************************
*******************************************************/

const Header = () => {
  return (
    <AppbarWithDrawerMUI navList={navList}/>
  );
};

export default Header;