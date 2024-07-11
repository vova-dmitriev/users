import React from "react";

export interface IRoute {
  path: string;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: React.LazyExoticComponent<React.ComponentType<any>>;
  icon?: string;
}
