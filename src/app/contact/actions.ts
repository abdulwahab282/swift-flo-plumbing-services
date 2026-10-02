"use server";

import { validateContact, type ContactState } from "@/lib/contact";

export async function submitContactRequest(
  _previous: ContactState,
  formData: FormData,
): Promise<ContactState> {
  if (String(formData.get("company") ?? "").trim()) {
    return {
      status: "success",
      delivered: false,
      values: {
        name: "",
        phone: "",
        email: "",
        service: "",
        message: "",
      },
    };
  }

  const result = validateContact(formData);

  if (!result.ok) {
    return {
      status: "error",
      errors: result.errors,
      values: result.values,
    };
  }

  return {
    status: "success",
    delivered: false,
    values: result.values,
  };
}
