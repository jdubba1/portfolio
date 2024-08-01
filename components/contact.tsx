"use client";

import { FC } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/components/send-email";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-4 py-8">
        <div className="grid w-full sm:w-2/3 items-center gap-1.5">
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id="name"
            placeholder="John Doe"
            {...register("name", { required: true })}
          />
        </div>
        <div className="grid w-full sm:w-2/3 items-center gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            placeholder="email@example.com"
            {...register("email", { required: true })}
          />
        </div>
        <div className="grid w-full sm:w-2/3 items-center gap-1.5">
          <Label htmlFor="name">Message</Label>
          <Textarea
            id="message"
            placeholder="Type your message"
            {...register("message", { required: true })}
          />
        </div>
        <div>
          <Button>Submit</Button>
        </div>
      </div>
    </form>
  );
};

export default Contact;
