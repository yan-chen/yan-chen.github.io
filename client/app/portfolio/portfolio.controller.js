'use strict';

angular.module('yyPageApp')
  .controller('PortfolioCtrl', function ($scope) {

    $scope.examples = [
      {
        'demoName': 'Product Detail',
        'demoThumbPath': 'assets/examples/product-detail.png'
      },

      {
        'demoName': 'Application',
        'demoThumbPath': 'assets/examples/app.png'
      },
      {
        'demoName': 'Profile for Mobile',
        'demoThumbPath': 'assets/examples/profile-mobile.png'
      }, {
        'demoName': 'Checkout Page',
        'demoThumbPath': 'assets/examples/checkout.png'
      },
      {
        'demoName': 'Profile',
        'demoThumbPath': 'assets/examples/profile.png'
      },
      {
        'demoName': 'Side Menu on Mobile',
        'demoThumbPath': 'assets/examples/side-menu-on-mobile.png'
      },
      {
        'demoName': 'Shopping Cart',
        'demoThumbPath': 'assets/examples/shopping-cart.png'
      },

      {
        'demoName': 'Page with Dashboard',
        'demoThumbPath': 'assets/examples/sub-page-with-dashboard.png'
      }
    ];

    $scope.wireframeFiles = [
      {
        'demoName': 'yyPage Version #1',
        'demoType': 'pdf',
        'demoPath': 'assets/examples/yy_page_v1.pdf',
        'demoThumbPath': 'data/yy_page_v1_thumb.png'
      },
      {
        'demoName': 'yyPage Version #2',
        'demoType': 'pdf',
        'demoPath': 'assets/examples/yy_page_v2.pdf',
        'demoThumbPath': 'data/yy_page_v2_thumb.png'
      },
      {
        'demoName': 'Community Blog',
        'demoType': 'pdf',
        'demoPath': 'assets/examples/yy_community_blog.pdf',
        'demoThumbPath': 'data/yy_community_blog_thumb.png'
      },
      {
        'demoName': 'Widget Bank Design',
        'demoType': 'video',
        'demoPath': 'http://www.youtube.com/v/IAKFhjwcE_Q?rel=0',
        'demoThumbPath': 'data/usana_widgetbank_thumb.png'
      }
    ];

    $scope.webComponentDemos = [
      {
        'demoName': 'AngularJS To Do List',
        'demoPath': '<div data-example-todo></div>',
        'demoThumbPath': 'assets/examples/yy_portfolio_todo_thumb.png'
      },
      {
        'demoName': 'Sample Widgets',
        'demoPath': '<div data-example-widget></div>',
        'demoThumbPath': 'assets/examples/yy_portfolio_widget_thumb.png'
      },
      {
        'demoName': 'D3 Chart (coming ...)',
        'demoPath': '',
        'demoThumbPath': ''
      }
    ];


  });
