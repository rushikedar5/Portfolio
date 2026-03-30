"use server";

export type FormState = {
  success: boolean;
  message: string;
} | null;

export async function sendMessage(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const message = formData.get("message")?.toString().trim();

  // Basic validation
  if (!name || !email || !message) {
    return { success: false, message: "All fields are required." };
  }

  if (!email.includes("@")) {
    return { success: false, message: "Please enter a valid email." };
  }

  // In a real app: send email via Resend/Nodemailer, save to DB, etc.
  // For now we simulate a small delay
  await new Promise((res) => setTimeout(res, 800));

  console.log("New contact message:", { name, email, message });

  return { success: true, message: `Thanks ${name}, I'll get back to you soon!` };
}