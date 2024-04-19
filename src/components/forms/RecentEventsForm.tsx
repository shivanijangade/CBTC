import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface RecentEventProps {
  _id: string;
  eventName: string;
  organizer: string;
  imageURL: string;
}

interface RecentEventFormProps {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  data?: RecentEventProps;
}

const RecentEventsForm = ({ register, errors, data }: RecentEventFormProps) => {
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
        <label>Organizer</label>
        <input
          type="text"
          className="w-full rounded px-3 py-2 focus:outline-none border"
          defaultValue={data?.organizer}
          {...register("organizer", { required: true })}
        />

        {errors?.organizer && (
          <span className="text-red-500 text-sm">Organizer is required</span>
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

export default RecentEventsForm;
