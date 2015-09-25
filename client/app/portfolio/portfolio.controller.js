'use strict';

angular.module('yyPageApp')
  .controller('PortfolioCtrl', function ($scope) {

    $scope.examples = [
      {
        'fileName': 'Product Detail',
        'filePath': 'assets/examples/product-detail.png'
      },

      {
        'fileName': 'Application',
        'filePath': 'assets/examples/app.png'
      },
      {
        'fileName': 'Profile for Mobile',
        'filePath': 'assets/examples/profile-mobile.png'
      }, {
        'fileName': 'Checkout Page',
        'filePath': 'assets/examples/checkout.png'
      },
      {
        'fileName': 'Profile',
        'filePath': 'assets/examples/profile.png'
      },
      {
        'fileName': 'Side Menu on Mobile',
        'filePath': 'assets/examples/side-menu-on-mobile.png'
      },
      {
        'fileName': 'Shopping Cart',
        'filePath': 'assets/examples/shopping-cart.png'
      },

      {
        'fileName': 'Page with Dashboard',
        'filePath': 'assets/examples/sub-page-with-dashboard.png'
      }
    ];

    $scope.wireframeFiles = [
      {
        'fileName': 'yyPage Version #1',
        'fileType': 'pdf',
        'filePath': 'data/yy_page_v1.pdf',
        'fileThumbPath': 'data/yy_page_v1_thumb.png'
      },
      {
        'fileName': 'yyPage Version #2',
        'fileType': 'pdf',
        'filePath': 'data/yy_page_v2.pdf',
        'fileThumbPath': 'data/yy_page_v2_thumb.png'
      },
      {
        'fileName': 'Community Blog',
        'fileType': 'pdf',
        'filePath': 'data/yy_community_blog.pdf',
        'fileThumbPath': 'data/yy_community_blog_thumb.png'
      },
      {
        'fileName': 'Widget Bank Design',
        'fileType': 'video',
        'filePath': 'http://www.youtube.com/v/IAKFhjwcE_Q?rel=0',
        'fileThumbPath': 'data/usana_widgetbank_thumb.png'
      }
    ];
    $scope.setCurrentFile = function (file) {
      $scope.currentFile = file;
    };

    $scope.webComponentDemos = [
      {
        'demoName': 'AngularJS To Do List',
        'demoPath': 'views/portfolio/portfolio.todo.tpl.html',
        'demoThumbPath': 'data/yy_portfolio_todo_thumb.png'
      },
      {
        'demoName': 'Sample Widgets',
        'demoPath': 'views/portfolio/portfolio.widget.tpl.html',
        'demoThumbPath': 'data/yy_portfolio_widget_thumb.png'
      },
      {
        'demoName': 'D3 Chart (coming ...)',
        'demoPath': 'views/portfolio/portfolio.d3.tpl.html',
        'demoThumbPath': ''
      }

    ];
    $scope.setCurrentDemo = function (demo) {
      $scope.currentDemo = demo;
    };


  });
