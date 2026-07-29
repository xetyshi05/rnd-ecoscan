import { AuthLayout, DefaultLayout } from '@/app/layouts';

import VRouting from './VRouting.vue';
import { SignIn } from '@/pages/auth/sign-in';
import { RouteRecordRaw } from 'vue-router';
import SignUp from '@/pages/auth/sign-up/ui/SignUp.vue';

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '',
        component: () => import('@/pages/home'),
        name: 'Home',
      },
      {
        path: 'about',
        component: () => import('@/pages/about'),
        name: 'About',
      },
    ],
  },
  {
    path: '/auth',
    component: AuthLayout,
    children: [
      {
        path: 'sign-in',
        component: SignIn,
        name: 'SignIn',
      },
      {
        path: 'sign-up',
        component: SignUp,
        name: 'SignUp',
      }
    ]
  }
];

export { VRouting };
