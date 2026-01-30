import aboutStyles from "./about.module.css";

export default function AboutPage() {
  return (
    <>
      <div className={aboutStyles.about_us_main}>
        <h2>About Neon Game Reviews & Social</h2>
        <p>
          Neon Game Reviews is a community dedicated to reviewing games, modding
          and connecting us together through shared interests.
        </p>
      </div>
    </>
  );
}
