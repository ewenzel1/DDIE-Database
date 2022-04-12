<template>
<div class="site_wrapper">
         <div id="header" role="banner">
            <div class="inner_rim">
               <div class="logo_container medium">
<a href="https://www.kennesaw.edu">
	<img src="https://webstatic.kennesaw.edu/_omni/images/global/logo_mobile.png?v=1" alt="Kennesaw State University" class="mobile_logo">
	<img src="https://webstatic.kennesaw.edu/_omni/images/global/logo_black.png?v=1" alt="Kennesaw State University" class="print_logo">
</a>
                  <div class="top"><a href="https://www.kennesaw.edu">Kennesaw State University
                        <div class="logo"></div></a><p class="site_title"><a href="/">Division of Diverse and Inclusive Excellence</a></p>
                  </div>
                  <div class="bottom"></div>
               </div>
<form class="search" action="https://ksusearch.kennesaw.edu/s/search.html?collection=kennesaw-search">
	<label for="search">Search KSU</label>
	<input type="hidden" name="collection" value="kennesaw-search">
	<input type="text" name="query" placeholder="KSU Search">
	<input type="submit" value="SEARCH">
	<div class="clear"></div>
 </form>
<div id="header_nav">
	<ul class="utility">
		<li><a href="https://www.kennesaw.edu/myksu/">MyKSU</a></li>
		<li><a href="https://www.kennesaw.edu/azindex/">A-Z Index</a></li>
		<li><a href="https://www.kennesaw.edu/directories.php">Directories</a></li>
		<li><a href="https://www.kennesaw.edu/maps/">Campus Maps</a></li>
	</ul>
	<ul class="active">
		<li><a href="https://www.kennesaw.edu/apply.php">Apply</a></li>
		<li><a href="https://www.kennesaw.edu/visit.php">Visit</a></li>
		<li><a href="https://www.kennesaw.edu/give.php">Give</a></li>
	</ul>
</div>
            </div>
         </div>
         <div id="gold_bar" role="navigation" aria-label="Main">

<ul id="throne_room">
	<li id="search">
		<img src="https://webstatic.kennesaw.edu/_omni/images/global/search.png" alt="Search" /> 
		<span>Search</span>
	</li>		
	<li id="menu">
		<img src="https://webstatic.kennesaw.edu/_omni/images/global/menu.png" alt="Menu" /> 
		<span>Menu</span>
	</li>
</ul>
<ul id="high_council_chamber">
	<li><a href="https://www.kennesaw.edu/about">About KSU</a></li>
	<li><a href="https://www.kennesaw.edu/academics.php">Academics</a></li>
	<li><a href="https://www.kennesaw.edu/admissions.php">Admissions</a></li>
	<li><a href="https://www.kennesaw.edu/athletics.php">Athletics</a></li>
	<li><a href="https://www.kennesaw.edu/campuslife.php">Campus Life</a></li>
	<li><a href="https://www.kennesaw.edu/research.php">Research</a></li>
	<li><a href="https://www.kennesaw.edu/global.php">Global</a></li>
</ul>


<ul id="mobile_high_council_chamber"><li><a href="/">Home</a></li><li><a href="/about/index.php">About</a><div class="plus_wrapper icon open-icon"><span class="vertical"></span><span class="horizontal"></span></div><ul class="second_tier"><li><a href="/about/cdo-welcome.php">Chief Diversity Officer Welcome</a></li><li><a href="/about/staff.php">Staff</a></li><li><a href="/about/mission-statement.php">Mission&nbsp;and Vision</a></li><li><a href="/about/defining.php">Defining Diversity and Inclusion</a></li><li><a href="/about/contact.php">Contact</a></li></ul></li><li><a href="/awards-sponsorships/awards-funding.php">Awards</a></li><li><a href="/events.php">Events</a></li></ul></div>
         <div class="mobile_search">
<form action="https://ksusearch.kennesaw.edu/s/search.html?collection=kennesaw-search">
	<label for="search">Search KSU</label>
	<input type="hidden" name="collection" value="kennesaw-search">
	<input type="text" name="query" placeholder="KSU Search">
	<input type="submit" value="SEARCH">
	<div class="clear"></div>
 </form></div>
         <div id="banner" class="no_img">
 
               
            <div class="inner_rim">
               <div class="bread_crumb">
                  <li><a href="/">Division of Inclusive Excellence and Diversity</a></li>
                  <li>/</li>
                  <li>Search Committee</li>
               </div>
            </div>
         </div>
         <div class="page_wrapper">
            <div class="inner_rim page">
               <div class="sidebar left">
                  <div class="secondary_nav"><ul><li><a href="/">Home</a></li><li><a href="#">About</a><div class="plus_wrapper icon open-icon"><span class="vertical"></span><span class="horizontal"></span></div><ul class="second_tier"><li><a href="/about/cdo-welcome.php">Chief Diversity Officer Welcome</a></li><li><a href="/about/staff.php">Staff</a></li><li><a href="/about/mission-statement.php">Mission&nbsp;and Vision</a></li><li><a href="/about/defining.php">Defining Diversity and Inclusion</a></li><li><a href="/about/contact.php">Contact</a></li></ul></li><li><a href="/awards-sponsorships/awards-funding.php">Awards</a></li><li><a href="/events.php">Events</a></li></ul></div> 	
               </div>
               <div class="content">
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
<p>&nbsp;</p>
               </div>
            </div>
         </div>
        
  <div id="footer" role="contentinfo">
	<div class="inner_rim">
		<div class="footer_columns">
			<div class="contact_info">
				<p id="footer_university_contact" class="title">University Contact Info</p>
				<div class="kennesaw_campus">
					<p id="footer_contact_kennesaw" class="subtitle">Kennesaw Campus</p>
					<p aria-labelledby="footer_university_contact footer_contact_kennesaw">1000 Chastain Road<br> Kennesaw, GA 30144</p>
					<p id="footer_contact_marietta" class="subtitle">Marietta Campus</p>
					<p aria-labelledby="footer_university_contact footer_contact_marietta">1100 South Marietta Pkwy<br> Marietta, GA 30060</p></div>
				<div class="marietta_campus">
					<p class="subtitle">Phone</p>
					<p style="margin-top: 0">470-KSU-INFO<br/>(470-578-4636)</p>
					<p style="margin-top: 0"><a href="https://kennesaw.edu/info">kennesaw.edu/info</a></p>
				</div>
			</div>
			<div>
				<p id="footer_information_for" class="title">Information For</p>
				<ul aria-labelledby="footer_information_for">
					<li><a href="https://www.kennesaw.edu/currentstudents.php">Current Students</a></li>
					<li><a href="https://www.kennesaw.edu/futurestudents.php">Future Students</a></li>
					<li><a href="https://www.kennesaw.edu/facultystaff.php">Faculty &amp; Staff</a></li>
					<li><a href="https://www.kennesaw.edu/communityvisitors.php">Community &amp; Visitors</a></li>
					<li><a href="https://www.kennesaw.edu/alumnifriends.php">Alumni &amp; Friends</a></li>
					<li><a href="https://www.kennesaw.edu/businessindustry.php">Business &amp; Industry</a></li>
				</ul>
			</div>
			<div>
				<p id="footer_our_initiatives" class="title">Our Initiatives</p>
				<ul aria-labelledby="footer_our_initiatives">
					<li><a href="https://dga.kennesaw.edu/">Global Affairs</a></li>
					<li><a href="https://diversity.kennesaw.edu/">Diversity &amp; Inclusion</a></li>
					<li><a href="https://communityengagement.kennesaw.edu">Community Engagement</a></li>
					<li><a href="https://sustainability.kennesaw.edu">Sustainability</a></li>
					<li><a href="https://learnonline.kennesaw.edu/">Online Learning</a></li>
				</ul>
			</div>
			<div>
				<p id="footer_related_links" class="title">Related Links</p>
				<ul aria-labelledby="footer_related_links">
					<li><a href="https://library.kennesaw.edu">Libraries</a></li>
					<li><a href="https://www.kennesaw.edu/arts.php">Arts, Culture and Museums</a></li>
					<li><a href="https://hr.kennesaw.edu/careers.php">Job Opportunities</a></li>
					<li><a href="https://www.kennesaw.edu/majorsprograms.php">Degrees, Majors &amp; Programs</a></li>
					<li><a href="https://financialaid.kennesaw.edu/">Financial Aid</a></li>
					<li><a href="https://registrar.kennesaw.edu/">Registrar</a></li>
					<li><a href="https://ksuhousing.kennesaw.edu/">Housing</a></li>
				</ul>
			</div>
		</div>
		<hr class="meta_separator" />
		<div class="footer_meta">
			<div class="links">
				<p><a href="https://www.kennesaw.edu/privacy.php">Privacy Statement</a> / <a href="https://www.kennesaw.edu/accreditation.php">Accreditation</a> / <a href="https://www.kennesaw.edu/advisories/">Advisories</a> / <a href="https://www.kennesaw.edu/hotline/">Reporting Hotline</a> / <a href="https://legal.kennesaw.edu/open_records_requests.php">Open Records</a> / <a href="https://gbi.georgia.gov/human-trafficking-notice" target="_blank">Human Trafficking Notice</a> / <a href="https://www.kennesaw.edu/feedback.php">Feedback</a> / <a href="https://assistive.usablenet.com/tt/diversity.kennesaw.edu/search-committee/">Text Only</a></p>
			</div>
			<!-- OU Campus Direct Edit Button -->
			<div class="copyright">
				<p><span id="directedit">©</span> 2022 Kennesaw State University. All Rights Reserved.</p>
			</div>
			<div class="social_media"><a href="https://www.facebook.com/KennesawStateUniversity"><img src="https://webstatic.kennesaw.edu/_omni/images/global/social/facebook_round.png" alt="Facebook" /></a> <a href="https://twitter.com/kennesawstate"><img src="https://webstatic.kennesaw.edu/_omni/images/global/social/twitter_round.png" alt="Twitter" /></a> <a href="https://www.linkedin.com/company/kennesaw-state-university"><img src="https://webstatic.kennesaw.edu/_omni/images/global/social/linkedin_round.png" alt="LinkedIn" /></a> <a href="https://instagram.com/kennesawstateuniversity"><img src="https://webstatic.kennesaw.edu/_omni/images/global/social/instagram_round.png" alt="Instagram" /></a> <a href="https://www.youtube.com/user/KennesawStatenow"><img src="https://webstatic.kennesaw.edu/_omni/images/global/social/youtube_round.png" alt="Youtube" /></a></div>
		</div>
	</div>
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
  grid-gap: 0;
  margin: 0;
  margin: 0;
}

#long{
  display: list-item;  
}

a {
    color: #00708d;
    text-decoration: none
}

a:hover {
    color: #febc11
}

a.black {
    color: #000
}

a.black:hover {
    color: #00708d
}

.clear {
    clear: both
}

html {
    font-size: 1em;
    -webkit-font-smoothing: subpixel-antialiased;
}

body {
    margin: 0;
    padding: 0;
    font-family: Nunito,Arial,Helvetica,sans-serif;
    font-weight: 300;
    font-size: 19.2px;
    font-size: 1.2rem
}

#banner .banner_text .title,#banner .banner_text h1,.cantina .title,.fleet .title,.fleet h3,.footer_columns .subtitle,.footer_columns .title,.footer_columns h1,.footer_columns h2,.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6 {
    font-family: 'Roboto Condensed',sans-serif;
    font-weight: 300
}

.h1.lines,.h2.lines,.h3.lines,.h4.lines,.h5.lines,.h6.lines,h1.lines,h2.lines,h3.lines,h4.lines,h5.lines,h6.lines {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center
}

.h1.lines::after,.h1.lines::before,.h2.lines::after,.h2.lines::before,.h3.lines::after,.h3.lines::before,.h4.lines::after,.h4.lines::before,.h5.lines::after,.h5.lines::before,.h6.lines::after,.h6.lines::before,h1.lines::after,h1.lines::before,h2.lines::after,h2.lines::before,h3.lines::after,h3.lines::before,h4.lines::after,h4.lines::before,h5.lines::after,h5.lines::before,h6.lines::after,h6.lines::before {
    content: "";
    border-top: 4px solid #febc11;
    flex: auto;
    margin-left: 40px;
    margin-top: .15em;
    max-width: 100px
}

.h1.lines::before,.h2.lines::before,.h3.lines::before,.h4.lines::before,.h5.lines::before,.h6.lines::before,h1.lines::before,h2.lines::before,h3.lines::before,h4.lines::before,h5.lines::before,h6.lines::before {
    margin-left: 0;
    margin-right: 40px
}

.h1.lines.med_lines::after,.h1.lines.med_lines::before,.h2.lines.med_lines::after,.h2.lines.med_lines::before,.h3.lines.med_lines::after,.h3.lines.med_lines::before,.h4.lines.med_lines::after,.h4.lines.med_lines::before,.h5.lines.med_lines::after,.h5.lines.med_lines::before,.h6.lines.med_lines::after,.h6.lines.med_lines::before,h1.lines.med_lines::after,h1.lines.med_lines::before,h2.lines.med_lines::after,h2.lines.med_lines::before,h3.lines.med_lines::after,h3.lines.med_lines::before,h4.lines.med_lines::after,h4.lines.med_lines::before,h5.lines.med_lines::after,h5.lines.med_lines::before,h6.lines.med_lines::after,h6.lines.med_lines::before {
    max-width: 250px
}

.h1.lines.full_lines::after,.h1.lines.full_lines::before,.h2.lines.full_lines::after,.h2.lines.full_lines::before,.h3.lines.full_lines::after,.h3.lines.full_lines::before,.h4.lines.full_lines::after,.h4.lines.full_lines::before,.h5.lines.full_lines::after,.h5.lines.full_lines::before,.h6.lines.full_lines::after,.h6.lines.full_lines::before,h1.lines.full_lines::after,h1.lines.full_lines::before,h2.lines.full_lines::after,h2.lines.full_lines::before,h3.lines.full_lines::after,h3.lines.full_lines::before,h4.lines.full_lines::after,h4.lines.full_lines::before,h5.lines.full_lines::after,h5.lines.full_lines::before,h6.lines.full_lines::after,h6.lines.full_lines::before {
    max-width: none
}

.h1.lines.right,.h2.lines.right,.h3.lines.right,.h4.lines.right,.h5.lines.right,.h6.lines.right,h1.lines.right,h2.lines.right,h3.lines.right,h4.lines.right,h5.lines.right,h6.lines.right {
    justify-content: flex-end
}

.h1.lines.right::after,.h2.lines.right::after,.h3.lines.right::after,.h4.lines.right::after,.h5.lines.right::after,.h6.lines.right::after,h1.lines.right::after,h2.lines.right::after,h3.lines.right::after,h4.lines.right::after,h5.lines.right::after,h6.lines.right::after {
    display: none
}

.h1.lines.left,.h2.lines.left,.h3.lines.left,.h4.lines.left,.h5.lines.left,.h6.lines.left,h1.lines.left,h2.lines.left,h3.lines.left,h4.lines.left,h5.lines.left,h6.lines.left {
    justify-content: flex-start
}

.h1.lines.left::before,.h2.lines.left::before,.h3.lines.left::before,.h4.lines.left::before,.h5.lines.left::before,.h6.lines.left::before,h1.lines.left::before,h2.lines.left::before,h3.lines.left::before,h4.lines.left::before,h5.lines.left::before,h6.lines.left::before {
    display: none
}

.h1.lines.line_gold::after,.h1.lines.line_gold::before,.h2.lines.line_gold::after,.h2.lines.line_gold::before,.h3.lines.line_gold::after,.h3.lines.line_gold::before,.h4.lines.line_gold::after,.h4.lines.line_gold::before,.h5.lines.line_gold::after,.h5.lines.line_gold::before,.h6.lines.line_gold::after,.h6.lines.line_gold::before,h1.lines.line_gold::after,h1.lines.line_gold::before,h2.lines.line_gold::after,h2.lines.line_gold::before,h3.lines.line_gold::after,h3.lines.line_gold::before,h4.lines.line_gold::after,h4.lines.line_gold::before,h5.lines.line_gold::after,h5.lines.line_gold::before,h6.lines.line_gold::after,h6.lines.line_gold::before {
    border-color: #ffc629
}

.h1.lines.line_black::after,.h1.lines.line_black::before,.h2.lines.line_black::after,.h2.lines.line_black::before,.h3.lines.line_black::after,.h3.lines.line_black::before,.h4.lines.line_black::after,.h4.lines.line_black::before,.h5.lines.line_black::after,.h5.lines.line_black::before,.h6.lines.line_black::after,.h6.lines.line_black::before,h1.lines.line_black::after,h1.lines.line_black::before,h2.lines.line_black::after,h2.lines.line_black::before,h3.lines.line_black::after,h3.lines.line_black::before,h4.lines.line_black::after,h4.lines.line_black::before,h5.lines.line_black::after,h5.lines.line_black::before,h6.lines.line_black::after,h6.lines.line_black::before {
    border-color: #2d2926
}

.h1.lines.line_slap_rock_gray::after,.h1.lines.line_slap_rock_gray::before,.h2.lines.line_slap_rock_gray::after,.h2.lines.line_slap_rock_gray::before,.h3.lines.line_slap_rock_gray::after,.h3.lines.line_slap_rock_gray::before,.h4.lines.line_slap_rock_gray::after,.h4.lines.line_slap_rock_gray::before,.h5.lines.line_slap_rock_gray::after,.h5.lines.line_slap_rock_gray::before,.h6.lines.line_slap_rock_gray::after,.h6.lines.line_slap_rock_gray::before,h1.lines.line_slap_rock_gray::after,h1.lines.line_slap_rock_gray::before,h2.lines.line_slap_rock_gray::after,h2.lines.line_slap_rock_gray::before,h3.lines.line_slap_rock_gray::after,h3.lines.line_slap_rock_gray::before,h4.lines.line_slap_rock_gray::after,h4.lines.line_slap_rock_gray::before,h5.lines.line_slap_rock_gray::after,h5.lines.line_slap_rock_gray::before,h6.lines.line_slap_rock_gray::after,h6.lines.line_slap_rock_gray::before {
    border-color: #b2b4b2
}

.h1.lines.line_white::after,.h1.lines.line_white::before,.h2.lines.line_white::after,.h2.lines.line_white::before,.h3.lines.line_white::after,.h3.lines.line_white::before,.h4.lines.line_white::after,.h4.lines.line_white::before,.h5.lines.line_white::after,.h5.lines.line_white::before,.h6.lines.line_white::after,.h6.lines.line_white::before,h1.lines.line_white::after,h1.lines.line_white::before,h2.lines.line_white::after,h2.lines.line_white::before,h3.lines.line_white::after,h3.lines.line_white::before,h4.lines.line_white::after,h4.lines.line_white::before,h5.lines.line_white::after,h5.lines.line_white::before,h6.lines.line_white::after,h6.lines.line_white::before {
    border-color: #fff
}

.h1.lines.line_marietta_blue::after,.h1.lines.line_marietta_blue::before,.h2.lines.line_marietta_blue::after,.h2.lines.line_marietta_blue::before,.h3.lines.line_marietta_blue::after,.h3.lines.line_marietta_blue::before,.h4.lines.line_marietta_blue::after,.h4.lines.line_marietta_blue::before,.h5.lines.line_marietta_blue::after,.h5.lines.line_marietta_blue::before,.h6.lines.line_marietta_blue::after,.h6.lines.line_marietta_blue::before,h1.lines.line_marietta_blue::after,h1.lines.line_marietta_blue::before,h2.lines.line_marietta_blue::after,h2.lines.line_marietta_blue::before,h3.lines.line_marietta_blue::after,h3.lines.line_marietta_blue::before,h4.lines.line_marietta_blue::after,h4.lines.line_marietta_blue::before,h5.lines.line_marietta_blue::after,h5.lines.line_marietta_blue::before,h6.lines.line_marietta_blue::after,h6.lines.line_marietta_blue::before {
    border-color: #303ab2
}

.h1.lines.line_georgia_sky::after,.h1.lines.line_georgia_sky::before,.h2.lines.line_georgia_sky::after,.h2.lines.line_georgia_sky::before,.h3.lines.line_georgia_sky::after,.h3.lines.line_georgia_sky::before,.h4.lines.line_georgia_sky::after,.h4.lines.line_georgia_sky::before,.h5.lines.line_georgia_sky::after,.h5.lines.line_georgia_sky::before,.h6.lines.line_georgia_sky::after,.h6.lines.line_georgia_sky::before,h1.lines.line_georgia_sky::after,h1.lines.line_georgia_sky::before,h2.lines.line_georgia_sky::after,h2.lines.line_georgia_sky::before,h3.lines.line_georgia_sky::after,h3.lines.line_georgia_sky::before,h4.lines.line_georgia_sky::after,h4.lines.line_georgia_sky::before,h5.lines.line_georgia_sky::after,h5.lines.line_georgia_sky::before,h6.lines.line_georgia_sky::after,h6.lines.line_georgia_sky::before {
    border-color: #0090da
}

.h1.lines.line_green::after,.h1.lines.line_green::before,.h2.lines.line_green::after,.h2.lines.line_green::before,.h3.lines.line_green::after,.h3.lines.line_green::before,.h4.lines.line_green::after,.h4.lines.line_green::before,.h5.lines.line_green::after,.h5.lines.line_green::before,.h6.lines.line_green::after,.h6.lines.line_green::before,h1.lines.line_green::after,h1.lines.line_green::before,h2.lines.line_green::after,h2.lines.line_green::before,h3.lines.line_green::after,h3.lines.line_green::before,h4.lines.line_green::after,h4.lines.line_green::before,h5.lines.line_green::after,h5.lines.line_green::before,h6.lines.line_green::after,h6.lines.line_green::before {
    border-color: #43b02a
}

.h1.lines.line_purple::after,.h1.lines.line_purple::before,.h2.lines.line_purple::after,.h2.lines.line_purple::before,.h3.lines.line_purple::after,.h3.lines.line_purple::before,.h4.lines.line_purple::after,.h4.lines.line_purple::before,.h5.lines.line_purple::after,.h5.lines.line_purple::before,.h6.lines.line_purple::after,.h6.lines.line_purple::before,h1.lines.line_purple::after,h1.lines.line_purple::before,h2.lines.line_purple::after,h2.lines.line_purple::before,h3.lines.line_purple::after,h3.lines.line_purple::before,h4.lines.line_purple::after,h4.lines.line_purple::before,h5.lines.line_purple::after,h5.lines.line_purple::before,h6.lines.line_purple::after,h6.lines.line_purple::before {
    border-color: #402f8a
}

.h1.lines.line_leaning_man::after,.h1.lines.line_leaning_man::before,.h2.lines.line_leaning_man::after,.h2.lines.line_leaning_man::before,.h3.lines.line_leaning_man::after,.h3.lines.line_leaning_man::before,.h4.lines.line_leaning_man::after,.h4.lines.line_leaning_man::before,.h5.lines.line_leaning_man::after,.h5.lines.line_leaning_man::before,.h6.lines.line_leaning_man::after,.h6.lines.line_leaning_man::before,h1.lines.line_leaning_man::after,h1.lines.line_leaning_man::before,h2.lines.line_leaning_man::after,h2.lines.line_leaning_man::before,h3.lines.line_leaning_man::after,h3.lines.line_leaning_man::before,h4.lines.line_leaning_man::after,h4.lines.line_leaning_man::before,h5.lines.line_leaning_man::after,h5.lines.line_leaning_man::before,h6.lines.line_leaning_man::after,h6.lines.line_leaning_man::before {
    border-color: #f4633a
}

.h1.lines.line_honors_blue::after,.h1.lines.line_honors_blue::before,.h2.lines.line_honors_blue::after,.h2.lines.line_honors_blue::before,.h3.lines.line_honors_blue::after,.h3.lines.line_honors_blue::before,.h4.lines.line_honors_blue::after,.h4.lines.line_honors_blue::before,.h5.lines.line_honors_blue::after,.h5.lines.line_honors_blue::before,.h6.lines.line_honors_blue::after,.h6.lines.line_honors_blue::before,h1.lines.line_honors_blue::after,h1.lines.line_honors_blue::before,h2.lines.line_honors_blue::after,h2.lines.line_honors_blue::before,h3.lines.line_honors_blue::after,h3.lines.line_honors_blue::before,h4.lines.line_honors_blue::after,h4.lines.line_honors_blue::before,h5.lines.line_honors_blue::after,h5.lines.line_honors_blue::before,h6.lines.line_honors_blue::after,h6.lines.line_honors_blue::before {
    border-color: #003e51
}

.h1.lines.line_parliament_blue::after,.h1.lines.line_parliament_blue::before,.h2.lines.line_parliament_blue::after,.h2.lines.line_parliament_blue::before,.h3.lines.line_parliament_blue::after,.h3.lines.line_parliament_blue::before,.h4.lines.line_parliament_blue::after,.h4.lines.line_parliament_blue::before,.h5.lines.line_parliament_blue::after,.h5.lines.line_parliament_blue::before,.h6.lines.line_parliament_blue::after,.h6.lines.line_parliament_blue::before,h1.lines.line_parliament_blue::after,h1.lines.line_parliament_blue::before,h2.lines.line_parliament_blue::after,h2.lines.line_parliament_blue::before,h3.lines.line_parliament_blue::after,h3.lines.line_parliament_blue::before,h4.lines.line_parliament_blue::after,h4.lines.line_parliament_blue::before,h5.lines.line_parliament_blue::after,h5.lines.line_parliament_blue::before,h6.lines.line_parliament_blue::after,h6.lines.line_parliament_blue::before {
    border-color: #1a658f
}

.h1.lines.line_lilac::after,.h1.lines.line_lilac::before,.h2.lines.line_lilac::after,.h2.lines.line_lilac::before,.h3.lines.line_lilac::after,.h3.lines.line_lilac::before,.h4.lines.line_lilac::after,.h4.lines.line_lilac::before,.h5.lines.line_lilac::after,.h5.lines.line_lilac::before,.h6.lines.line_lilac::after,.h6.lines.line_lilac::before,h1.lines.line_lilac::after,h1.lines.line_lilac::before,h2.lines.line_lilac::after,h2.lines.line_lilac::before,h3.lines.line_lilac::after,h3.lines.line_lilac::before,h4.lines.line_lilac::after,h4.lines.line_lilac::before,h5.lines.line_lilac::after,h5.lines.line_lilac::before,h6.lines.line_lilac::after,h6.lines.line_lilac::before {
    border-color: #7566a0
}

.h1.lines.line_bronze::after,.h1.lines.line_bronze::before,.h2.lines.line_bronze::after,.h2.lines.line_bronze::before,.h3.lines.line_bronze::after,.h3.lines.line_bronze::before,.h4.lines.line_bronze::after,.h4.lines.line_bronze::before,.h5.lines.line_bronze::after,.h5.lines.line_bronze::before,.h6.lines.line_bronze::after,.h6.lines.line_bronze::before,h1.lines.line_bronze::after,h1.lines.line_bronze::before,h2.lines.line_bronze::after,h2.lines.line_bronze::before,h3.lines.line_bronze::after,h3.lines.line_bronze::before,h4.lines.line_bronze::after,h4.lines.line_bronze::before,h5.lines.line_bronze::after,h5.lines.line_bronze::before,h6.lines.line_bronze::after,h6.lines.line_bronze::before {
    border-color: #c69214
}

.h1.lines.line_tan::after,.h1.lines.line_tan::before,.h2.lines.line_tan::after,.h2.lines.line_tan::before,.h3.lines.line_tan::after,.h3.lines.line_tan::before,.h4.lines.line_tan::after,.h4.lines.line_tan::before,.h5.lines.line_tan::after,.h5.lines.line_tan::before,.h6.lines.line_tan::after,.h6.lines.line_tan::before,h1.lines.line_tan::after,h1.lines.line_tan::before,h2.lines.line_tan::after,h2.lines.line_tan::before,h3.lines.line_tan::after,h3.lines.line_tan::before,h4.lines.line_tan::after,h4.lines.line_tan::before,h5.lines.line_tan::after,h5.lines.line_tan::before,h6.lines.line_tan::after,h6.lines.line_tan::before {
    border-color: #b7a99a
}

.h1.lines.line_chastain_blue::after,.h1.lines.line_chastain_blue::before,.h2.lines.line_chastain_blue::after,.h2.lines.line_chastain_blue::before,.h3.lines.line_chastain_blue::after,.h3.lines.line_chastain_blue::before,.h4.lines.line_chastain_blue::after,.h4.lines.line_chastain_blue::before,.h5.lines.line_chastain_blue::after,.h5.lines.line_chastain_blue::before,.h6.lines.line_chastain_blue::after,.h6.lines.line_chastain_blue::before,h1.lines.line_chastain_blue::after,h1.lines.line_chastain_blue::before,h2.lines.line_chastain_blue::after,h2.lines.line_chastain_blue::before,h3.lines.line_chastain_blue::after,h3.lines.line_chastain_blue::before,h4.lines.line_chastain_blue::after,h4.lines.line_chastain_blue::before,h5.lines.line_chastain_blue::after,h5.lines.line_chastain_blue::before,h6.lines.line_chastain_blue::after,h6.lines.line_chastain_blue::before {
    border-color: #bbdde6
}

.h1.lines.line_beige::after,.h1.lines.line_beige::before,.h2.lines.line_beige::after,.h2.lines.line_beige::before,.h3.lines.line_beige::after,.h3.lines.line_beige::before,.h4.lines.line_beige::after,.h4.lines.line_beige::before,.h5.lines.line_beige::after,.h5.lines.line_beige::before,.h6.lines.line_beige::after,.h6.lines.line_beige::before,h1.lines.line_beige::after,h1.lines.line_beige::before,h2.lines.line_beige::after,h2.lines.line_beige::before,h3.lines.line_beige::after,h3.lines.line_beige::before,h4.lines.line_beige::after,h4.lines.line_beige::before,h5.lines.line_beige::after,h5.lines.line_beige::before,h6.lines.line_beige::after,h6.lines.line_beige::before {
    border-color: #f1e6b2
}

.h1.lines.line_none::after,.h1.lines.line_none::before,.h2.lines.line_none::after,.h2.lines.line_none::before,.h3.lines.line_none::after,.h3.lines.line_none::before,.h4.lines.line_none::after,.h4.lines.line_none::before,.h5.lines.line_none::after,.h5.lines.line_none::before,.h6.lines.line_none::after,.h6.lines.line_none::before,h1.lines.line_none::after,h1.lines.line_none::before,h2.lines.line_none::after,h2.lines.line_none::before,h3.lines.line_none::after,h3.lines.line_none::before,h4.lines.line_none::after,h4.lines.line_none::before,h5.lines.line_none::after,h5.lines.line_none::before,h6.lines.line_none::after,h6.lines.line_none::before {
    border-color: transparent
}

@media only screen and (max-width: 56em) {
    .h1.lines,.h2.lines,.h3.lines,.h4.lines,.h5.lines,.h6.lines,h1.lines,h2.lines,h3.lines,h4.lines,h5.lines,h6.lines {
        display:block
    }

    .h1.lines::after,.h1.lines::before,.h2.lines::after,.h2.lines::before,.h3.lines::after,.h3.lines::before,.h4.lines::after,.h4.lines::before,.h5.lines::after,.h5.lines::before,.h6.lines::after,.h6.lines::before,h1.lines::after,h1.lines::before,h2.lines::after,h2.lines::before,h3.lines::after,h3.lines::before,h4.lines::after,h4.lines::before,h5.lines::after,h5.lines::before,h6.lines::after,h6.lines::before {
        margin: 0;
        display: block;
        width: 100%;
        max-width: none!important
    }

    .h1.lines::before,.h2.lines::before,.h3.lines::before,.h4.lines::before,.h5.lines::before,.h6.lines::before,h1.lines::before,h2.lines::before,h3.lines::before,h4.lines::before,h5.lines::before,h6.lines::before {
        margin-bottom: 1rem
    }

    .h1.lines::after,.h2.lines::after,.h3.lines::after,.h4.lines::after,.h5.lines::after,.h6.lines::after,h1.lines::after,h2.lines::after,h3.lines::after,h4.lines::after,h5.lines::after,h6.lines::after {
        margin-top: 1rem
    }
}

@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none) {
    .h1.lines,.h2.lines,.h3.lines,.h4.lines,.h5.lines,.h6.lines,h1.lines,h2.lines,h3.lines,h4.lines,h5.lines,h6.lines {
        display: block
    }
}

.h1,h1 {
    font-size: 41.6px;
    font-size: 2.6rem;
    margin: .67em 0
}

.h2,h2 {
    font-size: 33.6px;
    font-size: 2.1rem;
    margin: .83em 0
}

.fleet .title,.fleet h3,.h3,h3 {
    font-size: 28.8px;
    font-size: 1.8rem;
    margin: 1em 0
}

#banner .banner_text .title,#banner .banner_text h1,.cantina .title,.footer_columns .subtitle,.footer_columns .title,.footer_columns h1,.footer_columns h2,.h4,h4 {
    font-size: 24px;
    font-size: 1.5rem;
    margin: 1.33em 0
}

.h5,h5 {
    font-size: 16px;
    font-size: 1rem;
    margin: 1.67em 0
}

.h6,h6 {
    font-size: 13.28px;
    font-size: .83rem;
    margin: 2.33em 0
}

.heading-font {
    font-family: 'Roboto Condensed',sans-serif;
    font-weight: 300
}

strong {
    font-weight: 400
}

.page img {
    max-width: 27%
}

img {
    border: none;
    height: auto
}

img.small {
    max-width: 20%
}

img.medium {
    max-width: 27%
}

img.large {
    max-width: 35%
}

img.xlarge {
    max-width: 43%
}

img.full {
    max-width: 100%
}

hr {
    outline: 0;
    border: none;
    height: 1px;
    display: block;
    background: #888;
    width: 100%;
    clear: both
}

form {
    font-size: 16px;
    font-size: 1rem;
    margin: 8px 0;
    margin: .5rem 0
}

form label {
    color: #4d4d4d;
    width: 100%;
    display: block;
    clear: both
}

form input[type=password],form input[type=text],form textarea {
    -webkit-appearance: none;
    -moz-appearance: none;
    border-radius: 0;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -o-box-sizing: border-box;
    box-sizing: border-box;
    outline: 0;
    width: 100%;
    max-width: 400px;
    max-width: 25rem;
    border: 1px solid #a5a5a5;
    background: #fff
}

form input[type=password],form input[type=text] {
    padding: 8px 8px;
    padding: .5rem .5rem;
    min-height: 35.2px;
    min-height: 2.2rem
}

form button[type=reset],form button[type=submit],form input[type=reset],form input[type=submit] {
    background: #febc11;
    border: none;
    padding: 8px 12.8px;
    padding: .5rem .8rem;
    font-size: 16px;
    font-size: 1rem;
    cursor: pointer;
    outline-width: 0;
    border-radius: 0;
    -webkit-appearance: none;
    -moz-appearance: none
}

form button[type=reset]:hover,form button[type=submit]:hover,form input[type=reset]:hover,form input[type=submit]:hover {
    background: #feca44
}

form button[type=reset],form input[type=reset] {
    background: #e5e5e5
}

form button[type=reset]:hover,form input[type=reset]:hover {
    background: #f2f2f2
}

form input[type=checkbox],form input[type=radio] {
    float: left;
    clear: left
}

form input[type=checkbox] {
    margin: 4px 8px;
    margin: .25rem .5rem
}

form input[type=radio] {
    margin: 3.36px 8px;
    margin: .21rem .5rem
}

form select {
    width: 100%;
    max-width: 368px;
    max-width: 23rem;
    min-height: 24px;
    min-height: 1.5rem;
    font-size: 19.2px;
    font-size: 1.2rem
}

form textarea {
    min-height: 64px;
    min-height: 4rem
}

form input[type=text].other {
    float: left;
    width: 20%
}

form fieldset {
    border: none;
    background: 0 0;
    margin: 16px 0;
    margin: 1rem 0;
    padding: 0;
    width: 100%
}

form fieldset.no_margin {
    margin: 0
}

form fieldset.inline {
    font-size: 14.4px;
    font-size: .9rem
}

form fieldset.inline input {
    float: left;
    min-height: 35.2px;
    min-height: 2.2rem
}

form fieldset.inline input[type=text] {
    clear: left;
    width: 70%
}

form fieldset.inline input[type=submit] {
    width: 30%;
    font-size: 14.4px;
    font-size: .9rem
}

.tie_bomber form input {
    border: none
}

form.full input[type=text],form.full select,form.full textarea {
    max-width: none
}

form .honey-input-field {
    display: none
}

figure img {
    width: 100%;
    max-width: 100%!important
}

figure figcaption {
    font-size: 14.4px;
    font-size: .9rem;
    text-align: center;
    margin-top: 8px;
    margin-top: .5rem;
    color: #888
}

figure.small {
    max-width: 20%
}

figure.medium {
    max-width: 27%
}

figure.large {
    max-width: 35%
}

figure.xlarge {
    max-width: 43%
}

figure.full {
    max-width: 100%
}

iframe {
    width: 100%;
    display: block;
    border: 1px solid #e5e5e5
}

#joyride_tour {
    display: none
}

#tour_popup {
    position: absolute;
    background: #fff;
    width: 700px;
    left: 50%;
    margin-left: -400px;
    top: 200px;
    padding: 17px 50px;
    display: none;
    z-index: 6
}

#tour_popup h1 {
    margin-top: 0
}

.shade {
    position: absolute;
    background: rgba(0,0,0,.7);
    width: 100%;
    height: 100%;
    display: none;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 5
}

.no_script {
    background: #ee0707;
    position: fixed;
    z-index: 10;
    width: 95.5%;
    font-size: 1rem;
    text-align: center;
    padding: 5px 0;
    padding: .3125rem 0;
    padding-right: 2.5%;
    padding-left: 2.5%
}

.no_script .oops {
    font-size: 1.2rem;
    position: relative
}

.site_title {
    color: #fff;
    font-family: Montserrat,sans-serif,arial;
    text-transform: uppercase;
    width: 80%;
    margin: 0 auto;
    text-align: center;
    margin-top: 8px;
    margin-top: .5rem
}

.site_title a {
    color: #fff
}

#header {
    background: #000;
    width: 100%;
    height: 90px;
    height: 5.625rem;
    position: relative
}

#header .logo_container {
    width: 300px;
    width: 18.75rem;
    position: absolute;
    z-index: 10;
    left: -10px
}

#header .logo_container .logo {
    background: url(/_omni/images/global/logo.png) no-repeat;
    background-size: 100%;
    background-position: top center;
    margin: 0 auto;
    width: 82%;
    padding-bottom: 21%
}

#header .logo_container>a {
    font-size: 0
}

#header .logo_container .top {
    background: url(/_omni/images/global/header-banner-bg.png) repeat-y;
    background-size: 100% 2px;
    padding-top: 47px;
    padding-top: 2.9375rem;
    padding-bottom: 32px;
    padding-bottom: 2rem
}

#header .logo_container .top a {
    width: 90%;
    display: block;
    margin: 0 auto
}

#header .logo_container .top>a {
    font-size: 0
}

#header .logo_container .bottom {
    background: url(/_omni/images/global/header-banner-bottom.png) no-repeat;
    background-size: 100%;
    padding-bottom: 16%;
    width: 100%
}

#header .logo_container.small .top {
    padding-top: 32px;
    padding-top: 2rem;
    padding-bottom: 16px;
    padding-bottom: 1rem
}

#header .logo_container.small .site_title {
    font-size: 16px;
    font-size: 1rem
}

#header .logo_container.medium .top {
    padding-top: 25.6px;
    padding-top: 1.6rem;
    padding-bottom: 8px;
    padding-bottom: .5rem
}

#header .logo_container.medium .site_title {
    font-size: 14.4px;
    font-size: .9rem
}

#header .logo_container.large .top {
    padding-top: 16px;
    padding-top: 1rem;
    padding-bottom: 1.6px;
    padding-bottom: .1rem
}

#header .logo_container.large .site_title {
    font-size: 14.4px;
    font-size: .9rem
}

#header .logo_container.xlarge .top {
    padding-top: 19.2px;
    padding-top: 1.2rem;
    padding-bottom: 8px;
    padding-bottom: .5rem
}

#header .logo_container.xlarge .site_title {
    font-size: 12.8px;
    font-size: .8rem
}

@-moz-document url-prefix() {
    #header .logo_container .logo {
        background-size: 101%
    }
}

.search {
    float: right;
    margin-top: 30px;
    margin-top: 1.875rem
}

.search label {
    display: none
}

.search input[type=submit],.search input[type=text] {
    outline: 0;
    border: none;
    margin: 0;
    padding: 5px;
    padding: .3125rem;
    float: left;
    box-sizing: content-box;
    height: 16px;
    height: 1rem;
    min-height: 0;
    width: auto
}

.search input[type=submit] {
    background: #febc11;
    cursor: pointer;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
    font-size: 11.2px;
    font-size: .7rem;
    -webkit-appearance: none;
    -moz-appearance: none;
    border-radius: 0
}

.search input[type=submit]:hover {
    background: #feca44
}

#gold_bar {
    background: #febc11;
    width: 100%;
    min-height: 40px;
    min-height: 2.5rem;
    line-height: 40px;
    line-height: 2.5rem;
    position: relative
}

#banner {
    width: 100%;
    position: relative;
    margin-bottom: 30px;
    margin-bottom: 1.875rem
}

#banner img {
    width: 100%;
    display: block
}

#banner .banner_text {
    background: rgba(0,0,0,.8);
    position: absolute;
    padding: 18px;
    padding: 1.125rem;
    padding-bottom: 20.8px;
    padding-bottom: 1.3rem;
    right: 10%;
    bottom: 8%;
    max-width: 70%
}

#banner .banner_text .title,#banner .banner_text h1 {
    color: #fff;
    margin: 0
}

#banner .banner_text .subtitle,#banner .banner_text h2 {
    color: #febc11;
    margin: 0;
    margin-bottom: 3.2px;
    margin-bottom: .2rem;
    font-size: 15px;
    font-size: .9375rem;
    font-family: Nunito,Arial,Helvetica,sans-serif;
    font-weight: 300
}

#banner .banner_text.left {
    left: 10%;
    right: auto
}

#banner .banner_text.top {
    top: 8%;
    bottom: auto
}

#banner .banner_text:hover {
    background: #febc11
}

#banner .banner_text:hover .subtitle,#banner .banner_text:hover .title,#banner .banner_text:hover h1,#banner .banner_text:hover h2 {
    color: #000
}

#banner .page_title {
    position: absolute;
    padding-left: 10%;
    margin: 0;
    bottom: 0;
    z-index: 1;
    color: #fff;
    font-size: 80px;
    font-size: 5rem;
    width: 90%;
    background: rgba(0,0,0,.5)
}

#banner.no_img {
    background: #e5e5e5
}

#banner.no_img h1 {
    margin: 0;
    padding-top: 30px;
    padding-top: 1.875rem;
    background: 0 0;
    color: #000;
    position: relative;
    font-size: 40px;
    font-size: 2.5rem
}

#banner.no_img>img {
    display: none
}

#banner .bread_crumb {
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-size: 1rem;
    padding-bottom: 10px;
    padding-bottom: .625rem;
    padding-top: 64px;
    padding-top: 4rem
}

#banner .bread_crumb::after {
    content: "";
    display: block;
    clear: both
}

#banner .bread_crumb li {
    float: left;
    margin-right: 1%;
    color: #000
}

#banner .bread_crumb li.active a {
    color: #000
}

#banner .bread_crumb li a {
    border-bottom: 1px dashed #00708d;
    color: #00708d
}

#banner .klaxon {
    background: #ad0505;
    padding: 40px 0;
    padding: 2.5rem 0
}

#banner .klaxon img {
    width: 200px;
    margin-left: 10%;
    float: left;
    margin-right: 5%
}

#banner .klaxon h1,#banner .klaxon p {
    width: 85%;
    color: #fff
}

#banner .weather {
    background: #7fd5f0;
    padding: 16px 0;
    padding: 1rem 0;
    padding-top: 56px;
    padding-top: 3.5rem
}

#banner .weather img {
    width: 100px;
    float: left;
    margin-left: 10%;
    margin-right: 5%
}

#banner .weather h2,#banner .weather p {
    width: 85%;
    color: #000
}

#banner .weather h2 {
    margin-top: 0
}

#banner .weather p {
    margin: 0;
    float: left;
    width: 72%
}

#banner .weather a {
    text-decoration: underline;
    color: #000
}

#banner .weather a:hover {
    text-decoration: none
}

#banner .klaxon+.weather {
    padding-top: 16px;
    padding-top: 1rem
}

.page_wrapper {
    padding-bottom: 48px;
    padding-bottom: 3rem;
    border-top: 1px solid #fff
}

.page_wrapper a {
    text-decoration: 1px dashed #febc11;
    list-style-type: none;
    display: list-item;
}

.page_wrapper a:hover {
    border-color: #febc11
}

.page>.content,.page_wrapper>.content {
    width: 60%;
    float: left;
    margin-bottom: 48px;
    margin-bottom: 3rem
}

.page>.content .h1:first-child,.page>.content h1:first-child,.page_wrapper>.content .h1:first-child,.page_wrapper>.content h1:first-child {
    margin-top: 0
}

.page>.sidebar,.page_wrapper>.sidebar {
    width: 35%
}

.page>.sidebar.left,.page_wrapper>.sidebar.left {
    float: left;
    margin-right: 5%;
    width: 28%;
    position: relative
}

.page>.sidebar.left.border,.page_wrapper>.sidebar.left.border {
    border-right: 2px solid #e5e5e5;
    padding-left: 0
}

.page>.sidebar.right,.page_wrapper>.sidebar.right {
    float: right
}

.page>.sidebar.right.border,.page_wrapper>.sidebar.right.border {
    border-left: 2px solid #e5e5e5;
    padding-right: 0
}

.page>.sidebar.border,.page_wrapper>.sidebar.border {
    padding: 16px;
    padding: 1rem;
    box-sizing: border-box
}

.page_wrapper .page>.sidebar.slim,.page_wrapper .page_wrapper>.sidebar.slim {
    width: 30%
}

.page_wrapper .page>.sidebar.slim+.content,.page_wrapper .page_wrapper>.sidebar.slim+.content {
    width: 65%
}

.page>.sidebar.left+.content,.page_wrapper>.sidebar.left+.content {
    width: 67%
}

#footer {
    width: 100%;
    padding: 30px 0;
    padding: 1.875rem 0;
    background: #000;
    color: #e5e5e5;
    font-size: 16px;
    font-size: 1rem;
    position: relative;
}

#footer h1 {
    font-size: 20.8px;
    font-size: 1.3rem
}

#footer h2 {
    font-size: 19.2px;
    font-size: 1.2rem
}

#footer a {
    color: #e5e5e5
}

#footer a:hover {
    color: #febc11
}

#footer .meta_separator {
    margin-top: 50px;
    margin-top: 3.125rem;
    background: #febc11;
    height: 2px;
    display: inline-block
}

.footer_columns {
    width: 100%
}

.footer_columns::after {
    content: "";
    display: block;
    clear: both;
}

.footer_columns>div {
    margin-right: 2.5%;
    width: 18%;
    float: left;
}

.footer_columns>div:last-child {
    margin-right: 0
}

.footer_columns .contact_info {
    width: 36%;
    margin-right: 5%
}

.footer_columns .contact_info::after {
    content: "";
    display: block;
    clear: both
}

.footer_columns .contact_info .title,.footer_columns .contact_info h1 {
    display: block;
    width: 100%
}

.footer_columns .kennesaw_campus,.footer_columns .marietta_campus {
    float: left
}

.footer_columns .kennesaw_campus {
    padding-right: 10%
}

.footer_columns .title,.footer_columns h1 {
    margin-bottom: 0;
    margin-top: .67em;
    font-size: 20.8px;
    font-size: 1.3rem;
    text-transform: uppercase;
    color: #febc11
}

.footer_columns .subtitle,.footer_columns h2 {
    font-size: 19.2px;
    font-size: 1.2rem;
    margin: .83em 0
}

.footer_columns ul {
    list-style: none;
    margin: 0;
    margin-top: 20px;
    margin-top: 1.25rem;
    padding: 0
}

.footer_columns ul a {
    padding: 5px 0;
    padding: .3125rem 0;
    display: block;
    color: #fff
}

.footer_meta {
    padding: 15px 0;
    padding: .9375rem 0
}

.footer_meta div {
    margin-right: 2.5%;
    width: 31.66666667%;
    float: left
}

.footer_meta div:last-child {
    margin-right: 0
}

.footer_meta p {
    margin: 0
}

.footer_meta .copyright {
    text-align: center
}

.footer_meta .social_media {
    text-align: right
}

.footer_meta .social_media img {
    width: 30px;
    margin-left: 2.5%;
    -ms-transition: opacity .2s;
    
    
    -webkit-transition: opacity .2s;
    -moz-transition: opacity .2s;
    -o-transition: opacity .2s;
    transition: opacity .2s
}

.footer_meta .social_media img:hover {
    opacity: .6
}

.mobile_logo {
    display: none;
    max-width: 288px;
    max-width: 18rem;
    margin: 0 auto;
    width: 90%;
    margin-bottom: 16px;
    margin-bottom: 1rem
}

.mobile_search {
    background: #000;
    padding: 25px 0;
    padding: 1.5625rem 0;
    display: none
}

.mobile_search label {
    display: none
}

.mobile_search form {
    width: 90%;
    margin: 0 auto;
    display: block;
    float: none
}

.mobile_search form input[type=submit],.mobile_search form input[type=text] {
    border: none;
    outline: 0;
    padding: 0;
    margin: 0;
    display: block;
    float: left;
    padding: 10px 0;
    padding: .625rem 0;
    font-size: 14.4px;
    font-size: .9rem;
    max-width: none
}

.mobile_search form input[type=text] {
    width: 67%;
    padding-left: 2%;
    padding-right: 2%
}

.mobile_search form input[type=submit] {
    width: 28%;
    margin-left: 1%;
    background: #febc11
}

.print_logo {
    display: none;
    max-width: 288px;
    max-width: 18rem;
    margin: 0 auto;
    width: 90%;
    margin-bottom: 16px;
    margin-bottom: 1rem
}

#video_banner {
    position: relative;
    overflow: hidden
}

#video_banner .kaltura-player-container {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    height: 56.25vw;
    max-height: none;
    min-height: 100%;
    max-width: none;
    min-width: 100%;
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    width: 600%;
    display: block
}

#video_banner .playkit-player:not(.playkit-fullscreen) .playkit-pre-playback-play-overlay {
    display: none
}

#video_banner .playkit-player {
    position: initial
}

#video_banner .video_preview {
    background-image: url(https://webstatic.kennesaw.edu/_omni/images/global/banner-video/placeholder.jpg);
    background-size: cover;
    background-position: center;
    position: absolute;
    width: 100%;
    height: 100%
}

#video_banner .video_preview img {
    width: 6em!important;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-top: -3em;
    margin-left: -3em;
    opacity: .9
}

#video_banner .video_hero {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: flex-end;
    height: 100%;
    min-height: 100%;
    width: 80%;
    max-width: 1440px;
    max-width: 90rem;
    margin: 0 auto
}

#video_banner .video_hero .hero_wrapper {
    width: 100%
}

#video_banner .video_hero .hero_content {
    position: relative;
    max-width: 480px;
    max-width: 30rem;
    width: 100%;
    margin: 80px;
    margin: 5rem;
    margin-left: 0;
    margin-right: 0;
    cursor: initial
}

#video_banner .video_hero .hero_content .video_heading.h1,#video_banner .video_hero .hero_content .video_heading.h2,#video_banner .video_hero .hero_content .video_heading.h3,#video_banner .video_hero .hero_content .video_heading.h4,#video_banner .video_hero .hero_content .video_heading.h5,#video_banner .video_hero .hero_content .video_heading.h6 {
    color: #fff;
    text-shadow: 1px 1px 1px rgba(0,0,0,.9);
    font-family: 'Roboto Condensed',sans-serif;
    font-weight: 700;
    margin-bottom: 16px;
    margin-bottom: 1rem;
    margin-top: 0
}

#video_banner .video_hero .hero_content .video_heading.h1 {
    font-size: 80px;
    font-size: 5rem;
    line-height: 64px;
    line-height: 4rem
}

#video_banner .video_hero .hero_content .video_heading.h2 {
    font-size: 56px;
    font-size: 3.5rem;
    line-height: 48px;
    line-height: 3rem
}

#video_banner .video_hero .hero_content .video_heading.h3 {
    font-size: 40px;
    font-size: 2.5rem;
    line-height: 32px;
    line-height: 2rem
}

#video_banner .video_hero .hero_content .video_heading.h4 {
    font-size: 28px;
    font-size: 1.75rem;
    line-height: 24px;
    line-height: 1.5rem
}

#video_banner .video_hero .hero_content .video_heading.h5 {
    font-size: 20px;
    font-size: 1.25rem;
    line-height: 16px;
    line-height: 1rem
}

#video_banner .video_hero .hero_content .video_heading.h6 {
    font-size: 14.4px;
    font-size: .9rem;
    line-height: 12.8px;
    line-height: .8rem
}

#video_banner .video_hero .hero_content p {
    color: #fff;
    font-weight: 400;
    text-shadow: 1px 1px 1px rgba(0,0,0,.9)
}

#video_banner .video_hero .hero_content .btn {
    margin-bottom: 8px;
    margin-bottom: .5rem
}

#video_banner .video_hero.right .hero_content {
    text-align: right;
    float: right
}

#video_banner.video_loaded .video_hero {
    cursor: pointer
}

#video_banner.video_contain {
    padding-bottom: 56.25%
}

#video_banner.video_contain .kaltura-player-container {
    height: 100%;
    width: 100%
}

#video_banner.video_contain video {
    object-fit: cover
}

#video_banner.video_contain .playkit-fullscreen video {
    object-fit: contain
}

#video_banner.video_contain .video_hero {
    bottom: 80px;
    bottom: 5rem;
    position: absolute;
    margin-left: 10%;
    margin-right: 10%
}

#video_banner.video_contain .video_hero .hero_content {
    margin: 0;
    bottom: 0
}

#video_banner.video_contain .video_hero .hero_content .ou-btn {
    position: absolute!important;
    bottom: -30px;
    width: 125px
}

#video_banner.video_contain .playkit-top-bar {
    display: none!important
}

#video_banner .video_preview .play {
    display: none;
    position: absolute;
    width: 100%;
    height: 100%;
    vertical-align: middle;
    border: none;
    font-size: 6em!important;
    color: #fff;
    opacity: .9;
    text-shadow: 1px 1px 1px rgba(0,0,0,.9)
}

#video_banner:hover .video_preview .play {
    color: #febc11;
    background: 0 0
}

#video_banner .replay {
    display: none;
    position: absolute;
    z-index: 10;
    top: 50%;
    left: 50%;
    border: none;
    color: #fff;
    font-size: 96px;
    font-size: 6rem;
    margin-top: -48px;
    margin-top: -3rem;
    margin-left: -48px;
    margin-left: -3rem;
    padding: 0;
    opacity: .9;
    text-shadow: 1px 1px 1px rgba(0,0,0,.9)
}

#video_banner .replay:hover {
    background: 0 0;
    color: #febc11
}

#video_banner .playkit-player.playkit-Safari video::-webkit-media-text-track-display-backdrop,#video_banner .playkit-player.playkit-iOS video::-webkit-media-text-track-display-backdrop {
    position: absolute;
    bottom: 0;
    left: 25%;
    right: 25%
}

#video_banner #video_player,#video_banner:not(.video_contain) #player-gui {
    display: none
}

#video_banner.video_contain #player-gui {
    display: block
}

#video_controls {
    position: absolute;
    z-index: 6;
    height: 62.4px;
    height: 3.9rem;
    bottom: 0;
    width: 100%;
    background-image: linear-gradient(rgba(255,255,255,0),rgba(0,0,0,.4));
    display: none
}

#video_controls label {
    display: none
}

#video_controls button {
    width: 33.6px;
    width: 2.1rem;
    height: 33.6px;
    height: 2.1rem;
    background: 0 0;
    color: #fff;
    display: inline-block;
    opacity: .8;
    border: none;
    padding: 0;
    cursor: pointer;
    font-size: 25.6px;
    font-size: 1.6rem;
    vertical-align: top
}

#video_controls button:before {
    vertical-align: middle
}

#video_controls button:hover {
    background: 0 0;
    color: #fff;
    opacity: 1
}

#video_controls .volume_slider_wrapper {
    height: 33.6px;
    height: 2.1rem;
    display: inline-block
}

#video_controls .volume_slider {
    position: relative;
    top: 0;
    margin: 0;
    margin-left: 6.4px;
    margin-left: .4rem;
    width: 160px;
    width: 10rem;
    vertical-align: bottom
}

#video_controls .fullscreen {
    float: right
}

#video_controls .playback_slider_wrapper {
    height: 25.6px;
    height: 1.6rem
}

#video_controls .playback_slider {
    width: 100%;
    display: block;
    margin: 0 auto
}

#video_controls input[type=range] {
    overflow: hidden;
    height: 16px;
    height: 1rem;
    padding: 0;
    margin: 0;
    background: 0 0;
    -webkit-appearance: none;
    position: relative
}

#video_controls input[type=range]::-webkit-slider-runnable-track {
    height: 16px;
    height: 1rem;
    -webkit-appearance: none;
    background-color: rgba(255,255,255,.3)
}

#video_controls input[type=range]::-webkit-slider-thumb {
    height: 16px;
    height: 1rem;
    width: 16px;
    width: 1rem;
    -webkit-appearance: none;
    cursor: ew-resize;
    background: #434343;
    box-shadow: -100vw 0 0 100vw #43e5f7
}

#video_controls input[type=range]::-moz-range-track {
    background-color: rgba(255,255,255,.3);
    height: 16px;
    height: 1rem
}

#video_controls input[type=range]::-moz-range-progress {
    cursor: ew-resize;
    background: #43e5f7;
    height: 16px;
    height: 1rem
}

#video_controls input[type=range]::-moz-range-thumb {
    cursor: ew-resize;
    background-color: #434343;
    border-radius: 0;
    border: none;
    height: 16px;
    height: 1rem;
    width: 16px;
    width: 1rem
}

#video_controls input[type=range]::-ms-track {
    cursor: ew-resize;
    background-color: rgba(255,255,255,.3);
    height: 16px;
    height: 1rem;
    width: 100%;
    padding: 0;
    margin: 0;
    color: transparent;
    border: none
}

#video_controls input[type=range]::-ms-fill-lower {
    background: #43e5f7
}

#video_controls input[type=range]::-ms-thumb {
    cursor: ew-resize;
    background: #434343;
    border-radius: 0;
    border: none;
    height: 16px;
    height: 1rem
}

#video_controls.video_contain {
    display: none!important
}

#video_controls .play:not(.accessible-inputs):focus,#video_controls .replay:not(.accessible-inputs):focus,#video_controls:not(.accessible-inputs) button:focus,#video_controls:not(.accessible-inputs) input:focus {
    outline: 0
}

@media only screen and (max-width: 66.5em) {
    #video_banner.video_contain .video_hero {
        margin-left:5%;
        margin-right: 5%;
        width: 90%
    }

    #video_banner.video_contain .video_hero .hero_content {
        max-width: 100%
    }

    #video_controls button {
        width: 48px;
        width: 3rem;
        padding-right: 11.2px;
        padding-right: .7rem;
        padding-left: 11.2px;
        padding-left: .7rem
    }
}

@media only screen and (max-width: 56em) {
    #video_banner.video_contain {
        overflow:visible
    }

    #video_banner.video_contain .video_hero {
        margin: 0;
        padding: 0 5%;
        position: relative;
        float: left;
        margin-top: 56.25%;
        top: 0;
        background: #2d2926;
        text-align: center
    }

    #video_banner.video_contain .video_hero .hero_content {
        position: relative;
        text-align: inherit
    }

    #video_banner.video_contain .video_hero .hero_content>:first-child {
        margin-top: 5%
    }

    #video_banner.video_contain .video_hero .hero_content>:last-child {
        margin-bottom: 5%
    }

    #video_banner.video_contain .video_hero .hero_content .ou-btn {
        position: relative!important;
        bottom: unset;
        width: auto
    }

    #video_banner.video_contain .video_hero .hero_content .video_heading.h1 {
        font-size: 56px;
        font-size: 3.5rem;
        line-height: 56px;
        line-height: 3.5rem
    }

    #video_banner.video_contain .video_hero .hero_content .video_heading.h2 {
        font-size: 44px;
        font-size: 2.75rem;
        line-height: 44px;
        line-height: 2.75rem
    }

    #video_banner.video_contain .video_hero .hero_content .video_heading.h3 {
        font-size: 36px;
        font-size: 2.25rem;
        line-height: 36px;
        line-height: 2.25rem
    }

    #video_banner.video_contain .video_hero .hero_content .video_heading.h4 {
        font-size: 28px;
        font-size: 1.75rem;
        line-height: 28px;
        line-height: 1.75rem
    }

    #video_banner.video_contain .video_hero .hero_content .video_heading.h5 {
        font-size: 20px;
        font-size: 1.25rem;
        line-height: 20px;
        line-height: 1.25rem
    }

    #video_banner.video_contain .video_hero .hero_content .video_heading.h6 {
        font-size: 16px;
        font-size: 1rem;
        line-height: 16px;
        line-height: 1rem
    }
}

@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none) {
    .playkit-bottom-bar {
        position: fixed!important
    }

    #banner.video {
        overflow: hidden
    }
}

@supports (-ms-ime-align:auto) {
    #banner.video {
        overflow: hidden
    }
}

#header_nav {
    float: right;
    border-right: 1px solid #fff;
    margin-right: 20px;
    margin-right: 1.25rem;
    padding: 5px 0;
    padding: .3125rem 0;
    padding-right: 20px;
    padding-right: 1.25rem;
    margin-top: 15px;
    margin-top: .9375rem
}

#header_nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
    float: right
}

#header_nav ul li {
    float: left
}

#header_nav .utility {
    color: #888;
    font-size: 13.6px;
    font-size: .85rem
}

#header_nav .utility li {
    padding-left: 15px;
    padding-left: .9375rem
}

#header_nav .utility li a {
    color: #e5e5e5
}

#header_nav .utility li a:hover {
    color: #00708d
}

#header_nav .active {
    color: #febc11;
    clear: both;
    font-size: 17.6px;
    font-size: 1.1rem;
    margin-top: 5px;
    margin-top: .3125rem
}

#header_nav .active li {
    padding-left: 15px;
    padding-left: .9375rem
}

#header_nav .active li a {
    color: #febc11
}

#header_nav .active li a:hover {
    color: #00708d
}

#high_council_chamber {
    list-style: none;
    margin: 0;
    padding: 0;
    margin-left: 10%;
    padding-left: 310px;
    padding-left: 19.375rem;
    padding-right: 10%;
    font-size: 20px;
    font-size: 1.25rem;
    box-sizing: border-box;
    height: inherit;
    overflow: hidden
}

#high_council_chamber>li {
    float: left
}

#high_council_chamber>li>a {
    color: #000;
    padding: 0 17.6px;
    padding: 0 1.1rem;
    display: block;
    white-space: nowrap;
    position: relative;
    width: auto
}

#high_council_chamber>li:nth-child(7) {
    margin-right: 0
}

#high_council_chamber>li:hover {
    background: #feca44
}

#high_council_chamber.use_dropdown>li:hover>.nav_dropdown+a::after {
    content: "";
    height: 0;
    width: 0;
    border: 8px solid #f6f6f6;
    border-left-color: transparent;
    border-right-color: transparent;
    border-top: none;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -8px;
    z-index: 6
}

#high_council_chamber.use_dropdown>li:hover>.nav_dropdown {
    display: block
}

#high_council_chamber .nav_dropdown {
    background: rgba(248,248,248,.97);
    backdrop-filter: blur(10px);
    box-shadow: 0 2px 6px 0 rgba(0,0,0,.2);
    padding-top: 16px;
    padding-top: 1rem;
    padding-bottom: 32px;
    padding-bottom: 2rem;
    width: 100%;
    top: 100%;
    left: 0;
    right: 0;
    position: absolute;
    z-index: 5;
    display: none;
    line-height: initial
}

@supports (backdrop-filter: blur(10px)) {
    #high_council_chamber .nav_dropdown {
        background:rgba(248,248,248,.9)
    }
}

#high_council_chamber .nav_dropdown .container {
    padding-left: 314.8px;
    padding-left: 19.675rem;
    margin-left: 10%;
    margin-right: 10%;
    display: grid;
    grid-column-gap: 15px
}

#high_council_chamber .nav_dropdown .container.one_col {
    grid-template-columns: repeat(1,1fr)
}

@media all and (-ms-high-contrast:none),(-ms-high-contrast:active) {
    #high_council_chamber .nav_dropdown .container.one_col {
        display: block
    }

    #high_council_chamber .nav_dropdown .container.one_col>.nav {
        float: left;
        width: 100%;
        margin-right: 2%
    }

    #high_council_chamber .nav_dropdown .container.one_col>.nav:last-of-type {
        margin-right: 0
    }
}

#high_council_chamber .nav_dropdown .container.two_col {
    grid-template-columns: repeat(2,1fr)
}

@media all and (-ms-high-contrast:none),(-ms-high-contrast:active) {
    #high_council_chamber .nav_dropdown .container.two_col {
        display: block
    }

    #high_council_chamber .nav_dropdown .container.two_col>.nav {
        float: left;
        width: 49%;
        margin-right: 2%
    }

    #high_council_chamber .nav_dropdown .container.two_col>.nav:last-of-type {
        margin-right: 0
    }
}

#high_council_chamber .nav_dropdown .container.three_col {
    grid-template-columns: repeat(3,1fr)
}

@media all and (-ms-high-contrast:none),(-ms-high-contrast:active) {
    #high_council_chamber .nav_dropdown .container.three_col {
        display: block
    }

    #high_council_chamber .nav_dropdown .container.three_col>.nav {
        float: left;
        width: 32%;
        margin-right: 2%
    }

    #high_council_chamber .nav_dropdown .container.three_col>.nav:last-of-type {
        margin-right: 0
    }
}

#high_council_chamber .nav_dropdown .container.four_col {
    grid-template-columns: repeat(4,1fr)
}

@media all and (-ms-high-contrast:none),(-ms-high-contrast:active) {
    #high_council_chamber .nav_dropdown .container.four_col {
        display: block
    }

    #high_council_chamber .nav_dropdown .container.four_col>.nav {
        float: left;
        width: 23.5%;
        margin-right: 2%
    }

    #high_council_chamber .nav_dropdown .container.four_col>.nav:last-of-type {
        margin-right: 0
    }
}

#high_council_chamber .nav_dropdown .container.five_col {
    grid-template-columns: repeat(5,1fr)
}

@media all and (-ms-high-contrast:none),(-ms-high-contrast:active) {
    #high_council_chamber .nav_dropdown .container.five_col {
        display: block
    }

    #high_council_chamber .nav_dropdown .container.five_col>.nav {
        float: left;
        width: 18.4%;
        margin-right: 2%
    }

    #high_council_chamber .nav_dropdown .container.five_col>.nav:last-of-type {
        margin-right: 0
    }
}

#high_council_chamber .nav_dropdown .container.six_col {
    grid-template-columns: repeat(6,1fr)
}

@media all and (-ms-high-contrast:none),(-ms-high-contrast:active) {
    #high_council_chamber .nav_dropdown .container.six_col {
        display: block
    }

    #high_council_chamber .nav_dropdown .container.six_col>.nav {
        float: left;
        width: 15%;
        margin-right: 2%
    }

    #high_council_chamber .nav_dropdown .container.six_col>.nav:last-of-type {
        margin-right: 0
    }
}

#high_council_chamber .nav_dropdown ul.nav {
    list-style: none;
    margin: 0;
    padding: 0
}

#high_council_chamber .nav_dropdown ul.nav li {
    border-bottom: 1px solid #ccc;
    float: none
}

#high_council_chamber .nav_dropdown ul.nav li a {
    color: #000;
    padding: 12.8px 0;
    padding: .8rem 0;
    padding-left: 12.8px;
    padding-left: .8rem;
    display: block
}

#high_council_chamber .nav_dropdown ul.nav li:hover {
    background: #febc11
}

@media only screen and (max-width: 94em) {
    #high_council_chamber .nav_dropdown .container {
        padding-left:234.8px;
        padding-left: 14.675rem
    }
}

@media only screen and (max-width: 80.5em) {
    #high_council_chamber .nav_dropdown .container {
        margin-left:5%;
        margin-right: 5%;
        padding-left: 300.8px;
        padding-left: 18.8rem
    }
}

@media only screen and (max-width: 66.5em) {
    #high_council_chamber .nav_dropdown .container {
        margin-left:2.5%;
        margin-right: 2.5%;
        padding: 0
    }
}

#high_council_chamber .mobile {
    display: none
}

.secondary_nav {
    margin-bottom: 48px;
    margin-bottom: 3rem
}

.secondary_nav iframe,.secondary_nav img,.secondary_nav p,.secondary_nav video {
    display: none
}

.secondary_nav ul {
    list-style: none;
    margin: 0;
    padding: 0
}

.secondary_nav ul br {
    display: none
}

.secondary_nav ul li {
    border-bottom: 1px solid #e5e5e5
}

.secondary_nav ul li::after {
    content: "";
    display: block;
    clear: both
}

.secondary_nav ul li a {
    padding: 12.8px 3%;
    padding: .8rem 3%;
    width: 84.5%;
    display: block;
    float: left;
    border: none
}

.secondary_nav ul li .plus_wrapper {
    width: .7em;
    height: .7em;
    position: relative;
    cursor: pointer
}

.secondary_nav ul li .plus_wrapper span {
    background: #00708d;
    display: block;
    position: absolute;
    border-radius: 16px;
    -webkit-border-radius: 16px;
    -moz-border-radius: 16px;
    border-radius: 1rem;
    -webkit-border-radius: 1rem;
    -moz-border-radius: 1rem
}

.secondary_nav ul li .plus_wrapper .vertical {
    width: .125em;
    height: .7em;
    left: 50%;
    margin-left: -.0625em;
    -ms-transition: transform .4s;
    
    
    -webkit-transition: transform .4s;
    -moz-transition: transform .4s;
    -o-transition: transform .4s;
    transition: transform .4s
}

.secondary_nav ul li .plus_wrapper .horizontal {
    width: .7em;
    height: .125em;
    top: 50%;
    margin-top: -.0625em
}

.secondary_nav ul li .plus_wrapper.minus .vertical {
    -ms-transform: rotate(90deg);
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    transform: rotate(90deg)
}

.secondary_nav ul li .plus_wrapper {
    padding: 18.4px 2.5%;
    padding: 1.15rem 2.5%;
    float: right
}

.secondary_nav ul .second_tier {
    clear: both;
    display: none
}

.secondary_nav ul .second_tier li a {
    padding-left: 8%;
    width: 70%
}

.secondary_nav ul .third_tier {
    clear: both;
    display: none
}

.secondary_nav ul .third_tier li a {
    padding-left: 12%;
    width: 76%
}

.secondary_nav>ul>li {
    -ms-transition: background-color .4s;
    
    -webkit-transition: background-color .4s;
    -moz-transition: background-color .4s;
    -o-transition: background-color .4s;
    transition: background-color .4s
}

.secondary_nav>ul>li.active {
    background: #4d4d4d
}

.secondary_nav>ul>li.active>a {
    color: #fff
}

.secondary_nav>ul>li.active_section {
    background: #4d4d4d
}

.secondary_nav>ul>li.active_section>a {
    color: #fff
}

.secondary_nav>ul>li.active_section_transition {
    background: #4d4d4d
}

.secondary_nav>ul>li.active_section_transition>a {
    color: #fff
}

.secondary_nav .second_tier>li {
    -ms-transition: background-color .4s;
    
    
    -webkit-transition: background-color .4s;
    -moz-transition: background-color .4s;
    -o-transition: background-color .4s;
    transition: background-color .4s;
    background: #f2f2f2
}

.secondary_nav .second_tier>li.active {
    background: #e5e5e5
}

.secondary_nav .second_tier>li.active>a {
    color: #000
}

.secondary_nav .second_tier>li.active_section {
    background: #888
}

.secondary_nav .second_tier>li.active_section>a {
    color: #fff
}

.secondary_nav .second_tier>li.active_section_transition {
    background: #888
}

.secondary_nav .second_tier>li.active_section_transition>a {
    color: #fff
}

.secondary_nav .third_tier>li {
    background: #e5e5e5;
    border-color: #ccc
}

.secondary_nav .third_tier>li.active>a {
    color: #000
}

.nav.horizontal {
    list-style: none;
    margin: 0;
    padding: 0;
    border-bottom: 2px solid #e5e5e5;
    margin-bottom: 16px;
    margin-bottom: 1rem
}

.nav.horizontal ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: inline
}

.nav.horizontal ul:first-of-type a {
    background: #e5e5e5;
    padding-left: 32px;
    padding-left: 2rem;
    padding-right: 32px;
    padding-right: 2rem
}

.nav.horizontal li {
    display: inline-block;
    margin-bottom: 2px
}

.nav.horizontal li.active a {
    background: #febc11;
    position: relative;
    color: #000
}

.nav.horizontal li.active a::after {
    content: "";
    width: 0;
    height: 0;
    border: 10px solid #febc11;
    border-left-color: transparent;
    border-right-color: transparent;
    border-bottom: none;
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -10px
}

.nav.horizontal li.see_also.label {
    font-style: italic;
    color: #4d4d4d;
    margin-left: 32px;
    margin-left: 2rem
}

.nav.horizontal a {
    display: inline-block;
    padding: 11.2px 16px;
    padding: .7rem 1rem;
    border: none
}

.nav.horizontal+* {
    margin-top: 0
}

.nav.active_gold ul li.active a {
    background-color: #ffc629;
    color: #000
}

.nav.active_gold ul li.active a h1,.nav.active_gold ul li.active a h2,.nav.active_gold ul li.active a h3,.nav.active_gold ul li.active a h4,.nav.active_gold ul li.active a h5,.nav.active_gold ul li.active a h6 {
    color: #000
}

.nav.active_gold ul li.active a a:not(.btn) {
    color: #005365;
    border-color: #005365
}

.nav.active_gold ul li.active a a:not(.btn):hover {
    color: #069be8;
    border-color: #069be8
}

.nav.active_gold ul li.active a a:not(.btn):hover * {
    color: #069be8;
    border-color: #069be8
}

.nav.active_gold ul li.active a a:not(.btn):hover h1,.nav.active_gold ul li.active a a:not(.btn):hover h2,.nav.active_gold ul li.active a a:not(.btn):hover h3,.nav.active_gold ul li.active a a:not(.btn):hover h4,.nav.active_gold ul li.active a a:not(.btn):hover h5,.nav.active_gold ul li.active a a:not(.btn):hover h6 {
    color: #069be8
}

.nav.active_gold ul li.active a a:not(.btn) h1,.nav.active_gold ul li.active a a:not(.btn) h2,.nav.active_gold ul li.active a a:not(.btn) h3,.nav.active_gold ul li.active a a:not(.btn) h4,.nav.active_gold ul li.active a a:not(.btn) h5,.nav.active_gold ul li.active a a:not(.btn) h6 {
    color: #005365
}

.nav.active_gold ul li.active a .btn {
    color: #000
}

.nav.active_gold ul li.active a .btn.alt {
    color: #000
}

.nav.active_gold ul li.active a::after {
    border-top-color: #ffc629
}

.nav.active_black ul li.active a {
    background-color: #2d2926;
    color: #fff
}

.nav.active_black ul li.active a h1,.nav.active_black ul li.active a h2,.nav.active_black ul li.active a h3,.nav.active_black ul li.active a h4,.nav.active_black ul li.active a h5,.nav.active_black ul li.active a h6 {
    color: #fff
}

.nav.active_black ul li.active a a:not(.btn) {
    color: #ffc629;
    border-color: #ffc629
}

.nav.active_black ul li.active a a:not(.btn):hover {
    color: #fff4d7;
    border-color: #fff4d7
}

.nav.active_black ul li.active a a:not(.btn):hover * {
    color: #fff4d7;
    border-color: #fff4d7
}

.nav.active_black ul li.active a a:not(.btn):hover h1,.nav.active_black ul li.active a a:not(.btn):hover h2,.nav.active_black ul li.active a a:not(.btn):hover h3,.nav.active_black ul li.active a a:not(.btn):hover h4,.nav.active_black ul li.active a a:not(.btn):hover h5,.nav.active_black ul li.active a a:not(.btn):hover h6 {
    color: #fff4d7
}

.nav.active_black ul li.active a a:not(.btn) h1,.nav.active_black ul li.active a a:not(.btn) h2,.nav.active_black ul li.active a a:not(.btn) h3,.nav.active_black ul li.active a a:not(.btn) h4,.nav.active_black ul li.active a a:not(.btn) h5,.nav.active_black ul li.active a a:not(.btn) h6 {
    color: #ffc629
}

.nav.active_black ul li.active a .btn {
    color: #fff
}

.nav.active_black ul li.active a .btn.alt {
    color: #000
}

.nav.active_black ul li.active a::after {
    border-top-color: #2d2926
}

.nav.active_slap_rock_gray ul li.active a {
    background-color: #b2b4b2;
    color: #000
}

.nav.active_slap_rock_gray ul li.active a h1,.nav.active_slap_rock_gray ul li.active a h2,.nav.active_slap_rock_gray ul li.active a h3,.nav.active_slap_rock_gray ul li.active a h4,.nav.active_slap_rock_gray ul li.active a h5,.nav.active_slap_rock_gray ul li.active a h6 {
    color: #000
}

.nav.active_slap_rock_gray ul li.active a a:not(.btn) {
    color: #004b5c;
    border-color: #004b5c
}

.nav.active_slap_rock_gray ul li.active a a:not(.btn):hover {
    color: #007a95;
    border-color: #007a95
}

.nav.active_slap_rock_gray ul li.active a a:not(.btn):hover * {
    color: #007a95;
    border-color: #007a95
}

.nav.active_slap_rock_gray ul li.active a a:not(.btn):hover h1,.nav.active_slap_rock_gray ul li.active a a:not(.btn):hover h2,.nav.active_slap_rock_gray ul li.active a a:not(.btn):hover h3,.nav.active_slap_rock_gray ul li.active a a:not(.btn):hover h4,.nav.active_slap_rock_gray ul li.active a a:not(.btn):hover h5,.nav.active_slap_rock_gray ul li.active a a:not(.btn):hover h6 {
    color: #007a95
}

.nav.active_slap_rock_gray ul li.active a a:not(.btn) h1,.nav.active_slap_rock_gray ul li.active a a:not(.btn) h2,.nav.active_slap_rock_gray ul li.active a a:not(.btn) h3,.nav.active_slap_rock_gray ul li.active a a:not(.btn) h4,.nav.active_slap_rock_gray ul li.active a a:not(.btn) h5,.nav.active_slap_rock_gray ul li.active a a:not(.btn) h6 {
    color: #004b5c
}

.nav.active_slap_rock_gray ul li.active a .btn {
    color: #000
}

.nav.active_slap_rock_gray ul li.active a .btn.alt {
    color: #000
}

.nav.active_slap_rock_gray ul li.active a::after {
    border-top-color: #b2b4b2
}

.nav.active_white ul li.active a {
    background-color: #fff;
    color: #000
}

.nav.active_white ul li.active a h1,.nav.active_white ul li.active a h2,.nav.active_white ul li.active a h3,.nav.active_white ul li.active a h4,.nav.active_white ul li.active a h5,.nav.active_white ul li.active a h6 {
    color: #000
}

.nav.active_white ul li.active a a:not(.btn) {
    color: #00708d;
    border-color: #00708d
}

.nav.active_white ul li.active a a:not(.btn):hover {
    color: #febc11;
    border-color: #febc11
}

.nav.active_white ul li.active a a:not(.btn):hover * {
    color: #febc11;
    border-color: #febc11
}

.nav.active_white ul li.active a a:not(.btn):hover h1,.nav.active_white ul li.active a a:not(.btn):hover h2,.nav.active_white ul li.active a a:not(.btn):hover h3,.nav.active_white ul li.active a a:not(.btn):hover h4,.nav.active_white ul li.active a a:not(.btn):hover h5,.nav.active_white ul li.active a a:not(.btn):hover h6 {
    color: #febc11
}

.nav.active_white ul li.active a a:not(.btn) h1,.nav.active_white ul li.active a a:not(.btn) h2,.nav.active_white ul li.active a a:not(.btn) h3,.nav.active_white ul li.active a a:not(.btn) h4,.nav.active_white ul li.active a a:not(.btn) h5,.nav.active_white ul li.active a a:not(.btn) h6 {
    color: #00708d
}

.nav.active_white ul li.active a .btn {
    color: #000
}

.nav.active_white ul li.active a .btn.alt {
    color: #000
}

.nav.active_white ul li.active a::after {
    border-top-color: #fff
}

.nav.active_marietta_blue ul li.active a {
    background-color: #303ab2;
    color: #fff
}

.nav.active_marietta_blue ul li.active a h1,.nav.active_marietta_blue ul li.active a h2,.nav.active_marietta_blue ul li.active a h3,.nav.active_marietta_blue ul li.active a h4,.nav.active_marietta_blue ul li.active a h5,.nav.active_marietta_blue ul li.active a h6 {
    color: #fff
}

.nav.active_marietta_blue ul li.active a a:not(.btn) {
    color: #ffc629;
    border-color: #ffc629
}

.nav.active_marietta_blue ul li.active a a:not(.btn):hover {
    color: #fff4d7;
    border-color: #fff4d7
}

.nav.active_marietta_blue ul li.active a a:not(.btn):hover * {
    color: #fff4d7;
    border-color: #fff4d7
}

.nav.active_marietta_blue ul li.active a a:not(.btn):hover h1,.nav.active_marietta_blue ul li.active a a:not(.btn):hover h2,.nav.active_marietta_blue ul li.active a a:not(.btn):hover h3,.nav.active_marietta_blue ul li.active a a:not(.btn):hover h4,.nav.active_marietta_blue ul li.active a a:not(.btn):hover h5,.nav.active_marietta_blue ul li.active a a:not(.btn):hover h6 {
    color: #fff4d7
}

.nav.active_marietta_blue ul li.active a a:not(.btn) h1,.nav.active_marietta_blue ul li.active a a:not(.btn) h2,.nav.active_marietta_blue ul li.active a a:not(.btn) h3,.nav.active_marietta_blue ul li.active a a:not(.btn) h4,.nav.active_marietta_blue ul li.active a a:not(.btn) h5,.nav.active_marietta_blue ul li.active a a:not(.btn) h6 {
    color: #ffc629
}

.nav.active_marietta_blue ul li.active a .btn {
    color: #fff
}

.nav.active_marietta_blue ul li.active a .btn.alt {
    color: #000
}

.nav.active_marietta_blue ul li.active a::after {
    border-top-color: #303ab2
}

.nav.active_georgia_sky ul li.active a {
    background-color: #0090da;
    color: #000
}

.nav.active_georgia_sky ul li.active a h1,.nav.active_georgia_sky ul li.active a h2,.nav.active_georgia_sky ul li.active a h3,.nav.active_georgia_sky ul li.active a h4,.nav.active_georgia_sky ul li.active a h5,.nav.active_georgia_sky ul li.active a h6 {
    color: #000
}

.nav.active_georgia_sky ul li.active a a:not(.btn) {
    color: #171717;
    border-color: #171717
}

.nav.active_georgia_sky ul li.active a a:not(.btn):hover {
    color: #fff4d7;
    border-color: #fff4d7
}

.nav.active_georgia_sky ul li.active a a:not(.btn):hover * {
    color: #fff4d7;
    border-color: #fff4d7
}

.nav.active_georgia_sky ul li.active a a:not(.btn):hover h1,.nav.active_georgia_sky ul li.active a a:not(.btn):hover h2,.nav.active_georgia_sky ul li.active a a:not(.btn):hover h3,.nav.active_georgia_sky ul li.active a a:not(.btn):hover h4,.nav.active_georgia_sky ul li.active a a:not(.btn):hover h5,.nav.active_georgia_sky ul li.active a a:not(.btn):hover h6 {
    color: #fff4d7
}

.nav.active_georgia_sky ul li.active a a:not(.btn) h1,.nav.active_georgia_sky ul li.active a a:not(.btn) h2,.nav.active_georgia_sky ul li.active a a:not(.btn) h3,.nav.active_georgia_sky ul li.active a a:not(.btn) h4,.nav.active_georgia_sky ul li.active a a:not(.btn) h5,.nav.active_georgia_sky ul li.active a a:not(.btn) h6 {
    color: #171717
}

.nav.active_georgia_sky ul li.active a .btn {
    color: #000
}

.nav.active_georgia_sky ul li.active a .btn.alt {
    color: #000
}

.nav.active_georgia_sky ul li.active a::after {
    border-top-color: #0090da
}

.nav.active_green ul li.active a {
    background-color: #43b02a;
    color: #000
}

.nav.active_green ul li.active a h1,.nav.active_green ul li.active a h2,.nav.active_green ul li.active a h3,.nav.active_green ul li.active a h4,.nav.active_green ul li.active a h5,.nav.active_green ul li.active a h6 {
    color: #000
}

.nav.active_green ul li.active a a:not(.btn) {
    color: #2b2b2b;
    border-color: #2b2b2b
}

.nav.active_green ul li.active a a:not(.btn):hover {
    color: #fff4d7;
    border-color: #fff4d7
}

.nav.active_green ul li.active a a:not(.btn):hover * {
    color: #fff4d7;
    border-color: #fff4d7
}

.nav.active_green ul li.active a a:not(.btn):hover h1,.nav.active_green ul li.active a a:not(.btn):hover h2,.nav.active_green ul li.active a a:not(.btn):hover h3,.nav.active_green ul li.active a a:not(.btn):hover h4,.nav.active_green ul li.active a a:not(.btn):hover h5,.nav.active_green ul li.active a a:not(.btn):hover h6 {
    color: #fff4d7
}

.nav.active_green ul li.active a a:not(.btn) h1,.nav.active_green ul li.active a a:not(.btn) h2,.nav.active_green ul li.active a a:not(.btn) h3,.nav.active_green ul li.active a a:not(.btn) h4,.nav.active_green ul li.active a a:not(.btn) h5,.nav.active_green ul li.active a a:not(.btn) h6 {
    color: #2b2b2b
}

.nav.active_green ul li.active a .btn {
    color: #000
}

.nav.active_green ul li.active a .btn.alt {
    color: #000
}

.nav.active_green ul li.active a::after {
    border-top-color: #43b02a
}

.nav.active_purple ul li.active a {
    background-color: #402f8a;
    color: #fff
}

.nav.active_purple ul li.active a h1,.nav.active_purple ul li.active a h2,.nav.active_purple ul li.active a h3,.nav.active_purple ul li.active a h4,.nav.active_purple ul li.active a h5,.nav.active_purple ul li.active a h6 {
    color: #fff
}

.nav.active_purple ul li.active a a:not(.btn) {
    color: #ffc629;
    border-color: #ffc629
}

.nav.active_purple ul li.active a a:not(.btn):hover {
    color: #fff4d7;
    border-color: #fff4d7
}

.nav.active_purple ul li.active a a:not(.btn):hover * {
    color: #fff4d7;
    border-color: #fff4d7
}

.nav.active_purple ul li.active a a:not(.btn):hover h1,.nav.active_purple ul li.active a a:not(.btn):hover h2,.nav.active_purple ul li.active a a:not(.btn):hover h3,.nav.active_purple ul li.active a a:not(.btn):hover h4,.nav.active_purple ul li.active a a:not(.btn):hover h5,.nav.active_purple ul li.active a a:not(.btn):hover h6 {
    color: #fff4d7
}

.nav.active_purple ul li.active a a:not(.btn) h1,.nav.active_purple ul li.active a a:not(.btn) h2,.nav.active_purple ul li.active a a:not(.btn) h3,.nav.active_purple ul li.active a a:not(.btn) h4,.nav.active_purple ul li.active a a:not(.btn) h5,.nav.active_purple ul li.active a a:not(.btn) h6 {
    color: #ffc629
}

.nav.active_purple ul li.active a .btn {
    color: #fff
}

.nav.active_purple ul li.active a .btn.alt {
    color: #000
}

.nav.active_purple ul li.active a::after {
    border-top-color: #402f8a
}

.nav.active_leaning_man ul li.active a {
    background-color: #f4633a;
    color: #000
}

.nav.active_leaning_man ul li.active a h1,.nav.active_leaning_man ul li.active a h2,.nav.active_leaning_man ul li.active a h3,.nav.active_leaning_man ul li.active a h4,.nav.active_leaning_man ul li.active a h5,.nav.active_leaning_man ul li.active a h6 {
    color: #000
}

.nav.active_leaning_man ul li.active a a:not(.btn) {
    color: #262626;
    border-color: #262626
}

.nav.active_leaning_man ul li.active a a:not(.btn):hover {
    color: #fff4d7;
    border-color: #fff4d7
}

.nav.active_leaning_man ul li.active a a:not(.btn):hover * {
    color: #fff4d7;
    border-color: #fff4d7
}

.nav.active_leaning_man ul li.active a a:not(.btn):hover h1,.nav.active_leaning_man ul li.active a a:not(.btn):hover h2,.nav.active_leaning_man ul li.active a a:not(.btn):hover h3,.nav.active_leaning_man ul li.active a a:not(.btn):hover h4,.nav.active_leaning_man ul li.active a a:not(.btn):hover h5,.nav.active_leaning_man ul li.active a a:not(.btn):hover h6 {
    color: #fff4d7
}

.nav.active_leaning_man ul li.active a a:not(.btn) h1,.nav.active_leaning_man ul li.active a a:not(.btn) h2,.nav.active_leaning_man ul li.active a a:not(.btn) h3,.nav.active_leaning_man ul li.active a a:not(.btn) h4,.nav.active_leaning_man ul li.active a a:not(.btn) h5,.nav.active_leaning_man ul li.active a a:not(.btn) h6 {
    color: #262626
}

.nav.active_leaning_man ul li.active a .btn {
    color: #000
}

.nav.active_leaning_man ul li.active a .btn.alt {
    color: #000
}

.nav.active_leaning_man ul li.active a::after {
    border-top-color: #f4633a
}

.nav.active_honors_blue ul li.active a {
    background-color: #003e51;
    color: #fff
}

.nav.active_honors_blue ul li.active a h1,.nav.active_honors_blue ul li.active a h2,.nav.active_honors_blue ul li.active a h3,.nav.active_honors_blue ul li.active a h4,.nav.active_honors_blue ul li.active a h5,.nav.active_honors_blue ul li.active a h6 {
    color: #fff
}

.nav.active_honors_blue ul li.active a a:not(.btn) {
    color: #ffc629;
    border-color: #ffc629
}

.nav.active_honors_blue ul li.active a a:not(.btn):hover {
    color: #fff4d7;
    border-color: #fff4d7
}

.nav.active_honors_blue ul li.active a a:not(.btn):hover * {
    color: #fff4d7;
    border-color: #fff4d7
}

.nav.active_honors_blue ul li.active a a:not(.btn):hover h1,.nav.active_honors_blue ul li.active a a:not(.btn):hover h2,.nav.active_honors_blue ul li.active a a:not(.btn):hover h3,.nav.active_honors_blue ul li.active a a:not(.btn):hover h4,.nav.active_honors_blue ul li.active a a:not(.btn):hover h5,.nav.active_honors_blue ul li.active a a:not(.btn):hover h6 {
    color: #fff4d7
}

.nav.active_honors_blue ul li.active a a:not(.btn) h1,.nav.active_honors_blue ul li.active a a:not(.btn) h2,.nav.active_honors_blue ul li.active a a:not(.btn) h3,.nav.active_honors_blue ul li.active a a:not(.btn) h4,.nav.active_honors_blue ul li.active a a:not(.btn) h5,.nav.active_honors_blue ul li.active a a:not(.btn) h6 {
    color: #ffc629
}

.nav.active_honors_blue ul li.active a .btn {
    color: #fff
}

.nav.active_honors_blue ul li.active a .btn.alt {
    color: #000
}

.nav.active_honors_blue ul li.active a::after {
    border-top-color: #003e51
}

.nav.active_parliament_blue ul li.active a {
    background-color: #1a658f;
    color: #fff
}

.nav.active_parliament_blue ul li.active a h1,.nav.active_parliament_blue ul li.active a h2,.nav.active_parliament_blue ul li.active a h3,.nav.active_parliament_blue ul li.active a h4,.nav.active_parliament_blue ul li.active a h5,.nav.active_parliament_blue ul li.active a h6 {
    color: #fff
}

.nav.active_parliament_blue ul li.active a a:not(.btn) {
    color: #ffd561;
    border-color: #ffd561
}

.nav.active_parliament_blue ul li.active a a:not(.btn):hover {
    color: #fff4d7;
    border-color: #fff4d7
}

.nav.active_parliament_blue ul li.active a a:not(.btn):hover * {
    color: #fff4d7;
    border-color: #fff4d7
}

.nav.active_parliament_blue ul li.active a a:not(.btn):hover h1,.nav.active_parliament_blue ul li.active a a:not(.btn):hover h2,.nav.active_parliament_blue ul li.active a a:not(.btn):hover h3,.nav.active_parliament_blue ul li.active a a:not(.btn):hover h4,.nav.active_parliament_blue ul li.active a a:not(.btn):hover h5,.nav.active_parliament_blue ul li.active a a:not(.btn):hover h6 {
    color: #fff4d7
}

.nav.active_parliament_blue ul li.active a a:not(.btn) h1,.nav.active_parliament_blue ul li.active a a:not(.btn) h2,.nav.active_parliament_blue ul li.active a a:not(.btn) h3,.nav.active_parliament_blue ul li.active a a:not(.btn) h4,.nav.active_parliament_blue ul li.active a a:not(.btn) h5,.nav.active_parliament_blue ul li.active a a:not(.btn) h6 {
    color: #ffd561
}

.nav.active_parliament_blue ul li.active a .btn {
    color: #fff
}

.nav.active_parliament_blue ul li.active a .btn.alt {
    color: #000
}

.nav.active_parliament_blue ul li.active a::after {
    border-top-color: #1a658f
}

.nav.active_lilac ul li.active a {
    background-color: #7566a0;
    color: #fff
}

.nav.active_lilac ul li.active a h1,.nav.active_lilac ul li.active a h2,.nav.active_lilac ul li.active a h3,.nav.active_lilac ul li.active a h4,.nav.active_lilac ul li.active a h5,.nav.active_lilac ul li.active a h6 {
    color: #fff
}

.nav.active_lilac ul li.active a a:not(.btn) {
    color: #fff3d1;
    border-color: #fff3d1
}

.nav.active_lilac ul li.active a a:not(.btn):hover {
    color: #000;
    border-color: #000
}

.nav.active_lilac ul li.active a a:not(.btn):hover * {
    color: #000;
    border-color: #000
}

.nav.active_lilac ul li.active a a:not(.btn):hover h1,.nav.active_lilac ul li.active a a:not(.btn):hover h2,.nav.active_lilac ul li.active a a:not(.btn):hover h3,.nav.active_lilac ul li.active a a:not(.btn):hover h4,.nav.active_lilac ul li.active a a:not(.btn):hover h5,.nav.active_lilac ul li.active a a:not(.btn):hover h6 {
    color: #000
}

.nav.active_lilac ul li.active a a:not(.btn) h1,.nav.active_lilac ul li.active a a:not(.btn) h2,.nav.active_lilac ul li.active a a:not(.btn) h3,.nav.active_lilac ul li.active a a:not(.btn) h4,.nav.active_lilac ul li.active a a:not(.btn) h5,.nav.active_lilac ul li.active a a:not(.btn) h6 {
    color: #fff3d1
}

.nav.active_lilac ul li.active a .btn {
    color: #fff
}

.nav.active_lilac ul li.active a .btn.alt {
    color: #000
}

.nav.active_lilac ul li.active a::after {
    border-top-color: #7566a0
}

.nav.active_bronze ul li.active a {
    background-color: #c69214;
    color: #000
}

.nav.active_bronze ul li.active a h1,.nav.active_bronze ul li.active a h2,.nav.active_bronze ul li.active a h3,.nav.active_bronze ul li.active a h4,.nav.active_bronze ul li.active a h5,.nav.active_bronze ul li.active a h6 {
    color: #000
}

.nav.active_bronze ul li.active a a:not(.btn) {
    color: #1a1a1a;
    border-color: #1a1a1a
}

.nav.active_bronze ul li.active a a:not(.btn):hover {
    color: #fff4d7;
    border-color: #fff4d7
}

.nav.active_bronze ul li.active a a:not(.btn):hover * {
    color: #fff4d7;
    border-color: #fff4d7
}

.nav.active_bronze ul li.active a a:not(.btn):hover h1,.nav.active_bronze ul li.active a a:not(.btn):hover h2,.nav.active_bronze ul li.active a a:not(.btn):hover h3,.nav.active_bronze ul li.active a a:not(.btn):hover h4,.nav.active_bronze ul li.active a a:not(.btn):hover h5,.nav.active_bronze ul li.active a a:not(.btn):hover h6 {
    color: #fff4d7
}

.nav.active_bronze ul li.active a a:not(.btn) h1,.nav.active_bronze ul li.active a a:not(.btn) h2,.nav.active_bronze ul li.active a a:not(.btn) h3,.nav.active_bronze ul li.active a a:not(.btn) h4,.nav.active_bronze ul li.active a a:not(.btn) h5,.nav.active_bronze ul li.active a a:not(.btn) h6 {
    color: #1a1a1a
}

.nav.active_bronze ul li.active a .btn {
    color: #000
}

.nav.active_bronze ul li.active a .btn.alt {
    color: #000
}

.nav.active_bronze ul li.active a::after {
    border-top-color: #c69214
}

.nav.active_tan ul li.active a {
    background-color: #b7a99a;
    color: #000
}

.nav.active_tan ul li.active a h1,.nav.active_tan ul li.active a h2,.nav.active_tan ul li.active a h3,.nav.active_tan ul li.active a h4,.nav.active_tan ul li.active a h5,.nav.active_tan ul li.active a h6 {
    color: #000
}

.nav.active_tan ul li.active a a:not(.btn) {
    color: #404040;
    border-color: #404040
}

.nav.active_tan ul li.active a a:not(.btn):hover {
    color: #fff4d7;
    border-color: #fff4d7
}

.nav.active_tan ul li.active a a:not(.btn):hover * {
    color: #fff4d7;
    border-color: #fff4d7
}

.nav.active_tan ul li.active a a:not(.btn):hover h1,.nav.active_tan ul li.active a a:not(.btn):hover h2,.nav.active_tan ul li.active a a:not(.btn):hover h3,.nav.active_tan ul li.active a a:not(.btn):hover h4,.nav.active_tan ul li.active a a:not(.btn):hover h5,.nav.active_tan ul li.active a a:not(.btn):hover h6 {
    color: #fff4d7
}

.nav.active_tan ul li.active a a:not(.btn) h1,.nav.active_tan ul li.active a a:not(.btn) h2,.nav.active_tan ul li.active a a:not(.btn) h3,.nav.active_tan ul li.active a a:not(.btn) h4,.nav.active_tan ul li.active a a:not(.btn) h5,.nav.active_tan ul li.active a a:not(.btn) h6 {
    color: #404040
}

.nav.active_tan ul li.active a .btn {
    color: #000
}

.nav.active_tan ul li.active a .btn.alt {
    color: #000
}

.nav.active_tan ul li.active a::after {
    border-top-color: #b7a99a
}

.nav.active_chastain_blue ul li.active a {
    background-color: #bbdde6;
    color: #000
}

.nav.active_chastain_blue ul li.active a h1,.nav.active_chastain_blue ul li.active a h2,.nav.active_chastain_blue ul li.active a h3,.nav.active_chastain_blue ul li.active a h4,.nav.active_chastain_blue ul li.active a h5,.nav.active_chastain_blue ul li.active a h6 {
    color: #000
}

.nav.active_chastain_blue ul li.active a a:not(.btn) {
    color: #076490;
    border-color: #076490
}

.nav.active_chastain_blue ul li.active a a:not(.btn):hover {
    color: #000;
    border-color: #000
}

.nav.active_chastain_blue ul li.active a a:not(.btn):hover * {
    color: #000;
    border-color: #000
}

.nav.active_chastain_blue ul li.active a a:not(.btn):hover h1,.nav.active_chastain_blue ul li.active a a:not(.btn):hover h2,.nav.active_chastain_blue ul li.active a a:not(.btn):hover h3,.nav.active_chastain_blue ul li.active a a:not(.btn):hover h4,.nav.active_chastain_blue ul li.active a a:not(.btn):hover h5,.nav.active_chastain_blue ul li.active a a:not(.btn):hover h6 {
    color: #000
}

.nav.active_chastain_blue ul li.active a a:not(.btn) h1,.nav.active_chastain_blue ul li.active a a:not(.btn) h2,.nav.active_chastain_blue ul li.active a a:not(.btn) h3,.nav.active_chastain_blue ul li.active a a:not(.btn) h4,.nav.active_chastain_blue ul li.active a a:not(.btn) h5,.nav.active_chastain_blue ul li.active a a:not(.btn) h6 {
    color: #076490
}

.nav.active_chastain_blue ul li.active a .btn {
    color: #000
}

.nav.active_chastain_blue ul li.active a .btn.alt {
    color: #000
}

.nav.active_chastain_blue ul li.active a::after {
    border-top-color: #bbdde6
}

.nav.active_beige ul li.active a {
    background-color: #f1e6b2;
    color: #000
}

.nav.active_beige ul li.active a h1,.nav.active_beige ul li.active a h2,.nav.active_beige ul li.active a h3,.nav.active_beige ul li.active a h4,.nav.active_beige ul li.active a h5,.nav.active_beige ul li.active a h6 {
    color: #000
}

.nav.active_beige ul li.active a a:not(.btn) {
    color: #1a658f;
    border-color: #1a658f
}

.nav.active_beige ul li.active a a:not(.btn):hover {
    color: #000;
    border-color: #000
}

.nav.active_beige ul li.active a a:not(.btn):hover * {
    color: #000;
    border-color: #000
}

.nav.active_beige ul li.active a a:not(.btn):hover h1,.nav.active_beige ul li.active a a:not(.btn):hover h2,.nav.active_beige ul li.active a a:not(.btn):hover h3,.nav.active_beige ul li.active a a:not(.btn):hover h4,.nav.active_beige ul li.active a a:not(.btn):hover h5,.nav.active_beige ul li.active a a:not(.btn):hover h6 {
    color: #000
}

.nav.active_beige ul li.active a a:not(.btn) h1,.nav.active_beige ul li.active a a:not(.btn) h2,.nav.active_beige ul li.active a a:not(.btn) h3,.nav.active_beige ul li.active a a:not(.btn) h4,.nav.active_beige ul li.active a a:not(.btn) h5,.nav.active_beige ul li.active a a:not(.btn) h6 {
    color: #1a658f
}

.nav.active_beige ul li.active a .btn {
    color: #000
}

.nav.active_beige ul li.active a .btn.alt {
    color: #000
}

.nav.active_beige ul li.active a::after {
    border-top-color: #f1e6b2
}

@media only screen and (max-width: 56em) {
    .inner_rim:not(.page)>.nav {
        padding-top:32px;
        padding-top: 2rem
    }
}

#throne_room {
    list-style: none;
    margin: 0;
    padding: 0;
    font-family: arial,sans-serif;
    font-size: 16px;
    font-size: 1rem;
    width: 95%;
    margin: 0 auto;
    text-align: center;
    display: none;
    height: 40px;
    height: 2.5rem;
    line-height: inherit
}

#throne_room li {
    float: left;
    width: 50%;
    cursor: pointer;
    display: table-cell;
    height: 40px;
    height: 2.5rem;
    line-height: inherit
}

#throne_room li:hover {
    background: #fed15d
}

#throne_room img {
    height: 30px;
    height: 1.875rem;
    vertical-align: middle;
    position: relative;
    top: -2px
}

#throne_room a {
    color: #000
}

#throne_room span {
    vertical-align: middle
}

#mobile_high_council_chamber {
    list-style: none;
    width: 100%;
    margin: 0;
    padding: 0;
    background: #303030;
    clear: both;
    line-height: normal;
    display: none
}

#mobile_high_council_chamber iframe,#mobile_high_council_chamber img,#mobile_high_council_chamber p,#mobile_high_council_chamber video {
    display: none
}

#mobile_high_council_chamber ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: none;
    clear: both
}

#mobile_high_council_chamber li {
    margin: 0;
    padding: 0;
    border-bottom: 1px solid #000;
    width: 100%;
    position: relative;
    cursor: pointer;
    clear: both
}

#mobile_high_council_chamber li a {
    color: #fff;
    display: block;
    float: right;
    z-index: 1;
    padding: 12px 0;
    padding: .75rem 0;
    padding-left: 1%;
    width: 83%
}

#mobile_high_council_chamber li:hover {
    background: #555
}

#mobile_high_council_chamber li.featured a {
    color: #febc11
}

#mobile_high_council_chamber li.featured:hover {
    background: #feca44
}

#mobile_high_council_chamber li.featured:hover a {
    color: #000
}

#mobile_high_council_chamber li.mobile {
    display: none
}

#mobile_high_council_chamber li::after {
    content: "";
    display: block;
    clear: both
}

#mobile_high_council_chamber li>ul {
    background: #3d3d3d
}

#mobile_high_council_chamber li>ul>li a {
    padding-left: 1%;
    width: 82%
}

#mobile_high_council_chamber li>ul>li>ul {
    background: #4a4a4a
}

#mobile_high_council_chamber li>ul>li>ul li a {
    padding-left: 19.2%;
    width: 80.8%
}

#mobile_high_council_chamber li .close-icon,#mobile_high_council_chamber li .no-icon,#mobile_high_council_chamber li .open-icon {
    background-repeat: no-repeat;
    background-size: 21px;
    background-position: center center;
    width: 21px;
    height: 21px;
    display: block;
    padding: 11px 4%;
    float: left;
    z-index: 5
}

#mobile_high_council_chamber li .close-icon .horizontal,#mobile_high_council_chamber li .close-icon .vertical,#mobile_high_council_chamber li .no-icon .horizontal,#mobile_high_council_chamber li .no-icon .vertical,#mobile_high_council_chamber li .open-icon .horizontal,#mobile_high_council_chamber li .open-icon .vertical {
    display: none
}

#mobile_high_council_chamber li .open-icon {
    background-image: url(/_omni/images/global/plus.png)
}

#mobile_high_council_chamber li .close-icon {
    background-image: url(/_omni/images/global/minus.png)
}

.blog_listing .desc {
    white-space: pre-wrap
}

.outer_rim {
    width: 100%;
    padding: 30px 0;
    padding: 1.875rem 0;
    margin: 30px 0;
    margin: 1.875rem 0;
    background: #e5e5e5;
    clear: both
}

.outer_rim .btn,.outer_rim button {
    background: #febc11;
    border: none
}

.outer_rim .btn:hover,.outer_rim button:hover {
    background: #feca44
}

.inner_rim {
    width: 80%;
    margin: 0 auto;
    clear: both;
    position: relative
}

.inner_rim.max_width {
    max-width: 1440px;
    max-width: 90rem
}

.az_list:after,.core_worlds:after,.events:after,.inner_rim:after,.news:after,.outer_rim:after {
    content: "";
    display: block;
    clear: both
}

.cantina {
    list-style: none;
    margin: 0;
    padding: 0;
    padding-bottom: 8px;
    padding-bottom: .5rem
}

.cantina::after {
    content: "";
    display: block;
    clear: both
}

.cantina>li {
    margin-right: 5%;
    width: 30%;
    float: left;
    margin-bottom: 32px;
    margin-bottom: 2rem
}

.cantina>li:nth-child(3n) {
    margin-right: 0
}

.cantina>li:nth-child(4n) {
    clear: left
}

.cantina img {
    width: 100%;
    max-width: none
}

.cantina a {
    border: none
}

.cantina h1 {
    margin: 8px 0 5px 0;
    margin: .5rem 0 .3125rem 0;
    border-bottom: 1px solid #000;
    padding-bottom: 5px;
    padding-bottom: .3125rem;
    font-size: 24px;
    font-size: 1.5rem;
    text-transform: capitalize
}

.cantina .title {
    margin: 8px 0 5px 0;
    margin: .5rem 0 .3125rem 0;
    border-bottom: 1px solid #000;
    padding-bottom: 5px;
    padding-bottom: .3125rem
}

.cantina ul {
    list-style: none;
    margin: 0;
    padding: 0
}

.cantina ul li {
    border-bottom: 1px solid #e5e5e5
}

.cantina ul li a {
    padding: 10px 2%;
    padding: .625 2%;
    padding-left: 13%;
    width: 85%;
    display: block;
    background: url(/_omni/images/global/arrow.png) no-repeat 8px center;
    background-size: 9px;
    -ms-transition: background-position .2s;
    
    
    -webkit-transition: background-position .2s;
    -moz-transition: background-position .2s;
    -o-transition: background-position .2s;
    transition: background-position .2s
}

.cantina ul li a:hover {
    background-position: 14px center
}

.cantina .col_1 {
    margin-right: 5%
}

.cantina .col_1,.cantina .col_2 {
    width: 47.5%;
    float: left
}

.cantina.one_col>li {
    margin-right: 0;
    width: 100%
}

.cantina.two_col>li,.cantina.two_col>li:nth-child(3n) {
    margin-right: 5%;
    width: 47.5%
}

.cantina.two_col>li:nth-child(2n) {
    margin-right: 0
}

.cantina.two_col>li:nth-child(3n) {
    clear: left
}

.cantina.two_col>li:nth-child(4n) {
    clear: none
}

.tie_advanced,.tie_bomber,.tie_fighter {
    margin-bottom: 20px;
    margin-bottom: 1.25rem
}

.tie_advanced.left,.tie_advanced.right,.tie_bomber.left,.tie_bomber.right,.tie_fighter.left,.tie_fighter.right {
    width: 100%;
    max-width: 304px;
    max-width: 19rem;
    margin-bottom: 16px;
    margin-bottom: 1rem;
    margin-top: 16px;
    margin-top: 1rem
}

.tie_advanced.left,.tie_bomber.left,.tie_fighter.left {
    float: left;
    margin-right: 16px;
    margin-right: 1rem
}

.tie_advanced.right,.tie_bomber.right,.tie_fighter.right {
    float: right;
    margin-left: 16px;
    margin-left: 1rem
}

.tie_fighter {
    width: 90%;
    padding: 12.8px 5%;
    padding: .8rem 5%
}

.tie_fighter h1:first-child,.tie_fighter h2:first-child,.tie_fighter h3:first-child,.tie_fighter h4:first-child,.tie_fighter h5:first-child,.tie_fighter h6:first-child {
    color: #005d83;
    font-size: 32px;
    font-size: 2rem;
    margin-top: 0
}

.tie_fighter ol,.tie_fighter p,.tie_fighter ul {
    margin-bottom: 0
}

.tie_fighter p {
    line-height: 28.8px;
    line-height: 1.8rem
}

.tie_fighter[data-button=iframe] iframe {
    display: none
}

.tie_bomber {
    width: 90%;
    padding: 32px 5%;
    padding: 2rem 5%;
    background: url(/_omni/images/global/corner-cut.png) no-repeat right top;
    background-size: 1.8rem;
    background-color: #e5e5e5
}

.tie_bomber .h1,.tie_bomber .h2,.tie_bomber .h3,.tie_bomber .h4,.tie_bomber .h5,.tie_bomber .h6,.tie_bomber h1,.tie_bomber h2,.tie_bomber h3,.tie_bomber h4,.tie_bomber h5,.tie_bomber h6 {
    margin-top: 0;
    color: #4d4d4d
}

.tie_bomber ol,.tie_bomber p,.tie_bomber ul {
    margin-bottom: 0
}

.tie_bomber p {
    line-height: 28.8px;
    line-height: 1.8rem
}

.tie_bomber p:first-child {
    margin-top: 0
}

.tie_bomber[data-button=iframe] iframe {
    display: none
}

.tie_advanced {
    background: #e5e5e5;
    width: 100%;
    overflow: hidden
}

.tie_advanced .plus_wrapper {
    width: 1em;
    height: 1em;
    position: relative;
    cursor: pointer
}

.tie_advanced .plus_wrapper span {
    background: #00708d;
    display: block;
    position: absolute;
    border-radius: 16px;
    -webkit-border-radius: 16px;
    -moz-border-radius: 16px;
    border-radius: 1rem;
    -webkit-border-radius: 1rem;
    -moz-border-radius: 1rem
}

.tie_advanced .plus_wrapper .vertical {
    width: .125em;
    height: 1em;
    left: 50%;
    margin-left: -.0625em;
    -ms-transition: transform .4s;
    
    
    -webkit-transition: transform .4s;
    -moz-transition: transform .4s;
    -o-transition: transform .4s;
    transition: transform .4s
}

.tie_advanced .plus_wrapper .horizontal {
    width: 1em;
    height: .125em;
    top: 50%;
    margin-top: -.0625em
}

.tie_advanced .plus_wrapper.minus .vertical {
    -ms-transform: rotate(90deg);
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    transform: rotate(90deg)
}

.tie_advanced .title,.tie_advanced h1 {
    padding: 15px 5%;
    padding: .9375rem 5%;
    width: 90.5%;
    margin: 0;
    font-size: 24px;
    font-size: 1.5rem;
    font-weight: 400;
    text-transform: uppercase;
    background: url(/_omni/images/global/corner-cut.png) no-repeat right top;
    background-size: 1.8rem;
    background-color: #febc11;
    font-family: Nunito,Arial,Helvetica,sans-serif
}

.tie_advanced ul {
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%
}

.tie_advanced ul li {
    width: 100%
}

.tie_advanced ul li:hover {
    background: #febc11
}

.tie_advanced ul li a {
    padding: .8rem 5%;
    padding: 12.8px 5%;
    display: block;
    width: 90%;
    color: #000;
    border: none
}

.tie_advanced .content {
    padding: 0 5%
}

.az_list {
    list-style: none;
    margin: 0;
    padding: 0
}

.az_list li {
    display: inline;
    margin-right: 1%
}

.pagination {
    list-style: none;
    margin: 0;
    padding: 0;
    text-align: center
}

.pagination li {
    display: inline-block;
    margin: 0 4.8px;
    margin: 0 .3rem
}

.pagination .active,.pagination .active a {
    color: #000
}

.header_pagination {
    border-bottom: 1px solid #e5e5e5;
    padding: 8px;
    padding: .5rem;
    margin-bottom: 16px;
    margin-bottom: 1rem
}

.long_list,.ou_long_list {
    list-style: none;
    margin: 0;
    padding: 0
}

.long_list>li,.ou_long_list>li {
    padding: 8px 0;
    padding: .5rem 0;
    width: 95%;
    padding-left: 2.5%;
    padding-right: 2.5%
}

.long_list>li:nth-child(even),.ou_long_list>li:nth-child(even) {
    background: #f2f2f2
}

.long_list a,.ou_long_list a {
    color: #000;
    width: 60%;
    display: inline-block;
    line-height: 40px;
    line-height: 2.5rem;
    vertical-align: top
}

.long_list a:hover,.ou_long_list a:hover {
    color: #00708d
}

.long_list .links,.ou_long_list .links {
    width: 35%;
    margin-left: 4%;
    display: inline-block;
    text-align: right;
    vertical-align: top
}

.long_list .links a,.ou_long_list .links a {
    width: auto;
    display: inline
}

.long_list .links img,.ou_long_list .links img {
    height: 32px;
    height: 2rem;
    display: inline;
    margin-top: 3.2px;
    margin-top: .2rem
}

.long_list a {
    border: none
}

.ou_long_list>li {
    padding: 16px 0;
    padding: 1rem 0;
    padding-left: 2.5%;
    padding-right: 2.5%
}

.ou_long_list a {
    display: inline;
    width: auto;
    color: #00708d;
    line-height: normal
}

.ou_long_list a:hover {
    color: #febc11
}

.table .date {
    width: 100%;
    display: block;
    font-size: .8em;
    color: #888
}

.teaser {
    list-style: none;
    margin: 0;
    padding: 0
}

.teaser>li {
    clear: both;
    width: 100%;
    display: block;
    margin-bottom: 32px;
    margin-bottom: 2rem;
    padding-bottom: 32px;
    padding-bottom: 2rem;
    border-bottom: 1px solid #e5e5e5
}

.teaser>li::after {
    content: "";
    display: block;
    clear: both
}

.teaser .col_1 {
    margin-right: 5%
}

.teaser .col_1,.teaser .col_2 {
    float: left;
    width: 47.5%
}

.teaser .col_1 ul,.teaser .col_2 ul {
    list-style: none;
    margin: 0;
    padding: 0
}

.teaser.photo .content,.teaser.photo img {
    float: left
}

.teaser.photo .content {
    width: 68%
}

.teaser.photo .content h1:first-child,.teaser.photo .content h2:first-child,.teaser.photo .content h3:first-child,.teaser.photo .content h4:first-child,.teaser.photo .content h5:first-child {
    margin-top: 0
}

.teaser.photo img {
    width: 27%;
    margin-right: 5%;
    max-width: 100%
}

.teaser.photo.small img {
    width: 20%
}

.teaser.photo.small .content {
    width: 75%
}

.teaser.photo.right img {
    margin-right: 0;
    margin-left: 5%;
    float: right
}

.teaser .title {
    margin-top: 0;
    margin-bottom: 0
}

.teaser .date {
    color: #888
}

.news {
    list-style: none;
    margin: 0;
    padding: 0;
    margin-bottom: 30px;
    margin-bottom: 1.875rem;
    font-size: 16px;
    font-size: 1rem
}

.news li {
    margin-right: 2.5%;
    float: left;
    width: 23.125%;
    cursor: pointer
}

.news li:nth-child(4n) {
    margin-right: 0
}

.news li:hover img {
    opacity: .8
}

.news li:hover a {
    color: #febc11
}

.news::after {
    content: "";
    display: block;
    clear: both
}

.news img {
    width: 100%;
    max-width: 100%;
    -ms-transition: opacity .2s;
    
    
    -webkit-transition: opacity .2s;
    -moz-transition: opacity .2s;
    -o-transition: opacity .2s;
    transition: opacity .2s;
    -o-backface-visibility: hidden;
    -o-transform: translateZ(0) scale(1,1);
    -ms-backface-visibility: hidden;
    -ms-transform: translateZ(0) scale(1,1);
    -moz-backface-visibility: hidden;
    -moz-transform: translateZ(0) scale(1,1);
    -webkit-backface-visibility: hidden;
    -webkit-transform: translateZ(0) scale(1,1);
    backface-visibility: hidden;
    transform: translateZ(0) scale(1,1)
}

.news span {
    width: 100%;
    margin-top: 12px;
    margin-top: .75rem;
    display: block;
    text-transform: capitalize
}

.news a {
    -ms-transition: color .2s;
    
    
    -webkit-transition: color .2s;
    -moz-transition: color .2s;
    -o-transition: color .2s;
    transition: color .2s;
    border: none
}

.news.two_col li {
    width: 48.75%
}

.news.two_col li:nth-child(4n) {
    margin-right: 2.5%
}

.news.two_col li:nth-child(2n) {
    margin-right: 0
}

.news.one_col li {
    width: 100%;
    margin: 0
}

.fleet {
    list-style: none;
    margin: 0;
    padding: 0;
    margin-bottom: 30px;
    margin-bottom: 1.875rem;
    font-size: 16px;
    font-size: 1rem
}

.fleet li {
    margin-right: 2.5%;
    float: left;
    width: 23.125%;
    cursor: pointer
}

.fleet li:nth-child(4n) {
    margin-right: 0
}

.fleet li:hover img {
    opacity: .8
}

.fleet li:hover a {
    color: #febc11
}

.fleet li:hover h3 {
    color: #febc11;
    border-color: #febc11
}

.fleet::after {
    content: "";
    display: block;
    clear: both
}

.fleet img {
    width: 100%;
    max-width: none;
    -ms-transition: opacity .2s;
    
    -webkit-transition: opacity .2s;
    -moz-transition: opacity .2s;
    -o-transition: opacity .2s;
    transition: opacity .2s;
    -o-backface-visibility: hidden;
    -o-transform: translateZ(0) scale(1,1);
    -ms-backface-visibility: hidden;
    -ms-transform: translateZ(0) scale(1,1);
    -moz-backface-visibility: hidden;
    -moz-transform: translateZ(0) scale(1,1);
    -webkit-backface-visibility: hidden;
    -webkit-transform: translateZ(0) scale(1,1);
    backface-visibility: hidden;
    transform: translateZ(0) scale(1,1)
}

.fleet span {
    width: 100%;
    margin-top: 12px;
    margin-top: .75rem;
    display: block
}

.fleet a {
    -ms-transition: color .2s;
   
    
    -webkit-transition: color .2s;
    -moz-transition: color .2s;
    -o-transition: color .2s;
    transition: color .2s;
    width: 100%;
    display: block;
    height: 100%;
    border: none
}

.fleet .title,.fleet h3 {
    -ms-transition: border-color .2s;
    
    -webkit-transition: border-color .2s;
    -moz-transition: border-color .2s;
    -o-transition: border-color .2s;
    transition: border-color .2s;
    -ms-transition: color .2s;
    
    
    -webkit-transition: color .2s;
    -moz-transition: color .2s;
    -o-transition: color .2s;
    transition: color .2s;
    margin-top: 8px;
    margin-top: .5rem;
    margin-bottom: 0;
    color: #000;
    border-bottom: 1px solid #000;
    padding-bottom: 8px;
    padding-bottom: .5rem
}

.fleet.three_col li {
    width: 31.66%
}

.fleet.three_col li:nth-child(4n) {
    margin-right: 2.5%
}

.fleet.three_col li:nth-child(3n) {
    margin-right: 0
}

.fleet.two_col li {
    width: 48.75%
}

.fleet.two_col li:nth-child(4n) {
    margin-right: 2.5%
}

.fleet.two_col li:nth-child(2n) {
    margin-right: 0
}

.fleet.one_col li {
    width: 100%;
    margin: 0
}

.events_table,.table {
    display: table;
    width: 100%
}

.events {
    list-style: none;
    margin: 0;
    padding: 0;
    position: relative;
    display: table-row;
    font-size: 16px;
    font-size: 1rem
}

.events.v2 a {
    color: #000;
    border-bottom: none
}

.events.localist {
    list-style: none;
    margin: 0;
    padding: 0;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    font-size: 16px;
    font-size: 1rem
}

.events.localist li {
    display: inline-flex;
    background: 0 0;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    border: 2px solid #e5e5e5;
    margin-right: 2%;
    width: calc(56% - 4px);
    max-width: 50%;
    flex: 1 0 22.5%;
    margin-bottom: 2rem
}

.events.localist li .event-overview {
    display: block;
    overflow: hidden;
    padding: 0;
    position: relative;
    background: #fff;
    color: #2d2926;
    font-size: .95rem
}

.events.localist li .event-overview .event-overview-header {
    overflow: hidden;
    position: relative
}

.events.localist li .event-overview .event-overview-header .title {
    z-index: 1;
    background: rgba(0,0,0,.5) left top;
    bottom: 0;
    width: 88%;
    color: #fff;
    font-weight: 400;
    left: 0;
    overflow: hidden;
    padding: 3% 6%;
    position: absolute;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 1.875rem;
    margin: 0;
    -webkit-transition: all .1s ease-out;
    -moz-transition: all .1s ease-out;
    transition: all .1s ease-out
}

.events.localist li .event-overview .event-overview-header time {
    background: #ffc629;
    position: absolute;
    width: 2.8em;
    height: 2.3em;
    top: 0;
    left: 0;
    padding: .5em 0 0;
    font-size: 1.1rem;
    text-align: center;
    text-transform: uppercase;
    -webkit-transition: all .1s ease-out;
    -moz-transition: all .1s ease-out;
    transition: all .1s ease-out
}

.events.localist li .event-overview .event-overview-header time abbr {
    display: block;
    text-decoration: none
}

.events.localist li .event-overview .event-overview-header time .day,.events.localist li .event-overview .event-overview-header time .month {
    color: #2d2926;
    font-weight: 400;
    font-size: 1.1rem;
    line-height: 1em
}

.events.localist li .event-overview .event-overview-header img {
    position: relative;
    width: 100%;
    height: auto;
    min-height: 100%;
    min-width: 100%;
    display: block;
    left: 50%;
    -webkit-transform-origin: center center;
    -moz-transform-origin: center center;
    -ms-transform-origin: center center;
    -o-transform-origin: center center;
    transform-origin: center center;
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    -o-transform: translateX(-50%);
    transform: translateX(-50%);
    -webkit-transition: all .1s ease-out;
    -moz-transition: all .1s ease-out;
    transition: all .1s ease-out
}

.events.localist li .event-overview .event-content {
    padding: 6%
}

.events.localist li .event-overview .event-content .info {
    display: none
}

.events.localist li .event-overview .event-content .info .icon {
    padding-right: .6rem
}

.events.localist li .event-overview .event-content .time {
    margin-bottom: .2rem
}

.events.localist li .event-details {
    background: rgba(255,198,41,.9);
    color: #2d2926;
    width: 90%;
    height: 100%;
    left: 0;
    opacity: 0;
    padding: 5%;
    position: absolute;
    top: 0;
    visibility: hidden;
    -webkit-transition: all .1s ease-out;
    -moz-transition: all .1s ease-out;
    transition: all .1s ease-out
}

.events.localist li .event-details .title {
    display: block;
    line-height: 1.1875em;
    margin-bottom: 1rem;
    font-size: 1rem;
    font-weight: 700
}

.events.localist li .event-details .info {
    border-top: 1px solid rgba(0,0,0,.15);
    border-bottom: 1px solid rgba(0,0,0,.15);
    font-size: .9rem
}

.events.localist li .event-details .info .event-time {
    display: flex;
    align-items: stretch
}

.events.localist li .event-details .info .event-time time {
    display: block;
    padding: .7rem;
    padding-right: 0;
    flex: 3
}

.events.localist li .event-details .info .event-location {
    border-top: 1px solid rgba(0,0,0,.15);
    display: flex;
    align-items: stretch
}

.events.localist li .event-details .info .event-location .location {
    flex: 3;
    padding: .6rem;
    padding-right: 0
}

.events.localist li .event-details .info .icon {
    flex: 1;
    display: flex;
    border-right: 1px solid rgba(0,0,0,.15)
}

.events.localist li .event-details .info .icon i {
    align-self: center;
    margin: 0 auto;
    font-size: 1.5rem
}

.events.localist li .event-details .info :first-child {
    border-top: none
}

.events.localist li:hover {
    border-color: rgba(255,198,41,.85);
    opacity: 1;
    
}

.events.localist li:hover .event-details {
    visibility: visible;
    opacity: 1
}

.events.localist li:hover .event-overview-header {
    overflow: visible
}

.events.localist li:hover .event-overview-header img {
    -webkit-transform: scale(2.4) translateX(-20%) translateY(26%);
    -moz-transform: scale(2.4) translateX(-20%) translateY(26%);
    -ms-transform: scale(2.4) translateX(-20%) translateY(26%);
    -o-transform: scale(2.4) translateX(-20%) translateY(26%);
    transform: scale(2.4) translateX(-20%) translateY(26%)
}

.events.localist li:hover .event-overview-header .title,.events.localist li:hover .event-overview-header time {
    opacity: 0;
    visibility: 0
}

.events.localist li:hover .event-content {
    opacity: 0;
    visibility: 0
}

.events.localist li:last-child {
    margin-right: 0;
    border: 2px solid #e5e5e5
}

.events.localist li:last-child:hover {
    border-color: rgba(255,198,41,.85)
}

@media only screen and (max-width: 800px) {
    .events.localist {
        flex-wrap:wrap
    }

    .events.localist li {
        flex: initial;
        width: calc(48% - 4px);
        margin-right: 4%
    }

    .events.localist li .event-overview .event-content .info {
        display: block
    }

    .events.localist li:nth-child(2n),.events.localist li:nth-child(4n),.events.localist li:nth-child(6n),.events.localist li:nth-child(8n) {
        margin-right: 0
    }
}

@media only screen and (max-width: 500px) {
    .events.localist li {
        width:100%;
        max-width: 100%;
        margin-right: 0
    }
}

.events li {
    margin-right: 1%;
    width: 33.33%;
    position: relative;
    display: table-cell;
    vertical-align: top;
    border-right: 30px solid #fff;
    -ms-transition: opacity .2s;
    
    
    -webkit-transition: opacity .2s;
    -moz-transition: opacity .2s;
    -o-transition: opacity .2s;
    transition: opacity .2s;
    cursor: pointer;
    background: #febc11;
    background: -moz-linear-gradient(left,#febc11 0,#febc11 30%,#e5e5e5 30.01%,#e5e5e5 100%);
    background: -webkit-gradient(linear,left top,right top,color-stop(0,#febc11),color-stop(30%,#febc11),color-stop(30.01%,#e5e5e5),color-stop(100%,#e5e5e5));
    background: -webkit-linear-gradient(left,#febc11 0,#febc11 30%,#e5e5e5 30.01%,#e5e5e5 100%);
    background: -o-linear-gradient(left,#febc11 0,#febc11 30%,#e5e5e5 30.01%,#e5e5e5 100%);
    background: -ms-linear-gradient(left,#febc11 0,#febc11 30%,#e5e5e5 30.01%,#e5e5e5 100%);
    background: linear-gradient(to right,#febc11 0,#febc11 30%,#e5e5e5 30.01%,#e5e5e5 100%);
    background: url(/_omni/images/global/events-bg.jpg) repeat-y #e5e5e5;
    background-size: 100% 3px
}

.events li:last-child {
    margin-right: 0;
    border: none
}

.events li:hover {
    opacity: .7
}

.events li::after {
    content: "";
    display: block;
    clear: both
}

.events .date {
    width: 30%;
    text-align: center;
    float: left;
    padding: 24px 0;
    padding: 1.5rem 0
}

.events .day,.events .month {
    display: block;
    width: 100%;
    font-size: 25.6px;
    font-size: 1.6rem
}

.events .month {
    text-transform: uppercase
}

.events .details {
    width: 60%;
    position: relative;
    padding: 15px 5%;
    padding: .9375rem 5%;
    float: left
}

.events .title {
    margin-bottom: 11.2px;
    margin-bottom: .7rem
}

.events .location,.events .text,.events .time,.events .title {
    width: 100%;
    display: block
}

.events .title {
    font-weight: 700
}

.events .text {
    margin-bottom: 16px;
    margin-bottom: 1rem
}

.events.two_col li {
    width: 50%
}

.events.one_col {
    display: block
}

.events.one_col li {
    width: 100%;
    margin: 0;
    margin-bottom: 16px;
    margin-bottom: 1rem;
    display: block;
    border: none
}

ul.table {
    font-size: 0
}

ul.table div {
    font-size: 1.2rem
}

ul.table.no_zebra>li:nth-child(even) {
    background: 0 0
}

ul.table.no_zebra>li {
    border: 1px solid #e5e5e5;
    border-left: none;
    border-right: none
}

ul.table.no_zebra>li+li {
    border-top: none
}

ul.table.vertical_center>li {
    border-spacing: 16px 0;
    border-spacing: 1rem 0;
    border-collapse: separate;
    display: table
}

ul.table.vertical_center>li div {
    display: table-cell;
    vertical-align: middle;
    float: none
}

ul.table.table_responsified {
    margin-bottom: 0
}

ul.table.table_responsified .titles {
    display: none
}

ul.table.table_responsified .title {
    color: #4d4d4d;
    width: 100%;
    display: block
}

ul.table.table_responsified>li {
    padding-top: 16px;
    padding-top: 1rem;
    padding-bottom: 16px;
    padding-bottom: 1rem
}

ul.table.table_responsified>li>div {
    width: 100%!important;
    margin-top: 20.8px!important;
    margin-top: 1.3rem!important;
    text-align: left!important
}

ul.table.table_responsified>li>div:first-child {
    margin-top: 0
}

ul.table>li.sticky {
    position: fixed;
    width: 43.2%;
    padding-left: 2.4%;
    padding-right: 2.4%;
    display: none;
    top: 0
}

ul.table>li.sticky.visible {
    display: block
}

.table_showhide_btn {
    background: #febc11;
    text-align: center;
    cursor: pointer;
    padding: 16px 0;
    padding: 1rem 0
}

.table_showhide_btn:hover {
    background: #feca44
}

.ksu_search {
    list-style: none;
    margin: 0;
    padding: 0
}

.ksu_search>li {
    border-bottom: 1px solid #e5e5e5;
    padding-bottom: 32px;
    padding-bottom: 2rem;
    margin-bottom: 32px;
    margin-bottom: 2rem;
    display: block;
    width: 100%;
    clear: both
}

.ksu_search .meta,.ksu_search .snippet,.ksu_search .title {
    display: block;
    width: 100%
}

.ksu_search .title {
    font-size: 24px;
    font-size: 1.5rem
}

.ksu_search .meta {
    color: #888;
    font-size: 16px;
    font-size: 1rem;
    margin-top: 3.2px;
    margin-top: .2rem;
    word-break: break-word
}

.ksu_searchbox {
    margin-bottom: 32px;
    margin-bottom: 2rem
}

.ksu_searchbox input[type=text] {
    clear: left;
    width: 70%;
    min-height: 35.2px;
    min-height: 2.2rem;
    float: left;
    max-width: none;
    font-size: 14.4px;
    font-size: .9rem
}

.ksu_searchbox button[type=submit],.ksu_searchbox input[type=submit] {
    width: 30%;
    font-size: 14.4px;
    font-size: .9rem;
    min-height: 35.2px;
    min-height: 2.2rem;
    float: left;
    background: #febc11;
    border: 1px solid #febc11
}

.ksu_searchbox::after {
    content: "";
    clear: both;
    display: block
}

.share {
    list-style: none;
    margin: 0;
    padding: 0
}

.share .title {
    display: block;
    width: 100%;
    color: #888
}

.share li {
    display: inline-block;
    width: 32px;
    width: 2rem
}

.share img {
    width: 100%
}

.instagram_feed {
    list-style: none;
    margin: 0;
    padding: 0
}

.instagram_feed a {
    width: 100%;
    height: 100%
}

.instagram_feed li {
    display: inline-block
}

.instagram_feed img {
    width: 100px;
    height: 100px
}

.twitter_feed>ul {
    list-style: none;
    margin: 0;
    padding: 0;
    border: 1px solid #e5e5e5;
    overflow-y: scroll;
    height: 400px;
    height: 25rem;
    padding: 16px;
    padding: 1rem
}

.twitter_feed li {
    position: relative
}

.twitter_feed li:not(:last-child) {
    margin-bottom: 16px;
    margin-bottom: 1rem;
    padding-bottom: 16px;
    padding-bottom: 1rem;
    border-bottom: 1px solid #e5e5e5
}

.twitter_feed span[data-scribe="element:name"] {
    color: #000;
    font-weight: 400;
    font-size: 16px;
    font-size: 1rem
}

.twitter_feed span[data-scribe="element:screen_name"] {
    color: #4d4d4d;
    font-size: 13.6px;
    font-size: .85rem;
    display: block
}

.twitter_feed img[data-scribe="element:avatar"] {
    padding-right: 16px;
    padding-right: 1rem;
    width: 40px;
    float: left
}

.twitter_feed .tweet {
    padding-left: 40px;
    margin-left: 16px;
    margin-left: 1rem;
    margin-top: 8px;
    margin-top: .5rem;
    margin-bottom: 0;
    font-size: 16px;
    font-size: 1rem
}

.twitter_feed .timePosted {
    margin: 0;
    font-size: 13.6px;
    font-size: .85rem;
    position: absolute;
    top: 4px;
    top: .25rem;
    right: 0
}

.twitter_feed .interact {
    display: none;
    padding-left: 40px;
    padding-left: 2.5rem;
    margin-left: 16px;
    margin-left: 1rem;
    margin-top: 2px;
    margin-top: .125rem;
    font-size: 13.6px;
    font-size: .85rem
}

.twitter_feed .interact a:not(:last-child):after {
    content: " | ";
    color: #e5e5e5
}

.mission {
    text-align: center
}

.showhide_block_title {
    background: #febc11;
    padding: 11.2px;
    padding: .7rem;
    padding-left: 3%;
    padding-right: 3%;
    font-weight: 400
}

.showhide_block_title .col_1 {
    margin-right: 1.5%
}

.showhide_block_title .col_1,.showhide_block_title .col_2 {
    width: 46%;
    display: inline-block;
    vertical-align: middle
}

.showhide_block {
    list-style: none;
    margin: 0;
    padding: 0
}

.showhide_block>li>.showhide_btn {
    display: block;
    width: 95%;
    clear: both;
    position: relative;
    padding: 1rem 2.5%;
    border: 1px solid #e5e5e5;
    border-left: none;
    border-right: none;
    -ms-transition: background .2s;
    
    
    -webkit-transition: background .2s;
    -moz-transition: background .2s;
    -o-transition: background .2s;
    transition: background .2s;
    cursor: pointer
}

.showhide_block>li>.showhide_btn .plus_wrapper {
    width: 1em;
    height: 1em;
    position: relative;
    cursor: pointer
}

.showhide_block>li>.showhide_btn .plus_wrapper span {
    background: #00708d;
    display: block;
    position: absolute;
    border-radius: 16px;
    -webkit-border-radius: 16px;
    -moz-border-radius: 16px;
    border-radius: 1rem;
    -webkit-border-radius: 1rem;
    -moz-border-radius: 1rem
}

.showhide_block>li>.showhide_btn .plus_wrapper .vertical {
    width: .125em;
    height: 1em;
    left: 50%;
    margin-left: -.0625em;
    -ms-transition: transform .4s;
    
    
    -webkit-transition: transform .4s;
    -moz-transition: transform .4s;
    -o-transition: transform .4s;
    transition: transform .4s
}

.showhide_block>li>.showhide_btn .plus_wrapper .horizontal {
    width: 1em;
    height: .125em;
    top: 50%;
    margin-top: -.0625em
}

.showhide_block>li>.showhide_btn .plus_wrapper.minus .vertical {
    -ms-transform: rotate(90deg);
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    transform: rotate(90deg)
}

.showhide_block>li>.showhide_btn .plus_wrapper {
    position: absolute;
    top: 50%;
    margin-top: -.5em;
    right: 3%
}

.showhide_block>li>.showhide_btn>span {
    display: inline-block;
    width: 95%
}

.showhide_block>li>.showhide_btn .col_1 {
    margin-right: 1.5%
}

.showhide_block>li>.showhide_btn .col_1,.showhide_block>li>.showhide_btn .col_2 {
    width: 46%;
    vertical-align: middle;
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis
}

.showhide_block>li>.showhide_btn .replace_title {
    display: none;
    margin: 0
}

.showhide_block>li>.showhide_btn:hover {
    background: #e5e5e5
}

.showhide_block>li .more_info {
    display: none;
    width: 95%;
    padding: 19.2px 0;
    padding: 1.2rem 0;
    padding-left: 2.5%;
    padding-right: 2.5%;
    border-bottom: 1px solid #e5e5e5
}

.showhide_block>li .more_info+.showhide_btn {
    border-top: none
}

.showhide_block>li .more_info>:first-child {
    margin-top: 0
}

.showhide_block>li .more_info>:last-child {
    margin-bottom: 0
}

.showhide_block>li .more_info::after {
    content: "";
    display: block;
    clear: both
}

.showhide_block>li.open {
    border-left: 1px solid #e5e5e5;
    border-right: 1px solid #e5e5e5
}

.showhide_block>li.open>.showhide_btn {
    background: #febc11
}

.showhide_block>li.open>.showhide_btn:hover {
    background: #febc11
}

.showhide_block>li+li>.showhide_btn {
    border-top: none
}

.showhide_block>li:last-child.open .more_info {
    border-bottom: 1px solid #e5e5e5
}

.showhide_block_title+.showhide_block>li.open>.showhide_btn {
    background: #e5e5e5
}

.module_grid {
    list-style: none;
    margin: 0;
    padding: 0
}

.module_grid>li {
    display: block;
    float: left;
    background: #e5e5e5;
    padding: 0 2%;
    padding-top: 11.2px;
    padding-top: .7rem;
    padding-bottom: 11.2px;
    padding-bottom: .7rem;
    width: 44.75%;
    margin-right: 2.5%;
    margin-bottom: 16px;
    margin-bottom: 1rem
}

.module_grid>li:nth-child(2n) {
    margin-right: 0
}

.module_grid.no_bg>li {
    background: 0 0
}

.module_grid.no_padding>li {
    padding: 0
}

.module_grid.no_margin>li {
    margin: 0
}

.module_grid.no_margin_top_bottom>li {
    margin-top: 0;
    margin-bottom: 0
}

.module_grid.no_margin_left_right>li {
    margin-right: 0;
    margin-left: 0
}

.module_grid.three_col>li {
    width: 27.66666667%
}

.module_grid.three_col>li:nth-child(2n) {
    margin-right: 2.5%
}

.module_grid.three_col>li:nth-child(3n) {
    margin-right: 0
}

.module_grid.three_col>li:nth-child(3n+1) {
    clear: left
}

.module_grid.four_col>li {
    width: 19.125%
}

.module_grid.four_col>li:nth-child(2n) {
    margin-right: 2.5%
}

.module_grid.four_col>li:nth-child(4n) {
    margin-right: 0
}

.module_grid.four_col>li:nth-child(4n+1) {
    clear: left
}

.module_grid.five_col>li {
    width: 14%
}

.module_grid.five_col>li:nth-child(2n) {
    margin-right: 2.5%
}

.module_grid.five_col>li:nth-child(5n) {
    margin-right: 0
}

.module_grid.five_col>li:nth-child(5n+1) {
    clear: left
}

.module_grid.six_col>li {
    width: 10.58333333%
}

.module_grid.six_col>li:nth-child(2n) {
    margin-right: 2.5%
}

.module_grid.six_col>li:nth-child(6n) {
    margin-right: 0
}

.module_grid.six_col>li:nth-child(6n+1) {
    clear: left
}

.video_wrapper {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    clear: both;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden
}

.video_wrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none
}

.video_wrapper.left {
    float: left;
    margin: 16px;
    margin: 1rem;
    margin-left: 0
}

.video_wrapper.right {
    float: right;
    margin: 16px;
    margin: 1rem;
    margin-right: 0
}

ul.thumbnails>li {
    float: none;
    display: inline-block;
    text-align: center;
    width: 160px;
    width: 10rem
}

ul.thumbnails .thumbnail {
    display: inline-block
}

ul.thumbnails.captions>li {
    vertical-align: top
}

.sidebar .secondary_nav .ou-btn {
    display: none!important
}

.course_listing .course_count {
    display: none
}

.tumblr_quote {
    font-size: 24px;
    font-size: 1.5rem;
    font-weight: 400
}

.gold_header {
    padding: 15px 5%;
    padding: .9375rem 3%;
    width: 94%;
    background: url(/_omni/images/global/corner-cut.png) no-repeat right top;
    background-size: 1.8rem;
    background-color: #febc11;
    font-family: Nunito,Arial,Helvetica,sans-serif;
    font-size: 24px;
    font-size: 1.5rem;
    font-weight: 400;
    margin: 0;
    text-transform: capitalize
}

.gold_header * {
    margin: 0;
    font-size: 24px;
    font-size: 1.5rem;
    font-weight: 400;
    font-family: Nunito,Arial,Helvetica,sans-serif
}

.ou_academic_calendar_refresh_status {
    position: fixed;
    bottom: -96px;
    bottom: -6rem;
    padding: 32px;
    padding: 2rem;
    padding-left: 5%;
    padding-right: 5%;
    width: 90%;
    font-weight: 700;
    font-family: arial;
    z-index: 10;
    animation: academic_calendar_refresh_status 10s;
    -webkit-animation: academic_calendar_refresh_status 10s;
    animation-iteration-count: 1;
    -webkit-animation-iteration-count: 1;
    animation-timing-function: linear;
    -webkit-animation-timing-function: linear
}

.ou_academic_calendar_refresh_status.success {
    background: #dfefd8;
    color: #438646
}

.ou_academic_calendar_refresh_status.fail {
    background: #bf1717;
    color: #fff
}

@keyframes academic_calendar_refresh_status {
    0% {
        bottom: -96px;
        bottom: -6rem
    }

    2% {
        bottom: 0;
        bottom: 0
    }

    96% {
        bottom: 0;
        bottom: 0
    }

    100% {
        bottom: -96px;
        bottom: -6rem
    }
}

@-webkit-keyframes academic_calendar_refresh_status {
    0% {
        bottom: -96px;
        bottom: -6rem
    }

    2% {
        bottom: 0;
        bottom: 0
    }

    96% {
        bottom: 0;
        bottom: 0
    }

    100% {
        bottom: -96px;
        bottom: -6rem
    }
}

.mobile_calendar {
    list-style: none;
    margin: 0;
    padding: 0
}

.mobile_calendar .date_block>li,.mobile_calendar .month {
    padding-top: 8px;
    padding-top: .5rem;
    padding-bottom: 8px;
    padding-bottom: .5rem
}

.mobile_calendar .date_block .date,.mobile_calendar .month {
    width: 96%;
    padding-left: 2%;
    padding-right: 2%;
    font-weight: 400
}

.mobile_calendar .month {
    background: #febc11
}

.mobile_calendar>li {
    width: 100%;
    display: block;
    margin-top: 16px;
    margin-top: 1rem
}

.mobile_calendar .date_block {
    list-style: none;
    margin: 0;
    padding: 0;
    margin-top: 16px;
    margin-top: 1rem
}

.mobile_calendar .date_block li {
    width: 95%;
    margin-left: 5%;
    border-bottom: 1px solid #e5e5e5
}

.mobile_calendar .date_block li:last-child {
    border: none
}

.mobile_calendar .date_block .date {
    background: #e5e5e5;
    border: none;
    margin: 0
}

.grid .column,.grid .columns,.grid .parent {
    margin-bottom: 16px;
    margin-bottom: 1rem
}

.testimonials .quote {
    text-indent: 2.5em;
    position: relative
}

.testimonials .quotation {
    font-family: serif;
    font-size: 4em;
    color: #888
}

.testimonials .open-quote {
    position: absolute;
    left: -.57em;
    top: -.25em
}

.testimonials .half_line {
    width: 50%;
    clear: both;
    border-bottom: 1px solid #888
}

.testimonials .quotee {
    font-weight: 400
}

.testimonials .quotee,.testimonials .quotee-title {
    display: block;
    width: 100%
}

_:-ms-fullscreen,:root .quotation {
    text-indent: 0
}

_:-ms-fullscreen,:root .open-quote {
    left: 0
}

.ksu_calendar {
    width: 100%;
    position: relative;
    overflow: hidden;
    min-height: 720px
}

.ksu_calendar .month_name {
    text-align: center;
    margin: 0
}

.ksu_calendar ul.weekdays {
    height: 40px;
    background: #febc11
}

.ksu_calendar ul.weekdays li {
    text-align: center;
    text-transform: uppercase;
    line-height: 20px;
    border: none!important;
    padding: 10px 6px;
    color: #fff;
    font-size: 13px;
    color: #000
}

.ksu_calendar ul {
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%
}

.ksu_calendar .days li {
    height: 180px
}

.ksu_calendar .days li,.ksu_calendar .weekdays li {
    display: block;
    float: left;
    width: 14.2857%;
    padding: 5px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-left: none;
    border-bottom: none;
    position: relative;
    list-style: none;
    list-style-image: url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)
}

.ksu_calendar li.first {
    border-left: 1px solid #ccc
}

.ksu_calendar ul.last_row li {
    border-bottom: 1px solid #ccc
}

.ksu_calendar .day>.date {
    text-align: center;
    margin-bottom: 5px;
    padding: 4px;
    width: 1.2em;
    height: 1.2em;
    line-height: 1.2em;
    border-radius: 50%;
    float: right
}

.ksu_calendar .day.other_month {
    background: #f5f5f5
}

.ksu_calendar .today .date {
    background: #333;
    color: #fff
}

.ksu_calendar .no_events_message {
    margin-top: 83px;
    text-align: center;
    display: none
}

.ksu_calendar .day_name {
    display: none;
    position: absolute;
    left: 45px;
    top: 14px
}

.ksu_calendar .event:hover,.ksu_calendar .show_more_events:hover {
    background: #e5e5e5
}

.ksu_calendar .event {
    clear: both;
    display: block;
    font-size: 13px;
    border-radius: 4px;
    padding: 5px;
    margin-top: 40px;
    margin-bottom: 5px;
    line-height: 14px;
    background: #f5f5f5;
    border: 1px solid #ccc;
    color: #888;
    text-decoration: none;
    margin-top: 0;
    cursor: pointer
}

.ksu_calendar .event_desc {
    color: #000;
    margin: 3px 0 7px 0;
    text-decoration: none;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden
}

.ksu_calendar .ksu_calendar .other_month {
    background: #f5f5f5;
    color: #666
}

.ksu_calendar .button_group {
    position: absolute;
    top: .3em;
    width: auto;
    z-index: 3
}

.ksu_calendar .button_group.paging {
    left: 0
}

.ksu_calendar .button_group.options {
    right: 0
}

.ksu_calendar .button_group>li {
    cursor: pointer;
    border: 1px solid #ccc;
    height: 1.5em;
    padding: 0 .55em;
    line-height: 1.5em;
    float: left;
    background: #fff;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none
}

.ksu_calendar .button_group>li:last-child {
    position: relative;
    left: -1px
}

.ksu_calendar .button_group>li:hover {
    background: #e5e5e5
}

.ksu_calendar .button_group>li.disabled {
    cursor: not-allowed;
    opacity: .4
}

.ksu_calendar .button_group>li.disabled:hover {
    background: initial
}

.ksu_calendar .previous_view:hover {
    color: #888
}

.ksu_calendar .previous_view {
    cursor: pointer;
    position: absolute;
    top: .7em
}

.ksu_calendar .popup {
    position: absolute;
    width: 160px;
    width: 10rem;
    padding: 16px;
    padding: 1rem;
    background: #fff;
    border: 1px solid #ccc;
    right: 1px;
    top: 104%;
    box-shadow: 0 1px 5px #ccc
}

.ksu_calendar .popup .arrow-up {
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid #353535;
    position: absolute;
    top: -5px;
    right: 10px
}

.ksu_calendar .popup .arrow-up.foreground {
    border-bottom-color: #fff;
    z-index: 2
}

.ksu_calendar .popup .arrow-up.border {
    border-bottom-color: #ccc;
    z-index: 1;
    top: -6px
}

.ksu_calendar .popup label {
    font-size: 16px;
    font-size: 1rem;
    color: #4d4d4d
}

.ksu_calendar .popup .button_group {
    position: relative;
    top: 0
}

.ksu_calendar .popup .button_group .active {
    background: #888;
    color: #fff;
    border-color: #4d4d4d;
    position: relative;
    opacity: 1
}

.ksu_calendar .popup .button_group li {
    opacity: .8
}

.ksu_calendar .month,.ksu_calendar .view {
    display: none;
    position: relative;
    left: 100%;
    width: 100%
}

.ksu_calendar .month.visible,.ksu_calendar .view.visible {
    display: block;
    left: 0
}

.ksu_calendar .view_spacer {
    visibility: hidden;
    margin: 0
}

.ksu_calendar .show_more_events {
    background: #f5f5f5;
    border: 1px solid #ccc;
    height: 16px;
    height: 1rem;
    position: absolute;
    padding: 0 4.8px;
    padding: 0 .3rem;
    border-radius: 1.6px;
    -webkit-border-radius: 1.6px;
    -moz-border-radius: 1.6px;
    border-radius: .1rem;
    -webkit-border-radius: .1rem;
    -moz-border-radius: .1rem;
    bottom: 5px;
    cursor: pointer
}

.ksu_calendar .show_more_events span {
    top: -19.2px;
    top: -1.2rem;
    position: relative;
    font-size: 28.8px;
    font-size: 1.8rem
}

.ksu_calendar .more_events {
    display: none
}

.ksu_calendar .share_event {
    text-align: right;
    cursor: pointer;
    float: right
}

.ksu_calendar .share_event img {
    width: 24px;
    width: 1.5rem;
    display: inline;
    vertical-align: middle;
    top: -4px;
    top: -.25rem;
    position: relative
}

.ksu_calendar .share_event:hover {
    color: #fff
}

.ksu_calendar .calendar_event {
    border: 1px solid #e5e5e5;
    border-top: 1px solid #febc11;
    box-sizing: border-box;
    padding: 0 5%
}

.ksu_calendar .calendar_event ul {
    list-style: initial;
    padding-left: 40px;
    padding-left: 2.5rem;
    box-sizing: border-box
}

.ksu_calendar .dateTime .divider {
    padding: 0 13px
}

.ksu_calendar .accent_bar {
    height: 47.2px;
    height: 2.95rem;
    width: 100%;
    background: #febc11;
    line-height: 49.6px;
    line-height: 3.1rem
}

.ksu_calendar .accent_bar p {
    padding-left: 2%;
    padding-right: 2%;
    margin: 0
}

.ksu_calendar .event_list_wrapper {
    box-sizing: border-box;
    border: 1px solid #e5e5e5;
    border-top: 1px solid #febc11
}

.ksu_calendar .event_list_wrapper li {
    border-bottom: 1px solid #e5e5e5;
    cursor: pointer;
    padding: 17.6px 0;
    padding: 1.1rem 0;
    padding-left: 5%;
    padding-right: 5%;
    box-sizing: border-box;
    position: relative
}

.ksu_calendar .event_list_wrapper li .title {
    margin: 0;
    padding-right: 192px;
    padding-right: 12rem
}

.ksu_calendar .event_list_wrapper li .time {
    color: #888;
    margin: 0
}

.ksu_calendar .event_list_wrapper li .date {
    margin: 0;
    color: #888;
    position: absolute;
    top: 17.6px;
    top: 1.1rem;
    right: 5%
}

.ksu_calendar .event_list_wrapper li:hover {
    background: #e5e5e5
}

.ksu_calendar .search_view .previous_view {
    position: relative;
    top: auto
}

.ksu_calendar .search_view .ksu_searchbox,.ksu_calendar .search_view .ksu_searchbox fieldset {
    margin: 0
}

.ksu_calendar .search_view .ksu_searchbox input[type=submit] {
    outline-width: 5px
}

.ksu_calendar .search_view .event_list_wrapper {
    border-top: none
}

.ksu_calendar .message {
    position: absolute;
    background: rgba(255,255,255,.6);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding-top: 300px;
    z-index: 5;
    text-align: center
}

.ksu_calendar .message span {
    display: block
}

.ksu_calendar.list {
    border-bottom: 1px solid #ededed
}

.ksu_calendar.list .days .no_events,.ksu_calendar.list .days .other_month {
    display: none
}

.ksu_calendar.list .show_more_events,.ksu_calendar.list .weekdays {
    display: none
}

.ksu_calendar.list .days li,.ksu_calendar.list .weekdays li {
    height: auto!important;
    border: 1px solid #ededed;
    width: 100%;
    padding: 10px;
    margin-bottom: -1px
}

.ksu_calendar.list .day>.date {
    float: none
}

.ksu_calendar.list .day_name,.ksu_calendar.list .more_events,.ksu_calendar.list .no_events_message {
    display: block
}

@media (max-width: 48em) {
    .ksu_calendar {
        border-bottom:1px solid #ededed
    }

    .ksu_calendar .days .no_events,.ksu_calendar .days .other_month {
        display: none
    }

    .ksu_calendar .show_more_events,.ksu_calendar .weekdays {
        display: none
    }

    .ksu_calendar .days li,.ksu_calendar .weekdays li {
        height: auto!important;
        border: 1px solid #ededed;
        width: 100%;
        padding: 10px;
        margin-bottom: -1px
    }

    .ksu_calendar .day>.date {
        float: none
    }

    .ksu_calendar .day_name,.ksu_calendar .more_events,.ksu_calendar .no_events_message {
        display: block
    }

    .ksu_calendar .button_group>li {
        height: 2em;
        padding: 0 1em;
        line-height: 1.8em;
        font-size: 24px;
        font-size: 1.5rem;
        margin-top: 40px;
        margin-top: 2.5rem;
        top: 0
    }

    .ksu_calendar .settings {
        display: none
    }

    .ksu_calendar .month_name {
        margin-bottom: 5rem
    }

    .ksu_calendar .next_month,.ksu_calendar .previous_month,.ksu_calendar .previous_view {
        top: 40px;
        top: 2.5rem;
        border: 1px solid #ccc;
        box-sizing: border-box;
        padding-top: 12.8px;
        padding-bottom: 12.8px;
        padding: .8rem 2%
    }

    .ksu_calendar .previous_view {
        display: inline-block;
        margin-bottom: 12.8px;
        margin-bottom: .8rem;
        position: static
    }

    .ksu_calendar .previous_view:hover {
        background: #e5e5e5
    }

    .ksu_calendar .next_month:hover,.ksu_calendar .previous_month:hover,.ksu_calendar .previous_view:hover {
        color: #000
    }

    .ksu_calendar p.share_event {
        padding-right: 5%
    }

    .ksu_calendar .view_spacer {
        display: none
    }
}

.card_group {
    display: grid;
    grid-gap: 20px;
    grid-auto-rows: 1fr;
    margin: 20px 0;
    margin: 1.25rem 0
}

.card_group .bg_,.card_group .bg__ {
    background: #ffc629
}

.card_group .card {
    text-align: center;
    position: relative;
    width: 100%
}

.card_group .card a {
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 100%;
    display: block;
    border: none;
    color: inherit;
    padding: 24px;
    padding: 1.5rem;
    box-sizing: border-box
}

.card_group .card a>* {
    z-index: 2;
    position: relative
}

.card_group .card .bg {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    object-fit: cover;
    z-index: 0;
    max-width: 100%;
    opacity: .1
}

.card_group .card .caret_down,.card_group .card .caret_right {
    font-size: 1.5em
}

.card_group .card .caret_down {
    margin-top: 24px;
    margin-top: 1.5rem;
    opacity: 0
}

.card_group .card .caret_right {
    display: none;
    color: #febc11;
    position: absolute;
    right: 0;
    top: 50%;
    margin-top: -.45em
}

.card_group .card .bg,.card_group .card .caret,.card_group .card a {
    transition-property: color,background-color,transform;
    transition-duration: .15s
}

.card_group .card .caret_down {
    transition-property: opacity
}

.card_group .card:hover {
    background-color: #000
}

.card_group .card:hover a *,.card_group .card:hover h1,.card_group .card:hover h2,.card_group .card:hover h3,.card_group .card:hover h4,.card_group .card:hover h5,.card_group .card:hover h6 {
    color: #fff!important
}

@media only screen and (max-width: 56em) {
    .card_group .card:hover a *,.card_group .card:hover h1,.card_group .card:hover h2,.card_group .card:hover h3,.card_group .card:hover h4,.card_group .card:hover h5,.card_group .card:hover h6 {
        color:#000!important
    }
}

.card_group .card:hover .bg {
    transform: scale(1.2);
    opacity: .3
}

.card_group .card:hover .caret_down {
    opacity: 1
}

.card_group .card.bg_ a,.card_group .card.bg__ a,.card_group .card.bg_bronze a,.card_group .card.bg_georgia_sky a,.card_group .card.bg_gold a,.card_group .card.bg_green a,.card_group .card.bg_leaning_man a,.card_group .card.bg_slap_rock_gray a,.card_group .card.bg_tan a {
    color: #000
}

.card_group .card.bg_ a h1,.card_group .card.bg_ a h2,.card_group .card.bg_ a h3,.card_group .card.bg_ a h4,.card_group .card.bg_ a h5,.card_group .card.bg_ a h6,.card_group .card.bg__ a h1,.card_group .card.bg__ a h2,.card_group .card.bg__ a h3,.card_group .card.bg__ a h4,.card_group .card.bg__ a h5,.card_group .card.bg__ a h6,.card_group .card.bg_bronze a h1,.card_group .card.bg_bronze a h2,.card_group .card.bg_bronze a h3,.card_group .card.bg_bronze a h4,.card_group .card.bg_bronze a h5,.card_group .card.bg_bronze a h6,.card_group .card.bg_georgia_sky a h1,.card_group .card.bg_georgia_sky a h2,.card_group .card.bg_georgia_sky a h3,.card_group .card.bg_georgia_sky a h4,.card_group .card.bg_georgia_sky a h5,.card_group .card.bg_georgia_sky a h6,.card_group .card.bg_gold a h1,.card_group .card.bg_gold a h2,.card_group .card.bg_gold a h3,.card_group .card.bg_gold a h4,.card_group .card.bg_gold a h5,.card_group .card.bg_gold a h6,.card_group .card.bg_green a h1,.card_group .card.bg_green a h2,.card_group .card.bg_green a h3,.card_group .card.bg_green a h4,.card_group .card.bg_green a h5,.card_group .card.bg_green a h6,.card_group .card.bg_leaning_man a h1,.card_group .card.bg_leaning_man a h2,.card_group .card.bg_leaning_man a h3,.card_group .card.bg_leaning_man a h4,.card_group .card.bg_leaning_man a h5,.card_group .card.bg_leaning_man a h6,.card_group .card.bg_slap_rock_gray a h1,.card_group .card.bg_slap_rock_gray a h2,.card_group .card.bg_slap_rock_gray a h3,.card_group .card.bg_slap_rock_gray a h4,.card_group .card.bg_slap_rock_gray a h5,.card_group .card.bg_slap_rock_gray a h6,.card_group .card.bg_tan a h1,.card_group .card.bg_tan a h2,.card_group .card.bg_tan a h3,.card_group .card.bg_tan a h4,.card_group .card.bg_tan a h5,.card_group .card.bg_tan a h6 {
    color: #000
}

.card_group .card.bg_beige a,.card_group .card.bg_chastain_blue a,.card_group .card.bg_white a {
    color: #002b35
}

.card_group .card.bg_beige a h1,.card_group .card.bg_beige a h2,.card_group .card.bg_beige a h3,.card_group .card.bg_beige a h4,.card_group .card.bg_beige a h5,.card_group .card.bg_beige a h6,.card_group .card.bg_chastain_blue a h1,.card_group .card.bg_chastain_blue a h2,.card_group .card.bg_chastain_blue a h3,.card_group .card.bg_chastain_blue a h4,.card_group .card.bg_chastain_blue a h5,.card_group .card.bg_chastain_blue a h6,.card_group .card.bg_white a h1,.card_group .card.bg_white a h2,.card_group .card.bg_white a h3,.card_group .card.bg_white a h4,.card_group .card.bg_white a h5,.card_group .card.bg_white a h6 {
    color: #002b35
}

.card_group.one_col {
    grid-template-columns: repeat(1,minmax(0,100%))
}

@media all and (-ms-high-contrast:none),(-ms-high-contrast:active) {
    .card_group.one_col .card {
        width: 100%
    }

    .card_group.one_col .card:nth-child(1n) {
        margin-right: 0
    }

    .card_group.one_col .card:nth-child(1n+1) {
        clear: left
    }
}

.card_group.two_col {
    grid-template-columns: repeat(2,minmax(0,100%))
}

@media all and (-ms-high-contrast:none),(-ms-high-contrast:active) {
    .card_group.two_col .card {
        width: 49%
    }

    .card_group.two_col .card:nth-child(2n) {
        margin-right: 0
    }

    .card_group.two_col .card:nth-child(2n+1) {
        clear: left
    }
}

.card_group.three_col {
    grid-template-columns: repeat(3,minmax(0,100%))
}

@media all and (-ms-high-contrast:none),(-ms-high-contrast:active) {
    .card_group.three_col .card {
        width: 32%
    }

    .card_group.three_col .card:nth-child(3n) {
        margin-right: 0
    }

    .card_group.three_col .card:nth-child(3n+1) {
        clear: left
    }
}

.card_group.four_col {
    grid-template-columns: repeat(4,minmax(0,100%))
}

@media all and (-ms-high-contrast:none),(-ms-high-contrast:active) {
    .card_group.four_col .card {
        width: 23.5%
    }

    .card_group.four_col .card:nth-child(4n) {
        margin-right: 0
    }

    .card_group.four_col .card:nth-child(4n+1) {
        clear: left
    }
}

.card_group.five_col {
    grid-template-columns: repeat(5,minmax(0,100%))
}

@media all and (-ms-high-contrast:none),(-ms-high-contrast:active) {
    .card_group.five_col .card {
        width: 18.4%
    }

    .card_group.five_col .card:nth-child(5n) {
        margin-right: 0
    }

    .card_group.five_col .card:nth-child(5n+1) {
        clear: left
    }
}

.card_group.six_col {
    grid-template-columns: repeat(6,minmax(0,100%))
}

@media all and (-ms-high-contrast:none),(-ms-high-contrast:active) {
    .card_group.six_col .card {
        width: 15%
    }

    .card_group.six_col .card:nth-child(6n) {
        margin-right: 0
    }

    .card_group.six_col .card:nth-child(6n+1) {
        clear: left
    }
}

.card_group.seven_col {
    grid-template-columns: repeat(7,minmax(0,100%))
}

@media all and (-ms-high-contrast:none),(-ms-high-contrast:active) {
    .card_group.seven_col .card {
        width: 12.57142857%
    }

    .card_group.seven_col .card:nth-child(7n) {
        margin-right: 0
    }

    .card_group.seven_col .card:nth-child(7n+1) {
        clear: left
    }
}

.card_group.eight_col {
    grid-template-columns: repeat(8,minmax(0,100%))
}

@media all and (-ms-high-contrast:none),(-ms-high-contrast:active) {
    .card_group.eight_col .card {
        width: 10.75%
    }

    .card_group.eight_col .card:nth-child(8n) {
        margin-right: 0
    }

    .card_group.eight_col .card:nth-child(8n+1) {
        clear: left
    }
}

@media only screen and (max-width: 56em) {
    .card_group {
        display:block
    }

    .card_group .card {
        background: 0 0;
        text-align: left;
        border-bottom: 2px solid #e5e5e5
    }

    .card_group .card:hover {
        background: #e5e5e5
    }

    .card_group .card:hover a {
        color: inherit
    }

    body .site_wrapper .card_group .card a {
        padding-right: 40px;
        padding-right: 2.5rem;
        color: #000!important
    }

    body .site_wrapper .card_group .card a h1,body .site_wrapper .card_group .card a h2,body .site_wrapper .card_group .card a h3,body .site_wrapper .card_group .card a h4,body .site_wrapper .card_group .card a h5,body .site_wrapper .card_group .card a h6 {
        color: #000!important
    }

    body .site_wrapper .card_group .card a>:nth-child(-n+2) {
        margin-top: 0
    }

    body .site_wrapper .card_group .card a>:nth-last-child(-n+3) {
        margin-bottom: 0
    }

    body .site_wrapper .card_group .card a:hover {
        color: #000
    }

    body .site_wrapper .card_group .card a:hover h1,body .site_wrapper .card_group .card a:hover h2,body .site_wrapper .card_group .card a:hover h3,body .site_wrapper .card_group .card a:hover h4,body .site_wrapper .card_group .card a:hover h5,body .site_wrapper .card_group .card a:hover h6 {
        color: #000
    }

    .card_group .card .bg,.card_group .card .caret_down {
        display: none
    }

    .card_group .card .caret_right {
        display: block
    }
}

@media all and (-ms-high-contrast:none),(-ms-high-contrast:active) {
    .card_group {
        display: block
    }

    .card_group .card {
        float: left;
        margin-right: 2%;
        margin-bottom: 12.8px;
        margin-bottom: .8rem
    }
}

@media all and (max-width: 56em) and (-ms-high-contrast:none),(-ms-high-contrast:active) {
    .card_group .card {
        float:none;
        width: 100%!important
    }
}

.sidebar_calendar {
    padding: 0
}

.sidebar_calendar p {
    font-size: .85em
}

.sidebar_calendar a {
    display: block;
    border: none
}

.sidebar_calendar a h3 {
    color: #00708d;
    margin-bottom: 0
}

.sidebar_calendar a .info {
    color: #616161;
    margin-top: 0
}

.sidebar_calendar a p.desc {
    color: #000
}

.sidebar_calendar li {
    list-style: none;
    border-bottom: 1px solid #e5e5e5
}

.sidebar_calendar a:hover h3,.sidebar_calendar a:hover p {
    color: #febc11
}

.flexslider {
    border: none;
    box-shadow: none;
    -webkit-box-shadow: none;
    overflow: hidden;
    margin: 0;
    clear: both;
    border-radius: 0;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    z-index: 0
}

.flexslider .slides>li {
    position: relative
}

.flexslider .flex-control-paging {
    bottom: 2%;
    right: 50%;
    margin-right: -50px;
    position: absolute;
    width: auto;
    opacity: .7
}

.flexslider .flex-control-paging li {
    overflow: hidden
}

.flexslider .flex-control-paging li a {
    background: #e5e5e5;
    border: 1px solid #777;
    box-shadow: none
}

.flexslider .flex-control-paging li a.flex-active {
    background: #febc11
}

.flexslider img {
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none
}

.core_worlds {
    list-style: none;
    margin: 0;
    padding: 0;
    margin: 16px 0;
    margin: 1rem 0
}

.core_worlds li {
    float: left;
    width: 14.66666667%;
    margin: 0 1%;
    opacity: 1;
    text-align: center;
    font-size: 17.6px;
    font-size: 1.1rem
}

.core_worlds li img {
    width: 80px;
    width: 5rem;
    border-radius: 100%;
    margin: 0 auto;
    display: block;
    -ms-transition: opacity .2s;
    
   
    -webkit-transition: opacity .2s;
    -moz-transition: opacity .2s;
    -o-transition: opacity .2s;
    transition: opacity .2s;
    max-width: none
}

.core_worlds li div {
    width: 100%;
    display: block;
    margin-top: 8px;
    margin-top: .5rem;
    -ms-transition: color .2s;
    
    
    -webkit-transition: color .2s;
    -moz-transition: color .2s;
    -o-transition: color .2s;
    transition: color .2s
}

.core_worlds li a {
    display: block;
    width: 100%;
    height: 100%;
    color: #000;
    border: none
}

.core_worlds li .h1,.core_worlds li .h2,.core_worlds li .h3,.core_worlds li .h4,.core_worlds li .h5,.core_worlds li .h6,.core_worlds li h1,.core_worlds li h2,.core_worlds li h3,.core_worlds li h4,.core_worlds li h5,.core_worlds li h6 {
    margin: 0;
    -ms-transition: color .2s;
    
    
    -webkit-transition: color .2s;
    -moz-transition: color .2s;
    -o-transition: color .2s;
    transition: color .2s
}

.core_worlds li.clear {
    display: none
}

.core_worlds li:hover img {
    opacity: .7
}

.core_worlds li:hover .h1,.core_worlds li:hover .h2,.core_worlds li:hover .h3,.core_worlds li:hover .h4,.core_worlds li:hover .h5,.core_worlds li:hover .h6,.core_worlds li:hover h1,.core_worlds li:hover h2,.core_worlds li:hover h3,.core_worlds li:hover h4,.core_worlds li:hover h5,.core_worlds li:hover h6,.core_worlds li:hover span {
    color: #00708d
}

.home .core_worlds {
    margin: 0
}

.core_worlds.square li img {
    border-radius: 0
}

.core_worlds.one_col li {
    width: 98%
}

.core_worlds.two_col li {
    width: 48%
}

.core_worlds.three_col li {
    width: 31.33333333%
}

.core_worlds.four_col li {
    width: 23%
}

.core_worlds.five_col li {
    width: 18%
}

.transmission_img {
    float: left;
    width: 40%;
    position: relative
}

.transmission_img img {
    width: 100%;
    display: block
}

.transmission_img .vid_icon {
    width: 100%;
    display: block;
    cursor: pointer
}

.transmission_img .play_btn {
    width: 50px;
    height: 35px;
    position: absolute;
    left: 50%;
    margin-left: -25px;
    top: 47%;
    margin-top: -17.5px;
    background: url(/_omni/images/global/play.png) no-repeat;
    background-size: contain;
    background-position: center center;
    cursor: pointer
}

.transmission_img img.loading {
    width: auto;
    height: auto
}

.transmission_img:hover .play_btn {
    background-image: url(/_omni/images/global/play_hover.png)
}

.transmission_content {
    float: right;
    width: 50%;
    margin: 0 5%;
    text-align: center
}

.transmission_content .btn,.transmission_content button {
    margin-top: 20px;
    margin-top: 1.25rem
}

.transmission_content .transmission_title {
    margin-top: 0
}

.section_title h1,.section_title h2,.section_title h3,.section_title h4,.section_title h5,.section_title h6 {
    display: inline-block
}

.section_title span {
    display: inline-block;
    margin-left: 10px;
    margin-left: .625rem;
    margin-bottom: 16px;
    margin-bottom: 1rem;
    position: relative;
    top: -5px
}

.section_title i {
    font-style: normal;
    top: -.05rem;
    position: relative
}

.section_title h2+span {
    top: -3px
}

.section_title h3+span {
    top: -2px
}

.icon_block {
    margin: 0;
    padding: 0;
    list-style: none;
    margin: 0 auto;
    display: block;
    text-align: center
}

.icon_block li {
    width: 19%;
    height: 104px;
    height: 6.5rem;
    display: block;
    padding: 0 3%;
    float: left;
    margin: 0;
    margin-bottom: 14.4px;
    margin-bottom: .9rem;
    text-align: center;
    
}

.icon_block img {
    margin: 0 auto;
    padding: 0;
    width: 64px;
    width: 4rem;
    max-width: none
}

.icon_block p {
    margin: 0;
    padding: 0
}

.icon_block a {
    color: #000;
    text-decoration: none;
    width: 100%;
    height: 100%;
    display: block;
    border: none
}

.stripListStyles {
    list-style: none;
    margin: 0;
    padding: 0
}

.selfClear {
    content: "";
    display: block;
    clear: both
}

.stripInputAppearanceStyles {
    -webkit-appearance: none;
    -moz-appearance: none
}

.cornerCut {
    background: url(/_omni/images/global/corner-cut.png) no-repeat right top;
    background-size: 1.8rem
}

.linkList {
    list-style: none;
    margin: 0;
    padding: 0
}

.linkList li {
    border-bottom: 1px solid #e5e5e5
}

.linkList li a {
    padding: 10px 2%;
    padding: .625 2%;
    padding-left: 13%;
    width: 85%;
    display: block;
    background: url(/_omni/images/global/arrow.png) no-repeat 8px center;
    background-size: 9px;
    -ms-transition: background-position .2s;
  
    
    -webkit-transition: background-position .2s;
    -moz-transition: background-position .2s;
    -o-transition: background-position .2s;
    transition: background-position .2s
}

.linkList li a:hover {
    background-position: 14px center
}

body .btn,body button {
    display: inline-block;
    color: #000;
    border: 1px solid #febc11;
    padding: 8px 15px;
    padding: .5rem .9375rem;
    text-transform: uppercase;
    cursor: pointer;
    background: 0 0
}

body .btn:hover,body button:hover {
    background: #febc11;
    color: #000
}

body .btn.full,body button.full {
    width: 100%;
    text-align: center;
    padding-left: 0;
    padding-right: 0
}

.tie_bomber body .btn,.tie_bomber body button {
    background: #febc11;
    border: none;
    box-sizing: border-box
}

.tie_bomber body .btn:hover,.tie_bomber body button:hover {
    background: #feca44
}

.btn.alt,button.alt {
    background: #febc11;
    border: none;
    box-sizing: border-box
}

.btn.alt:hover,button.alt:hover {
    background: #feca44
}

.no_bottom_margin {
    margin-bottom: 0
}

.img_left,.img_right {
    margin: 0;
    margin-bottom: 16px;
    margin-bottom: 1rem;
    margin-top: 16px;
    margin-top: 1rem
}

.img_right {
    float: right;
    margin-left: 16px;
    margin-left: 1rem
}

.img_right.xlarge {
    margin-left: 24px;
    margin-left: 1.5rem
}

.img_left {
    float: left;
    margin-right: 16px;
    margin-right: 1rem
}

.img_left.xlarge {
    margin-right: 24px;
    margin-right: 1.5rem
}

.photo_gallery img {
    max-width: 100%;
    margin: 0 auto;
    display: block;
    margin-bottom: 8px;
    margin-bottom: .5rem
}

.photo_gallery.medium img {
    max-width: 67%
}

.social_media {
    list-style: none;
    margin: 0;
    padding: 0
}

.social_media li {
    float: left;
    margin-right: 5%;
    width: 21.25%
}

.social_media li:nth-child(4n) {
    margin-right: 0
}

.social_media img {
    width: 100%;
    max-width: none
}

.social_media::after {
    content: "";
    display: block;
    clear: both
}

.social_media a {
    border: none
}

.social_media.six_col li {
    width: 12.5%
}

.social_media.six_col li:nth-child(4n) {
    margin-right: 5%
}

.social_media.six_col li:nth-child(6n) {
    margin-right: 0
}

.large_padding {
    padding: 60px 0;
    padding: 3.75rem 0
}

.large_margin {
    margin: 60px 0;
    margin: 3.75rem 0
}

.mobile_only,.phone_only,.tablet_only {
    display: none!important
}

.desktop_only {
    display: block!important
}

.hanging_indent {
    padding-left: 25px;
    text-indent: -25px
}

span.hanging_indent {
    display: block
}

.tint {
    background: #000
}

.tint .tinted {
    opacity: .5
}

.loading {
    display: block;
    position: absolute;
    left: 50%;
    top: 40%;
    margin-left: -16px
}

.hidden {
    display: none
}

body .hide_sidebar+.page .sidebar {
    display: none
}

.hide_main_content+.page .content {
    display: none
}

.hide_sidebar.hide_main_content+.page {
    padding-bottom: 0
}

.full_width_main_content+.page>.sidebar+.content {
    width: 100%
}

.bg_gold {
    background-color: #ffc629;
    color: #000
}

.bg_gold h1,.bg_gold h2,.bg_gold h3,.bg_gold h4,.bg_gold h5,.bg_gold h6 {
    color: #000
}

.bg_gold a:not(.btn) {
    color: #005365;
    border-color: #005365
}

.bg_gold a:not(.btn):hover {
    color: #069be8;
    border-color: #069be8
}

.bg_gold a:not(.btn):hover * {
    color: #069be8;
    border-color: #069be8
}

.bg_gold a:not(.btn):hover h1,.bg_gold a:not(.btn):hover h2,.bg_gold a:not(.btn):hover h3,.bg_gold a:not(.btn):hover h4,.bg_gold a:not(.btn):hover h5,.bg_gold a:not(.btn):hover h6 {
    color: #069be8
}

.bg_gold a:not(.btn) h1,.bg_gold a:not(.btn) h2,.bg_gold a:not(.btn) h3,.bg_gold a:not(.btn) h4,.bg_gold a:not(.btn) h5,.bg_gold a:not(.btn) h6 {
    color: #005365
}

.bg_gold .btn {
    color: #000
}

.bg_gold .btn.alt {
    color: #000
}

.bg_gold .btn.alt {
    background: #e5e5e5
}

.bg_gold .btn.alt:hover {
    background: #fff
}

.bg_gold .btn {
    border-color: #e5e5e5
}

.bg_gold .btn:hover {
    background: #e5e5e5
}

.bg_black {
    background-color: #2d2926;
    color: #fff
}

.bg_black h1,.bg_black h2,.bg_black h3,.bg_black h4,.bg_black h5,.bg_black h6 {
    color: #fff
}

.bg_black a:not(.btn) {
    color: #ffc629;
    border-color: #ffc629
}

.bg_black a:not(.btn):hover {
    color: #fff4d7;
    border-color: #fff4d7
}

.bg_black a:not(.btn):hover * {
    color: #fff4d7;
    border-color: #fff4d7
}

.bg_black a:not(.btn):hover h1,.bg_black a:not(.btn):hover h2,.bg_black a:not(.btn):hover h3,.bg_black a:not(.btn):hover h4,.bg_black a:not(.btn):hover h5,.bg_black a:not(.btn):hover h6 {
    color: #fff4d7
}

.bg_black a:not(.btn) h1,.bg_black a:not(.btn) h2,.bg_black a:not(.btn) h3,.bg_black a:not(.btn) h4,.bg_black a:not(.btn) h5,.bg_black a:not(.btn) h6 {
    color: #ffc629
}

.bg_black .btn {
    color: #fff
}

.bg_black .btn.alt {
    color: #000
}

.bg_slap_rock_gray {
    background-color: #b2b4b2;
    color: #000
}

.bg_slap_rock_gray h1,.bg_slap_rock_gray h2,.bg_slap_rock_gray h3,.bg_slap_rock_gray h4,.bg_slap_rock_gray h5,.bg_slap_rock_gray h6 {
    color: #000
}

.bg_slap_rock_gray a:not(.btn) {
    color: #004b5c;
    border-color: #004b5c
}

.bg_slap_rock_gray a:not(.btn):hover {
    color: #007a95;
    border-color: #007a95
}

.bg_slap_rock_gray a:not(.btn):hover * {
    color: #007a95;
    border-color: #007a95
}

.bg_slap_rock_gray a:not(.btn):hover h1,.bg_slap_rock_gray a:not(.btn):hover h2,.bg_slap_rock_gray a:not(.btn):hover h3,.bg_slap_rock_gray a:not(.btn):hover h4,.bg_slap_rock_gray a:not(.btn):hover h5,.bg_slap_rock_gray a:not(.btn):hover h6 {
    color: #007a95
}

.bg_slap_rock_gray a:not(.btn) h1,.bg_slap_rock_gray a:not(.btn) h2,.bg_slap_rock_gray a:not(.btn) h3,.bg_slap_rock_gray a:not(.btn) h4,.bg_slap_rock_gray a:not(.btn) h5,.bg_slap_rock_gray a:not(.btn) h6 {
    color: #004b5c
}

.bg_slap_rock_gray .btn {
    color: #000
}

.bg_slap_rock_gray .btn.alt {
    color: #000
}

.bg_white {
    background-color: #fff;
    color: #000
}

.bg_white h1,.bg_white h2,.bg_white h3,.bg_white h4,.bg_white h5,.bg_white h6 {
    color: #000
}

.bg_white a:not(.btn) {
    color: #00708d;
    border-color: #00708d
}

.bg_white a:not(.btn):hover {
    color: #febc11;
    border-color: #febc11
}

.bg_white a:not(.btn):hover * {
    color: #febc11;
    border-color: #febc11
}

.bg_white a:not(.btn):hover h1,.bg_white a:not(.btn):hover h2,.bg_white a:not(.btn):hover h3,.bg_white a:not(.btn):hover h4,.bg_white a:not(.btn):hover h5,.bg_white a:not(.btn):hover h6 {
    color: #febc11
}

.bg_white a:not(.btn) h1,.bg_white a:not(.btn) h2,.bg_white a:not(.btn) h3,.bg_white a:not(.btn) h4,.bg_white a:not(.btn) h5,.bg_white a:not(.btn) h6 {
    color: #00708d
}

.bg_white .btn {
    color: #000
}

.bg_white .btn.alt {
    color: #000
}

.bg_marietta_blue {
    background-color: #303ab2;
    color: #fff
}

.bg_marietta_blue h1,.bg_marietta_blue h2,.bg_marietta_blue h3,.bg_marietta_blue h4,.bg_marietta_blue h5,.bg_marietta_blue h6 {
    color: #fff
}

.bg_marietta_blue a:not(.btn) {
    color: #ffc629;
    border-color: #ffc629
}

.bg_marietta_blue a:not(.btn):hover {
    color: #fff4d7;
    border-color: #fff4d7
}

.bg_marietta_blue a:not(.btn):hover * {
    color: #fff4d7;
    border-color: #fff4d7
}

.bg_marietta_blue a:not(.btn):hover h1,.bg_marietta_blue a:not(.btn):hover h2,.bg_marietta_blue a:not(.btn):hover h3,.bg_marietta_blue a:not(.btn):hover h4,.bg_marietta_blue a:not(.btn):hover h5,.bg_marietta_blue a:not(.btn):hover h6 {
    color: #fff4d7
}

.bg_marietta_blue a:not(.btn) h1,.bg_marietta_blue a:not(.btn) h2,.bg_marietta_blue a:not(.btn) h3,.bg_marietta_blue a:not(.btn) h4,.bg_marietta_blue a:not(.btn) h5,.bg_marietta_blue a:not(.btn) h6 {
    color: #ffc629
}

.bg_marietta_blue .btn {
    color: #fff
}

.bg_marietta_blue .btn.alt {
    color: #000
}

.bg_georgia_sky {
    background-color: #0090da;
    color: #000
}

.bg_georgia_sky h1,.bg_georgia_sky h2,.bg_georgia_sky h3,.bg_georgia_sky h4,.bg_georgia_sky h5,.bg_georgia_sky h6 {
    color: #000
}

.bg_georgia_sky a:not(.btn) {
    color: #171717;
    border-color: #171717
}

.bg_georgia_sky a:not(.btn):hover {
    color: #fff4d7;
    border-color: #fff4d7
}

.bg_georgia_sky a:not(.btn):hover * {
    color: #fff4d7;
    border-color: #fff4d7
}

.bg_georgia_sky a:not(.btn):hover h1,.bg_georgia_sky a:not(.btn):hover h2,.bg_georgia_sky a:not(.btn):hover h3,.bg_georgia_sky a:not(.btn):hover h4,.bg_georgia_sky a:not(.btn):hover h5,.bg_georgia_sky a:not(.btn):hover h6 {
    color: #fff4d7
}

.bg_georgia_sky a:not(.btn) h1,.bg_georgia_sky a:not(.btn) h2,.bg_georgia_sky a:not(.btn) h3,.bg_georgia_sky a:not(.btn) h4,.bg_georgia_sky a:not(.btn) h5,.bg_georgia_sky a:not(.btn) h6 {
    color: #171717
}

.bg_georgia_sky .btn {
    color: #000
}

.bg_georgia_sky .btn.alt {
    color: #000
}

.bg_green {
    background-color: #43b02a;
    color: #000
}

.bg_green h1,.bg_green h2,.bg_green h3,.bg_green h4,.bg_green h5,.bg_green h6 {
    color: #000
}

.bg_green a:not(.btn) {
    color: #2b2b2b;
    border-color: #2b2b2b
}

.bg_green a:not(.btn):hover {
    color: #fff4d7;
    border-color: #fff4d7
}

.bg_green a:not(.btn):hover * {
    color: #fff4d7;
    border-color: #fff4d7
}

.bg_green a:not(.btn):hover h1,.bg_green a:not(.btn):hover h2,.bg_green a:not(.btn):hover h3,.bg_green a:not(.btn):hover h4,.bg_green a:not(.btn):hover h5,.bg_green a:not(.btn):hover h6 {
    color: #fff4d7
}

.bg_green a:not(.btn) h1,.bg_green a:not(.btn) h2,.bg_green a:not(.btn) h3,.bg_green a:not(.btn) h4,.bg_green a:not(.btn) h5,.bg_green a:not(.btn) h6 {
    color: #2b2b2b
}

.bg_green .btn {
    color: #000
}

.bg_green .btn.alt {
    color: #000
}

.bg_purple {
    background-color: #402f8a;
    color: #fff
}

.bg_purple h1,.bg_purple h2,.bg_purple h3,.bg_purple h4,.bg_purple h5,.bg_purple h6 {
    color: #fff
}

.bg_purple a:not(.btn) {
    color: #ffc629;
    border-color: #ffc629
}

.bg_purple a:not(.btn):hover {
    color: #fff4d7;
    border-color: #fff4d7
}

.bg_purple a:not(.btn):hover * {
    color: #fff4d7;
    border-color: #fff4d7
}

.bg_purple a:not(.btn):hover h1,.bg_purple a:not(.btn):hover h2,.bg_purple a:not(.btn):hover h3,.bg_purple a:not(.btn):hover h4,.bg_purple a:not(.btn):hover h5,.bg_purple a:not(.btn):hover h6 {
    color: #fff4d7
}

.bg_purple a:not(.btn) h1,.bg_purple a:not(.btn) h2,.bg_purple a:not(.btn) h3,.bg_purple a:not(.btn) h4,.bg_purple a:not(.btn) h5,.bg_purple a:not(.btn) h6 {
    color: #ffc629
}

.bg_purple .btn {
    color: #fff
}

.bg_purple .btn.alt {
    color: #000
}

.bg_leaning_man {
    background-color: #f4633a;
    color: #000
}

.bg_leaning_man h1,.bg_leaning_man h2,.bg_leaning_man h3,.bg_leaning_man h4,.bg_leaning_man h5,.bg_leaning_man h6 {
    color: #000
}

.bg_leaning_man a:not(.btn) {
    color: #262626;
    border-color: #262626
}

.bg_leaning_man a:not(.btn):hover {
    color: #fff4d7;
    border-color: #fff4d7
}

.bg_leaning_man a:not(.btn):hover * {
    color: #fff4d7;
    border-color: #fff4d7
}

.bg_leaning_man a:not(.btn):hover h1,.bg_leaning_man a:not(.btn):hover h2,.bg_leaning_man a:not(.btn):hover h3,.bg_leaning_man a:not(.btn):hover h4,.bg_leaning_man a:not(.btn):hover h5,.bg_leaning_man a:not(.btn):hover h6 {
    color: #fff4d7
}

.bg_leaning_man a:not(.btn) h1,.bg_leaning_man a:not(.btn) h2,.bg_leaning_man a:not(.btn) h3,.bg_leaning_man a:not(.btn) h4,.bg_leaning_man a:not(.btn) h5,.bg_leaning_man a:not(.btn) h6 {
    color: #262626
}

.bg_leaning_man .btn {
    color: #000
}

.bg_leaning_man .btn.alt {
    color: #000
}

.bg_honors_blue {
    background-color: #003e51;
    color: #fff
}

.bg_honors_blue h1,.bg_honors_blue h2,.bg_honors_blue h3,.bg_honors_blue h4,.bg_honors_blue h5,.bg_honors_blue h6 {
    color: #fff
}

.bg_honors_blue a:not(.btn) {
    color: #ffc629;
    border-color: #ffc629
}

.bg_honors_blue a:not(.btn):hover {
    color: #fff4d7;
    border-color: #fff4d7
}

.bg_honors_blue a:not(.btn):hover * {
    color: #fff4d7;
    border-color: #fff4d7
}

.bg_honors_blue a:not(.btn):hover h1,.bg_honors_blue a:not(.btn):hover h2,.bg_honors_blue a:not(.btn):hover h3,.bg_honors_blue a:not(.btn):hover h4,.bg_honors_blue a:not(.btn):hover h5,.bg_honors_blue a:not(.btn):hover h6 {
    color: #fff4d7
}

.bg_honors_blue a:not(.btn) h1,.bg_honors_blue a:not(.btn) h2,.bg_honors_blue a:not(.btn) h3,.bg_honors_blue a:not(.btn) h4,.bg_honors_blue a:not(.btn) h5,.bg_honors_blue a:not(.btn) h6 {
    color: #ffc629
}

.bg_honors_blue .btn {
    color: #fff
}

.bg_honors_blue .btn.alt {
    color: #000
}

.bg_parliament_blue {
    background-color: #1a658f;
    color: #fff
}

.bg_parliament_blue h1,.bg_parliament_blue h2,.bg_parliament_blue h3,.bg_parliament_blue h4,.bg_parliament_blue h5,.bg_parliament_blue h6 {
    color: #fff
}

.bg_parliament_blue a:not(.btn) {
    color: #ffd561;
    border-color: #ffd561
}

.bg_parliament_blue a:not(.btn):hover {
    color: #fff4d7;
    border-color: #fff4d7
}

.bg_parliament_blue a:not(.btn):hover * {
    color: #fff4d7;
    border-color: #fff4d7
}

.bg_parliament_blue a:not(.btn):hover h1,.bg_parliament_blue a:not(.btn):hover h2,.bg_parliament_blue a:not(.btn):hover h3,.bg_parliament_blue a:not(.btn):hover h4,.bg_parliament_blue a:not(.btn):hover h5,.bg_parliament_blue a:not(.btn):hover h6 {
    color: #fff4d7
}

.bg_parliament_blue a:not(.btn) h1,.bg_parliament_blue a:not(.btn) h2,.bg_parliament_blue a:not(.btn) h3,.bg_parliament_blue a:not(.btn) h4,.bg_parliament_blue a:not(.btn) h5,.bg_parliament_blue a:not(.btn) h6 {
    color: #ffd561
}

.bg_parliament_blue .btn {
    color: #fff
}

.bg_parliament_blue .btn.alt {
    color: #000
}

.bg_lilac {
    background-color: #7566a0;
    color: #fff
}

.bg_lilac h1,.bg_lilac h2,.bg_lilac h3,.bg_lilac h4,.bg_lilac h5,.bg_lilac h6 {
    color: #fff
}

.bg_lilac a:not(.btn) {
    color: #fff3d1;
    border-color: #fff3d1
}

.bg_lilac a:not(.btn):hover {
    color: #000;
    border-color: #000
}

.bg_lilac a:not(.btn):hover * {
    color: #000;
    border-color: #000
}

.bg_lilac a:not(.btn):hover h1,.bg_lilac a:not(.btn):hover h2,.bg_lilac a:not(.btn):hover h3,.bg_lilac a:not(.btn):hover h4,.bg_lilac a:not(.btn):hover h5,.bg_lilac a:not(.btn):hover h6 {
    color: #000
}

.bg_lilac a:not(.btn) h1,.bg_lilac a:not(.btn) h2,.bg_lilac a:not(.btn) h3,.bg_lilac a:not(.btn) h4,.bg_lilac a:not(.btn) h5,.bg_lilac a:not(.btn) h6 {
    color: #fff3d1
}

.bg_lilac .btn {
    color: #fff
}

.bg_lilac .btn.alt {
    color: #000
}

.bg_bronze {
    background-color: #c69214;
    color: #000
}

.bg_bronze h1,.bg_bronze h2,.bg_bronze h3,.bg_bronze h4,.bg_bronze h5,.bg_bronze h6 {
    color: #000
}

.bg_bronze a:not(.btn) {
    color: #1a1a1a;
    border-color: #1a1a1a
}

.bg_bronze a:not(.btn):hover {
    color: #fff4d7;
    border-color: #fff4d7
}

.bg_bronze a:not(.btn):hover * {
    color: #fff4d7;
    border-color: #fff4d7
}

.bg_bronze a:not(.btn):hover h1,.bg_bronze a:not(.btn):hover h2,.bg_bronze a:not(.btn):hover h3,.bg_bronze a:not(.btn):hover h4,.bg_bronze a:not(.btn):hover h5,.bg_bronze a:not(.btn):hover h6 {
    color: #fff4d7
}

.bg_bronze a:not(.btn) h1,.bg_bronze a:not(.btn) h2,.bg_bronze a:not(.btn) h3,.bg_bronze a:not(.btn) h4,.bg_bronze a:not(.btn) h5,.bg_bronze a:not(.btn) h6 {
    color: #1a1a1a
}

.bg_bronze .btn {
    color: #000
}

.bg_bronze .btn.alt {
    color: #000
}

.bg_tan {
    background-color: #b7a99a;
    color: #000
}

.bg_tan h1,.bg_tan h2,.bg_tan h3,.bg_tan h4,.bg_tan h5,.bg_tan h6 {
    color: #000
}

.bg_tan a:not(.btn) {
    color: #404040;
    border-color: #404040
}

.bg_tan a:not(.btn):hover {
    color: #fff4d7;
    border-color: #fff4d7
}

.bg_tan a:not(.btn):hover * {
    color: #fff4d7;
    border-color: #fff4d7
}

.bg_tan a:not(.btn):hover h1,.bg_tan a:not(.btn):hover h2,.bg_tan a:not(.btn):hover h3,.bg_tan a:not(.btn):hover h4,.bg_tan a:not(.btn):hover h5,.bg_tan a:not(.btn):hover h6 {
    color: #fff4d7
}

.bg_tan a:not(.btn) h1,.bg_tan a:not(.btn) h2,.bg_tan a:not(.btn) h3,.bg_tan a:not(.btn) h4,.bg_tan a:not(.btn) h5,.bg_tan a:not(.btn) h6 {
    color: #404040
}

.bg_tan .btn {
    color: #000
}

.bg_tan .btn.alt {
    color: #000
}

.bg_chastain_blue {
    background-color: #bbdde6;
    color: #000
}

.bg_chastain_blue h1,.bg_chastain_blue h2,.bg_chastain_blue h3,.bg_chastain_blue h4,.bg_chastain_blue h5,.bg_chastain_blue h6 {
    color: #000
}

.bg_chastain_blue a:not(.btn) {
    color: #076490;
    border-color: #076490
}

.bg_chastain_blue a:not(.btn):hover {
    color: #000;
    border-color: #000
}

.bg_chastain_blue a:not(.btn):hover * {
    color: #000;
    border-color: #000
}

.bg_chastain_blue a:not(.btn):hover h1,.bg_chastain_blue a:not(.btn):hover h2,.bg_chastain_blue a:not(.btn):hover h3,.bg_chastain_blue a:not(.btn):hover h4,.bg_chastain_blue a:not(.btn):hover h5,.bg_chastain_blue a:not(.btn):hover h6 {
    color: #000
}

.bg_chastain_blue a:not(.btn) h1,.bg_chastain_blue a:not(.btn) h2,.bg_chastain_blue a:not(.btn) h3,.bg_chastain_blue a:not(.btn) h4,.bg_chastain_blue a:not(.btn) h5,.bg_chastain_blue a:not(.btn) h6 {
    color: #076490
}

.bg_chastain_blue .btn {
    color: #000
}

.bg_chastain_blue .btn.alt {
    color: #000
}

.bg_beige {
    background-color: #f1e6b2;
    color: #000
}

.bg_beige h1,.bg_beige h2,.bg_beige h3,.bg_beige h4,.bg_beige h5,.bg_beige h6 {
    color: #000
}

.bg_beige a:not(.btn) {
    color: #1a658f;
    border-color: #1a658f
}

.bg_beige a:not(.btn):hover {
    color: #000;
    border-color: #000
}

.bg_beige a:not(.btn):hover * {
    color: #000;
    border-color: #000
}

.bg_beige a:not(.btn):hover h1,.bg_beige a:not(.btn):hover h2,.bg_beige a:not(.btn):hover h3,.bg_beige a:not(.btn):hover h4,.bg_beige a:not(.btn):hover h5,.bg_beige a:not(.btn):hover h6 {
    color: #000
}

.bg_beige a:not(.btn) h1,.bg_beige a:not(.btn) h2,.bg_beige a:not(.btn) h3,.bg_beige a:not(.btn) h4,.bg_beige a:not(.btn) h5,.bg_beige a:not(.btn) h6 {
    color: #1a658f
}

.bg_beige .btn {
    color: #000
}

.bg_beige .btn.alt {
    color: #000
}

@media only screen and (max-width: 94em) {
    #high_council_chamber {
        font-size:17.6px;
        font-size: 1.1rem;
        padding-left: 230px;
        padding-left: 14.375rem
    }

    #high_council_chamber>li>a {
        padding: 0 16px;
        padding: 0 1rem
    }

    .inner_rim {
        width: 90%
    }

    ul.table>li.sticky {
        width: 48.6%;
        padding-left: 2.7%;
        padding-right: 2.7%
    }
}

@media only screen and (max-width: 80.5em) {
    html {
        font-size:.85em
    }

    form input[type=radio]+span {
        margin: 2.4px 0;
        margin: .15rem 0
    }

    #high_council_chamber {
        font-size: 18.72px;
        font-size: 1.17rem;
        margin-left: 5%;
        padding-right: 5%;
        padding-left: 300px;
        padding-left: 18.75rem
    }

    #high_council_chamber>li>a {
        padding: 0 12.8px;
        padding: 0 .8rem
    }

    #banner .page_title {
        padding-left: 5%;
        width: 95%
    }
}

@-moz-document url-prefix() {
    @media only screen and (max-width: 80.5em) {
        #header .logo_container .logo {
            width:81%;
            background-size: 100%
        }
    }
}

@media only screen and (max-width: 66.5em) {
    .desktop_only {
        display:none!important
    }

    .mobile_only,.tablet_only {
        display: block!important
    }

    #header {
        height: auto;
        padding: 8px 0;
        padding: .5rem 0
    }

    #header .search {
        margin-right: 2.5%;
        margin-top: 16px;
        margin-top: 1rem
    }

    #header .logo_container {
        position: relative;
        float: left;
        width: 256px;
        width: 16rem;
        margin-top: 0;
        margin-top: 0;
        left: auto
    }

    #header .logo_container .top {
        background: #000;
        padding: 0
    }

    #header .logo_container .top .logo {
        width: 100%;
        padding-bottom: 26%
    }

    #header .logo_container .bottom {
        display: none
    }

    #header .logo_container .site_title {
        margin-top: 0;
        padding-top: 4.8px;
        padding-top: .3rem;
        width: 100%
    }

    #header .logo_container.large .top,#header .logo_container.medium .top,#header .logo_container.small .top,#header .logo_container.xlarge .top {
        padding: 0
    }

    #header .logo_container.small .site_title {
        font-size: 17.6px;
        font-size: 1.1rem
    }

    #header .logo_container.medium .site_title {
        font-size: 16px;
        font-size: 1rem;
        line-height: 20.8px;
        line-height: 1.3rem
    }

    #header .logo_container.large .site_title {
        font-size: 14.4px;
        font-size: .9rem;
        padding-top: 3.2px;
        padding-top: .2rem
    }

    #header .logo_container.xlarge .site_title {
        padding-top: 0
    }

    #header_nav {
        margin-top: 0
    }

    #high_council_chamber {
        padding: 0;
        margin: 0;
        box-sizing: content-box;
        margin-left: 2.5%;
        width: 95%
    }

    #high_council_chamber>li>a {
        padding: 0 25.6px;
        padding: 0 1.6rem
    }

    #banner .page_title {
        font-size: 64px;
        font-size: 4rem
    }

    #banner.no_img .bread_crumb {
        padding: 16px 0;
        padding: 1rem 0
    }

    #banner .weather {
        padding-top: 16px;
        padding-top: 1rem
    }

    .secondary_nav ul li a {
        width: 75%
    }

    .secondary_nav ul li .plus_wrapper {
        padding-left: 6.5%;
        padding-right: 6.5%
    }

    .az_list li {
        display: block;
        margin-right: 1.5%;
        padding: 3.2px 0;
        padding: .2rem 0;
        float: left
    }

    .twitter_feed .handler {
        width: 100%;
        display: block
    }
}

@media only screen and (max-width: 56em) {
    #tour_popup {
        width:82%;
        left: 5%;
        margin-left: 0;
        padding: 17px 4%;
        top: 20px
    }

    #tour_popup .btn {
        margin-bottom: 10px
    }

    .desktop_only,.tablet_only {
        display: none!important
    }

    .phone_only {
        display: block!important
    }

    body {
        background: #000
    }

    .page_wrapper {
        background: #fff
    }

    #header_nav {
        border: none;
        margin-right: 0;
        padding-right: 0
    }

    #high_council_chamber {
        display: none
    }

    #throne_room {
        display: block
    }

    .search {
        display: none
    }

    .secondary_nav {
        display: none
    }

    .content img {
        max-width: 100%;
        margin: 0 auto;
        display: block
    }

    .content img.large,.content img.medium,.content img.small {
        max-width: 40%
    }

    .content img.xlarge {
        max-width: 48%
    }

    .content img.img_right {
        margin: 16px 0 16px 16px;
        margin: 1rem 0 1rem 1rem;
        float: right
    }

    .content img.img_left {
        margin: 16px 16px 16px 0;
        margin: 1rem 1rem 1rem 0;
        float: left
    }

    .desktop {
        display: none
    }

    #banner {
        margin-bottom: 0
    }

    #banner .flexslider {
        width: 98%;
        padding: 5px 1%;
        padding: .3125rem 1%;
        background: #262626
    }

    #banner .flexslider .flex-direction-nav a {
        display: none
    }

    #banner .flexslider .flex-control-paging {
        position: relative;
        right: auto;
        bottom: auto;
        margin-bottom: 10px;
        margin-bottom: .625rem
    }

    #banner .banner_text {
        position: relative;
        width: 96%;
        height: auto;
        right: auto;
        bottom: auto;
        padding: 10px 3%;
        padding: .625rem 3%;
        background: 0 0;
        overflow: hidden;
        max-width: none
    }

    #banner .banner_text .title,#banner .banner_text h1 {
        width: 100%
    }

    #banner .banner_text.top {
        top: auto;
        left: auto
    }

    #banner .banner_text.left {
        top: auto;
        left: auto
    }

    #banner.static {
        background: #e5e5e5;
        padding: 19.2px 0;
        padding: 1.2rem 0
    }

    #banner.static h1 {
        position: relative;
        color: #000;
        font-size: 48px;
        font-size: 3rem;
        padding: 0;
        margin-left: 5%;
        background: 0 0
    }

    #banner.static img {
        display: none
    }

    #banner.no_img {
        margin-bottom: 0
    }

    #banner .klaxon img,#banner .weather img {
        width: 20%;
        float: none;
        margin: 0 auto;
        display: block;
        margin-bottom: 16px;
        margin-bottom: 1rem
    }

    #banner .klaxon h1,#banner .klaxon h2,#banner .klaxon p,#banner .weather h1,#banner .weather h2,#banner .weather p {
        margin: 0;
        width: 90%;
        padding: 0 5%;
        clear: both
    }

    .core_worlds {
        padding-top: 30px;
        padding-top: 1.875rem
    }

    .core_worlds li {
        width: 31.33333333%;
        margin-bottom: 20px;
        margin-bottom: 1.25rem
    }

    .core_worlds li:nth-last-child(-n+3) {
        margin-bottom: 0
    }

    .core_worlds li img {
        transition: none
    }

    .core_worlds li.clear {
        display: block
    }

    .core_worlds li:hover img {
        width: 80px;
        width: 5rem
    }

    .core_worlds.five_col li {
        width: 31.33333333%
    }

    .core_worlds.five_col li:nth-last-child(-n+2) {
        margin-bottom: 0
    }

    .core_worlds.five_col li:nth-child(4) {
        clear: left;
        margin-left: 18%
    }

    .core_worlds.six_col li {
        width: 31.33333333%
    }

    .core_worlds.six_col li:nth-child(4) {
        clear: left
    }

    .homepage_callout>.inner_rim {
        display: table
    }

    .transmission_img {
        float: none;
        width: 100%;
        margin: 0 auto
    }

    .transmission_content {
        float: none;
        width: 100%;
        margin: 0;
        display: table-header-group
    }

    .transmission_content h1 {
        margin-top: 0;
        font-size: 28.8px;
        font-size: 1.8rem
    }

    .transmission_content .btn {
        margin-top: 20px;
        margin-top: 1.25rem;
        margin-bottom: 20px;
        margin-bottom: 1.25rem
    }

    .table {
        display: block
    }

    .events {
        display: block
    }

    .events .date {
        padding: 22px 0;
        padding: 1.375rem 0
    }

    .events .date .month {
        margin: 0
    }

    .events .details span {
        margin-bottom: 11.2px;
        margin-bottom: .7rem
    }

    .events li {
        display: block;
        margin-bottom: 10px;
        margin-bottom: .625rem;
        border: none
    }

    .events li::after {
        content: "";
        display: block;
        clear: both;
        border: none
    }

    .events li,.news li {
        width: 100%
    }

    .events.two_col li {
        width: 100%
    }

    .news {
        font-size: 19.2px;
        font-size: 1.2rem;
        list-style: none;
        margin: 0;
        padding: 0;
        margin-bottom: 30px;
        margin-bottom: 1.875rem
    }

    .news li span {
        margin-top: 0
    }

    .news li img {
        display: none
    }

    .news li {
        border-bottom: 1px solid #e5e5e5
    }

    .news li a {
        padding: 10px 2%;
        padding: .625 2%;
        padding-left: 13%;
        width: 85%;
        display: block;
        background: url(/_omni/images/global/arrow.png) no-repeat 8px center;
        background-size: 9px;
        -ms-transition: background-position .2s;
        
        
        -webkit-transition: background-position .2s;
        -moz-transition: background-position .2s;
        -o-transition: background-position .2s;
        transition: background-position .2s
    }

    .news li a:hover {
        background-position: 14px center
    }

    .tie_bomber.left,.tie_bomber.right {
        width: 100%;
        max-width: none;
        margin-right: 0;
        float: none;
        box-sizing: border-box
    }

    .fleet li {
        width: 48.75%;
        margin-bottom: 24px;
        margin-bottom: 1.5rem
    }

    .fleet li:nth-child(2n) {
        margin-right: 0
    }

    .fleet.three_col li {
        width: 100%;
        margin-bottom: 24px;
        margin-bottom: 1.5rem
    }

    .fleet.three_col li:nth-child(2n) {
        margin-right: 0
    }

    .long_list .links {
        width: 100%;
        margin-left: 0;
        text-align: left
    }

    .instagram_feed li {
        display: block;
        float: left;
        width: 32%;
        margin-right: 1.5%;
        margin-bottom: 5px
    }

    .instagram_feed li:nth-child(3n) {
        margin-right: 0
    }

    .instagram_feed img {
        width: 100%;
        height: auto
    }

    .cantina.two_col .col_1,.cantina.two_col .col_2 {
        float: none;
        width: 100%;
        margin: 0
    }

    .pagination {
        margin: 8px 0;
        margin: .5rem 0
    }

    .page_wrapper .page {
        display: table;
        width: 100%;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        background: #fff;
        padding: 32px 5%;
        padding: 2rem 5%;
        table-layout: fixed
    }

    .page_wrapper .page .content,.page_wrapper .page .sidebar.left+.content,.page_wrapper .page .sidebar.right+.content {
        width: 100%;
        float: none
    }

    .page_wrapper .page .sidebar,.page_wrapper .page .sidebar.left,.page_wrapper .page .sidebar.right {
        width: 100%;
        margin: 0;
        float: none;
        display: table-footer-group
    }

    ul.table>li.sticky {
        width: 81%;
        padding-left: 4.5%;
        padding-right: 4.5%
    }

    #footer {
        background: #000;
        padding-bottom: 0;
        overflow: hidden;
        border-top: 3px solid #febc11
    }

    #footer .meta_separator {
        display: none
    }

    .home #footer .footer_columns a {
        color: #000
    }

    .home #footer .footer_columns a:hover {
        text-decoration: underline
    }

    .footer_columns>div {
        display: none
    }

    .footer_columns .contact_info {
        display: block;
        width: 100%;
        margin-right: 0
    }

    .footer_columns .contact_info>div {
        width: 45%
    }

    .footer_meta {
        display: table;
        width: 112%;
        background: #000;
        padding: 20px 6%;
        padding: 1.25rem 6%;
        left: -6%;
        position: relative;
        box-sizing: border-box
    }

    .footer_meta div {
        width: 100%;
        float: none;
        text-align: center;
        margin-top: 15px;
        margin-top: .9375rem
    }

    .footer_meta .social_media {
        display: table-header-group;
        text-align: center
    }

    .home .page_wrapper {
        padding-bottom: 1px
    }

    .home #footer {
        border: none;
        background: #fff;
        padding-top: 0
    }

    .home #footer .footer_columns {
        display: table;
        margin-bottom: 20px;
        margin-bottom: 1.25rem
    }

    .home #footer .footer_columns>div,.home #footer .footer_columns>div:first-of-type {
        width: 100%;
        margin-right: 0;
        float: none;
        display: block
    }

    .home #footer .footer_columns>div.contact_info {
        display: table-footer-group
    }

    .home #footer .footer_columns>div.contact_info .title,.home #footer .footer_columns>div.contact_info h1 {
        width: 90%
    }

    .home #footer .footer_columns>div.contact_info .kennesaw_campus,.home #footer .footer_columns>div.contact_info .marietta_campus {
        margin-left: 5%;
        width: auto
    }

    .home #footer .footer_columns>div {
        background: #e5e5e5;
        width: 100%;
        overflow: hidden;
        color: #000;
        margin-bottom: 20px;
        margin-bottom: 1.25rem
    }

    .home #footer .footer_columns>div.left,.home #footer .footer_columns>div.right {
        width: 100%;
        max-width: 304px;
        max-width: 19rem;
        margin-bottom: 16px;
        margin-bottom: 1rem;
        margin-top: 16px;
        margin-top: 1rem
    }

    .home #footer .footer_columns>div.left {
        float: left;
        margin-right: 16px;
        margin-right: 1rem
    }

    .home #footer .footer_columns>div.right {
        float: right;
        margin-left: 16px;
        margin-left: 1rem
    }

    .home #footer .footer_columns>div .plus_wrapper {
        width: 1em;
        height: 1em;
        position: relative;
        cursor: pointer
    }

    .home #footer .footer_columns>div .plus_wrapper span {
        background: #00708d;
        display: block;
        position: absolute;
        border-radius: 16px;
        -webkit-border-radius: 16px;
        -moz-border-radius: 16px;
        border-radius: 1rem;
        -webkit-border-radius: 1rem;
        -moz-border-radius: 1rem
    }

    .home #footer .footer_columns>div .plus_wrapper .vertical {
        width: .125em;
        height: 1em;
        left: 50%;
        margin-left: -.0625em;
        -ms-transition: transform .4s;
        
        
        -webkit-transition: transform .4s;
        -moz-transition: transform .4s;
        -o-transition: transform .4s;
        transition: transform .4s
    }

    .home #footer .footer_columns>div .plus_wrapper .horizontal {
        width: 1em;
        height: .125em;
        top: 50%;
        margin-top: -.0625em
    }

    .home #footer .footer_columns>div .plus_wrapper.minus .vertical {
        -ms-transform: rotate(90deg);
        -webkit-transform: rotate(90deg);
        -moz-transform: rotate(90deg);
        -o-transform: rotate(90deg);
        transform: rotate(90deg)
    }

    .home #footer .footer_columns>div .title,.home #footer .footer_columns>div h1 {
        padding: 15px 5%;
        padding: .9375rem 5%;
        width: 90.5%;
        margin: 0;
        font-size: 24px;
        font-size: 1.5rem;
        font-weight: 400;
        text-transform: uppercase;
        background: url(/_omni/images/global/corner-cut.png) no-repeat right top;
        background-size: 1.8rem;
        background-color: #febc11;
        font-family: Nunito,Arial,Helvetica,sans-serif
    }

    .home #footer .footer_columns>div ul {
        list-style: none;
        margin: 0;
        padding: 0;
        width: 100%
    }

    .home #footer .footer_columns>div ul li {
        width: 100%
    }

    .home #footer .footer_columns>div ul li:hover {
        background: #febc11
    }

    .home #footer .footer_columns>div ul li a {
        padding: .8rem 5%;
        padding: 12.8px 5%;
        display: block;
        width: 90%;
        color: #000;
        border: none
    }

    .home #footer .footer_columns>div .content {
        padding: 0 5%
    }

    .home #footer .footer_columns>div .title,.home #footer .footer_columns>div h1,.home #footer .footer_columns>div ul li a {
        color: #000
    }

    .home .footer_meta {
        border-top: 3px solid #febc11
    }

    .module_grid>li {
        width: 96%!important;
        margin: 0;
        float: none;
        margin-bottom: 16px;
        margin-bottom: 1rem
    }
}

@media only screen and (max-width: 40em) {
    #header_nav {
        width:100%;
        margin-bottom: 10px;
        margin-bottom: .625rem;
        margin-top: 0;
        display: none
    }

    #header_nav .active {
        display: none
    }

    #header_nav .utility {
        width: 100%
    }

    #header_nav .utility li {
        width: 100%;
        font-size: 18.72px;
        font-size: 1.17rem;
        background: #303030;
        width: 44.5%;
        margin-left: 5%;
        padding: 0;
        margin-bottom: 5px;
        margin-bottom: .3125rem
    }

    #header_nav .utility li:nth-child(even) {
        margin-left: 1%
    }

    #header_nav .utility li a {
        padding: 16px 5%;
        padding: .5rem 5%;
        display: block;
        width: 90%;
        color: #fff
    }

    form input[type=checkbox],form input[type=radio] {
        margin: 16px 8px;
        margin: 1rem .5rem
    }

    form input[type=checkbox]+span,form input[type=radio]+span {
        display: inline-block;
        width: 75%
    }

    form input[type=radio]+span {
        margin: 15.2px 0;
        margin: .95rem 0
    }

    form input[type=checkbox]+span {
        margin: 13.6px 0;
        margin: .85rem 0
    }

    #header {
        height: auto;
        padding: 12px 0;
        padding: .75rem 0;
        padding-top: 15.2px;
        padding-top: .95rem
    }

    #header .inner_rim {
        width: 100%;
        display: table
    }

    #header .logo_container {
        width: 95%;
        display: table-footer-group;
        margin: 0 auto;
        float: none;
        padding: 15px 0;
        padding: .9375rem 0
    }

    #header .logo_container .logo {
        display: none
    }

    #header .logo_container .mobile_logo {
        display: block
    }

    #header .logo_container .site_title {
        padding-top: 0
    }

    #header .logo_container .top>a {
        display: none
    }

    #header .logo_container.medium .site_title,#header .logo_container.small .site_title {
        font-size: 17.6px;
        font-size: 1.1rem
    }

    #header .logo_container.large .site_title,#header .logo_container.xlarge .site_title {
        font-size: 16px;
        font-size: 1rem
    }

    .twitter-timeline {
        width: 100%
    }

    #mobile_high_council_chamber li.mobile {
        display: block
    }

    .video_wrapper.custom_size {
        width: 100%!important;
        padding-bottom: 56.25%!important
    }

    .fleet li {
        width: 100%;
        margin-right: 0
    }

    .fleet.two_col li {
        width: 100%;
        margin-right: 0
    }

    .cantina {
        margin-bottom: 40px;
        margin-bottom: 2.5rem
    }

    .cantina>li {
        margin-right: 0;
        width: 100%;
        float: none;
        margin-bottom: 32px;
        margin-bottom: 2rem
    }

    .cantina h1 {
        margin: 8px 0 5px 0;
        margin: .5rem 0 .3125rem 0;
        border-bottom: 1px solid #000;
        padding-bottom: 5px;
        padding-bottom: .3125rem;
        font-size: 24px;
        font-size: 1.5rem;
        text-transform: capitalize
    }

    .cantina ul {
        list-style: none;
        margin: 0;
        padding: 0
    }

    .cantina ul li {
        border-bottom: 1px solid #e5e5e5
    }

    .cantina ul li a {
        padding: 10px 2%;
        padding: .625rem 2%;
        padding-left: 13%;
        width: 85%;
        display: block;
        background: url(/_omni/images/global/arrow.png) no-repeat 8px center;
        background-size: 9px;
        -ms-transition: background-position .2s;
        
        
        -webkit-transition: background-position .2s;
        -moz-transition: background-position .2s;
        -o-transition: background-position .2s;
        transition: background-position .2s
    }

    .cantina ul li a:hover {
        background-position: 14px center
    }

    .cantina.two_col>li,.cantina.two_col>li:nth-child(3n) {
        margin-right: 0;
        width: 100%
    }
}

@media screen and (max-width: 600px) and (orientation:landscape) {
    body {
        -webkit-text-size-adjust:none
    }
}


</style>
