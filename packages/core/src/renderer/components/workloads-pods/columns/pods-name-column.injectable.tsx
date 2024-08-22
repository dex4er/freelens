/**
 * Copyright (c) OpenLens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */
import { getConvertedParts } from "@freelens/utilities";
import { getInjectable } from "@ogre-tools/injectable";
import React from "react";
import type { Pod } from "@freelens/kube-object";
import { Tooltip } from "@freelens/tooltip";
import { podListLayoutColumnInjectionToken } from "@freelens/list-layout";

const columnId = "name";

export const podsNameColumnInjectable = getInjectable({
  id: "pods-name-column",
  instantiate: () => ({
    id: columnId,
    kind: "Pod",
    apiVersion: "v1",
    priority: 100,
    content: (pod: Pod) => (
      <>
        <span id={`list-pod-name-${pod.getId()}`} data-testid={`list-pod-name-${pod.getId()}`}>
          {pod.getName()}
        </span>
        <Tooltip targetId={`list-pod-name-${pod.getId()}`}>
          {pod.getName()}
        </Tooltip>
      </>
    ),
    header: { title: "Name", className: "name", sortBy: columnId, id: columnId },
    sortingCallBack: (pod) => getConvertedParts(pod.getName()),
    searchFilter: (pod) => pod.getSearchFields(),
  }),
  injectionToken: podListLayoutColumnInjectionToken,
});
