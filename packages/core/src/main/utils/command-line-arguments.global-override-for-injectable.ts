/**
 * Copyright (c) OpenLens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import { getGlobalOverride } from "@freelens/test-utils";
import commandLineArgumentsInjectable from "./command-line-arguments.injectable";

export default getGlobalOverride(commandLineArgumentsInjectable, () => []);
