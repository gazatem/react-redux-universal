import App from './pages/App';
import HomePage from './containers/HomePage';
import AboutPage from './containers/AboutPage';

const routes = {
  path: '',
  component: App,
  childRoutes: [
    {
      path: '/',
      component: HomePage
    },
    {
      path: '/about',
      component: AboutPage
    }
  ]
}

export { routes };