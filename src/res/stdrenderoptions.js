/*
    
    Chernventory is an self-hosted inventory and item request solution.

    Copyright (C) 2019 Gary Kim <gary@garykim.dev>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as published
    by the Free Software Foundation, version 3.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

import config from '../../config/config'


function renderOptions(input) {
    let tr = {
        orgname: config.org.name
    };
    Object.entries(input).forEach((curr) => {
        tr[curr[0]] = curr[1];
    });
    return tr;
}

export default renderOptions;