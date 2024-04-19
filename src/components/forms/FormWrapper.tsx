import { ReactNode } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

interface FormWrapperProps {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
}

const FormWrapper = ({ onSubmit, children }: FormWrapperProps) => {
  return (
    <form onSubmit={onSubmit} className="space-y-3">
      {children}
    </form>
  );
};

export default FormWrapper;
