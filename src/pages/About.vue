<template>
  <Layout>
        <section class="page-section page-section--header">
            <div class="grid">
                <h1 class="grid__item">About Me</h1>
            </div>
        </section>
    <section class="page-section page-section--narrow hug--top">
        <div class="grid">
            <div class="grid__item">
                <p>Hello and welcome!</p>
                <p>My name is Heather Tovey, and I create all of the content and resources here at heathertovey.com. I'm a self-taught developer (with thanks to the many resources that other developers have created), and I love teaching and sharing resources. I'm currently a Front-End Developer at <a href="https://www.iamota.com/" target="_blank">iamota</a>, a Shopify Plus Design &amp; Development agency.</p>
                <div>
                    <g-image src="~/assets/images/heather_teaching.jpg" />
                </div>
            </div>
        </div>
    </section>
    <section class="page-section page-section--narrow">
        <div class="grid">
            <div class="grid__item">
                <h2>My Coding Journey</h2>
                <p>I didn't start out in the field of technology. It wasn't something I realized I could even do. Had it been on my radar, I may have chosen a career path in computer science. But I didn't own a computer or have reliable internet access until I was already enrolled in university.</p>
                <p>Instead, I earned my BA in Psychology at Agnes Scott College (which has given me a useful perspective on user experience). Even then, I tended to gravitate toward online communities. I distinctly remember learning just enough CSS in order to style my LiveJournal blog.</p>
                <p>I pursued a career in Psychology after I graduated and I even briefly attended a PhD program. But on the side, I kept exploring the world of web development.</p>
                <div>
                    <g-image style="display:block;margin-left:auto;margin-right:auto;" src="~/assets/images/heather_mentorship.jpg" />
                </div>
                <p>At the time, I thought I was too old (as if there is such a thing) and too far behind to get into web dev. But luckily, with encouragement from friends and family, I decided to pursue it for real.</p>
                <p>I joined the local Ladies Learning Code community, and started actively learning. I realized that there are a lot of people learning to code and changing careers every day. So about 10 years ago, I transitioned into a career of web development.</p>
                <p>Since then, I've freelanced remotely for several years. I've worked with designers and agencies around the world to bring custom coding and development know-how to their projects.</p>
                <p>I started giving back to the community by mentoring and leading workshops for Canada Learning Code. I've taught and written curriculum for the Fast Track web dev bootcamp at the Southern Alberta Institute of Technology(SAIT). And now, I'm working at a wonderful agency that specializes in Shopify Plus for enterprise merchants.</p>
            </div>
        </div>
    </section>
    <section class="page-section page-section--narrow">
        <div class="grid">
            <div class="grid__item">
                <h2>This Site Is For You</h2>
                <p>If you've ever thought that it's too late to transition into a career in web development or if you feel like you're too far behind, this site is for you. If you're confused about where to get started or how to keep up the momentum, this site is for you!</p>
                <div>
                    <g-image src="~/assets/images/heather_mentoring.jpg" />
                </div>
                <p>I love teaching and mentoring, and I want to give you the benefit of my experience.</p>
                <p>This site is specifically for aspiring, junior, and intermediate web developers interested in the Shopify platform.</p>
                <p>Though some topics will overlap with other web dev niches or skills, my main goal is to get you up and running with Shopify. I'll cover plenty of material on the following topics:</p>
                <div>
                    <ul>
                        <li>Getting started on the Shopify platform as a developer.</li>
                        <li>Career advice for both those seeking a job at an agency and for freelancers.</li>
                        <li>Some beginner web dev resources to help get you up-to-speed more quickly.</li>
                        <li>Productivity tips.</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <section class="page-section">
        <div class="grid">
            <div class="grid__item">
                <h2>Stay Up to Date</h2>
                <p>If you're happy with what you see so far, consider signing up for my newsletter. I'll send you weekly updates about what I'm creating as well as useful web development and Shopify resources.</p>
            </div>
        </div>
    </section>
    <section class="page-section">
      <div class="grid">
            <div class="grid__item">
                <h2>Side Projects</h2>
                <p>I like building out resources and working on side projects. Here's a few of my most recent ones.</p>
            </div>
      </div>
      <div class="cards-list grid align-stretch">
        <div class="card grid__item medium--6 large--4 card--image">
          <a class="card__link" href="https://getdesignresources.com/">
            <div class="card__image">
              <g-image src="~/assets/images/getdesignresourcespattern.png" quality='100' />
            </div>
            <div class="card__info">
              <h3 class="card__title">Get Design Resources</h3>
              <div class="card__description">
                <p>A curated collection of 100+ useful resources for web design and development. Maintained by me. 🙂</p>
              </div>
            </div>
          </a>
        </div>
        <div class="card grid__item medium--6 large--4 card--image">
          <g-link class="card__link" to="/squarespace-id-finder">
            <div class="card__image">
              <g-image src="~/assets/images/sqs-extension.png" />
            </div>
            <div class="card__info">
              <h3 class="card__title">Squarespace ID Finder</h3>
              <div class="card__description">
                <p>Quickly and easily select Squarespace collection, section, index, and block ids. Available on Chrome, Firefox, and as a bookmarklet.</p>
              </div>
            </div>
          </g-link>
        </div>
        <div class="card grid__item medium--6 large--4 card--image">
          <g-link class="card__link" to="/product/squarespace-blog-footer-plugin/">
            <div class="card__image">
              <g-image src="~/assets/images/blog-footer-plugin-1.png" />
            </div>
            <div class="card__info">
              <h3 class="card__title">Blog CTA Plugin</h3>
              <div class="card__description">
                <p>A Squarespace plugin to add a consistent footer to the blog posts of your choice. Edit the footer in one place instead of editing every post.</p>
              </div>
            </div>
          </g-link>
        </div>
      </div>
    </section>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'About',
    bodyAttrs: {
      class: 'page--about'
    }
  },
  methods: {
  }
}
</script>