/*
Copyright 2020 DigitalOcean

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import https from './https';
import logging from './logging';
import nginx from './nginx';
import performance from './performance';
import php from './php';
import python from './python';
import security from './security';
import tools from './tools';

export default { https, logging, nginx, performance, php, python, security, tools };
