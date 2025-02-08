import { ChallengeFormProps } from "@/@types/global";

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateForm = async (formData: ChallengeFormProps, setErrors: (errors: ChallengeFormProps) => void): Promise<boolean> => {
  const newErrors: Partial<ChallengeFormProps> = {};

  if (!formData.challengeName || !formData.challengeName.trim()) {
    newErrors.challengeName = "Challenge Name is required";
  } else if (formData.challengeName.length < 2) {
    newErrors.challengeName = "Title must be at least 2 characters";
  }

  if (!formData.endDate || !formData.endDate.trim()) {
    newErrors.endDate = "End date is required";
  } else if (formData.endDate.length < 2) {
    newErrors.endDate = "End date must be at least 2 characters";
  }
  if (!formData.startDate || !formData.startDate.trim()) {
    newErrors.startDate = "Start date is required";
  } else if (formData.startDate.length < 2) {
    newErrors.startDate = "Start Date must be at least 2 characters";
  }
  
  if (!formData.projectDescription || !formData.projectDescription.trim()) {
    newErrors.projectDescription = "Description is required";
  } else if (formData.projectDescription.length < 2) {
    newErrors.projectDescription = "Description must be at least 2 characters";
  }

  if (!formData.projectBrief || !formData.projectBrief.trim()) {
    newErrors.projectBrief = "Brief is required";
  } else if (formData.projectBrief.length < 2) {
    newErrors.projectBrief = "Brief must be at least 2 characters";
  }

  if (!formData.projectTasks || !formData.projectTasks.trim()) {
    newErrors.projectTasks = "Tasks are required";
  } else if (formData.projectTasks.length < 2) {
    newErrors.projectTasks = "Tasks must be at least 2 characters";
  }

  if (!formData.contactEmail) {
    newErrors.contactEmail = "Email is required";
  } 
  else if (!validateEmail(formData.contactEmail)) {
    newErrors.contactEmail = "Please enter a valid email";
  }

  // Validate Levels (Skills)
  if (!formData.skills || formData.skills.length === 0) {
    newErrors.skills = ["At least one skill is required"];
  }

  // Validate Seniority
  if (!formData.levels || formData.levels.length === 0) {
    newErrors.levels = ["At least one seniority level is required"];
  }

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};
