<template>
  <Layout>
      <div class="grid align-vertically">
        <div class="grid__item large--6">
          <h1 class="hero-headline">Quickly find Squarespace ids.</h1>
          <p>
              Drag this bookmark to your bookmarks bar, then click to try.
          </p>
          <div class="bookmarklet-container button">
            <a
              class="bookmarklet"
              href="javascript:(function()%7B(function()%20%7Bif%20(document.querySelector(%22.squarespace-config%22))%20%7BaddOrRemove(document.querySelector(%22iframe%23sqs-site-frame%22).contentDocument)%3B%7D%20else%20if%20(document.head.innerHTML.indexOf(%22Squarespace%22)%20%3E%20-1)%20%7BaddOrRemove(document)%3B%7Dfunction%20addOrRemove(doc)%20%7Bif%20(doc.querySelector(%22.sqsidfinder%22))%20%7BremoveSelectors(doc)%3B%7D%20else%20%7BaddSelectors(doc)%3B%7D%7Dfunction%20addSelectors(doc)%20%7Bvar%20copied%20%3D%20document.createElement(%22div%22)%3Bcopied.textContent%20%3D%20%22Copied!%22%3Bcopied.id%20%3D%20%22copied-notification%22%3Bcopied.classList.add(%22sqsidfinder%22)%3Bcopied.style.cssText%20%3D%22position%3A%20fixed%3Bdisplay%3A%20flex%3Bopacity%3A%200%3Btransition%3A%20opacity%200.25s%20ease-in-out%200s%3Bpadding%3A%205px%2020px%3Bbox-shadow%3A%20rgba(0%2C%200%2C%200%2C%200.75)%200px%200px%205px%200px%3Bcolor%3A%20white%3Btext-transform%3A%20uppercase%3Bfont-family%3A%20Helvetica%2C%20Arial%2C%20sans-serif%3Bbackground%3A%20black%3Bborder%3A%203px%20solid%20rgb(4%2C%20142%2C%20203)%3Btop%3A%20calc(50%25%20-%20100px)%3Bleft%3A%20calc(50%25%20-%20100px)%3Bjustify-content%3A%20center%3Balign-items%3A%20center%3Bwidth%3A%20200px%3Bheight%3A%20200px%3Bfont-size%3A%2024px%3Bz-index%3A0%3B%22%3Bdoc.body.appendChild(copied)%3BaddSectionIDs(doc)%3BaddCollectionIDs(doc)%3BaddBlockIDs(doc)%3B%7Dfunction%20removeSelectors(doc)%20%7Bdoc.querySelectorAll(%22.sqsidfinder%22).forEach(function(item)%20%7Bitem.parentNode.removeChild(item)%3B%7D)%3B%7Dfunction%20addSectionIDs(doc)%20%7Bvar%20svg%20%3D'%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%20standalone%3D%22no%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20width%3D%2210px%22%20height%3D%2210px%22%20viewBox%3D%220%200%2090%2090%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xml%3Aspace%3D%22preserve%22%20xmlns%3Aserif%3D%22http%3A%2F%2Fwww.serif.com%2F%22%20style%3D%22fill%3A%23048ecb%3Bfill-rule%3Aevenodd%3Bclip-rule%3Aevenodd%3Bstroke-linejoin%3Around%3Bstroke-miterlimit%3A2%3B%22%3E%3Cpath%20d%3D%22M84.438%2C0l-70.536%2C0c-3.071%2C0%20-5.562%2C2.483%20-5.562%2C5.549l0%2C33.753l42.474%2C0l0%2C42.166l33.623%2C0c3.072%2C0%205.562%2C-2.482%205.562%2C-5.549l0%2C-70.37c0.001%2C-3.066%20-2.488%2C-5.549%20-5.561%2C-5.549Z%22%20style%3D%22fill-rule%3Anonzero%3B%22%2F%3E%3Cpath%20d%3D%22M0%2C84.451c0%2C3.067%202.489%2C5.549%205.562%2C5.549l35.267%2C0l0%2C-40.736l-40.829%2C0l0%2C35.187Z%22%20style%3D%22fill-rule%3Anonzero%3B%22%2F%3E%3C%2Fsvg%3E'%3Bdoc.querySelectorAll(%22section%22).forEach(function(section)%20%7Bif%20(section.getAttribute(%22data-section-id%22))%20%7Bvar%20sectionData%20%3D'section%5Bdata-section-id%3D%22'%20%2Bsection.getAttribute(%22data-section-id%22)%20%2B'%22%5D'%3Bvar%20top%20%3D%20section.style.paddingTop%20%3F%20section.style.paddingTop%20%3A%20%225px%22%3BcreateElement(section%2C%20sectionData%2C%20top%2C%20svg%2C%20%22%23048ecb%22%2C%20doc)%3B%7D%20else%20if%20(section.id%20%26%26%20section.classList.contains(%22Index-page%22))%20%7Bsection.style.position%20%3D%20%22relative%22%3Bvar%20sectionData%20%3D%20%22%23%22%20%2B%20section.id%3Bvar%20top%20%3D%20section.style.paddingTop%20%3F%20section.style.paddingTop%20%3A%20%225px%22%3BcreateElement(section%2C%20sectionData%2C%20top%2C%20svg%2C%20%22%23048ecb%22%2C%20doc)%3B%7D%7D)%3B%7Dfunction%20addBlockIDs(doc)%20%7Bvar%20svg%20%3D'%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%20standalone%3D%22no%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20width%3D%2210px%22%20height%3D%2210px%22%20viewBox%3D%220%200%2024%2024%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xml%3Aspace%3D%22preserve%22%20xmlns%3Aserif%3D%22http%3A%2F%2Fwww.serif.com%2F%22%20style%3D%22fill%3A%23fe5e72%3Bfill-rule%3Aevenodd%3Bclip-rule%3Aevenodd%3Bstroke-linejoin%3Around%3Bstroke-miterlimit%3A2%3B%22%3E%3Cpath%20d%3D%22M24%2C2c0%2C-1.104%20-0.896%2C-2%20-2%2C-2l-20%2C0c-1.104%2C0%20-2%2C0.896%20-2%2C2l0%2C20c0%2C1.104%200.896%2C2%202%2C2l20%2C0c1.104%2C0%202%2C-0.896%202%2C-2l0%2C-20Z%22%2F%3E%3C%2Fsvg%3E'%3Bdoc.querySelectorAll(%22%5Bid%5E%3D'block-'%5D%22).forEach(function(block)%20%7BcreateElement(block%2C%20%22%23%22%20%2B%20block.id%2C%20%225px%22%2C%20svg%2C%20%22%23fe5e72%22%2C%20doc)%3B%7D)%3B%7Dfunction%20addCollectionIDs(doc)%20%7Bvar%20svg%20%3D'%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%20standalone%3D%22no%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20width%3D%2210px%22%20height%3D%2210px%22%20viewBox%3D%220%200%2096%2096%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xml%3Aspace%3D%22preserve%22%20xmlns%3Aserif%3D%22http%3A%2F%2Fwww.serif.com%2F%22%20style%3D%22fill%3A%23ffc73f%3Bfill-rule%3Aevenodd%3Bclip-rule%3Aevenodd%3Bstroke-linejoin%3Around%3Bstroke-miterlimit%3A2%3B%22%3E%3Cg%3E%3Cpath%20d%3D%22M37.4%2C0l-32.6%2C0c-2.6%2C0%20-4.8%2C2.1%20-4.8%2C4.8l0%2C32.7c0%2C2.6%202.1%2C4.8%204.8%2C4.8l32.7%2C0c2.6%2C0%204.8%2C-2.1%204.8%2C-4.8l0%2C-32.7c-0.1%2C-2.7%20-2.3%2C-4.8%20-4.9%2C-4.8Z%22%20style%3D%22fill-rule%3Anonzero%3B%22%2F%3E%3Cpath%20d%3D%22M90.2%2C0l-32.6%2C0c-2.6%2C0%20-4.8%2C2.1%20-4.8%2C4.8l0%2C32.7c0%2C2.6%202.1%2C4.8%204.8%2C4.8l32.7%2C0c2.6%2C0%204.8%2C-2.1%204.8%2C-4.8l0%2C-32.7c-0.1%2C-2.7%20-2.2%2C-4.8%20-4.9%2C-4.8Z%22%20style%3D%22fill-rule%3Anonzero%3B%22%2F%3E%3Cpath%20d%3D%22M37.4%2C52.8l-32.6%2C0c-2.6%2C0%20-4.8%2C2.1%20-4.8%2C4.8l0%2C32.7c0%2C2.6%202.1%2C4.8%204.8%2C4.8l32.7%2C0c2.6%2C0%204.8%2C-2.1%204.8%2C-4.8l0%2C-32.7c-0.1%2C-2.6%20-2.3%2C-4.8%20-4.9%2C-4.8Z%22%20style%3D%22fill-rule%3Anonzero%3B%22%2F%3E%3Cpath%20d%3D%22M90.2%2C52.8l-32.6%2C0c-2.6%2C0%20-4.8%2C2.1%20-4.8%2C4.8l0%2C32.7c0%2C2.6%202.1%2C4.8%204.8%2C4.8l32.7%2C0c2.6%2C0%204.8%2C-2.1%204.8%2C-4.8l0%2C-32.7c-0.1%2C-2.6%20-2.2%2C-4.8%20-4.9%2C-4.8Z%22%20style%3D%22fill-rule%3Anonzero%3B%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E'%3Bvar%20body%20%3D%20doc.querySelector(%22body%22)%3Bvar%20bodyID%20%3D%20%22%23%22%20%2B%20body.id%3BcreateElement(body%2C%20bodyID%2C%20%225px%22%2C%20svg%2C%20%22%23ffc73f%22%2C%20doc)%3B%7Dfunction%20copyToClipboard(str)%20%7Bconst%20el%20%3D%20document.createElement(%22textarea%22)%3Bel.value%20%3D%20str%3Bel.setAttribute(%22readonly%22%2C%20%22%22)%3Bel.style.position%20%3D%20%22absolute%22%3Bel.style.left%20%3D%20%22-9999px%22%3Bdocument.body.appendChild(el)%3Bconst%20selected%20%3Ddocument.getSelection().rangeCount%20%3E%200%3F%20document.getSelection().getRangeAt(0)%3A%20false%3Bel.select()%3Bdocument.execCommand(%22copy%22)%3Bdocument.body.removeChild(el)%3Bif%20(selected)%20%7Bdocument.getSelection().removeAllRanges()%3Bdocument.getSelection().addRange(selected)%3B%7D%7Dfunction%20showCopied(color%2C%20doc)%20%7Bvar%20copied%20%3D%20doc.querySelector(%22%23copied-notification%22)%3Bcopied.style.borderColor%20%3D%20color%3Bcopied.style.zIndex%20%3D%20%2212003%22%3Bcopied.style.opacity%20%3D%201%3Bvar%20timer%20%3D%20setTimeout(function()%20%7Bcopied.style.opacity%20%3D%200%3Bcopied.style.zIndex%20%3D%20%220%22%3B%7D%2C%201000)%3B%7Dfunction%20createElement(area%2C%20content%2C%20top%2C%20icon%2C%20color%2C%20doc)%20%7Bconst%20parser%20%3D%20new%20DOMParser()%3Bconst%20parsed%20%3D%20parser.parseFromString(icon%2C%20%22text%2Fhtml%22)%3Bconst%20iconBody%20%3D%20parsed.querySelector(%22svg%22)%3BiconBody.style.pointerEvents%20%3D%20%22none%22%3Bvar%20element%20%3D%20document.createElement(%22div%22)%3Belement.appendChild(iconBody)%3Bvar%20span%20%3D%20document.createElement(%22span%22)%3Bspan.style.cssText%20%3D%20%22margin-left%3A%205px%3B%22%3Bspan.textContent%20%3D%20content%3Bspan.style.pointerEvents%20%3D%20%22none%22%3Belement.appendChild(span)%3Belement.classList.add(%22sqsidfinder%22)%3Belement.style.cssText%20%3D%22position%3Aabsolute%3Bleft%3A5px%3Bbackground%3Awhite%3Bcolor%3Ablack%3Bpadding%3A5px%2010px%3B-webkit-box-shadow%3A%200px%200px%205px%200px%20rgba(0%2C0%2C0%2C0.75)%3B-moz-box-shadow%3A%200px%200px%205px%200px%20rgba(0%2C0%2C0%2C0.75)%3Bbox-shadow%3A%200px%200px%205px%200px%20rgba(0%2C0%2C0%2C0.75)%3Bfont-family%3Amonospace%3Bfont-weight%3Abold%3Bfont-size%3A14px%3Bcursor%3Apointer%3Bz-index%3A12001%3Bletter-spacing%3A1px%3Bline-height%3A1.5%3B%22%3Belement.style.top%20%3D%20top%3Bvar%20borderBottom%20%3D%20%223px%20solid%20%22%20%2B%20color%3Belement.style.borderBottom%20%3D%20borderBottom%3Belement.addEventListener(%22click%22%2C%20function(event)%20%7BcopyToClipboard(content)%3BshowCopied(color%2C%20doc)%3B%7D)%3Belement.addEventListener(%22pointerdown%22%2C%20function(event)%20%7Bevent.preventDefault()%3BcopyToClipboard(content)%3BshowCopied(color%2C%20doc)%3B%7D)%3Belement.addEventListener(%22mouseenter%22%2C%20function(event)%20%7Belement.style.zIndex%20%3D%20%2212002%22%3B%7D)%3Belement.addEventListener(%22mouseleave%22%2C%20function(event)%20%7Belement.style.zIndex%20%3D%20%2212001%22%3B%7D)%3Barea.appendChild(element)%3B%7D%7D)()%7D)()"
              >Squarespace ID Finder</a
            >
            <div class="bookmarklet-text">Drag Me</div>
          </div>
          <p>Available as a <a href="https://chrome.google.com/webstore/detail/squarespace-id-finder/igjamfnifnkmecjidfbdipieoaeghcff">Chrome extension</a> and <a href="https://addons.mozilla.org/en-CA/firefox/addon/squarespace-id-finder/">Firefox addon</a>, too!</p>
        </div>
        <div class="grid__item large--6">
            <g-image src="~/assets/images/sqs-id-finder-video.gif" />
        </div>
      </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Squarespace ID Finder",
    bodyAttrs: {
      class: "page--sqs-id-finder",
      id: "Hello-Designer",
    },
  },
};
</script>

<page-query>
  query {
    posts: allPost (limit: 4) {
      edges {
        node {
					id
          slug
					title 
					path 
					date(format: "MMM YYYY")
					excerpt
					content
					timeToRead(speed: 200)
					categories {
            title
          }
          tags {
            title
          }
        } 
      } 
    } 
  }
</page-query>