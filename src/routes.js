import App from './pages/App';
import HomePage from './containers/HomePage';

const routes = {
  path: '',
  component: App,
  childRoutes: [
    {
      path: '/',
      component: HomePage
    }
  ]
}

export { routes };