"use strict";function dataService(a){this.getData=function(b){return a({method:"GET",url:b,headers:{"Content-Type":"application/json"},cache:!0}).then(function(a){return a.data},function(a){console.log("The request failed: ",a)})}}function GalleryCtrl(a,b,c){var d=this;console.log(b.data),d.isGridView=!0,d.reverseOrder=null,d.allMyMedia=b.data,d.myAccount=c.data,d.currentUser=d.myAccount,d.currentMedia=d.allMyMedia,d.changeUser=function(b){return a.getUserId(b).then(function(b){a.getUser(b.data[0].id).then(function(b){d.currentUser=b.data,a.getUserRecentMedia(b.data.id).then(function(a){d.currentMedia=a.data,console.log(d.currentUser),console.log(d.currentMedia)})})})}}function InstagramApiServices(a,b){function c(c){return a({method:"JSONP",url:c,cache:b}).then(function(a){return a.data},function(a){console.log("failed",a.status)})}function d(){var a=l+"users/self/media/recent"+m;return c(a)}function e(a){var b=l+"users/search?q="+a+"&access_token="+k+"&callback=JSON_CALLBACK";return c(b)}function f(a){var b=l+"users/"+a+m;return c(b)}function g(a){var b=l+"users/"+a+"/media/recent"+m;return c(b)}function h(){var a=l+"users/self/feed"+m;return c(a)}function i(){var a=l+"users/self/media/liked"+m;return c(a)}function j(a){var b=l+"users/"+a+"/follows"+m;return c(b)}var k="2180465817.467ede5.b539e364139049fdb1e1637a81337a61",l="https://api.instagram.com/v1/",m="?access_token="+k+"&count=600&callback=JSON_CALLBACK";return{getMyMedia:d,getUserId:e,getUser:f,getUserRecentMedia:g,getUserFeed:h,getUserLiked:i,getUserFollows:j}}function modalService(a){function b(b,d,e){a.open({templateUrl:"components/portfolio-widget/modal-template.html",controller:c,controllerAs:"ModalCtrl",backdrop:!0,backdropClass:e,windowClass:d,resolve:{data:function(){return b}}})}function c(a,b){this.data=b,this.ok=function(){a.close()},this.cancel=function(){a.dismiss("cancel")}}var d={openModal:b};return c.$inject=["$modalInstance","data"],d}function ResumeCtrl(a,b,c,d,e){this.language="en",this.workHistory=a,this.educationHistory=c,this.combinedHistory=e,this.timelineView=!0}function NavbarCtrl(){this.menu=[{title:"About",icon:"fa fa-home",state:"about"},{title:"Portfolio",icon:"fa fa-folder-open",state:"portfolio"},{title:"Gallery",icon:"fa fa-image",state:"gallery"}],this.isAsideVisible=!1,this.toggleAsideNav=function(){this.isAsideVisible=!this.isAsideVisible,console.log(this.isAsideVisible)}}function navbar(){return{templateUrl:"components/navbar/navbar.html",restrict:"EA",controller:"NavbarCtrl"}}function portfolioWidget(){return{controller:["modalService",function(a){this.openModal=a.openModal}],controllerAs:"widgetCtrl",templateUrl:"components/portfolio-widget/portfolio-widget.html",scope:{demos:"=demos"},restrict:"EA",link:function(a,b,c){a.isImageOnly=c.imageOnly?!0:!1,a.sectionTitle=c.sectionTitle,a.setCurrentDemo=function(b){a.currentDemo=b}}}}function sliceFilter(){return function(a,b,c){return(a||[]).slice(b,c)}}angular.module("yyPageApp",["ngCookies","ngResource","ngSanitize","ui.router","ui.bootstrap","akoenig.deckgrid"]).config(["$stateProvider","$urlRouterProvider","$locationProvider","$httpProvider",function(a,b,c,d){b.when("/","/about"),b.otherwise("/about")}]),angular.module("yyPageApp").service("dataService",dataService),dataService.$inject=["$http"],angular.module("yyPageApp").controller("GalleryCtrl",GalleryCtrl),GalleryCtrl.$inject=["InstagramApiServices","myInstagramGalleries","myInstagramAccount"],angular.module("yyPageApp").config(["$stateProvider",function(a){a.state("gallery",{url:"/gallery",templateUrl:"app/gallery/gallery.html",controller:"GalleryCtrl",controllerAs:"GalleryCtrl",resolve:{myInstagramGalleries:["InstagramApiServices",function(a){return a.getMyMedia()}],myInstagramAccount:["InstagramApiServices",function(a){return a.getUser(2180465817)}]}})}]),angular.module("yyPageApp").service("InstagramApiServices",InstagramApiServices),InstagramApiServices.$inject=["$http","$templateCache"],angular.module("yyPageApp").controller("MainCtrl",["$location",function(a){}]),angular.module("yyPageApp").config(["$stateProvider",function(a){a.state("main",{url:"/main",templateUrl:"app/main/main.html",controller:"MainCtrl"})}]),angular.module("yyPageApp").service("modalService",modalService),modalService.$inject=["$modal"],angular.module("yyPageApp").controller("PortfolioCtrl",["$scope",function(a){a.examples=[{demoName:"Product Detail",demoThumbPath:"assets/examples/product-detail.png"},{demoName:"Application",demoThumbPath:"assets/examples/app.png"},{demoName:"Profile for Mobile",demoThumbPath:"assets/examples/profile-mobile.png"},{demoName:"Checkout Page",demoThumbPath:"assets/examples/checkout.png"},{demoName:"Profile",demoThumbPath:"assets/examples/profile.png"},{demoName:"Side Menu on Mobile",demoThumbPath:"assets/examples/side-menu-on-mobile.png"},{demoName:"Shopping Cart",demoThumbPath:"assets/examples/shopping-cart.png"},{demoName:"Page with Dashboard",demoThumbPath:"assets/examples/sub-page-with-dashboard.png"}],a.wireframeFiles=[{demoName:"yyPage Version #1",demoType:"pdf",demoPath:"assets/examples/yy_page_v1.pdf",demoThumbPath:"data/yy_page_v1_thumb.png"},{demoName:"yyPage Version #2",demoType:"pdf",demoPath:"assets/examples/yy_page_v2.pdf",demoThumbPath:"data/yy_page_v2_thumb.png"},{demoName:"Community Blog",demoType:"pdf",demoPath:"assets/examples/yy_community_blog.pdf",demoThumbPath:"data/yy_community_blog_thumb.png"},{demoName:"Widget Bank Design",demoType:"video",demoPath:"http://www.youtube.com/v/IAKFhjwcE_Q?rel=0",demoThumbPath:"data/usana_widgetbank_thumb.png"}],a.webComponentDemos=[{demoName:"AngularJS To Do List",demoPath:"<div data-example-todo></div>",demoThumbPath:"assets/examples/yy_portfolio_todo_thumb.png"},{demoName:"Sample Widgets",demoPath:"<div data-example-widget></div>",demoThumbPath:"assets/examples/yy_portfolio_widget_thumb.png"},{demoName:"D3 Chart (coming ...)",demoPath:"",demoThumbPath:""}]}]),angular.module("yyPageApp").config(["$stateProvider",function(a){a.state("portfolio",{url:"/portfolio",templateUrl:"app/portfolio/portfolio.html",controller:"PortfolioCtrl"})}]),angular.module("yyPageApp").controller("ResumeCtrl",ResumeCtrl),ResumeCtrl.$inject=["PromisedWorkHistoryEN","PromisedWorkHistoryCH","PromisedEducationHistoryEN","PromisedEducationHistoryCH","PromisedCombinedHistoryEN"],angular.module("yyPageApp").config(["$stateProvider",function(a){a.state("about",{url:"/about",templateUrl:"app/resume/resume.html",controller:"ResumeCtrl as ResumeCtrl",resolve:{PromisedWorkHistoryEN:["dataService",function(a){return a.getData("assets/data/work_history_en.json")}],PromisedWorkHistoryCH:["dataService",function(a){return a.getData("assets/data/work_history_ch.json")}],PromisedEducationHistoryEN:["dataService",function(a){return a.getData("assets/data/education_history_en.json")}],PromisedEducationHistoryCH:["dataService",function(a){return a.getData("assets/data/education_history_ch.json")}],PromisedCombinedHistoryEN:["dataService",function(a){return a.getData("assets/data/combined_history_en.json")}]}})}]),angular.module("yyPageApp").directive("exampleTodo",function(){return{templateUrl:"components/todo-example/todo-example.html",restrict:"EA",controller:["localStorageService",function(a){$scope.toDoTabs=[{title:"Current List",content:"todoCurrentList.tpl.html"},{title:"Archived List",content:"todoArchivedList.tpl.html"}];var b=function(){var b,c;return null!==a.get("yyPage-portfolio-todo-example-list")?(b=a.get("yyPage-portfolio-todo-example-list"),c=function(){var a=[];return angular.forEach(b,function(b){b.isDone&&a.unshift(b)}),a}):(b=[{description:"Need to call ...",isDone:!1},{description:"Need to buy ...",isDone:!1}],c=[]),[b,c]};$scope.toDoList=b()[0],$scope.tempArchiveList=b()[1],null!==a.get("yyPage-portfolio-archived-list")?$scope.archivedList=a.get("yyPage-portfolio-archived-list"):$scope.archivedList=[],$scope.todo={},$scope.addToList=function(a){$scope.toDoList.unshift({description:a.description,isDone:!1}),$scope.todo={}},$scope.addToTempArchiveList=function(a){-1===$scope.tempArchiveList.indexOf(a)?$scope.tempArchiveList.unshift(a):$scope.tempArchiveList.remove(a)},$scope.selectAll=function(){$scope.tempArchiveList=angular.copy($scope.toDoList)},$scope.unselectAll=function(){$scope.tempArchiveList=[]},$scope.archiveTodo=function(){var a=[];angular.forEach($scope.toDoList,function(b){b.isDone?$scope.archivedList.unshift(b):a.unshift(b)}),$scope.toDoList=a},$scope.saveToDoLocally=function(){a.set("yyPage-portfolio-todo-example-list",$scope.toDoList),a.set("yyPage-portfolio-archived-list",$scope.archivedList)},$scope.clearLocalToDo=function(){a.remove("yyPage-portfolio-todo-example-list"),a.remove("yyPage-portfolio-archived-list"),$scope.toDoList=[{description:"Need to call ...",isDone:!1},{description:"Need to buy ...",isDone:!1}],$scope.tempArchiveList=[],$scope.archivedList=[]},$scope.removeFromList=function(a,b){a.splice(b,1)}}],link:function(a,b,c){}}}),angular.module("yyPageApp").directive("exampleWidget",function(){return{templateUrl:"components/example-widget/example-widget.html",restrict:"EA",link:function(a,b,c){}}}),angular.module("yyPageApp").directive("footer",function(){return{templateUrl:"components/footer/footer.html",restrict:"E",link:function(a,b){b.addClass("footer")}}}),angular.module("yyPageApp").directive("instagramGalleryTemplateList",function(){return{templateUrl:"components/instagram-gallery-template-list/instagram-gallery-template-list.html",scope:{galleries:"=galleries",isReverse:"=isReverse"},restrict:"EA",link:function(a,b,c){}}}),angular.module("yyPageApp").directive("instagramGalleryTemplate",function(){return{templateUrl:"components/instagram-gallery-template/instagram-gallery-template.html",scope:{galleries:"=galleries",isReverse:"=isReverse"},restrict:"EA",link:function(a,b,c){}}}),angular.module("yyPageApp").controller("NavbarCtrl",NavbarCtrl),NavbarCtrl.$inject=[],angular.module("yyPageApp").directive("navbar",navbar),navbar.$inject=[],angular.module("yyPageApp").directive("navside",function(){return{templateUrl:"components/navside/navside.html",restrict:"EA",controller:"NavbarCtrl",controllerAs:"NavCtrl",link:function(a,b,c){}}}),angular.module("yyPageApp").directive("portfolioWidget",portfolioWidget),portfolioWidget.$inject=[],angular.module("yyPageApp").directive("resumePanel",function(){return{templateUrl:"components/resume-panel/resume-panel.html",restrict:"EA",link:function(a,b,c){}}}),angular.module("yyPageApp").directive("resumeTimeline",function(){return{templateUrl:"components/resume-timeline/resume-timeline.html",scope:{items:"=items"},restrict:"EA",link:function(a,b,c){}}}),angular.module("yyPageApp").filter("sliceFilter",sliceFilter),angular.module("yyPageApp").directive("todo",function(){}),angular.module("yyPageApp").run(["$templateCache",function(a){a.put("app/gallery/gallery.html",'<div class=gallery-container-fade></div><div class="yy-container gallery-container"><div class="gallery-introduction text-left"><h3><!--<a href="http://instagram.com/mynameisyan?ref=badge" class="ig-b- ig-b-32">--><!--<img src="//badges.instagram.com/static/images/ig-badge-32.png" alt="Instagram"/>--><!--</a>--><img ng-src={{GalleryCtrl.myAccount.profile_picture}} alt=@mynameisyan class="gallery-instagram-user-thumb img-circle"> <a href=http://www.instagram.com/mynameisyan>{{GalleryCtrl.myAccount.username}}</a></h3><div><h4 class=gallery-description>Photos help me with better remembering the places I\'ve been to and experiences I\'ve had.</h4></div><!--<h6>*Images are pulled from my Instagram account.</h6>--></div><div class=user-search-container><div class="row margin-0"><div class=title>Current gallery from user:&nbsp;&nbsp;&nbsp; <img ng-src={{GalleryCtrl.currentUser.profile_picture}} alt=user class="gallery-instagram-user-thumb-sm img-circle"> <a href=http://www.instagram.com/{{GalleryCtrl.currentUser.username}}>{{GalleryCtrl.currentUser.username}}</a> (<span class=text-xs>ID: {{GalleryCtrl.currentUser.id}}</span>)</div><div class="padding-15-lr text-xs"><h6>*This is an example to show the searching functionality of Instagram\'s API.<br>*Images belong to Instagram user shown below.</h6></div><div class=text-right><!-- input-group --><span class="input-group search-box full-width"><input class="input-lg form-control" placeholder="Enter Instagram user name" ng-model=username> <span ng-click=GalleryCtrl.changeUser(username)><i class="fa fa-search"></i></span></span><!-- /input-group --></div></div></div><!--<div class="col-lg-3 col-xs-3">{{GalleryCtrl.currentUser.counts.media}} Posts</div>--><!--<div class="col-lg-3 col-xs-3">{{GalleryCtrl.currentUser.counts.followed_by}} Followers</div>--><!--<div class="col-lg-3 col-xs-3">{{GalleryCtrl.currentUser.counts.follows}} Follows</div>--><div class="yy-toolbar clearfix"><div class="tool-icon float-left" ng-click="GalleryCtrl.reverseOrder=null" ng-class="{\'active\':GalleryCtrl.reverseOrder===null}"><i class="fa fa-calendar-plus-o"></i></div><div class="tool-icon float-left" ng-click="GalleryCtrl.reverseOrder=\'-\'" ng-class="{\'active\':GalleryCtrl.reverseOrder===\'-\'}"><i class="fa fa-calendar-minus-o"></i></div><div class="tool-icon float-right" ng-click="GalleryCtrl.isGridView=false" ng-class="{\'active\':GalleryCtrl.isGridView===false}"><i class="fa fa-th-list"></i></div><div class="tool-icon float-right" ng-click="GalleryCtrl.isGridView=true" ng-class="{\'active\':GalleryCtrl.isGridView===true}"><i class="fa fa-th"></i></div></div><div ng-if=GalleryCtrl.isGridView instagram-gallery-template="" data-galleries=GalleryCtrl.currentMedia data-is-reverse=GalleryCtrl.reverseOrder></div><div ng-if=!GalleryCtrl.isGridView instagram-gallery-template-list="" data-galleries=GalleryCtrl.currentMedia data-is-reverse=GalleryCtrl.reverseOrder></div><!--<div id="instafeed"></div>--></div>'),a.put("app/main/main.html",""),a.put("app/portfolio/portfolio.html",'<div class="yy-container portfolio-container"><div class=portfolio-greeting><h4>Thank you for checking out my portfolio page!</h4></div><div class=portfolio-examples-container><div portfolio-widget="" data-demos=webComponentDemos data-section-title="Web Components Examples"></div><div portfolio-widget="" data-demos=examples data-section-title="Mockups Examples" data-image-only></div><!---------------------------------- mockup Section Deckgrid--------------------------------><!--<div class="row">--><!--<div class="mockup-example-container">--><!--<div deckgrid source="examples" class="deckgrid">--><!--<div class="example-wrapper">--><!--<h3 class="example-image-caption text-left">--><!--{{card.fileName}}--><!--</h3>--><!--<div class="mockup-example-image">--><!--<img class="example-image" src="{{card.filePath}}" alt=""/>--><!--</div>--><!--</div>--><!--</div>--><!--</div>--><!--</div>--><!---------------------------------- END mockup Section --------------------------------></div></div>'),a.put("app/resume/resume.html",'<div class="yy-container about-me-container"><div class=yy-name-card><div class=yy-name-text>Yan Chen</div><h5><i>Salt Lake City, UT</i></h5><div class=yy-name-card-titles><div>UI Developer / UX Designer</div><div>Front End Web Developer</div><div>Freenlancer</div></div><div class="btn-group media-icon-group"><a href="http://www.linkedin.com/in/yanjchen/"><i class="fa fa-linkedin-square fa-2x"></i></a> <a href=https://www.facebook.com/yan.chen.376695><i class="fa fa-facebook-square fa-2x"></i></a> <a href=https://instagram.com/mynameisyan><i class="fa fa-instagram fa-2x"></i></a> <a href=mailto:ychen.0931@gmail.com><i class="fa fa-envelope-square fa-2x"></i></a></div></div></div><div class="yy-container resume-container"><div class="yy-toolbar clearfix"><div class="tool-icon float-right" ng-click="ResumeCtrl.timelineView=false" ng-class="{\'active\':ResumeCtrl.timelineView===false}"><i class="glyphicon glyphicon-tasks"></i></div><div class="tool-icon float-right" ng-click="ResumeCtrl.timelineView=true" ng-class="{\'active\':ResumeCtrl.timelineView===true}"><i class="glyphicon glyphicon-time"></i></div></div><div ng-if=ResumeCtrl.timelineView class=timeline-view><div class=yy-info-container><div class=yy-info-details><div class=yy-info-title>My Summary of Skills ...</div><p><strong><i>UI/UX & Web:</i></strong> &nbsp;&nbsp;HTML, CSS, Stylus, JavaScript, AngularJS, JSON, Bootstrap, Responsive Web Design, Wireframe, Prototype</p><p><strong><i>Database:</i></strong> &nbsp;&nbsp;SQL, MySQL, VBA, Microsoft Access</p><p><strong><i>Tools:</i></strong> &nbsp;&nbsp;Git, WebStorm, Sketch, Illustrator, Microsoft Office Suite, Agile</p></div></div><div resume-timeline data-items=ResumeCtrl.combinedHistory></div></div><div ng-if=!ResumeCtrl.timelineView><div resume-panel></div></div></div><footer></footer>'),a.put("components/example-todo/example-todo.html",'<div id=portfolio-todo-panel><tabset class=todo-tabset><tab ng-repeat="tab in toDoTabs" heading={{tab.title}} class=todo-tab><div ng-include=tab.content class=todo-tab-content></div></tab></tabset><script type=text/ng-template id=todoCurrentList.tpl.html><form class="form-horizontal" role="form" name="yyToDoForm">\n      <div class="form-group">\n\n        <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10">\n          <input class="form-control" type="text" ng-model="todo.description" required\n                 placeholder="Add to the ToDo list ..."/>\n        </div>\n        <button class="btn btn-primary col-xs-2 col-sm-2 col-md-2 col-lg-2" ng-click="addToList(todo)"\n                ng-disabled="yyToDoForm.$invalid">Add\n        </button>\n      </div>\n    </form>\n    <ul class="todo-list">\n      <li ng-repeat="toDo in toDoList track by $index|limitTo:5" class="row">\n        <div class="col-xs-1 col-ofcol-sm-1 col-md-1 col-lg-1 col-todo-checkbox">\n          <input type="checkbox" class="todo-checkbox" ng-model="toDo.isDone"\n                 ng-click="addToTempArchiveList(toDo)"/>\n        </div>\n        <span ng-class="{\'strike-text\':toDo.isDone}" class="col-xs-9 col-sm-9 col-md-9 col-lg-9 todo-text">{{toDo.description}}</span>\n                    <span class="col-xs-1 col-sm-1 col-md-1 col-lg-1 yy-text-default pointer-cursor"\n                          ng-click="removeFromList(toDoList,$index)">X</span>\n\n      </li>\n    </ul>\n    <span class="pull-right">\n        <button class="btn btn-primary" ng-click="archiveTodo()" ng-disabled="tempArchiveList.length===0">\n          Archive Completed Tasks\n        </button>\n\n        <button class="btn btn-primary hidden-xs" ng-click="saveToDoLocally()">\n          Save Changes Locally\n        </button>\n        <button class="btn btn-danger hidden-xs" ng-click="clearLocalToDo()">\n          Clear All (Reset)\n        </button>\n        </span></script><script type=text/ng-template id=todoArchivedList.tpl.html><ul class="todo-list archived-list">\n      <li ng-repeat="toDo in archivedList track by $index|limitTo:5" class="row">\n        <div class="col-xs-1 col-sm-1 col-md-1 col-lg-1">\n          <input type="checkbox" class="todo-checkbox" ng-model="toDo.isDone" disabled/>\n        </div>\n        <span ng-class="{\'strike-text\':toDo.isDone}" class="col-xs-10 col-sm-10 col-md-10 col-lg-10">{{toDo.description}}</span>\n                    <span class="col-xs-1 col-sm-1 col-md-1 col-lg-1 yy-text-default pointer-cursor"\n                          ng-click="removeFromList(archivedList,$index)">X</span>\n\n      </li>\n    </ul></script></div>'),a.put("components/example-widget/example-widget.html",'<div><h4>Select to change widget theme:</h4><div style="margin:20px 0"><button class="btn btn-primary widget-color-theme-option" ng-click="setColorTheme(\'primary\')"></button> <button class="btn btn-success widget-color-theme-option" ng-click="setColorTheme(\'success\')"></button> <button class="btn btn-info widget-color-theme-option" ng-click="setColorTheme(\'info\')"></button> <button class="btn btn-warning widget-color-theme-option" ng-click="setColorTheme(\'warning\')"></button> <button class="btn btn-danger widget-color-theme-option" ng-click="setColorTheme(\'danger\')"></button> <button class="btn yy-btn-dark widget-color-theme-option" ng-click="setColorTheme(\'dark\')"></button></div><div class=row><div class="col-xs-12 col-sm-6"><div class="widget-wrapper panel no-border"><div class=panel-heading ng-style="{\'background-color\':hexToRgba(currentWidgetTheme,\'.3\')}" style=padding:15px;font-size:20px;color:#767676>Calendar Widget</div><div class="panel-body no-padding" style="height: 241px"><div class=ao-widget><div class=ao-date><div class=col-xs-3><span class="glyphicon glyphicon-calendar"></span></div><div class=col-xs-9><p class=ao-text-date>Today is</p><p>{{today | date:\'MMM dd\'}}</p></div></div><div class=ao-greeting ng-style="{\'background-color\':\'#\'+currentWidgetTheme}">Good <span class=ao-greeting-msg>{{greeting(today)}}</span></div></div></div></div></div><div class="col-xs-12 col-sm-6"><div class="widget-wrapper panel no-border"><div class=panel-heading ng-style="{\'background-color\':hexToRgba(currentWidgetTheme,\'.3\')}" style=padding:15px;font-size:20px;color:#767676>Pace Setter</div><div class="panel-body no-padding"><div class=pp-widget style=background-color:#ffffff><div class="col-xs-4 pp-widget-date" ng-style="{\'background-color\':\'#\'+currentWidgetTheme}"><div class=pp-days-bg-blocks data-num={{ppTestData.daysCount}}><span class=background-lb><hr class="pp-days-bg-hr"></span> <span class=background-rb><hr class="pp-days-bg-hr"></span></div><h2>days</h2><h2>left</h2></div><div class="col-xs-8 pp-widget-right"><div class=pp-widget-associate>Current Numbers<div class=pp-widget-associate-svg data-num={{ppTestData.associateCount}}><svg height=100 width=100><circle cx=50 cy=50 r=40 stroke-width=3 fill="#{{currentWidgetTheme}}"></svg></div></div><div class=pp-widget-cvp ng-style="{\'background-color\':hexToRgba(currentWidgetTheme,\'.3\')}">CVP <span class=pp-widget-cvp-number>{{ppTestData.cvpCount}}</span></div></div></div></div></div></div></div><h4>Change input data for Pace Setter widget:</h4><form class=form-horizontal role=form><div class="form-group row" style="margin:20px 0"><span class=col-sm-4><label>Days left:</label><input ng-maxlength=2 class=form-control maxlength=2 ng-model=ppTestData.daysCount ng-blur="validateDateCount(ppTestData.daysCount)"></span> <span class=col-sm-4><label># of associates:</label><input class=form-control maxlength=1 ng-model="ppTestData.associateCount"></span> <span class=col-sm-4><label>CVP Count:</label><input class=form-control maxlength=3 ng-model="ppTestData.cvpCount"></span></div></form></div>'),a.put("components/footer/footer.html",'<div><span class="glyphicon glyphicon-heart"></span> Thank you for visiting my page ! <span class="power-by-icon-set float-right hidden-xs">Power by: <span><a href=""><img src=assets/images/icons/html5.png alt="" height="20px"></a></span> <span><a href=""><img src=assets/images/icons/css3.gif alt="" height="25px"></a></span> <span><a href=""><img src=assets/images/icons/angular.png alt="" height="20px"></a></span> <span><a href=""><img src=assets/images/icons/grunt.png alt="" height="28px"></a></span><!--<span  ng-controller="loginCtrl" class="btn btn-default admin-login-btn hidden-xs" ng-click="openLoginModal()">Admin</span>--></span></div>'),a.put("components/instagram-gallery-template-list/instagram-gallery-template-list.html",'<div class="row gallery-row"><div ng-repeat-start="gallery in galleries|orderBy:isReverse  track by $index" class="col-lg-12 gallery-list-row-container"><div class=gallery-list-row><div class=row><div class="gallery-list-image col-lg-6 col-md-6 col-sm-6 com-xs-8"><a href={{gallery.link}} target=_blank data-toggle=tooltip data-placement=right title={{gallery.images.standard_resolution.url}}><img src={{gallery.images.standard_resolution.url}} class="full-width"></a></div><div class="gallery-list-caption col-lg-6 col-md-6 col-sm-6 com-xs-6"><span class="float-right gallery-index">#{{$index}}</span><h4><a href="https://instagram.com/explore/locations/{{gallery.location.id}}/">{{gallery.location.name}}</a></h4><h5 ng-if="gallery.location===null">Location Unspecified</h5><!--https://instagram.com/explore/tags/--><p><i class="glyphicon glyphicon-heart-empty text-red"></i> {{gallery.likes.count}} {{parseInt(gallery.created_time)}} <span class="float-right gallery-date">{{gallery.created_time*1000| date:\'MMM dd, yyyy\'}}</span></p><hr><p class=gallery-image-caption>{{gallery.caption.text}}</p><div ng-repeat="comment in gallery.comments.data track by $index"><div class=gallery-image-comment><a href=https://instagram.com/{{comment.from.username}}><img src={{comment.from.profile_picture}} class="img-circle"> <strong>{{comment.from.username}}</strong></a> &nbsp;&nbsp;&nbsp;{{comment.text}}</div></div></div></div></div></div><div ng-repeat-end=""></div></div>'),a.put("components/instagram-gallery-template/instagram-gallery-template.html",'<!--<div class="row">--><!--<div class="gallery-container">--><!--<div deckgrid source="GalleryCtrl.allMyMedia" class="deckgrid">--><!--<div class="gallery-image-wrapper">--><!--<img class="gallery-image full-width" src="{{card.images.low_resolution.url}}" alt=""/>--><!--<div>{{card.location.name}}&nbsp;<br/>--><!--<p><i class="fa fa-heart-o text-red"></i> {{card.likes.count}}</p></div>--><!--</div>--><!--</div>--><!--</div>--><!--</div>--><div ng-repeat-start="gallery in galleries |orderBy:isReverse track by $index" class="gallery-thumb-box col-xs-4 col-sm-4 col-md-3 col-lg-3"><div class=gallery-thumb-container ng-click="viewDetails=!viewDetails"><img src={{gallery.images.thumbnail.url}} class="full-width"></div><div class=gallery-thumb-caption>{{gallery.location.name}}&nbsp;<br><p><i class="glyphicon glyphicon-heart-empty text-red"></i> {{gallery.likes.count}}</p></div></div><!--<div ng-if="viewDetails" class="clearfix" style="border:solid red 2px; height:30rem;">--><!--<img src="{{gallery.images.standard_resolution.url}}" class="full-width"/>--><!--</div>--><div ng-repeat-end=""></div>'),a.put("components/navbar/navbar.html",'<div class="navbar navbar-default navbar-static-top yy-nav margin-0" ng-class="{\'isAsideOpen\':NavCtrl.isAsideVisible}"><div class=nav-fade><div class=nav-container><div class=navbar-header><button class=navbar-toggle type=button ng-click=NavCtrl.toggleAsideNav()><span class=sr-only>Toggle navigation</span> <span class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span></button> <a href="/" class=navbar-brand><img class=logo src=assets/images/yan_thumb.jpg alt=""></a></div><div class="navbar-collapse collapse" id=navbar-main><ul class="nav navbar-nav yy-nav-menu"><li ng-repeat-start="item in NavCtrl.menu track by $index" ui-sref-active=active><a ui-sref={{item.state}}><i class={{item.icon}}></i> {{item.title}}</a></li><li ng-if="$index!=2"><a>|</a></li><!--<li ng-controller="ResumeCtrl as ResumeCtrl" ng-if="ResumeCtrl.language===\'ch\'"--><!--ng-click="ResumeCtrl.changeLang(\'en\')">--><!--<a>--><!--<img class="icon-lang" src="http://rowetechinc.com/wp-content/uploads/2013/03/us.jpg"/> English</a>--><!--</li>--><!--<li ng-controller="ResumeCtrl as ResumeCtrl" ng-if="ResumeCtrl.language===\'en\'"--><!--ng-click="ResumeCtrl.changeLang(\'ch\')">--><!--<a>--><!--<img class="icon-lang"--><!--src="http://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People\'s_Republic_of_China.svg/1500px-Flag_of_the_People\'s_Republic_of_China.svg.png"/>--><!--中文</a>--><!--</li>--><li ng-repeat-end=""></li></ul></div></div></div></div>'),a.put("components/navside/navside.html",'<div ng-if=NavCtrl.isAsideVisible class=animate-if><div class="aside yy-navbar-aside" tabindex=-1 role=dialog><div class=aside-dialog><div class=aside-content><div class=aside-body collapse=NavCtrl.isAsideVisible><ul class="nav nav-list nav-stacked"><li ng-repeat="item in NavCtrl.menu" ui-sref-active=active ng-click=NavCtrl.toggleAsideNav()><a ui-sref={{item.state}}><i class={{item.icon}}></i> {{item.title}}</a></li></ul></div></div></div></div></div>'),a.put("components/portfolio-widget/modal-template.html",'<!-- Demo Modal --><div class=modal-header><i class="glyphicon glyphicon-remove float-right" ng-click=ModalCtrl.cancel()></i><h3 ng-if=ModalCtrl.data.demoPath class=modal-title>Demo for {{ModalCtrl.data.demoName}}</h3><h3 ng-if="ModalCtrl.data.demoPath===undefined" class=modal-title>Mockup for {{ModalCtrl.data.demoName}}</h3></div><div class=modal-body><div ng-if=ModalCtrl.data.demoPath data-ng-bind-html-unsafe="\'<button></button>\'" class=modal-body-inner></div><div ng-if=!ModalCtrl.data.demoPath class=modal-body-inner><img ng-src={{ModalCtrl.data.demoThumbPath}} alt=""></div></div><!---------------------------------- END Demo Section -------------------------------->'),a.put("components/portfolio-widget/portfolio-widget-image.html",'<img src="" alt="">'),a.put("components/portfolio-widget/portfolio-widget.html",'<!---------------------------------- Demo Section --------------------------------><div class="row relative"><h4 class=yy-text-default>{{sectionTitle}}</h4><hr class="title-separator-bold"><div class="row portfolio-widget-container-row"><div class="col-lg-3 col-md-4 col-sm-6 col-xs-9 portfolio-widget-container" ng-repeat="demo in demos"><div class="panel yy-panel-box-dark portfolio-panel"><div class=panel-heading><div class=panel-title>{{demo.demoName}}</div></div><div class="panel-body no-padding"><div ng-if=!isTouchDevice class=portfolio-widget ng-style="{\'background-image\':\'url({{demo.demoThumbPath}})\'}"><div class=portfolio-widget-overlay><div class="btn btn-default portfolio-widget-overlay-btn" ng-click="widgetCtrl.openModal(demo,\'portfolio-demo-modal\')">View</div></div></div><div ng-if=isTouchDevice class=portfolio-widget-overlay-touch-device ng-style="{\'background-image\':\'url({{demo.demoThumbPath}})\'}"><div class=portfolio-widget-overlay><div class="btn btn-default portfolio-widget-overlay-btn" ng-click=widgetCtrl.openModal(demo)>View</div></div></div></div></div></div></div></div>'),a.put("components/resume-panel/resume-panel.html",'<div class=resume-panel><div class=yy-info-container ng-if="ResumeCtrl.language===\'en\'"><div class=yy-info-container-title><h4>My Summary of Skills ...</h4></div><hr class="title-separator-bold"><div class=row><div class="col-md-3 col-sm-3 yy-info-sub-title"><p><strong>UI/UX & Web:</strong></p></div><div class="clo-md-9 col-sm-9"><p>HTML, CSS, Stylus, JavaScript, AngularJS, JSON, Bootstrap, Responsive Web Design, Wireframe, Prototype</p></div></div><div class=row><div class="col-md-3 col-sm-3 yy-info-sub-title"><p><strong>Database:</strong></p></div><div class="clo-md-9 col-sm-9"><p>SQL, MySQL, VBA, Microsoft Access</p></div></div><div class=row><div class="col-md-3 col-sm-3 yy-info-sub-title"><p><strong>Tools:</strong></p></div><div class="clo-md-9 col-sm-9"><p>Git, WebStorm, Sketch, Illustrator, Microsoft Office Suite, Agile</p></div></div></div><div class=yy-info-container ng-if="ResumeCtrl.language===\'ch\'"><div class=yy-info-container-title><h4>我的职业 ...</h4></div><hr class="title-separator-bold"><div class=row><div class="col-md-3 col-sm-3 yy-info-sub-title"><p><strong>用户界面/用户经验和网页的设计与开发:</strong></p></div><div class="clo-md-9 col-sm-9"><p>HTML, CSS, Stylus, JavaScript, AngularJS, JSON, Bootstrap, Responsive Web Design, Wireframe, Prototype</p></div></div><div class=row><div class="col-md-3 col-sm-3 yy-info-sub-title"><p><strong>数据库管理:</strong></p></div><div class="clo-md-9 col-sm-9"><p>SQL, MySQL, VBA, Microsoft Access</p></div></div><div class=row><div class="col-md-3 col-sm-3 yy-info-sub-title"><p><strong>工具:</strong></p></div><div class="clo-md-9 col-sm-9"><p>Git, WebStorm, Sketch, Illustrator, Microsoft Office Suite, Agile</p></div></div></div><!--   /////////////////////////////////////   --><div class=yy-info-container><div class=yy-info-container-title><h4 ng-if="ResumeCtrl.language===\'en\'">My Education ...</h4><h4 ng-if="ResumeCtrl.language===\'ch\'">我的学历 ...</h4></div><hr class="title-separator-bold"><div ng-repeat="education in ResumeCtrl.educationHistory track by $index"><div class=row><div class="col-md-2 col-sm-2"><a href={{::education.schoolUrl}}><img class=work-logo-thumb ng-src={{::education.schoolLogo}} alt="{{::education.school}}"></a></div><div class="col-md-10 col-sm-10"><h5><strong>{{::education.major}}</strong>, {{::education.level}} ( {{::education.startYear}} - {{::education.endYear}} )</h5><ul><li ng-repeat="description in education.description track by $index">{{::description}}</li></ul></div></div><hr></div></div><!--   /////////////////////////////////////   --><div class=yy-info-container><div class=yy-info-container-title><h4 ng-if="ResumeCtrl.language===\'en\'">My current work ...</h4><h4 ng-if="ResumeCtrl.language===\'ch\'">我现在的工作 ...</h4></div><hr class="title-separator-bold"><div class=row><div class="col-md-2 col-sm-2"><a href=http://www.usana.com><img class=work-logo-thumb src=https://lh6.googleusercontent.com/-Ir2BZXfhr-0/AAAAAAAAAAI/AAAAAAAAAO0/J_aRmm9Ggi4/photo.jpg alt=usana></a></div><div class="col-md-10 col-sm-10"><h5><strong>{{::ResumeCtrl.workHistory[0].title}}</strong> ( {{::ResumeCtrl.workHistory[0].startYear}} - {{::ResumeCtrl.workHistory[0].endYear}} )</h5><ul><li ng-repeat="description in ResumeCtrl.workHistory[0].description track by $index">{{::description}}</li></ul></div></div></div><div class="yy-info-container previous-info"><div class=yy-info-container-title><h4 ng-if="ResumeCtrl.language===\'en\'">My previous experience ...</h4><h4 ng-if="ResumeCtrl.language===\'ch\'">我之前的工作经验 ...</h4></div><hr class="title-separator-bold"><div ng-repeat="work in ResumeCtrl.workHistory | sliceFilter:1"><div class=row><div class="col-md-2 col-sm-2"><a href={{::work.companyUrl}}><img class=work-logo-thumb ng-src={{::work.companyLogo}} alt={{::work.company}} data-yy-qtip data-qtip-content="<a href=\'{{::work.companyUrl}}\' target=\'_blank\'>{{::work.company}}</a>" data-qtip-class="work-info-qtip qtip-tipsy"></a></div><div class="col-md-10 col-sm-10"><h5><strong>{{::work.title}}</strong> ( {{::work.startYear}} - {{::work.endYear}} )</h5><ul><li ng-repeat="description in work.description track by $index">{{::description}}</li></ul></div></div><hr></div></div></div>'),
a.put("components/resume-timeline/resume-timeline.html",'<div class="row margin-0 full-width hidden-xs" ng-repeat="item in items"><div class=yy-timeline-box ng-class-odd="\'left\'" ng-class-even="\'right\'"><div class=yy-timeline-box-inner><div class=yy-timeline-image-container><a href={{item.companyUrl}}><img class=full-width src={{item.companyLogo}} alt=""></a></div><div class=yy-timeline-date>{{item.endMonth? item.endMonth + \',\' :\'\'}} {{item.endYear}}<div class=yy-timeline-title ng-if=item.level><i class="fa fa-graduation-cap"></i></div></div><div class=yy-timeline-content><div class=yy-timeline-title>{{item.title}}</div><div class=yy-timeline-title ng-if=item.level><i class="glyphicon glyphicon-education text-black"></i> <i class=text-1x>{{item.level}}</i></div><div class=yy-timeline-location>{{item.location}}</div><li ng-repeat="description in item.description track by $index">{{::description}}</li></div></div></div></div><div class="row margin-0 full-width visible-xs" ng-repeat="item in items"><div class="yy-timeline-box right"><div class=yy-timeline-box-inner><div class=yy-timeline-image-container><a href={{item.companyUrl}}><img class=full-width src={{item.companyLogo}} alt=""></a><div class=yy-timeline-title ng-if=item.level><i class="fa fa-graduation-cap"></i></div></div><span>{{item.startYear}} - {{item.endYear}}</span><div class=yy-timeline-content><div class=yy-timeline-title>{{item.title}}</div><div class=yy-timeline-title ng-if=item.level><i class="glyphicon glyphicon-education text-black"></i> <i class=text-1x>{{item.level}}</i></div><div class=yy-timeline-location>{{item.location}}</div><li ng-repeat="description in item.description track by $index">{{::description}}</li></div></div></div></div>'),a.put("components/todo-example/todo.html","")}]);