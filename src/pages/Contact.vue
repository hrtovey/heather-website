<template>
  <Layout>
    <div class="grid">
      <div class="grid__item large--6">
        <h1>Get in Touch</h1>
        <p>Have a question about something you see on this website? Fill out this contact form or email me directly at <a href="javascript:location='mailto:\u0068\u0065\u0061\u0074\u0068\u0065\u0072\u0040\u0068\u0065\u0061\u0074\u0068\u0065\u0072\u0074\u006f\u0076\u0065\u0079\u002e\u0063\u006f\u006d';void 0" id="obfuscatedEmail">{{obfuscateEmail()}}</a>
        </p>
      </div>
      <div class="form-wrapper grid__item large--6">
        <form
          class="form"
          action="https://docs.google.com/forms/u/1/d/e/1FAIpQLSdvWgdcBGiEkEOr7bU3cguQPg1T1Tdggp6hexO3u-NpKsrZ6A/formResponse"
          method="post"
          @submit="processForm"
        >
          <ol class="form-list">
            <li>
              <div class="input-wrapper">
                <label class="label" for="fullName">Your Name</label>
                <input
                  class="form__input"
                  type="text"
                  name="entry.1918602153"
                  id="fullName"
                  required
                />
              </div>
            </li>
            <li>
              <div class="input-wrapper">
                <label class="label" for="email">Your Email</label>
                <input
                  class="form__input"
                  type="email"
                  name="entry.1818087617"
                  id="email"
                  required
                />
              </div>
            </li>
            <li>
              <div class="input-wrapper">
                <label class="label" for="subject">Your Subject</label>
                <input
                  class="form__input"
                  type="text"
                  name="entry.537179835"
                  id="subject"
                  required
                />
              </div>
            </li>
            <li>
              <div class="input-wrapper">
                <label class="label" for="message">Your Message</label>
                <textarea
                  class="form__input"
                  name="entry.1099061782"
                  id="message"
                  required
                ></textarea>
              </div>
            </li>
          </ol>
          <input class="button button--submit" type="submit" value="Send Message" />
        </form>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Contact",
    bodyAttrs: {
      class: "page--contact",
    },
  },
  methods: {
    processForm() {
      this.$router.push("/");
    },
    obfuscateEmail() {
        return '\u0068\u0065\u0061\u0074\u0068\u0065\u0072\u0040\u0068\u0065\u0061\u0074\u0068\u0065\u0072\u0074\u006f\u0076\u0065\u0079\u002e\u0063\u006f\u006d';
    }
  },
};
</script>