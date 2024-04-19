import { useState } from "react";
import useFetchData from "@/hooks/useFetchData";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import { Button } from "@/components/ui/button";
import { Modal } from "antd";
import FormWrapper from "@/components/forms/FormWrapper";
import RecentEventsForm from "@/components/forms/RecentEventsForm";
import FormSubmit from "@/components/forms/FormSubmit";
import ShowRecentEvents from "@/components/dashboard/ShowRecentEvents";

const RecentEvents = () => {
  const [modalOpen, setIsModalOpen] = useState(false);
  const [loading, setIsLoading] = useState(false);

  const { error, refetch } = useFetchData({
    queryKey: "recentEvents",
    url: "https://event-360-serverr.vercel.app/api/v1/recent-events",
  });

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const handleCancel = () => {
    setIsModalOpen(false);
    reset();
  };

  const onSubmit = async (data: FieldValues) => {
    setIsLoading(true);
    try {
      const res = await axios.post(
        "https://event-360-serverr.vercel.app/api/v1/recent-events",
        data
      );

      if (res?.data?.success === true) {
        setIsLoading(false);
        setIsModalOpen(false);
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Recent event has been added",
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  if (error) {
    return (
      <div className="h-full flex items-center justify-center">
        <p>An error has occurred: {error?.message}</p>
      </div>
    );
  }

  return (
    <main>
      <div className="flex justify-end">
        <Button
          onClick={() => setIsModalOpen(true)}
          className="rounded-full mb-5 lg:mb-0"
        >
          Add Events
        </Button>

        <Modal
          title="Add New Recent Events"
          open={modalOpen}
          onCancel={handleCancel}
        >
          <FormWrapper
            onSubmit={handleSubmit(onSubmit) as SubmitHandler<FieldValues>}
          >
            <RecentEventsForm register={register} errors={errors} />
            <FormSubmit loading={loading} title="Submit" />
          </FormWrapper>
        </Modal>
      </div>

      <ShowRecentEvents />
    </main>
  );
};

export default RecentEvents;
