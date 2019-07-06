import Introduction from '../components/Introduction';
import About from '../components/About';

const routes = [
  {
    path: '/',
    component: Introduction,
    exact: true,
    breadcrumbName: 'Introduction'
  },
  {
    path: '/about',
    component: About,
    breadcrumbName: 'About'
  }
  //   {
  //     path: '/electronics',
  //     component: Electronics,
  //     breadcrumbName: 'Electronics',
  //     routes: [
  //       {
  //         path: '/electronics/mobile',
  //         component: Mobile,
  //         breadcrumbName: 'Mobile Phone'
  //       },
  //       {
  //         path: '/electronics/desktop',
  //         component: Desktop,
  //         breadcrumbName: 'Desktop PC'
  //       },
  //       {
  //         path: '/electronics/laptop',
  //         component: Laptop,
  //         breadcrumbName: 'Laptop'
  //       }
  //     ]
  //   }
];

export default routes;
