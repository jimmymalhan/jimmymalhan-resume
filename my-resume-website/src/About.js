import React from 'react';
import './About.css'; // Import the CSS file for styling

function About() {
  return (
    <div className="about-container"> {/* Apply a class for styling */}
      <h2>About Me</h2>
      <p>
        Welcome to my website! I'm Jimmy Malhan, and I'm passionate about software development, leadership, and innovation. Here, you'll find insights into my professional journey and the skills I've honed over the years.
      </p>

      <p>
        Based in Tarzana, CA, I've had the privilege of working on a wide range of projects and leading teams to success. My email is <a href="mailto:jimmymalhan999@gmail.com">jimmymalhan999@gmail.com</a>, and you can connect with me on LinkedIn at <a href="https://www.linkedin.com/in/jimmymalhan/">https://www.linkedin.com/in/jimmymalhan/</a>. Feel free to explore my GitHub profile at <a href="https://github.com/jimmymalhan">https://github.com/jimmymalhan</a>. You can also visit my personal website at <a href="www.skillme.site">www.skillme.site</a> to learn more about me.
      </p>

      <h3>Highlights</h3>
      <ul>
        <li>
          A Good Stretch in the software industry over 15 years building software from scratch and scaling it from 1 to 100. I've delved into infrastructure, platform, and data, making them dance together in perfect rhythm. It’s been a journey filled with learning curves, high-fives, and plenty of caffeine.
        </li>
        <li>
          I've dabbled in AI and ML for the past 5 years, opening doors to a whole new playground. We sprinkled some machine learning magic to make our systems smarter and more intuitive.
        </li>
        <li>
          Getting cozy with AWS and Kubernetes cookie jars, tweaking and tuning to cut down costs and make deployments glide smoother by 25%.
        </li>
        <li>
          On the Cross-Functional Collaboration front, I've bridged gaps between engineering, product, and operations, ensuring seamless project executions and fostering a culture of open communication and collective problem-solving.
        </li>
        <li>
          As a Continuous Improvement Advocate, I initiated a Continuous Improvement culture, reducing system downtimes by 40% through tech lead initiatives (case-sensitive to tech debt) and fostering a learning environment.
        </li>
        <li>
          A quick highlight of my career is my startup, AdvancePay, that I exited earlier this year.
        </li>
      </ul>

      <p>
        I am someone who not only revels in complex technical challenges but also values the power of teamwork in generating sustainable solutions and driving forward innovation. I am happy to answer any questions as you see fit.
      </p>
    </div>
  );
}

export default About;
