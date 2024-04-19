import { useState } from "react";
import useFetchData from "@/hooks/useFetchData";
import axios from "axios";
import Swal from "sweetalert2";
import Skeleton from "react-loading-skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/button";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Modal } from "antd";
import FormWrapper from "../forms/FormWrapper";
import RecentEventsForm from "../forms/RecentEventsForm";
import FormSubmit from "../forms/FormSubmit";

interface RecentEventProps {
  _id: string;
  eventName: string;
  organizer: string;
  imageURL: string;
}

const ShowRecentEvents = () => {
  const [modalOpen, setIsModalOpen] = useState(false);
  const [loading, setIsLoading] = useState(false);
  const [selectedItem, setSelectedItem] = useState<RecentEventProps | null>(
    null
  );

  const { isLoading, data, refetch } = useFetchData({
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
    reset();
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  const handleUpdate = (data: RecentEventProps) => {
    setIsModalOpen(true);
    setSelectedItem(data);
  };

  const onSubmit = async (data: FieldValues) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, update it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          setIsLoading(true);
          const res = await axios.patch(
            `https://event-360-serverr.vercel.app/api/v1/recent-events/${selectedItem?._id}`,
            data
          );

          if (res?.data?.success === true) {
            setIsLoading(false);
            setIsModalOpen(false);
            refetch();
            Swal.fire({
              title: "Updated!",
              text: "Selected item has been updated.",
              icon: "success",
            });
            reset();
          }
        }
      });
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const res = await axios.delete(
            `https://event-360-serverr.vercel.app/api/v1/recent-events/${id}`
          );

          if (res?.data?.success === true) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Selected item has been deleted.",
              icon: "success",
            });
          }
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {isLoading ? (
        <div className="mt-5">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index}>
              <Skeleton
                height={100}
                baseColor="#02011B"
                highlightColor="#384259"
                className="mb-2"
              />
            </div>
          ))}
        </div>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Image</TableHead>
              <TableHead>Event Name</TableHead>
              <TableHead>Update Action</TableHead>
              <TableHead>Delete Action</TableHead>
            </TableRow>
          </TableHeader>

          {data?.map((item: RecentEventProps) => (
            <TableBody key={item?._id}>
              <TableRow>
                <TableCell>
                  <img
                    src={item.imageURL}
                    alt={item?.eventName}
                    className="rounded-full h-[70px] w-[70px] object-cover"
                  />
                </TableCell>

                <TableCell className="font-medium">{item.eventName}</TableCell>

                <TableCell>
                  <Button
                    onClick={() => handleUpdate(item)}
                    className="rounded-full"
                    size="sm"
                  >
                    Update
                  </Button>
                </TableCell>

                <TableCell>
                  <Button
                    onClick={() => handleDelete(item?._id)}
                    className="rounded-full"
                    variant="destructive"
                    size="sm"
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          ))}
        </Table>
      )}

      <Modal
        title="Update Event Items"
        open={modalOpen}
        onCancel={handleCancel}
      >
        {selectedItem && (
          <FormWrapper
            onSubmit={handleSubmit(onSubmit) as SubmitHandler<FieldValues>}
          >
            <RecentEventsForm
              register={register}
              errors={errors}
              data={selectedItem}
            />
            <FormSubmit loading={loading} title="Update" />
          </FormWrapper>
        )}
      </Modal>
    </>
  );
};

export default ShowRecentEvents;
