<template>
  <Layout>
    <section class="page-section page-section--header">
      <div class="grid">
        <div class="grid__item">
          <h1>Get in Touch</h1>
          <p>Have a question about something you see on this website? Fill out this contact form or email me directly at  <a href="javascript:location='mailto:\u0068\u0065\u0061\u0074\u0068\u0065\u0072\u0040\u0068\u0065\u0061\u0074\u0068\u0065\u0072\u0074\u006f\u0076\u0065\u0079\u002e\u0063\u006f\u006d';void 0" id="obfuscatedEmail">{{obfuscateEmail()}}</a>
          </p>
        </div>
      </div>
    </section>
    <section class="page-section">
      <div class="grid justify-center">
        <div class="form-wrapper grid__item large--8">
          <form
            name="contact"
            method="post"
            v-on:submit.prevent="handleSubmit"
            action="/thank-you/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>
                Don’t fill this out: <input name="bot-field" />
              </label>
            </p>
            <div class="sender-info">
              <div>
                <label for="name" class="label" >Your name</label>
                <input type="text" name="name" v-model="formData.name" />
              </div>
              <div>
                <label for="email">Your email</label>
                <input type="email" name="email" v-model="formData.email" />
              </div>
              <div>
                <label for="email">Your subject</label>
                <input type="text" name="subject" v-model="formData.subject" />
              </div>
            </div>

            <div class="message-wrapper">
              <label for="message">Message</label>
              <textarea name="message" v-model="formData.message"></textarea>
            </div>

            <button type="submit" class="button">Submit form</button>
          </form>
        </div>
      </div>
    </section>
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
    obfuscateEmail() {
        return '\u0068\u0065\u0061\u0074\u0068\u0065\u0072\u0040\u0068\u0065\u0061\u0074\u0068\u0065\u0072\u0074\u006f\u0076\u0065\u0079\u002e\u0063\u006f\u006d';
    },
    encode(data) {
      return Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')
    },
    handleSubmit(e) {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: this.encode({
          'form-name': e.target.getAttribute('name'),
          ...this.formData,
        }),
      })
      .then(() => this.$router.push('/thank-you'))
      .catch(error => alert(error))
    }
  },
  data() {
    return {
      formData: {},
    }
  }
};
</script>