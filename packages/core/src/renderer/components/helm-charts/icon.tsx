/**
 * Copyright (c) OpenLens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import styles from "./icon.module.css";

import { cssNames } from "@freelens/utilities";
import React, { useState } from "react";

export interface HelmChartIconProps {
  className?: string;
  imageUrl?: string;
}

export const HelmChartIcon = ({
  imageUrl = "",
  className,
}: HelmChartIconProps) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const backgroundImage = `url(${imageUrl})`;
  const placeholderImageUrl = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNzIyLjggNzAyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogICAgICAgICAgPGcgZmlsbD0iIzhlOTI5NyI+CiAgICAgICAgICAgIDxwYXRoIGQ9Im0zMTggMjk5LjVjMi4xIDEuNiA0LjggMi41IDcuNiAyLjUgNi45IDAgMTIuNi01LjUgMTIuOS0xMi4zbC4zLS4yIDQuMy03Ni43Yy01LjIuNi0xMC40IDEuNS0xNS42IDIuNy0yOC41IDYuNS01My4yIDIwLjUtNzIuNiAzOS41bDYyLjkgNDQuNnoiLz4KICAgICAgICAgICAgPHBhdGggZD0ibTMwOS41IDQxMS45Yy0xLjQtNS45LTYuNi05LjktMTIuNC0xMC0uOCAwLTEuNy4xLTIuNS4ybC0uMS0uMi03NS41IDEyLjhjMTEuNyAzMi4yIDMzLjQgNTguNSA2MC44IDc2LjFsMjkuMi03MC43LS4yLS4zYzEuMS0yLjQgMS40LTUuMi43LTcuOXoiLz4KICAgICAgICAgICAgPHBhdGggZD0ibTI4NC40IDM1Ny41YzIuNS0uNyA0LjktMi4yIDYuNy00LjQgNC4zLTUuNCAzLjYtMTMuMi0xLjYtMTcuOGwuMS0uMy01Ny40LTUxLjRjLTE3IDI3LjgtMjUuMSA2MS4xLTIxLjQgOTUuM2w3My42LTIxLjJ6Ii8+CiAgICAgICAgICAgIDxwYXRoIGQ9Im0zNDAuMiAzODAgMjEuMiAxMC4yIDIxLjEtMTAuMSA1LjMtMjIuOS0xNC42LTE4LjJoLTIzLjZsLTE0LjYgMTguMnoiLz4KICAgICAgICAgICAgPHBhdGggZD0ibTM4NC4yIDI4OS40Yy4xIDIuNiAxIDUuMiAyLjggNy41IDQuMyA1LjQgMTIuMSA2LjQgMTcuNyAyLjRsLjIuMSA2Mi41LTQ0LjNjLTIzLjYtMjMuMS01NC40LTM4LjItODcuNi00Mi4yeiIvPgogICAgICAgICAgICA8cGF0aCBkPSJtNDkwLjMgMjgzLjctNTcuMSA1MS4xdi4yYy0yIDEuNy0zLjUgNC4xLTQuMSA2LjgtMS41IDYuOCAyLjUgMTMuNSA5LjIgMTUuM2wuMS4zIDc0IDIxLjNjMS42LTE2IC42LTMyLjUtMy4yLTQ5LTMuOS0xNi44LTEwLjQtMzIuMi0xOC45LTQ2eiIvPgogICAgICAgICAgICA8cGF0aCBkPSJtMzcyLjggNDM5LjZjLTEuMi0yLjMtMy4yLTQuMy01LjgtNS41LTItLjktNC0xLjQtNi0xLjMtNC41LjItOC43IDIuNi0xMC45IDYuOGgtLjFsLTM3LjEgNjcuMWMyNS43IDguOCA1NC4xIDEwLjcgODIuNSA0LjIgNS4xLTEuMiAxMC0yLjUgMTQuOS00LjJsLTM3LjMtNjcuMXoiLz4KICAgICAgICAgICAgPHBhdGggZD0ibTcxMS43IDQyNS02MC40LTI2Mi4yYy0zLjItMTMuNy0xMi41LTI1LjMtMjUuMy0zMS40bC0yNDQuNC0xMTYuOGMtNy4xLTMuNC0xNC44LTQuOS0yMi43LTQuNS02LjIuMy0xMi4zIDEuOS0xNy45IDQuNWwtMjQ0LjMgMTE2LjdjLTEyLjggNi4xLTIyLjEgMTcuNy0yNS4zIDMxLjRsLTYwLjIgMjYyLjNjLTIuOCAxMi4yLS41IDI1IDYuMyAzNS41LjggMS4zIDEuNyAyLjUgMi43IDMuN2wxNjkuMSAyMTAuM2M4LjkgMTEgMjIuMyAxNy40IDM2LjUgMTcuNGwyNzEuMi0uMWMxNC4yIDAgMjcuNy02LjQgMzYuNS0xNy40bDE2OS4xLTIxMC4zYzguOS0xMC45IDEyLjItMjUuNCA5LjEtMzkuMXptLTkzLTMuMmMtMS44IDcuOC0xMC4yIDEyLjYtMTguOSAxMC43LS4xIDAtLjIgMC0uMiAwLS4xIDAtLjItLjEtLjMtLjEtMS4yLS4zLTIuNy0uNS0zLjgtLjgtNS0xLjMtOC42LTMuMy0xMy4xLTUuMS05LjctMy41LTE3LjctNi40LTI1LjUtNy41LTQtLjMtNiAxLjYtOC4yIDMtMS4xLS4yLTQuNC0uOC02LjItMS4xLTE0IDQ0LTQzLjkgODIuMi04NC4zIDEwNi4xLjcgMS43IDEuOSA1LjMgMi40IDUuOS0uOSAyLjUtMi4zIDQuOC0xLjEgOC42IDIuOCA3LjQgNy40IDE0LjYgMTMgMjMuMiAyLjcgNCA1LjQgNy4xIDcuOCAxMS43LjYgMS4xIDEuMyAyLjggMS45IDMuOSAzLjggOCAxIDE3LjMtNi4yIDIwLjgtNy4zIDMuNS0xNi4zLS4yLTIwLjItOC4zLS42LTEuMS0xLjMtMi43LTEuOC0zLjgtMi4xLTQuNy0yLjgtOC44LTQuMi0xMy40LTMuMy05LjctNi0xNy44LTEwLTI0LjYtMi4yLTMuMy01LTMuNy03LjUtNC41LS41LS44LTIuMi00LTMuMS01LjYtOC4xIDMuMS0xNi40IDUuNi0yNS4xIDcuNi0zNy45IDguNi03NS45IDUuMS0xMDkuOS03LjlsLTMuMyA2Yy0yLjUuNy00LjggMS4zLTYuMyAzLjEtNS4zIDYuNC03LjUgMTYuNi0xMS4zIDI2LjMtMS41IDQuNi0yLjEgOC43LTQuMiAxMy40LS41IDEuMS0xLjMgMi42LTEuOCAzLjctMy45IDguMS0xMi45IDExLjctMjAuMiA4LjItNy4yLTMuNS0xMC0xMi43LTYuMi0yMC44LjYtMS4yIDEuMy0yLjggMS45LTMuOSAyLjQtNC42IDUuMi03LjcgNy44LTExLjcgNS41LTguNyAxMC40LTE2LjQgMTMuMi0yMy44LjctMi40LS4zLTUuOC0xLjMtOC4zbDIuNy02LjRjLTM4LjktMjMuMS02OS43LTU5LjgtODQuMy0xMDUuM2wtNi40IDEuMWMtMS43LTEtNS4xLTMuMi04LjQtMy03LjggMS4xLTE1LjggNC0yNS41IDcuNS00LjUgMS43LTguMSAzLjctMTMuMSA1LTEuMS4zLTIuNi42LTMuOC44LS4xIDAtLjIuMS0uMy4xcy0uMiAwLS4yIDBjLTguNyAxLjktMTcuMS0yLjktMTguOS0xMC43czMuOC0xNS43IDEyLjQtMTcuOGMuMSAwIC4yIDAgLjItLjFoLjFjMS4yLS4zIDIuOC0uNyAzLjktLjkgNS4xLTEgOS4yLS43IDE0LTEuMSAxMC4yLTEuMSAxOC43LTEuOSAyNi4yLTQuMyAyLjQtMSA0LjctNC4zIDYuMy02LjNsNi4xLTEuOGMtNi45LTQ3LjUgNC44LTk0LjIgMjkuOC0xMzEuOWwtNC43LTQuMmMtLjMtMS44LS43LTYtMi45LTguNC01LjgtNS40LTEzLTkuOS0yMS44LTE1LjMtNC4yLTIuNC04LTQtMTIuMS03LjEtLjktLjctMi4xLTEuNy0zLTIuNC0uMS0uMS0uMS0uMS0uMi0uMi03LTUuNi04LjYtMTUuMi0zLjYtMjEuNiAyLjgtMy42IDcuMi01LjMgMTEuNy01LjIgMy41LjEgNy4xIDEuNCAxMC4yIDMuOCAxIC44IDIuNCAxLjggMy4yIDIuNiAzLjkgMy40IDYuMyA2LjcgOS42IDEwLjIgNy4yIDcuMyAxMy4yIDEzLjQgMTkuNyAxNy44IDMuNCAyIDYuMSAxLjIgOC43LjguOC42IDMuNyAyLjYgNS4zIDMuOCAyNC45LTI2LjQgNTcuNi00NiA5NS42LTU0LjYgOC44LTIgMTcuNy0zLjMgMjYuNC00LjFsLjMtNi4yYzEuOS0xLjkgNC4xLTQuNiA0LjgtNy42LjYtNy45LS40LTE2LjMtMS42LTI2LjUtLjctNC44LTEuOC04LjctMi0xMy45IDAtMS4xIDAtMi41IDAtMy44IDAtLjEgMC0uMyAwLS40IDAtOSA2LjUtMTYuMiAxNC42LTE2LjJzMTQuNiA3LjMgMTQuNiAxNi4yYzAgMS4zLjEgMyAwIDQuMi0uMiA1LjItMS4zIDkuMS0yIDEzLjktMS4yIDEwLjItMi4zIDE4LjctMS43IDI2LjUuNiAzLjkgMi45IDUuNSA0LjggNy4zIDAgMS4xLjIgNC42LjMgNi41IDQ2LjUgNC4xIDg5LjcgMjUuNCAxMjEuNCA1OC43bDUuNi00YzEuOS4xIDYgLjcgOC45LTEgNi41LTQuNCAxMi41LTEwLjUgMTkuNy0xNy44IDMuMy0zLjUgNS43LTYuOCA5LjctMTAuMi45LS44IDIuMy0xLjggMy4yLTIuNiA3LTUuNiAxNi44LTUgMjEuOCAxLjNzMy40IDE2LTMuNiAyMS42Yy0xIC44LTIuMyAxLjktMy4yIDIuNi00LjIgMy4xLTggNC43LTEyLjIgNy4xLTguNyA1LjQtMTYgOS45LTIxLjggMTUuMy0yLjcgMi45LTIuNSA1LjctMi44IDguMy0uOC43LTMuNyAzLjMtNS4yIDQuNyAxMi42IDE4LjggMjIuMSA0MC4xIDI3LjQgNjMuMyA1LjMgMjMuMSA2LjEgNDYuMSAzLjEgNjguM2w1LjkgMS43YzEuMSAxLjUgMy4yIDUuMiA2LjMgNi4zIDcuNSAyLjQgMTYgMy4yIDI2LjIgNC4zIDQuOC40IDguOS4yIDE0IDEuMSAxLjIuMiAzIC43IDQuMiAxIDguOSAyLjQgMTQuNCAxMC40IDEyLjYgMTguMnoiLz4KICAgICAgICAgICAgPHBhdGggZD0ibTQyOCA0MDEuN2MtMS0uMi0yLS4zLTMtLjItMS43LjEtMy4zLjUtNC45IDEuMy02LjIgMy05IDEwLjQtNi4yIDE2LjdsLS4xLjEgMjkuNiA3MS40YzI4LjUtMTguMiA0OS44LTQ1LjMgNjEtNzYuNmwtNzYuMi0xMi45eiIvPgogICAgICAgICAgPC9nPgogICAgICAgIDwvc3ZnPg==";

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  const isValidImage = () => {
    return /^https?:\/\/.*(?<!\.svg)$/.test(imageUrl);
  };

  return (
    <div
      className={cssNames(styles.chartIcon, className, { [styles.imageNotLoaded]: !isImageLoaded })}
      data-testid="image-container"
      style={{
        backgroundImage: isImageLoaded ? backgroundImage : `url(${placeholderImageUrl})`,
      }}
    >
      {isValidImage() && (
        <img
          className={styles.img}
          src={imageUrl}
          alt=""
          onLoad={handleImageLoad}
        />
      )}
    </div>
  );
};
