"use client";

import { useActionState } from "react";
import { sendMessage, FormState } from "./action";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [state, formAction, isPending] = useActionState<FormState, FormData>(
    sendMessage,
    null
  );

  return (
    <div className="flex flex-col gap-10 max-w-xl m-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold tracking-tight">Contact</h1>
        <p className="text-muted-foreground">
          Have a project in mind or just want to chat? Send me a message.
        </p>
      </div>

      <form action={formAction} className="flex flex-col gap-5">
        {/* Name */}
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            required
            className="rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            required
            className="rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="What's on your mind?"
            required
            className="rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
          />
        </div>

        {/* Feedback */}
        {state && (
          <p className={`text-sm ${state.success ? "text-green-500" : "text-red-500"}`}>
            {state.message}
          </p>
        )}

        <Button type="submit" disabled={isPending} className="self-start">
          {isPending ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </div>
  );
}