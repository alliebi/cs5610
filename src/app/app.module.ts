import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {LoginComponent} from './views/user/login/login.component';
import {RegisterComponent} from './views/user/register/register.component';
import {ProfileComponent} from './views/user/profile/profile.component';
import {WebsiteListComponent} from './views/website/website-list/website-list.component';
import {WebsiteNewComponent} from './views/website/website-new/website-new.component';
import {WebsiteEditComponent} from './views/website/website-edit/website-edit.component';
import { PageNewComponent } from './views/page/page-new/page-new.component';
import { PageListComponent } from './views/page/page-list/page-list.component';
import { PageEditComponent } from './views/page/page-edit/page-edit.component';
import { WidgetChooserComponent } from './views/widget/widget-chooser/widget-chooser.component';
import { WidgetEditComponent } from './views/widget/widget-edit/widget-edit.component';
import { WidgetListComponent } from './views/widget/widget-list/widget-list.component';
import { UserService } from './services/user.service.client';
import { WebsiteService } from './services/website.service.client';
import { PageService } from './services/page.service.client';
import { WidgetService } from './services/widget.service.client';
import { WidgetHeadingComponent } from './views/widget/widget-edit/widget-heading/widget-heading.component';
import { WidgetImageComponent } from './views/widget/widget-edit/widget-image/widget-image.component';
import { WidgetYoutubeComponent } from './views/widget/widget-edit/widget-youtube/widget-youtube.component';
import { WidgetHtmlComponent } from './views/widget/widget-edit/widget-html/widget-html.component';
import {SafePipe} from './services/safepipe';
import { HttpClientModule } from '@angular/common/http';
import { SortableDirective } from './directives/sortable.directive';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        ProfileComponent,
        WebsiteListComponent,
        WebsiteNewComponent,
        WebsiteEditComponent,
        PageNewComponent,
        PageListComponent,
        PageEditComponent,
        WidgetChooserComponent,
        WidgetEditComponent,
        WidgetListComponent,
        WidgetHeadingComponent,
        WidgetImageComponent,
        WidgetYoutubeComponent,
        WidgetHtmlComponent,
        SafePipe,
        SortableDirective,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
    ],
    providers: [UserService, WebsiteService, PageService, WidgetService],
    bootstrap: [AppComponent]
})

export class AppModule {
}


