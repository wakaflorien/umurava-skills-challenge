import * as React from "react";

export type ButtonProps = {
  classNames: string;
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
};

export type MetricProps = {
  classNames?: string;
  title: string;
  value: number;
  icon: React.ReactNode;
}

export interface PaginationProps {
    currentPage?: number;
    totalPages?: number;
    // data?: Array<Record<string, unknown>>;
    onPageChange: (page: number) => void;
}

export type DivProps = {
  icon: string;
  title: string;
  desc: string;
  iconWidth: number;
  iconHeight: number;
};

export type CardProps = {
  image: string;
  title?: string;
  skills?: Array<string>;
  security?: string;
  timeline?: string;
  onClick?: () => void;
  imageWidth: number;
  imageHeight: number;
};

export type MiniCardProps = {
  image: string;
  name?: string;
  location?: string;
  jobTitle?: string;
  imageWidth: number;
  imageHeight: number;
};

export type StepProps = {
  stepCount: number;
  hasImage: boolean;
  image?: string;
  title: string;
  desc: string;
  imageWidth?: number;
  imageHeight?: number;
};

export interface ShapeProps {
    type: "one" | "two";
}