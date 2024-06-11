import { Routes } from '@angular/router';
import path from 'path';
import { NavbarComponent } from './pagna/navbar/navbar.component';
import { Component } from '@angular/core';
import { BodyComponent } from './pagna/body/body.component';
import { FooterComponent } from './pagna/footer/footer.component';
import { SliderComponent } from './pagna/slider/slider.component';


export const routes: Routes = [
    {
        path: 'navbar', component:NavbarComponent
    },
    {
        path: 'body', component:BodyComponent
    },
    {
        path: 'footer', component:FooterComponent
    },
    {
        path: 'slider', component:SliderComponent
    }
];

