<template>
  <div id="page-container">
    <div>
      <h2>Search Committee Resources</h2>
      <p>The following are a working list of suggested resources compiled by the Division of Diverse and<br>
      Inclusive Excellence for publicizing available openings at KSU.</p>
    </div>
    <input 
      type="text"
      v-model="currentInput"
      @input="updatePage()"
    >
    <div id="main-container" v-if="hasContent">
      <div v-for="(section, index) in sections" :key="index">
        <h3>{{section.header}}</h3>
        <div class="long">
          <a v-for="(link, name, index) in section.links" target="_blank" :href="link" :key="index">{{name}}</a>
        </div>
      </div>
    </div>
    <div v-else>
      <p>There is no content that matches that search</p>
    </div>
  </div>
</template>

<script>
import { LINKS } from "../firebase.js"
export default {
  name: 'HomePage',
  data() {
    return {
      links: [],
      architectureConstruction: [],
      arts: [],
      financeBusiness: [],
      disabilitiesProtectedveterans: [],
      informationTechnology: [],
      regionalResources: [],
      mathScience: [],
      nursing: [],
      studentAffairs: [],
      sections: [],
      currentInput: '',
      hasContent: true
    }
  },
  mounted() {
    this.getHrefs()
  },
  methods: {
    async getHrefs () {
      var sectionsOfWebpage = [];
      var linksFromDatabase = [];
      var docIDs = [];
      await LINKS.get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const data = doc.data();
          const arr = Object.entries(data);
          const filteredArr = arr.filter(([key]) => key.toUpperCase().includes(this.currentInput.toUpperCase()))
          const filteredData = Object.fromEntries(filteredArr)
          docIDs.push(doc.id);
          linksFromDatabase.push(filteredData);
          
        })
      })
      this.links = linksFromDatabase;
      for (var i = 0; i < this.links.length; i++) {
        if (!Object.keys(this.links[i]).length == 0) {
          sectionsOfWebpage.push({
            header: docIDs[i],
            links: this.links[i]
          })
        }
      }
      Object.keys(sectionsOfWebpage).length == 0 ? this.hasContent = false : this.hasContent = true;
      this.sections = sectionsOfWebpage;
    },
    updatePage() {
      this.getHrefs()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#main-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  grid-template-rows: 1fr 1fr 1fr;
  gap: 20px;
  height: calc(100vh - 10px);
}
a {
    display: block;
    padding-bottom: 5px;
    text-decoration: none;
}

a:hover{
  color: pink;
}

.long {
  /* max-height: 500px; */
  overflow-y: scroll;
  height: 30%;
}
</style>
