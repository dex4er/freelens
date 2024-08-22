/**
 * Copyright (c) OpenLens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import path from "path";
import { getGlobalOverride } from "@freelens/test-utils";
import getBasenameOfPathInjectable from "./get-basename.injectable";

export default getGlobalOverride(getBasenameOfPathInjectable, () => path.posix.basename);
