import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import BookImageSvg from "./book-image-svg";
import { useNavigate } from "react-router-dom";

const formSchema = z.object({
  seatNumber: z.coerce
    .number()
    .min(1, " number of seats must be at least 1")
    .max(10, " number of seats can`t be greater then 10"),
  seatPosition: z.string(),
});

const BookForm = () => {
  const navigate = useNavigate();
  // Define your form.

  const [seatPosition, setSeatPosition] = useState("middle");
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      seatNumber: 1,
      seatPosition: seatPosition,
    },
  });

  // Define a submit handler.
  function onSubmit(values) {
    console.log(values);
    navigate("/book/ticket");
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="seatNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Seats </FormLabel>
                <FormControl>
                  <Input placeholder="number of seats " {...field} />
                </FormControl>
                <FormDescription>
                  please enter the number of seats
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="seatPosition"
            render={({ field }) => (
              <FormItem>
                <FormLabel> Seat Position </FormLabel>
                <Select
                  onValueChange={(value) => {
                    field.onChange(value);
                    setSeatPosition(value);
                  }}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a Seat Position" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="front">Front Seats</SelectItem>
                    <SelectItem value="middle"> Middle Seats</SelectItem>
                    <SelectItem value="back"> Back Seats </SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>
                  Please Select the seat potions
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
      <BookImageSvg seatPosition={seatPosition} />
    </>
  );
};

export default BookForm;
