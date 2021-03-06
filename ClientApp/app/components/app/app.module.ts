import { NgModule } from '@angular/core';
import { UniversalModule } from 'angular2-universal';
import { FormsModule } from '@angular/forms';
import { Store, StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { GroupModule } from '../group/group.module';
import { UserModule } from '../user/user.module';
import { TeacherModule } from '../teacher/teacher.module';

import { AppComponent } from './app.component';

import reducer from '../../reducers';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
    ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        AppRoutingModule,
        FormsModule,
        GroupModule,
        UserModule,
        TeacherModule,
        StoreModule.provideStore(reducer)
    ],
    providers: []
})
export class AppModule {
}
