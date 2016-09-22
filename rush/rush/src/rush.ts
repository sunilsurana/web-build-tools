/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 */

/// <reference path="../typings/tsd.d.ts" />

import * as os from 'os';
import * as colors from 'colors';
import { rushVersion } from '@microsoft/rush-lib';

import RushCommandLineParser from './actions/RushCommandLineParser';

console.log(os.EOL + colors.bold(`Rush Multi-Package Build Tool ${rushVersion}`)
  + os.EOL);

const parser: RushCommandLineParser = new RushCommandLineParser();

parser.execute();
