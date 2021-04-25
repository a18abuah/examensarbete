// ==UserScript==
// @name         New Userscript123 joomla book auto
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://localhost/joomla3.9/administrator/index.php?option=com_content&view=article&layout=edit&id=*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';



            var imgage1 = "http://localhost/joomla3.9/images/paolo.jpg";
            var image1 = "images/paolo.jpg"
            document.getElementById('jform_image_thumb_image').value = image1;
            document.getElementById('jform_image_main_image').value = image1;
            document.getElementById('input-thumb-image').src = imgage1;
            document.getElementById('input-main-image').src = imgage1;
           var test =   document.getElementById('input-main-image').src;
             Joomla.submitbutton('article.save2new');
})();
