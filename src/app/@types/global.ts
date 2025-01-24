export type ButtonProps = {
  classNames: string;
  label: string;
  onClick?: () => void;
};

export type DivProps = {
  icon: string;
  title: string;
  desc: string;
  iconWidth: number;
  iconHeight: number;
};

export type CardProps = {
  image: string;
  isOpen: boolean;
  type: "challenge" | "testimonial";
  title?: string;
  skills?: Array<string>;
  security?: string;
  timeline?: string;
  onClick?: () => void;
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
