import Route from '../src/Routing/Route';

Route.resource('/api/posts', 'api/posts');
Route.resource('/api/users', 'api/users');
Route.resource('/api/threads', 'api/threads');



// Route.get('/test123', 'Controller@action');