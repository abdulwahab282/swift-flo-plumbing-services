"use client";

import { useActionState, useState, type ChangeEvent } from "react";
import { services } from "@/data/services";
import { site } from "@/data/site";
import type { ContactField, ContactState } from "@/lib/contact";
import { submitContactRequest } from "@/app/contact/actions";

const initial: ContactState = { status: "idle" };

type Fields = Record<ContactField, string>;

const startingFields: Fields = {
  name: "",
  phone: "",
  email: "",
  service: services[0]?.name ?? "",
  message: "",
};

export function ContactForm() {
  const [fields, setFields] = useState<Fields>(startingFields);
  const [state, formAction, pending] = useActionState(
    submitContactRequest,
    initial,
  );

  function update(field: ContactField) {
    return (
      event: ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => {
      setFields((current) => ({ ...current, [field]: event.target.value }));
    };
  }

  const errors = state.status === "error" ? state.errors : {};
  const values = state.status === "success" ? state.values : null;

  if (state.status === "success") {
    return (
      <div
        id="request-service"
        className="scroll-mt-28 rounded-[1.75rem] border border-tide/30 bg-foam p-6 sm:p-8"
        role="status"
      >
        <h2 className="font-display text-3xl text-navy">
          {values?.name ? `Thank you, ${values.name}.` : "Thank you."}
        </h2>
        <p className="mt-3 leading-relaxed text-ink">
          {state.delivered
            ? "Your plumbing service request was sent to Swift Flo Plumbing Services."
            : "Your request is listed on this page. This form is not connected to an inbox yet, so call or email Swift Flo Plumbing Services directly."}
        </p>
        {values?.name ? (
          <dl className="mt-6 space-y-3 text-sm">
            <Detail label="Phone" value={values.phone} />
            <Detail label="Email" value={values.email} />
            <Detail label="Service" value={values.service} />
            <Detail label="Message" value={values.message} />
          </dl>
        ) : null}
        <button
          type="button"
          className="mt-6 text-sm font-semibold text-tide-deep underline decoration-copper/60 underline-offset-4"
          onClick={() => window.location.reload()}
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form
      id="request-service"
      action={formAction}
      noValidate
      className="scroll-mt-28 rounded-[1.75rem] border border-sand bg-white p-6 shadow-sm sm:p-8"
    >
      {state.status === "error" ? (
        <p role="alert" className="mb-5 rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-800">
          Please correct the highlighted fields and submit the request again.
        </p>
      ) : null}
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="name"
          label="Name"
          name="name"
          autoComplete="name"
          value={fields.name}
          onChange={update("name")}
          error={errors.name}
        />
        <Field
          id="phone"
          label="Phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          value={fields.phone}
          onChange={update("phone")}
          error={errors.phone}
        />
        <Field
          id="email"
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          value={fields.email}
          onChange={update("email")}
          error={errors.email}
          className="sm:col-span-2"
        />
        <div className="sm:col-span-2">
          <label htmlFor="service" className="mb-2 block text-sm font-semibold text-navy">
            Service Needed
          </label>
          <select
            id="service"
            name="service"
            value={fields.service}
            onChange={update("service")}
            aria-invalid={errors.service ? true : undefined}
            aria-describedby={errors.service ? "service-error" : undefined}
            className="w-full rounded-2xl border border-sand bg-cream px-4 py-3 text-ink outline-none transition focus:border-tide"
          >
            {services.map((service) => (
              <option key={service.slug} value={service.name}>
                {service.name}
              </option>
            ))}
          </select>
          {errors.service ? (
            <p id="service-error" className="mt-2 text-sm text-red-800">
              {errors.service}
            </p>
          ) : null}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-2 block text-sm font-semibold text-navy">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={fields.message}
            onChange={update("message")}
            aria-invalid={errors.message ? true : undefined}
            aria-describedby={errors.message ? "message-error" : undefined}
            className="w-full resize-y rounded-2xl border border-sand bg-cream px-4 py-3 text-ink outline-none transition focus:border-tide"
          />
          {errors.message ? (
            <p id="message-error" className="mt-2 text-sm text-red-800">
              {errors.message}
            </p>
          ) : null}
        </div>
      </div>
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>
      <button
        type="submit"
        disabled={pending}
        className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-tide-deep px-6 py-3 text-sm font-semibold text-white transition hover:bg-tide disabled:cursor-wait disabled:opacity-70 sm:w-auto"
      >
        {pending ? "Submitting..." : "Request Service"}
      </button>
      <p className="mt-4 text-sm leading-relaxed text-muted">
        {site.name} · {site.service} · {site.locationLabel}
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  name,
  type = "text",
  autoComplete,
  value,
  onChange,
  error,
  className = "",
}: {
  id: string;
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-navy">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        value={value}
        onChange={onChange}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className="w-full rounded-2xl border border-sand bg-cream px-4 py-3 text-ink outline-none transition focus:border-tide"
      />
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-red-800">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="font-semibold text-navy">{label}</dt>
      <dd className="whitespace-pre-wrap text-ink">{value}</dd>
    </div>
  );
}
