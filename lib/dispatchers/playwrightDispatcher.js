"use strict";
/**
 * Copyright (c) Microsoft Corporation.
 *
 * Licensed under the Apache License, Version 2.0 (the 'License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaywrightDispatcher = void 0;
const browserTypeDispatcher_1 = require("./browserTypeDispatcher");
const dispatcher_1 = require("./dispatcher");
const electronDispatcher_1 = require("./electronDispatcher");
const deviceDescriptors_1 = require("../server/deviceDescriptors");
const selectorsDispatcher_1 = require("./selectorsDispatcher");
class PlaywrightDispatcher extends dispatcher_1.Dispatcher {
    constructor(scope, playwright) {
        const electron = playwright.electron;
        const deviceDescriptors = Object.entries(deviceDescriptors_1.DeviceDescriptors)
            .map(([name, descriptor]) => ({ name, descriptor }));
        super(scope, playwright, 'Playwright', {
            chromium: new browserTypeDispatcher_1.BrowserTypeDispatcher(scope, playwright.chromium),
            clank: new browserTypeDispatcher_1.BrowserTypeDispatcher(scope, playwright.clank),
            firefox: new browserTypeDispatcher_1.BrowserTypeDispatcher(scope, playwright.firefox),
            webkit: new browserTypeDispatcher_1.BrowserTypeDispatcher(scope, playwright.webkit),
            electron: electron ? new electronDispatcher_1.ElectronDispatcher(scope, electron) : undefined,
            deviceDescriptors,
            selectors: new selectorsDispatcher_1.SelectorsDispatcher(scope, playwright.selectors),
        }, false, 'Playwright');
    }
}
exports.PlaywrightDispatcher = PlaywrightDispatcher;
//# sourceMappingURL=playwrightDispatcher.js.map