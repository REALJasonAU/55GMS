/* Ads disabled by maintainer
   This file previously loaded Adsense or a fallback ad image into
   the element with id "addisplay". To remove the random ad popup
   behavior, the script is now a no-op that hides any ad element.
*/
(function () {
  try {
    const el = document.getElementById("addisplay");
    if (el) {
      el.style.display = "none";
      el.innerHTML = "";
    }
    const adEl = document.getElementById("adElement");
    if (adEl) {
      adEl.style.display = "none";
      // remove attributes normally used by ads
      adEl.removeAttribute("data-ad-client");
      adEl.removeAttribute("data-ad-slot");
      adEl.className = "";
    }
    console.log("Ads disabled: ad.js no-op loaded");
  } catch (e) {
    // Keep failure silent to avoid breaking pages
  }
})();
