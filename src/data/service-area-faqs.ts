export type ServiceAreaFaq = {
  question: string;
  answer: string;
};

type FaqBuilder = (city: string) => ServiceAreaFaq;

/**
 * Large pool of city-specific FAQ builders.
 * Each service area receives a unique subset so questions
 * are not duplicated across pages.
 */
const faqPool: FaqBuilder[] = [
  (city) => ({
    question: `Do you offer plumbing services in ${city}?`,
    answer: `Yes. Swift Flo Plumbing Services provides professional plumbing services for customers in ${city}, Tennessee. You can request a visit through our contact form during published business hours.`,
  }),
  (city) => ({
    question: `What plumbing services are available for ${city} customers?`,
    answer: `We provide professional plumbing services for ${city} homeowners and businesses. Describe the repair, fixture work, or plumbing project you need when you submit a request, and we will follow up with next steps.`,
  }),
  (city) => ({
    question: `How quickly can a plumber respond in ${city}?`,
    answer: `Response timing in ${city} depends on current availability within our published hours, Monday through Sunday, 8:00 AM to 8:00 PM. Share your preferred timing when you request service and we will confirm what works.`,
  }),
  (city) => ({
    question: `How much does plumbing service cost in ${city}?`,
    answer: `Pricing for ${city} plumbing work is not listed on this website because every job is different. Contact us with a description of the work you need and request a free quote so costs can be discussed clearly.`,
  }),
  (city) => ({
    question: `Do you handle emergency plumbing needs in ${city}?`,
    answer: `Urgent plumbing concerns in ${city} should be submitted as soon as possible through our contact form or by phone. We arrange visits within published hours and prioritize clear follow-up so ${city} customers know the next step.`,
  }),
  (city) => ({
    question: `Can you repair common plumbing issues for ${city} homes?`,
    answer: `Yes. Swift Flo handles professional plumbing repairs for ${city} residences. Tell us what is leaking, clogged, or not working correctly when you request service so we can prepare for the visit.`,
  }),
  (city) => ({
    question: `Do you perform plumbing installations in ${city}?`,
    answer: `Yes. Customers in ${city} can request plumbing installation support for fixtures and related plumbing work. Include details about the installation when you contact us so we can review the scope.`,
  }),
  (city) => ({
    question: `What are your service hours for ${city}?`,
    answer: `Swift Flo Plumbing Services is available to ${city} customers Monday through Sunday, 8:00 AM to 8:00 PM. Visits for ${city} are scheduled inside these published hours.`,
  }),
  (city) => ({
    question: `How do I request a plumber in ${city}?`,
    answer: `Use the contact form and include your name, a phone number or email, note that service is needed in ${city}, and describe the plumbing work. Our team follows up to continue the request.`,
  }),
  (city) => ({
    question: `Do you serve both homes and businesses in ${city}?`,
    answer: `Yes. Professional plumbing services are available for residential and commercial customers in ${city}. Share whether the work is for a home or business when you submit your request.`,
  }),
  (city) => ({
    question: `Is ${city} part of your confirmed service area?`,
    answer: `${city} is one of Swift Flo Plumbing Services’ confirmed service locations in Middle Tennessee. Local customers can request plumbing service with clear confirmation that the area is covered.`,
  }),
  (city) => ({
    question: `Can I get a free plumbing quote in ${city}?`,
    answer: `Yes. ${city} customers can contact Swift Flo to request a free quote. Describe the plumbing repair, installation, or project you need so we can discuss pricing based on the actual work.`,
  }),
  (city) => ({
    question: `What should I include in a ${city} plumbing service request?`,
    answer: `Include your contact details, confirm the work is in ${city}, and describe the issue or project as clearly as possible. Details about leaks, fixtures, water heaters, or installation needs help us follow up accurately.`,
  }),
  (city) => ({
    question: `Do you help with water heater plumbing in ${city}?`,
    answer: `Yes. Water heater-related plumbing concerns for ${city} customers can be requested through our service form. Tell us what is happening with the unit and we will discuss the appropriate next steps.`,
  }),
  (city) => ({
    question: `Can Swift Flo help with drain or fixture repairs in ${city}?`,
    answer: `Absolutely. Drain and fixture plumbing repairs are part of the professional plumbing services available to ${city} customers. Describe the affected fixture or drain when you contact us.`,
  }),
  (city) => ({
    question: `How far in advance should ${city} customers schedule plumbing service?`,
    answer: `Scheduling for ${city} depends on availability during Monday–Sunday, 8:00 AM–8:00 PM. Requesting service as early as you can helps us confirm a visit that fits your needs.`,
  }),
  (city) => ({
    question: `Do you publish a street address for ${city} service?`,
    answer: `A street address has not been published. Plumbing service for ${city} is arranged for customers within the city, and our map reference shows the ${city} area for clarity.`,
  }),
  (city) => ({
    question: `What makes Swift Flo a good plumbing choice in ${city}?`,
    answer: `Swift Flo combines local ${city} coverage, professional plumbing workmanship, and clear communication. Customers know what service is offered, when we are open, and how to request help.`,
  }),
  (city) => ({
    question: `Can commercial properties in ${city} request plumbing service?`,
    answer: `Yes. Businesses in ${city} can request professional plumbing services. Include the business name, location in ${city}, and a description of the plumbing work when you reach out.`,
  }),
  (city) => ({
    question: `Are weekend plumbing visits available in ${city}?`,
    answer: `Yes. Our published hours include Saturday and Sunday, 8:00 AM to 8:00 PM, so ${city} customers can request weekend plumbing visits when availability allows.`,
  }),
  (city) => ({
    question: `Do you replace faucets or fixtures for ${city} homeowners?`,
    answer: `Fixture-related plumbing work can be requested by ${city} homeowners. Let us know which faucet, toilet, or fixture needs attention and whether you need repair or installation support.`,
  }),
  (city) => ({
    question: `How do you communicate during a ${city} plumbing job?`,
    answer: `We focus on clear communication with ${city} customers from the first inquiry through scheduling and completion. Share the best way to reach you when you submit your request.`,
  }),
  (city) => ({
    question: `What if I am unsure what plumbing problem I have in ${city}?`,
    answer: `That is okay. Describe what you are noticing — such as a leak, low pressure, a clog, or no hot water — and note that the property is in ${city}. We will follow up to clarify the service needed.`,
  }),
  (city) => ({
    question: `Can I call to discuss plumbing service for ${city}?`,
    answer: `Yes. You can contact Swift Flo Plumbing Services by phone or through the website contact form to discuss plumbing needs in ${city}. We are open Monday through Sunday, 8:00 AM to 8:00 PM.`,
  }),
  (city) => ({
    question: `Do you support planned plumbing projects in ${city}?`,
    answer: `Yes. In addition to repairs, ${city} customers can request help with planned plumbing projects and installations. Share the project details when you request a quote.`,
  }),
  (city) => ({
    question: `Is same-day plumbing possible in ${city}?`,
    answer: `Same-day availability in ${city} depends on the schedule within our published hours. Submit your request early and mention if timing is urgent so we can confirm the soonest available option.`,
  }),
  (city) => ({
    question: `What plumbing expertise can ${city} customers expect?`,
    answer: `${city} customers can expect professional plumbing service focused on quality workmanship, clear communication, and a straightforward process from request to completion.`,
  }),
  (city) => ({
    question: `Do you work on kitchen and bathroom plumbing in ${city}?`,
    answer: `Yes. Kitchen and bathroom plumbing concerns are common requests from ${city} customers. Describe the fixture or issue involved when you contact us for service.`,
  }),
  (city) => ({
    question: `How do ${city} customers prepare for a plumbing visit?`,
    answer: `Before a visit in ${city}, make sure we have your contact details and a clear description of the plumbing work. If possible, note access details for the area of the home or business that needs service.`,
  }),
  (city) => ({
    question: `Is Swift Flo available throughout the week for ${city} plumbing service?`,
    answer: `Yes. We are open seven days a week for ${city} customers, Monday through Sunday, 8:00 AM to 8:00 PM, making it easier to request plumbing service around your schedule.`,
  }),
  (city) => ({
    question: `Can renters in ${city} request plumbing service?`,
    answer: `Renters in ${city} can contact us about plumbing needs. Please confirm you have permission for the work and include the ${city} property details and a description of the issue in your request.`,
  }),
  (city) => ({
    question: `Do you help with leak detection concerns in ${city}?`,
    answer: `If you suspect a plumbing leak in ${city}, contact Swift Flo and describe what you are seeing or hearing. We will follow up to discuss the plumbing service needed for your situation.`,
  }),
  (city) => ({
    question: `What types of plumbing solutions are offered in ${city}?`,
    answer: `Swift Flo offers professional plumbing solutions for ${city} customers, including repairs, fixture support, installations, and other plumbing work described in your service request.`,
  }),
  (city) => ({
    question: `How soon will someone follow up on my ${city} request?`,
    answer: `After you submit a plumbing request for ${city}, our team follows up using the contact information you provide. Including a phone number and email helps us reach you quickly during business hours.`,
  }),
  (city) => ({
    question: `Are estimates available before plumbing work begins in ${city}?`,
    answer: `Yes. ${city} customers can request a free quote before work begins. Share as much detail as possible about the plumbing job so we can discuss expectations and next steps clearly.`,
  }),
  (city) => ({
    question: `Does Swift Flo provide ongoing plumbing support in ${city}?`,
    answer: `Yes. ${city} is a confirmed service area, so customers can request plumbing support whenever needs come up — from urgent repairs to planned installations — during published hours.`,
  }),
];

const FAQS_PER_AREA = 11;

export function buildServiceAreaFaqs(
  city: string,
  areaIndex: number,
): ServiceAreaFaq[] {
  const poolSize = faqPool.length;

  return Array.from({ length: FAQS_PER_AREA }, (_, i) => {
    // Consecutive blocks per city minimize shared FAQ templates across pages.
    const poolIndex = (areaIndex * FAQS_PER_AREA + i) % poolSize;
    return faqPool[poolIndex](city);
  });
}
