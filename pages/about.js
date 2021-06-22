import styles from '../styles/About.module.css';


export default function About() {
  return (
    <main>
      <p>Hi, I'm Ryan. I've been building software professionally for 20 years and I love it. My wife and I live near <a href="https://goo.gl/maps/S1iQt7eKnPqfNFmc8">Dayton, Ohio</a>, raising our 4 kids. We love the mountains, hiking, paddle boarding, and all sports.</p>

      <img
        className={styles["theFam--img"]}
        src="/images/the-fam.webp"
        alt="Me, my wife, and our 4 kids in a close-up selfie while hiking" />

      <p>After a 15 year career in software development consulting, I've spent the last 7 years, leading the incredible development team at <a href="https://sparkbox.com">Sparkbox</a>. Over that time, we've delivered software for some of the biggest faces on the internet. Armed with some of the most talented web designers and developers in the industry, my role has been to lead technical strategy, team growth and composition, and put our team in a position to be successful.</p>

      <p>As a leader, my super power is breaking down complex problems, articulating vision, and ensuring systems exist to let talented people do great things.</p>

      <p>As a developer, my mission has always been to help teams build momentum through collaboration and solid engineering practices. The book <a href="https://www.amazon.com/Accelerate-Software-Performing-Technology-Organizations/dp/1942788339">Accelerate</a> resonates with my experiences creating build and delivery pipelines, testable code, and flexible architectures. I also have seen, first hand, the incredible impact that humility, empathy, and open mindedness can have when prevalent in a team.</p>
    </main>
  );
}
