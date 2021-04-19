// ==UserScript==
// @name         Testtest joomla book auto
// @namespace    http://tampermonkey.net/
// @version      0.1
// @match        http://localhost/joomla3.9/administrator/index.php?option=com_content&view=article&layout=edit
// @grant        none
// @require      http://code.jquery.com/jquery-3.4.1.min.js

// ==/UserScript==

(function () {
    'use strict';
    var $ = window.jQuery;
    var maxIterationCount = 100;
    var sessionIterated = parseInt(localStorage.getItem("timesIterated"));
    var oldtimer = localStorage.getItem("oldtimer");
    $(window).on('load', function () {
        var measurement = new Date();
        measurement = measurement.getTime();
        if (oldtimer == null) {} else {
            var delta = measurement - oldtimer;
        }

        var timesIterated;
        var content = "";
        if (localStorage.getItem('timesIterated') === null || localStorage.getItem('timesIterated') >= maxIterationCount) {
            localStorage.setItem('timesIterated', 1);

        } else {
            timesIterated = parseInt(localStorage.getItem('timesIterated'));
            timesIterated++;
            localStorage.setItem('timesIterated', timesIterated);

        }
        var startklocka = new Date();
        startklocka = startklocka.getTime();
        localStorage.setItem("oldtimer", startklocka);
        const data1 = [
            {
                name: "book0",
                id: 0,
                idprodukt: 0,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: -20
      },
            {
                name: "book1",
                id: 1,
                idprodukt: 1,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: -94
      },
            {
                name: "book2",
                id: 2,
                idprodukt: 2,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: 86
      },
            {
                name: "book3",
                id: 3,
                idprodukt: 3,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: 7
      },
            {
                name: "book4",
                id: 4,
                idprodukt: 4,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: -37
      },
            {
                name: "book5",
                id: 5,
                idprodukt: 5,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: 72
      },
            {
                name: "book6",
                id: 6,
                idprodukt: 6,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: 58
      },
            {
                name: "book7",
                id: 7,
                idprodukt: 7,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: -70
      },
            {
                name: "book8",
                id: 8,
                idprodukt: 8,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: 78
      },
            {
                name: "book9",
                id: 9,
                idprodukt: 9,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: 41
      },
            {
                name: "book10",
                id: 10,
                idprodukt: 10,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: -21
      },
            {
                name: "book11",
                id: 11,
                idprodukt: 11,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: 3
      },
            {
                name: "book12",
                id: 12,
                idprodukt: 12,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: -100
      },
            {
                name: "book13",
                id: 13,
                idprodukt: 13,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: -100
      },
            {
                name: "book14",
                id: 14,
                idprodukt: 14,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: -53
      },
            {
                name: "book15",
                id: 15,
                idprodukt: 15,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: 78
      },
            {
                name: "book16",
                id: 16,
                idprodukt: 16,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: -39
      },
            {
                name: "book17",
                id: 17,
                idprodukt: 17,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: 54
      },
            {
                name: "book18",
                id: 18,
                idprodukt: 18,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: 30
      },
            {
                name: "book19",
                id: 19,
                idprodukt: 19,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: -65
      },
            {
                name: "book20",
                id: 20,
                idprodukt: 20,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: -31
      },
            {
                name: "book21",
                id: 21,
                idprodukt: 21,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: 45
      },
            {
                name: "book22",
                id: 22,
                idprodukt: 22,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: 76
      },
            {
                name: "book23",
                id: 23,
                idprodukt: 23,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: 18
      },
            {
                name: "book24",
                id: 24,
                idprodukt: 24,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: -89
      },
            {
                name: "book25",
                id: 25,
                idprodukt: 25,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: -82
      },
            {
                name: "book26",
                id: 26,
                idprodukt: 26,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: 83
      },
            {
                name: "book27",
                id: 27,
                idprodukt: 27,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: -2
      },
            {
                name: "book28",
                id: 28,
                idprodukt: 28,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: 61
      },
            {
                name: "book29",
                id: 29,
                idprodukt: 29,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: -10
      },
            {
                name: "book30",
                id: 30,
                idprodukt: 30,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: 67
      },
            {
                name: "book31",
                id: 31,
                idprodukt: 31,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: -76
      },
            {
                name: "book32",
                id: 32,
                idprodukt: 32,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: 32
      },
            {
                name: "book33",
                id: 33,
                idprodukt: 33,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: 50
      },
            {
                name: "book34",
                id: 34,
                idprodukt: 34,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: -98
      },
            {
                name: "book35",
                id: 35,
                idprodukt: 35,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: -9
      },
            {
                name: "book36",
                id: 36,
                idprodukt: 36,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: 21
      },
            {
                name: "book37",
                id: 37,
                idprodukt: 37,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: 16
      },
            {
                name: "book38",
                id: 38,
                idprodukt: 38,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: -42
      },
            {
                name: "book39",
                id: 39,
                idprodukt: 39,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: 72
      },
            {
                name: "book40",
                id: 40,
                idprodukt: 40,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: 24
      },
            {
                name: "book41",
                id: 41,
                idprodukt: 41,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: 38
      },
            {
                name: "book42",
                id: 42,
                idprodukt: 42,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: -2
      },
            {
                name: "book43",
                id: 43,
                idprodukt: 43,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: 19
      },
            {
                name: "book44",
                id: 44,
                idprodukt: 44,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: 62
      },
            {
                name: "book45",
                id: 45,
                idprodukt: 45,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: 51
      },
            {
                name: "book46",
                id: 46,
                idprodukt: 46,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: 94
      },
            {
                name: "book47",
                id: 47,
                idprodukt: 47,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: 50
      },
            {
                name: "book48",
                id: 48,
                idprodukt: 48,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: -69
      },
            {
                name: "book49",
                id: 49,
                idprodukt: 49,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: 100
      },
            {
                name: "book50",
                id: 50,
                idprodukt: 50,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: 35
      },
            {
                name: "book51",
                id: 51,
                idprodukt: 51,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: -70
      },
            {
                name: "book52",
                id: 52,
                idprodukt: 52,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: -83
      },
            {
                name: "book53",
                id: 53,
                idprodukt: 53,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: -72
      },
            {
                name: "book54",
                id: 54,
                idprodukt: 54,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: 11
      },
            {
                name: "book55",
                id: 55,
                idprodukt: 55,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: 36
      },
            {
                name: "book56",
                id: 56,
                idprodukt: 56,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: -3
      },
            {
                name: "book57",
                id: 57,
                idprodukt: 57,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: 91
      },
            {
                name: "book58",
                id: 58,
                idprodukt: 58,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: 12
      },
            {
                name: "book59",
                id: 59,
                idprodukt: 59,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: -55
      },
            {
                name: "book60",
                id: 60,
                idprodukt: 60,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: -80
      },
            {
                name: "book61",
                id: 61,
                idprodukt: 61,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: 8
      },
            {
                name: "book62",
                id: 62,
                idprodukt: 62,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: 42
      },
            {
                name: "book63",
                id: 63,
                idprodukt: 63,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: -74
      },
            {
                name: "book64",
                id: 64,
                idprodukt: 64,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: -92
      },
            {
                name: "book65",
                id: 65,
                idprodukt: 65,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: -92
      },
            {
                name: "book66",
                id: 66,
                idprodukt: 66,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: 54
      },
            {
                name: "book67",
                id: 67,
                idprodukt: 67,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: -53
      },
            {
                name: "book68",
                id: 68,
                idprodukt: 68,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: 8
      },
            {
                name: "book69",
                id: 69,
                idprodukt: 69,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: -11
      },
            {
                name: "book70",
                id: 70,
                idprodukt: 70,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: -39
      },
            {
                name: "book71",
                id: 71,
                idprodukt: 71,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: -73
      },
            {
                name: "book72",
                id: 72,
                idprodukt: 72,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: -78
      },
            {
                name: "book73",
                id: 73,
                idprodukt: 73,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: -67
      },
            {
                name: "book74",
                id: 74,
                idprodukt: 74,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: -83
      },
            {
                name: "book75",
                id: 75,
                idprodukt: 75,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: 75
      },
            {
                name: "book76",
                id: 76,
                idprodukt: 76,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: -40
      },
            {
                name: "book77",
                id: 77,
                idprodukt: 77,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: -45
      },
            {
                name: "book78",
                id: 78,
                idprodukt: 78,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: 34
      },
            {
                name: "book79",
                id: 79,
                idprodukt: 79,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: -81
      },
            {
                name: "book80",
                id: 80,
                idprodukt: 80,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: -11
      },
            {
                name: "book81",
                id: 81,
                idprodukt: 81,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: 89
      },
            {
                name: "book82",
                id: 82,
                idprodukt: 82,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: -33
      },
            {
                name: "book83",
                id: 83,
                idprodukt: 83,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: -68
      },
            {
                name: "book84",
                id: 84,
                idprodukt: 84,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: 23
      },
            {
                name: "book85",
                id: 85,
                idprodukt: 85,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: 33
      },
            {
                name: "book86",
                id: 86,
                idprodukt: 86,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: -43
      },
            {
                name: "book87",
                id: 87,
                idprodukt: 87,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: 29
      },
            {
                name: "book88",
                id: 88,
                idprodukt: 88,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: -74
      },
            {
                name: "book89",
                id: 89,
                idprodukt: 89,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: 56
      },
            {
                name: "book90",
                id: 90,
                idprodukt: 90,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: 96
      },
            {
                name: "book91",
                id: 91,
                idprodukt: 91,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: 85
      },
            {
                name: "book92",
                id: 92,
                idprodukt: 92,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: 56
      },
            {
                name: "book93",
                id: 93,
                idprodukt: 93,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: 84
      },
            {
                name: "book94",
                id: 94,
                idprodukt: 94,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: -1
      },
            {
                name: "book95",
                id: 95,
                idprodukt: 95,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: 14
      },
            {
                name: "book96",
                id: 96,
                idprodukt: 96,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: -75
      },
            {
                name: "book97",
                id: 97,
                idprodukt: 97,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: -25
      },
            {
                name: "book98",
                id: 98,
                idprodukt: 98,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: 85
      },
            {
                name: "book99",
                id: 99,
                idprodukt: 99,
                href: "file:///C:/Users/asayi/react/index2.html",
                img: "paolo.jpg",
                kr: 11
      }
    ];

        var datablog = data1[timesIterated];
        var trim = datablog.name.trim();
        var description12 = "Jane Austen möter Bridget Jones i internationell bästsäljare. När Eloise Bridgerton skriver ett brev till sir Philip för att beklaga hans frus plötsliga bortgång är det bara början på en långvarig brevväxling mellan de två. Men när sir Philip frågar Eloise om hennes hand i äktenskap i ett av breven blir hon chockad. Inte kan väl Eloise gifta sig med en man hon aldrig har träffat?! Eller kan hon det? Femte fristående delen i serien om familjen Bridgerton i 1800-talets England.";
        tinymce.activeEditor.setContent(description12);
        document.getElementById('jform_title').value = trim;
        var abbo = document.getElementById('j2store-product-enabled-radio-group1');
        abbo.click();
        Joomla.submitbutton('article.apply');
        var imgage1 = "http://localhost/joomla3.9/images/Fitz-Porsche-Ultimate-Series_700x700.jpg";
        var image1 = "images/Fitz-Porsche-Ultimate-Series_700x700.jpg"
        document.getElementById('jform_image_thumb_image').value = image1;
        document.getElementById('jform_image_main_image').value = image1;
        document.getElementById('input-thumb-image').src = imgage1;
        document.getElementById('input-main-image').src = imgage1;

        if (timesIterated == maxIterationCount) {
            Joomla.submitbutton('article.save');


        } else {



            Joomla.submitbutton('article.save2new');


        }




    });
})();
