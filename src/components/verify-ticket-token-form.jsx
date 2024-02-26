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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  token: z.string().min(1),
});
const VerifyTicketTokenForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      token: "",
    },
  });

  // Define a submit handler.
  function onSubmit(values) {
    console.log(values);
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
                <FormLabel> Token </FormLabel>
                <FormControl>
                  <Input placeholder="Token ...  " {...field} />
                </FormControl>
                <FormDescription>please enter the token</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </>
  );
};

export default VerifyTicketTokenForm;
