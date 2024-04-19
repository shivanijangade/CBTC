import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface EventItemProps {
  eventName: string;
  imageURL: string;
}

interface EventItemFormProps {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  data?: EventItemProps;
}

const EventItemsForm = ({ register, errors, data }: EventItemFormProps) => {
  return (
    <div className="space-y-3">
      <div className="space-y-1">
        <label>Event Name</label>
        <input
          type="text"
          className="w-full rounded px-3 py-2 focus:outline-none border"
          defaultValue={data?.eventName}
          {...register("eventName", { required: true })}
        />

        {errors?.eventName && (
          <span className="text-red-500 text-sm">Event name is required</span>
        )}
      </div>

      <div className="space-y-1">
        <label>Image URL</label>
        <input
          type="url"
          className="w-full rounded px-3 py-2 focus:outline-none border"
          defaultValue={data?.imageURL}
          {...register("imageURL", { required: true })}
        />

        {errors?.imageURL && (
          <span className="text-red-500 text-sm">Image URL is required</span>
        )}
      </div>
    </div>
  );
};

export default EventItemsForm;
