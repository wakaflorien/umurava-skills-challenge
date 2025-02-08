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
  direction?: string;
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
  seniority?: Array<string>;
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

export interface User {
  _id: string;
  username: string;
  names: string;
  email: string;
  userRole: string;
  profile_url: string;
  phoneNumber?: string;
}

export type Token = string;

export interface UserProfile {
  user: User;
  token: Token;
}

export interface AuthContextType {
  data: UserProfile;
  authenticate: (payload: Record<string, string>) => Promise<void>;
  logout: () => void;
}

export interface ChallengeFormProps {
  challengeName?: string;
  endDate?: string;
  startDate?: string;
  duration?: number;
  moneyPrize?: string;
  contactEmail?: string;
  projectDescription?: string;
  projectBrief?: string;
  projectTasks?: string;
  deliverables?: string;
  levels?: Array<string>;
  skills?: Array<string>;
}

export interface CustomChangeEvent {
  target: {
      name: string;
      value: string | string[];
  };
}
export interface OptionType {
  label: string;
  value: string;
}

export interface ChallengeFormComponentProps {
  handleFormChange: (e: CustomChangeEvent | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleClearForm: () => void;
  handleSubmitForm: () => void;
  errors?: ChallengeFormProps;
  values?: ChallengeFormProps;
  submitType: "create" | "edit";
}
