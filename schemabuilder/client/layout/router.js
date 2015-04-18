Router.configure({
  layoutTemplate:'layout'
});

Router.map(function(){
  this.route('home',{path:'/'});
  this.route('about',{path:'/about'});
  this.route('builder',{path:'/builder'});
  this.route('calendar',{path:'/calendar'})
})
