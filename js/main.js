/**
 *  Navigation Menu
 */
var icon = document.getElementById("nav-menu");
// Toggle the "menu-open"
function toggle() {
    var nav = document.getElementById("nav");

    var button = document.getElementById("menu");
    var site = document.getElementById("wrapper");

    if (nav.className == "menu-open") {
        nav.className = "";
        button.className = "";
        site.className = "";
    } else {
        nav.className += "menu-open";
        button.className += "btn-close";
        site.className += "fixed";
    }
}
// Ensures backward compatibility with IE old versions
function menuClick() {
    if (document.addEventListener && icon !== null) {
        icon.addEventListener('click', toggle);
    } else if (document.attachEvent && icon !== null) {
        icon.attachEvent('onclick', toggle);
    } else {
        return;
    }
}
menuClick();

/*
 * The JavaScript below can be used with `footer` markup as in the following example:
 *
 * <!-- enter either one year (2018), or two years separated by a hypen (2009 - 2018) in the span element below -->
 * <footer>
 *     &copy; <span id="c_year">2018</span> Example, Inc.
 * </footer>
 * 
 */
function setCopyrightYear() {
    var currentYear = new Date().getFullYear(); // get current year
    var c = document.getElementById("copyright__year");
    var cValue = c.firstChild.nodeValue;
    var cParts = cValue.split(' ');
    if (cParts.length > 1) { // if two years separated by a hyphen
        var cNewestYear = parseInt(cParts[2]);
        if (cNewestYear != currentYear) { // if newest year value is not current year
            c.firstChild.nodeValue = cParts[0] + " " +
                cParts[1] + " " +
                currentYear; // reconstruct and write with current year
        }
    } else {
        if (cValue != currentYear) { // if only one year and not current, make current
            c.firstChild.nodeValue = currentYear;
        }
    }
};
window.onload = function () {
    setCopyrightYear();
};

/**
 * GitHub Stats
 */
$('[data-github]').each(function () {
    var _this = this;
    var repo = $(_this).data('github')
  
    fetch('https://api.github.com/repos/' + repo).then(function (response) {
      return response.json();
    }).then(function (response) {
      $(_this).find('[data-forks]').text(response.forks);
      $(_this).find('[data-stars]').text(response.stargazers_count);
    });
  });