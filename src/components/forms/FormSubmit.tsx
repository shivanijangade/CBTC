import { Button, buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import LoadingSpinner from "../LoadingSpinner";

interface FormSubmitProps {
  loading: boolean;
  title: string;
}

const FormSubmit = ({ loading, title }: FormSubmitProps) => {
  return (
    <div className="flex justify-end">
      <Button
        type="submit"
        disabled={loading}
        className={cn(
          "rounded-full",
          loading && buttonVariants({ variant: "loading" })
        )}
      >
        {loading ? <LoadingSpinner /> : title}
      </Button>
    </div>
  );
};

export default FormSubmit;
