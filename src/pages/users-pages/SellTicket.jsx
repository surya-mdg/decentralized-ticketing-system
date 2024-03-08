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
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import BookImageSvg from "@/components/book-image-svg";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
    tokenId: z.coerce.number().min(0, " tokenId must be at least 0"),
    sellPrice: z.string().min("1"),
});

const SellTicket = (props) => {
    const navigate = useNavigate();
    const { toast } = useToast();
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            tokenId: 0,
            sellPrice: "1",
        },
    });

    async function onSubmit(values) {
        console.log(values);
        try {
            await props.contract.sell(values.sellPrice, values.tokenId);
            toast({
                title: "Ticket Up For Sale",
                description: "Wait for someone to buy",
            });
        } catch (error) {
            toast({
                variant: "destructive",
                title: "Error Selling Ticket",
                description: "Cannot sell ticket for a higher price or after deadline",
            });
            console.log("Sell Error");
        }
    }

    return (
        <div className="min-h-screen mt-16 pt-32 md:w-1/2 mx-auto    ">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8"
                >
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

                    <FormField
                        control={form.control}
                        name="sellPrice"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Selling Price </FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="selling price "
                                        {...field}
                                    />
                                </FormControl>
                                <FormDescription>
                                    please enter the selling price
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </div>
    );
};

export default SellTicket;
