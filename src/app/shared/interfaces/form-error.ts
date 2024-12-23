export interface FormError {
    required?: boolean;
    email?: boolean;
    minlength?: { requiredLength: number };
    pattern?: boolean;
  }