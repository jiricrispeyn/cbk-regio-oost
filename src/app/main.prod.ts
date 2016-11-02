import { platformBrowser } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';
import 'rxjs/Rx'

import { AppModuleNgFactory } from './app.module.ngfactory';

enableProdMode();
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
