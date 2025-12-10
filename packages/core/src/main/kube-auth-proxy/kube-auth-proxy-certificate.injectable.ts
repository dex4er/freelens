/**
 * Copyright (c) Freelens Authors. All rights reserved.
 * Copyright (c) OpenLens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import { getInjectable, lifecycleEnum } from "@ogre-tools/injectable";
import { generate } from "selfsigned";

const kubeAuthProxyCertificateInjectable = getInjectable({
  id: "kube-auth-proxy-certificate",
  instantiate: (di, hostname) =>
    generate(
      [
        { name: "commonName", value: "localhost" },
        { name: "organizationName", value: "Freelens" },
      ],
      {
        keySize: 2048,
        algorithm: "sha256",
        extensions: [
          {
            name: "subjectAltName",
            altNames: [
              { type: "dns", value: hostname },
              { type: "dns", value: "localhost" },
              { type: "ip", value: "127.0.0.1" },
            ],
          },
        ],
      },
    ),
  lifecycle: lifecycleEnum.keyedSingleton({
    getInstanceKey: (di, hostname: string) => hostname,
  }),
});

export default kubeAuthProxyCertificateInjectable;
