import { ChallengeFormProps } from "@/@types/global";

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateForm = async (formData: ChallengeFormProps, setErrors: (errors: ChallengeFormProps) => void) => {
  const newErrors: ChallengeFormProps = {};

  if (!formData.title || !formData.title.trim()) {
    newErrors.title = "Title is required";
  } else if (formData.title.length < 2) {
    newErrors.title = "Title must be at least 2 characters";
  }

  if (!formData.deadline || !formData.deadline.trim()) {
    newErrors.deadline = "deadline is required";
  } else if (formData.deadline.length < 2) {
    newErrors.deadline = "deadline must be at least 2 characters";
  }

  if (!formData.duration || !formData.duration.trim()) {
    newErrors.duration = "duration is required";
  } else if (formData.duration.length < 2) {
    newErrors.duration = "duration must be at least 2 characters";
  }
  
  if (!formData.description || !formData.description.trim()) {
    newErrors.description = "Description is required";
  } else if (formData.description.length < 2) {
    newErrors.description = "Description must be at least 2 characters";
  }

  if (!formData.brief || !formData.brief.trim()) {
    newErrors.brief = "Brief is required";
  } else if (formData.brief.length < 2) {
    newErrors.brief = "Brief must be at least 2 characters";
  }

  if (!formData.tasks || !formData.tasks.trim()) {
    newErrors.tasks = "Tasks are required";
  } else if (formData.tasks.length < 2) {
    newErrors.tasks = "Tasks must be at least 2 characters";
  }

  if (!formData.deliverables || !formData.deliverables.trim()) {
    newErrors.deliverables = "Deliverables are required";
  } else if (formData.deliverables.length < 2) {
    newErrors.deliverables = "Deliverables must be at least 2 characters";
  }

  if (!formData.email) {
    newErrors.email = "Email is required";
  } else if (!validateEmail(formData.email)) {
    newErrors.email = "Please enter a valid email";
  }

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};
