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
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import BookImageSvg from "@/components/book-image-svg";
import { useNavigate } from "react-router-dom";

const formSchema = z.object({
    tokenId: z.coerce
      .number()
      .min(0, " tokenId must be at least 0")
  });

const CheckTicket = (props) => {

    const navigate = useNavigate();
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            tokenId: 0
        },
      });

      async function onSubmit(values) {
        console.log(values);
        try{
            let metadata = await props.contract.getMetadata(values.tokenId);
            props.setTicket({tokenId: values.tokenId, name: metadata[1], time: metadata[2], location: metadata[3], seat: "middle"});
            console.log(metadata);
            navigate("/verify-ticket");
        }catch(error){
            console.log("Get Metadata Error");
        }
        
      }


  return (
    <div className="min-h-screen mt-16 md:w-1/2 mx-auto    ">
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="tokenId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Token ID </FormLabel>
                <FormControl>
                  <Input placeholder="token ID " {...field} />
                </FormControl>
                <FormDescription>
                  please enter token ID
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button type="submit" >Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default CheckTicket;
