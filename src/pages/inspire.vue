<template lang="pug">
  v-layout(
    column
    justify-center
    align-center
  )
    v-flex.text-xs-center
      .my-5
        nuxt-logo
        vuetify-logo
      blockquote.blockquote
        | &#8220;First, solve the problem. Then, write the code.&#8221;
        footer
          small
            em(v-html="'&mdash;John Johnson'")
</template>
