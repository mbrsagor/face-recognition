# udacity-meals312

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Ember basic command line
###### Crete new project and run
```
ember new demoProject
cd demoProject
ember serve or ember s
```
```base
localhost:4200
```
If you follow the command line hopefully project will create and run your local development server but 1st will be install `node.js` and `NPM` in your system.

###### Check Ember all command.
You may follow the command line `ember help` or `ember --help`

###### Ember server change port
You may follow the command line `ember server --port 9001` or `ember s -p 9001`

###### Create new route.
You may follow the command line `ember generate route doute_name` or `ember g route route_name`

###### Create nasted route.
You may follow the command line `ember generate route doute_name/child_route` or `ember g route route_name/child_route`

###### Delete route.
You may follow the command line `ember destroy route doute_name` or `ember d route route_name`

###### Create new component
You may follow the command line `ember generate component demo` or `ember g component demo`

###### Delete component.
You may follow the command line `ember destroy component demo` or `ember d component demo`

###### Create new Service
You may follow the command line `ember generate service demo_service` or `ember g service demo_service`

###### Delete Service.
You may follow the command line `ember destroy service demo_service` or `ember d service demo_service`

###### Create new Model
You may follow the command line `ember generate model book` or `ember g model book`

###### Delete Service.
You may follow the command line `ember destroy model book` or `ember d model book`

###### Create new Helper
You may follow the command line `ember generate helper demo` or `ember g helper demo`

###### Delete Helper.
You may follow the command line `ember destroy helper demo` or `ember d helper demo`

###### Create new Controller
You may follow the command line `ember generate controller demo` or `ember g controller demo`

###### Delete Controller.
You may follow the command line `ember destroy controller demo` or `ember d controller demo`

### Route and nasted route with template basic example
```javascript
Router.map(function() {
  this.route('menu', {path:'menu-list'});
  this.route('item', {path: 'item/:item_name'}, function() {
    this.route('nutration');
  });
});

```
Here, `menu` should be render in `HTML` template like `<LinkTo @route='menu'>Menu</LinkTo>` and `menu-list` will show browser below the example:
```
localhost:4200/menu-list
```

The last one example is dynamic and nasted route it's is a awesome routing system in `ember.JS`.
```zsh
localhost:4200/item/t-shart
localhost:4200/item/mobile-phone
localhost:4200/item/tv
```
Here you may pass name, id, etc I mean whatever you want. So it's a awesome for dynamic route. 
