import contactStyles from "./contact.module.css";

export default function ContactPage() {
  return (
    <>
      <div className={contactStyles.contact_us_div}>
        <h2>Contact Us!</h2>
        <p>
          To contact us about any concerns, submitting news or anything else,
          send us an email at contact@neongamereviews.com . Much
          appreciated!{" "}
        </p>
      </div>
    </>
  );
}
