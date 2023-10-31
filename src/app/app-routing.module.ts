import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DecadeComponent } from './components/decade/decade.component';
import { YearsComponent } from './components/years/years.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  { path: 'years', component: YearsComponent },
  { path: 'decades/:decade', component: DecadeComponent },
  {
    path: '**', // Catch-all route for 404
    component: HomeComponent,
    data: {
      title: '404',
      subtitle: 'Page not found',
      content: 'The page you are looking for does not exist.',
    },
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
