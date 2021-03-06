// Copyright 2011 Tart. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

goog.provide('mvcapp.views.scripts.games.index');


/**
 * @this {tart.mvc.View}
 * @return {string} Output.
 */
mvcapp.views.scripts.games.index = function() {
    this.layoutName = 'layoutname: games index';
    var ps = [this.p1, this.p2, this.a, this.b];
    if (this.p1 == 'b')
        return mvcapp.router.redirectToRoute('home anything', {'p1': 'pe3', 'p2': 'pe2', 'c': 'd'});

    this.onRender = function() {
        console && console.log('games index view script render callback');
    }

    return 'games index content ' + ps.join(' ') + ' will be here';
};
