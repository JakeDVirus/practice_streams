


### Install 

- react-router-dom

### PASS FOLLOWING PROPS

1- drawerAnchor: "left" || "right" || "top" || "bottom" 
2- navList (in below format)
      navList = {
          onLoggedInList: [
            {title: "title1", url: "url1"},
            {title: "title2", url: "url2"},
            {title: "title3", url: "url3"}
          ],
          onLoggedOutList: [
            {title: "title6", url: "url6"},
            {title: "title7", url: "url7"},
            {title: "title8", url: "url8"}
          ],
          authNavList: {
            //following list is for use without react router
            onLoggedInList: [
              {title: "title1", url: "url1"},
              {title: "title2", url: "url2"},
              {title: "title3", url: "url3"}
            ],
            onLoggedOutList: [
              {title: "title6", url: "url6"},
              {title: "title7", url: "url7"},
              {title: "title8", url: "url8"}
            ]
          }
      }
3- auth: true || false