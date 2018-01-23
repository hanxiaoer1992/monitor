import * as React from "react";
export interface RowbarProps {
  title: React.ReactNode;
  color?: string;
  padding?: [number, number, number, number];
  height: number;
  data: Array<{
    x: string;
    y: number;
  }>;
  autoLabel?: boolean;
  style?: React.CSSProperties;
}

export default class Rowbar extends React.Component<RowbarProps, any> {}
