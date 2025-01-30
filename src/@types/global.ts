import * as React from "react";

export type ButtonProps = {
  classNames: string;
  label: string;
  icon?: React.ReactNode;
  hasCount?: boolean;
  count?: number;
  onClick?: () => void;
  disabled?: boolean;
};

export type MetricProps = {
  classNames?: string;
  title: string;
  period?: string;
  percentage?: string;
  value: number;
  icon: React.ReactNode;
};

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
  status: string;
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

export interface UserProviderProps {
  id?: number;
  email?: string;
  name?: string;
  userType: "admin" | "participant";
}

export interface ChallengeFormProps {
  title?: string;
  deadline?: string;
  duration?: string;
  prize?: string;
  email?: string;
  description?: string;
  brief?: string;
  tasks?: string;
  deliverables?: string,
}

export interface ChallengeFormComponentProps {
  handleFormChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleClearForm: () => void;
  handleSubmitForm: () => void;
  errors?: ChallengeFormProps;
  values?: ChallengeFormProps;
  submitType: "create" | "edit";
}
