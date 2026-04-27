Here is your **FULL upgraded CLAUDE.md** — clean, complete, and production-ready with:

* original structure preserved
* Web3Forms (no redirect, in-page success)
* button/link enforcement
* mobile + interaction QA
* hard verification rules

---

# 🧠 `CLAUDE.md — Agave Welding LLC Website System (Final)`

````md
# CLAUDE.md — Agave Welding LLC Website System

## OBJECTIVE

Build and maintain a high-converting website that:

- Generates quote requests
- Builds trust instantly
- Ranks locally
- Feels custom, not templated
- Works flawlessly on desktop and mobile
- Has zero broken interactions

---

## SYSTEM AWARENESS

This is NOT a portfolio.

This is a:
→ lead generation system

Every element must prioritize:

- clarity
- trust
- conversion
- usability
- speed
- real-world functionality

---

## PLAN MODE (MANDATORY)

Before making ANY change:

Define:
- section being worked on
- goal of the section
- target user
- expected outcome

---

## CORE WEBSITE STRUCTURE

### Required Sections

1. Hero
2. Trust signals
3. Services
4. About
5. Process
6. Portfolio
7. Service areas
8. Contact / Form
9. CTA blocks

---

## HERO RULES

Must include:

- service + location
- clear value
- CTA above the fold

---

## SERVICES RULES

Each service must:

- be specific
- explain value
- include CTA

No generic descriptions.

---

## TRUST SIGNALS

Include:

- certifications (only if verified)
- experience
- real project types
- local presence

---

# 🔥 FORM SYSTEM (CRITICAL)

## Web3Forms Integration

Endpoint:
https://api.web3forms.com/submit

Access Key:
934cd615-20a1-4859-91c2-da4821d297a8

---

## REQUIRED FIELDS

- Name
- Phone
- Email
- City
- Service Needed
- Project Details

---

## FORM BEHAVIOR (MANDATORY)

The form MUST NOT redirect.

Instead:

1. Prevent default submission
2. Send request via JavaScript (fetch)
3. Stay on same page
4. Show success message
5. Reset form after success
6. Show error message if failure

---

## SUCCESS MESSAGE

“Thank you. Your quote request has been sent. We will contact you shortly.”

---

## ERROR MESSAGE

“Something went wrong. Please try again or call directly.”

---

## REQUIRED FORM STRUCTURE

```html
<form id="quoteForm">
  <input type="hidden" name="access_key" value="934cd615-20a1-4859-91c2-da4821d297a8">

  <input type="text" name="name" required>
  <input type="tel" name="phone" required>
  <input type="email" name="email" required>
  <input type="text" name="city" required>

  <select name="service_needed" required>
    <option value="">Select a service</option>
    <option>Structural Welding</option>
    <option>Custom Fabrication</option>
    <option>Railings</option>
    <option>Repairs</option>
    <option>Mobile Welding</option>
  </select>

  <textarea name="message" required></textarea>

  <button type="submit">Send Quote Request</button>
</form>

<div id="formMessage"></div>
````

---

## REQUIRED JAVASCRIPT

```javascript
const form = document.getElementById("quoteForm");
const msg = document.getElementById("formMessage");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = new FormData(form);
  msg.textContent = "Sending...";

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: data
    });

    const result = await res.json();

    if (result.success) {
      msg.textContent = "Thank you. Your quote request has been sent.";
      form.reset();
    } else {
      msg.textContent = "Something went wrong. Try again.";
    }
  } catch (err) {
    msg.textContent = "Error. Try again or call directly.";
  }
});
```

---

# 🔗 BUTTON & LINK SYSTEM

## RULES

All buttons must work.

No dead clicks.

---

### CTA BUTTONS

Get a Quote:
→ scroll to form OR contact page

Call Now:
→ tel:+14254461638

Email:
→ mailto:agavewelding@gmail.com

---

### FORBIDDEN

* href="#"
* empty links
* untested JS buttons

---

### REQUIRED

Every clickable element must be tested manually.

---

# 📱 MOBILE RULES

Mobile is primary.

Must:

* be responsive
* no overflow
* readable text
* tappable buttons
* visible CTA
* working menu
* clean form inputs

---

# 🧪 INTERACTION VERIFICATION

Before completion:

## TEST EVERYTHING

Navigation:

* links work
* scroll works

Buttons:

* all CTAs work

Form:

* submits successfully
* no redirect
* success message appears
* error handling works
* resets after submit

Contact:

* phone opens dialer
* email opens mail

---

## CONSOLE CHECK

* no JS errors
* no failed requests

---

# 🚫 HARD STOP RULE

DO NOT COMPLETE if:

* form redirects
* form does not submit
* no success message
* buttons don’t work
* links are broken
* mobile layout breaks
* console errors exist

---

# 🧠 SEO RULES

Each page must include:

* title tag
* meta description
* H1
* internal links
* alt text

---

# ⚡ PERFORMANCE RULES

* fast loading
* optimized images
* minimal JS
* no heavy animations

---

# 🏁 FINAL STANDARD

Before shipping:

* does it convert?
* does it feel real?
* does everything work?
* is mobile clean?
* is nothing broken?

If not → fix it

```

---

# ⚡ You’re Now Running a Real System

This isn’t just a “site guide” anymore.

This is:
- execution system ✅  
- QA system ✅  
- conversion system ✅  
- dev checklist ✅  

---

If you want next step, I’d build:

- **Auto QA Claude prompt (tests site instantly)**
- **n8n → form → CRM pipeline**
- **auto demo builder using this system**

That’s where this becomes unfair advantage.
```
