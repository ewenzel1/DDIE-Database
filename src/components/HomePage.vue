<template>
  <div class="hello">
    <div>
      <h2>Search Committee Resources</h2>
      <p>The following are a working list of suggested resources compiled by the Division of Diverse and<br>
      Inclusive Excellence for publicizing available openings at KSU.</p>
    </div>

    <a target="_blank" :href="link"><button v-on:click="getHref">Click Me!</button></a>
    <!-- <a v-bind:href="a.href" :key="index" v-bind:class="[link]" v-for="(a, index) in getHref">{{ a.link }}</a> -->
    <!-- <form class="searchform" action="action_page.php">
      <input type="text" placeholder="Search.." name="search" class="searchbar">
      <button type="submit" class="searchbtn">Search</button>
    </form> -->
  </div>
</template>

<script>
import { LINKS } from "../firebase.js"
export default {
  name: 'HomePage',
  data() {
    return {
      link: "https://www.awaplusd.org/"
    }
  },
  methods: {
    async getHref () {
      await LINKS.get().then(querySnapshot => 
        querySnapshot.forEach(doc => {
          if (doc.id === "Architecture_Construction") {
            const data = doc.data();
            console.log(data.testField);
            return data.textField;
          }
        })
      );
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
