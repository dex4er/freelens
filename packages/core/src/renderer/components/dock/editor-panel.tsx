/**
 * Copyright (c) OpenLens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import styles from "./editor-panel.module.scss";
import throttle from "lodash/throttle";
import React, { createRef, useEffect } from "react";
import { reaction } from "mobx";
import { observer } from "mobx-react";
import type { DockStore, TabId } from "./dock/store";
import { cssNames, disposer } from "@freelens/utilities";
import { MonacoEditor } from "../monaco-editor";
import type { MonacoEditorProps, MonacoEditorRef  } from "../monaco-editor";
import { withInjectables } from "@ogre-tools/injectable-react";
import dockStoreInjectable from "./dock/store.injectable";

export interface EditorPanelProps {
  tabId: TabId;
  value: string;
  className?: string;
  autoFocus?: boolean; // default: true
  onChange: MonacoEditorProps["onChange"];
  onError?: MonacoEditorProps["onError"];
  hidden?: boolean;
}

interface Dependencies {
  dockStore: DockStore;
}

const NonInjectedEditorPanel = observer(({
  dockStore,
  onChange,
  tabId,
  value,
  autoFocus = true,
  className,
  onError,
  hidden,
}: Dependencies & EditorPanelProps) => {
  const editor = createRef<MonacoEditorRef>();

  useEffect(() => disposer(
    reaction(
      () => dockStore.isOpen,
      isOpen => isOpen && editor.current?.focus(),
      {
        fireImmediately: true,
      },
    ),
    dockStore.onResize(throttle(() => editor.current?.focus(), 250)),
  ));

  if (!tabId) {
    return null;
  }

  return (
    <MonacoEditor
      autoFocus={autoFocus}
      id={tabId}
      value={value}
      className={cssNames(styles.EditorPanel, className, { hidden })}
      onChange={onChange}
      onError={onError}
      ref={editor}
    />
  );
});

export const EditorPanel = withInjectables<Dependencies, EditorPanelProps>(NonInjectedEditorPanel, {
  getProps: (di, props) => ({
    ...props,
    dockStore: di.inject(dockStoreInjectable),
  }),
});
