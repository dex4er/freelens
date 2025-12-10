/**
 * Copyright (c) Freelens Authors. All rights reserved.
 * Copyright (c) OpenLens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import { getInjectable } from "@ogre-tools/injectable";

import type { GenerateResult } from "selfsigned";

const lensProxyCertificateInjectable = getInjectable({
  id: "lens-proxy-certificate",
  instantiate: () => {
    let certState: GenerateResult | undefined;
    let resolvePromise: ((value: GenerateResult) => void) | undefined;
    let certPromise: Promise<GenerateResult> | undefined;

    const cert = {
      get: async () => {
        if (certState) {
          return certState;
        }

        // Create the promise only once and store the resolver
        if (!certPromise) {
          certPromise = new Promise<GenerateResult>((resolve) => {
            resolvePromise = resolve;
          });
        }

        return certPromise;
      },
      set: async (certificate: Promise<GenerateResult>) => {
        if (certState) {
          throw "certificate has already been set";
        }

        certState = await certificate;

        // Resolve the pending promise if anyone is waiting
        if (resolvePromise) {
          resolvePromise(certState);
        }
      },
    };

    return cert;
  },
});

export default lensProxyCertificateInjectable;
