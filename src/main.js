// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";

import Buefy from "buefy";
import "~/main.scss";
import VueDisqus from "vue-disqus";
import InfiniteLoading from "vue-infinite-loading";
import SmoothScrollbar from "vue-smooth-scrollbar";
import InstantSearch from "vue-instantsearch";
import Axios from "axios";

const fontsCss = `
/* poppins-100 - latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 100;
  src: url('../fonts/poppins-v15-latin-100.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/poppins-v15-latin-100.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/poppins-v15-latin-100.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/poppins-v15-latin-100.woff') format('woff'), /* Modern Browsers */
       url('../fonts/poppins-v15-latin-100.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/poppins-v15-latin-100.svg#Poppins') format('svg'); /* Legacy iOS */
}
/* poppins-100italic - latin */
@font-face {
  font-family: 'Poppins';
  font-style: italic;
  font-weight: 100;
  src: url('../fonts/poppins-v15-latin-100italic.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/poppins-v15-latin-100italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/poppins-v15-latin-100italic.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/poppins-v15-latin-100italic.woff') format('woff'), /* Modern Browsers */
       url('../fonts/poppins-v15-latin-100italic.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/poppins-v15-latin-100italic.svg#Poppins') format('svg'); /* Legacy iOS */
}
/* poppins-200 - latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 200;
  src: url('../fonts/poppins-v15-latin-200.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/poppins-v15-latin-200.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/poppins-v15-latin-200.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/poppins-v15-latin-200.woff') format('woff'), /* Modern Browsers */
       url('../fonts/poppins-v15-latin-200.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/poppins-v15-latin-200.svg#Poppins') format('svg'); /* Legacy iOS */
}
/* poppins-200italic - latin */
@font-face {
  font-family: 'Poppins';
  font-style: italic;
  font-weight: 200;
  src: url('../fonts/poppins-v15-latin-200italic.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/poppins-v15-latin-200italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/poppins-v15-latin-200italic.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/poppins-v15-latin-200italic.woff') format('woff'), /* Modern Browsers */
       url('../fonts/poppins-v15-latin-200italic.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/poppins-v15-latin-200italic.svg#Poppins') format('svg'); /* Legacy iOS */
}
/* poppins-300italic - latin */
@font-face {
  font-family: 'Poppins';
  font-style: italic;
  font-weight: 300;
  src: url('../fonts/poppins-v15-latin-300italic.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/poppins-v15-latin-300italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/poppins-v15-latin-300italic.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/poppins-v15-latin-300italic.woff') format('woff'), /* Modern Browsers */
       url('../fonts/poppins-v15-latin-300italic.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/poppins-v15-latin-300italic.svg#Poppins') format('svg'); /* Legacy iOS */
}
/* poppins-300 - latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 300;
  src: url('../fonts/poppins-v15-latin-300.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/poppins-v15-latin-300.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/poppins-v15-latin-300.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/poppins-v15-latin-300.woff') format('woff'), /* Modern Browsers */
       url('../fonts/poppins-v15-latin-300.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/poppins-v15-latin-300.svg#Poppins') format('svg'); /* Legacy iOS */
}
/* poppins-regular - latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  src: url('../fonts/poppins-v15-latin-regular.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/poppins-v15-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/poppins-v15-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/poppins-v15-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('../fonts/poppins-v15-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/poppins-v15-latin-regular.svg#Poppins') format('svg'); /* Legacy iOS */
}
/* poppins-italic - latin */
@font-face {
  font-family: 'Poppins';
  font-style: italic;
  font-weight: 400;
  src: url('../fonts/poppins-v15-latin-italic.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/poppins-v15-latin-italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/poppins-v15-latin-italic.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/poppins-v15-latin-italic.woff') format('woff'), /* Modern Browsers */
       url('../fonts/poppins-v15-latin-italic.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/poppins-v15-latin-italic.svg#Poppins') format('svg'); /* Legacy iOS */
}
/* poppins-500 - latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  src: url('../fonts/poppins-v15-latin-500.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/poppins-v15-latin-500.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/poppins-v15-latin-500.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/poppins-v15-latin-500.woff') format('woff'), /* Modern Browsers */
       url('../fonts/poppins-v15-latin-500.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/poppins-v15-latin-500.svg#Poppins') format('svg'); /* Legacy iOS */
}
/* poppins-500italic - latin */
@font-face {
  font-family: 'Poppins';
  font-style: italic;
  font-weight: 500;
  src: url('../fonts/poppins-v15-latin-500italic.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/poppins-v15-latin-500italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/poppins-v15-latin-500italic.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/poppins-v15-latin-500italic.woff') format('woff'), /* Modern Browsers */
       url('../fonts/poppins-v15-latin-500italic.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/poppins-v15-latin-500italic.svg#Poppins') format('svg'); /* Legacy iOS */
}
/* poppins-600 - latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  src: url('../fonts/poppins-v15-latin-600.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/poppins-v15-latin-600.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/poppins-v15-latin-600.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/poppins-v15-latin-600.woff') format('woff'), /* Modern Browsers */
       url('../fonts/poppins-v15-latin-600.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/poppins-v15-latin-600.svg#Poppins') format('svg'); /* Legacy iOS */
}
/* poppins-600italic - latin */
@font-face {
  font-family: 'Poppins';
  font-style: italic;
  font-weight: 600;
  src: url('../fonts/poppins-v15-latin-600italic.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/poppins-v15-latin-600italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/poppins-v15-latin-600italic.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/poppins-v15-latin-600italic.woff') format('woff'), /* Modern Browsers */
       url('../fonts/poppins-v15-latin-600italic.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/poppins-v15-latin-600italic.svg#Poppins') format('svg'); /* Legacy iOS */
}
/* poppins-700 - latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  src: url('../fonts/poppins-v15-latin-700.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/poppins-v15-latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/poppins-v15-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/poppins-v15-latin-700.woff') format('woff'), /* Modern Browsers */
       url('../fonts/poppins-v15-latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/poppins-v15-latin-700.svg#Poppins') format('svg'); /* Legacy iOS */
}
/* poppins-700italic - latin */
@font-face {
  font-family: 'Poppins';
  font-style: italic;
  font-weight: 700;
  src: url('../fonts/poppins-v15-latin-700italic.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/poppins-v15-latin-700italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/poppins-v15-latin-700italic.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/poppins-v15-latin-700italic.woff') format('woff'), /* Modern Browsers */
       url('../fonts/poppins-v15-latin-700italic.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/poppins-v15-latin-700italic.svg#Poppins') format('svg'); /* Legacy iOS */
}
/* poppins-800 - latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 800;
  src: url('../fonts/poppins-v15-latin-800.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/poppins-v15-latin-800.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/poppins-v15-latin-800.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/poppins-v15-latin-800.woff') format('woff'), /* Modern Browsers */
       url('../fonts/poppins-v15-latin-800.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/poppins-v15-latin-800.svg#Poppins') format('svg'); /* Legacy iOS */
}
/* poppins-800italic - latin */
@font-face {
  font-family: 'Poppins';
  font-style: italic;
  font-weight: 800;
  src: url('../fonts/poppins-v15-latin-800italic.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/poppins-v15-latin-800italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/poppins-v15-latin-800italic.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/poppins-v15-latin-800italic.woff') format('woff'), /* Modern Browsers */
       url('../fonts/poppins-v15-latin-800italic.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/poppins-v15-latin-800italic.svg#Poppins') format('svg'); /* Legacy iOS */
}
/* poppins-900 - latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 900;
  src: url('../fonts/poppins-v15-latin-900.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/poppins-v15-latin-900.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/poppins-v15-latin-900.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/poppins-v15-latin-900.woff') format('woff'), /* Modern Browsers */
       url('../fonts/poppins-v15-latin-900.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/poppins-v15-latin-900.svg#Poppins') format('svg'); /* Legacy iOS */
}
/* poppins-900italic - latin */
@font-face {
  font-family: 'Poppins';
  font-style: italic;
  font-weight: 900;
  src: url('../fonts/poppins-v15-latin-900italic.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/poppins-v15-latin-900italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/poppins-v15-latin-900italic.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/poppins-v15-latin-900italic.woff') format('woff'), /* Modern Browsers */
       url('../fonts/poppins-v15-latin-900italic.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/poppins-v15-latin-900italic.svg#Poppins') format('svg'); /* Legacy iOS */
}
`;

export default function(Vue, { router, head, isClient }) {
  // Add attributes to HTML tag
  head.htmlAttrs = { lang: "fr" };

  // import vue meta
  head.meta.push({
    name: "viewport",
    content: "width=device-width, initial-scale=1.0, shrink-to-fit=no",
  });

  // Import Poppins
  head.style.push({
    type: "text/css",
    cssText: fontsCss,
  });

  // Import Font Awesome
  head.link.push({
    rel: "stylesheet",
    href: "https://use.fontawesome.com/releases/v5.12.0/css/all.css",
  });

  // pixel twitter
  head.script.push({
    src: "pixel-twitter.js",
  });

  // Import Klaro Cookie Consent
  head.script.push({
    src: "config.js",
  });
  head.script.push({
    src: "klaro.js",
  });

  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);

  // Register our Bulma component library
  Vue.use(Buefy);

  // Register VueDisqus
  Vue.use(VueDisqus);

  //http requests via axios
  Vue.use(Axios);

  Vue.use(InfiniteLoading);

  Vue.use(SmoothScrollbar);

  Vue.use(InstantSearch);
}
