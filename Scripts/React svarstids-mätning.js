// ==UserScript==
// @name         Automated Reload React active
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://127.0.0.1:5500/index.html
// @grant        none
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js

// ==/UserScript==

(function() {
    'use strict';
      // Importantly, we measure first and then store the value so we do not poison the well with our measurements



    var counter1 = parseInt(localStorage.getItem('counter'));
    if(localStorage.getItem('blogcounter') == null){
        localStorage.setItem('blogcounter', 0);
    }
    localStorage.setItem('blogcounter', counter1 + 1);


   
    let str3=localStorage.getItem("olddata");
    if (localStorage.getItem("counter1") == null) {
       localStorage.setItem("counter1", 0);
   }

    if (localStorage.getItem("iterations") == null) {
       localStorage.setItem("iterations", 0);
   }

    const iterations = parseInt(localStorage.getItem("iterations"));
    const counter = parseInt(localStorage.getItem("counter1"));



    startreloading()

   $('#autoload').on('click', function() {


       localStorage.setItem("iterations", document.getElementById("reloadcounter").value);
       startreloading()
   });
    function startreloading() {
        let measurement=new Date();
        measurement = measurement.getTime();
      const iterations = parseInt(localStorage.getItem("iterations"));
      const counter = parseInt(localStorage.getItem("counter1"));
      let cnt=parseInt(localStorage.getItem("Counter"));
        if(cnt>iterations){
            localStorage.setItem("Counter",0);
            localStorage.setItem("counter1",0);
        }else{
            if(isNaN(cnt)) cnt=0;
            if(cnt==0){
                str3="Start of textfile: \n";
                localStorage.setItem("Oldval",measurement);
            }else{
                var old=new Date();
                old = old.setTime(localStorage.getItem("Oldval"));
                var delta=measurement-old;
                str3=localStorage.getItem("olddata");
                str3+=  measurement +"\n";
            }
            // Increase counter and save data to local storage
            cnt++;
            localStorage.setItem("Counter",cnt);
            localStorage.setItem("counter1",cnt);
            localStorage.setItem("olddata",str3);
            localStorage.setItem("Oldval",measurement);

            // Reload page!
            const data1 = [
      {
        name: "book0",
        id: 0,
        idprodukt: 0,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "467kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book1",
        id: 1,
        idprodukt: 1,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "456kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book2",
        id: 2,
        idprodukt: 2,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "466kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book3",
        id: 3,
        idprodukt: 3,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "432kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book4",
        id: 4,
        idprodukt: 4,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "418kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book5",
        id: 5,
        idprodukt: 5,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "468kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book6",
        id: 6,
        idprodukt: 6,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "468kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book7",
        id: 7,
        idprodukt: 7,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "450kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book8",
        id: 8,
        idprodukt: 8,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "403kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book9",
        id: 9,
        idprodukt: 9,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "455kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book10",
        id: 10,
        idprodukt: 10,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "441kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book11",
        id: 11,
        idprodukt: 11,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "461kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book12",
        id: 12,
        idprodukt: 12,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "457kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book13",
        id: 13,
        idprodukt: 13,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "445kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book14",
        id: 14,
        idprodukt: 14,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "420kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book15",
        id: 15,
        idprodukt: 15,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "413kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book16",
        id: 16,
        idprodukt: 16,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "432kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book17",
        id: 17,
        idprodukt: 17,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "459kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book18",
        id: 18,
        idprodukt: 18,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "442kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book19",
        id: 19,
        idprodukt: 19,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "457kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book20",
        id: 20,
        idprodukt: 20,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "406kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book21",
        id: 21,
        idprodukt: 21,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "466kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book22",
        id: 22,
        idprodukt: 22,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "409kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book23",
        id: 23,
        idprodukt: 23,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "451kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book24",
        id: 24,
        idprodukt: 24,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "462kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book25",
        id: 25,
        idprodukt: 25,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "426kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book26",
        id: 26,
        idprodukt: 26,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "423kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book27",
        id: 27,
        idprodukt: 27,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "401kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book28",
        id: 28,
        idprodukt: 28,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "456kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book29",
        id: 29,
        idprodukt: 29,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "405kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book30",
        id: 30,
        idprodukt: 30,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "439kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book31",
        id: 31,
        idprodukt: 31,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "417kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book32",
        id: 32,
        idprodukt: 32,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "435kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book33",
        id: 33,
        idprodukt: 33,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "436kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book34",
        id: 34,
        idprodukt: 34,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "418kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book35",
        id: 35,
        idprodukt: 35,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "477kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book36",
        id: 36,
        idprodukt: 36,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "475kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book37",
        id: 37,
        idprodukt: 37,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "424kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book38",
        id: 38,
        idprodukt: 38,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "454kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book39",
        id: 39,
        idprodukt: 39,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "422kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book40",
        id: 40,
        idprodukt: 40,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "441kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book41",
        id: 41,
        idprodukt: 41,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "437kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book42",
        id: 42,
        idprodukt: 42,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "408kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book43",
        id: 43,
        idprodukt: 43,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "442kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book44",
        id: 44,
        idprodukt: 44,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "418kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book45",
        id: 45,
        idprodukt: 45,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "450kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book46",
        id: 46,
        idprodukt: 46,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "459kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book47",
        id: 47,
        idprodukt: 47,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "442kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book48",
        id: 48,
        idprodukt: 48,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "475kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book49",
        id: 49,
        idprodukt: 49,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "431kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book50",
        id: 50,
        idprodukt: 50,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "400kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book51",
        id: 51,
        idprodukt: 51,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "440kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book52",
        id: 52,
        idprodukt: 52,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "408kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book53",
        id: 53,
        idprodukt: 53,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "455kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book54",
        id: 54,
        idprodukt: 54,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "476kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book55",
        id: 55,
        idprodukt: 55,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "452kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book56",
        id: 56,
        idprodukt: 56,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "479kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book57",
        id: 57,
        idprodukt: 57,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "429kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book58",
        id: 58,
        idprodukt: 58,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "452kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book59",
        id: 59,
        idprodukt: 59,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "410kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book60",
        id: 60,
        idprodukt: 60,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "458kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book61",
        id: 61,
        idprodukt: 61,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "435kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book62",
        id: 62,
        idprodukt: 62,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "404kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book63",
        id: 63,
        idprodukt: 63,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "460kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book64",
        id: 64,
        idprodukt: 64,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "437kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book65",
        id: 65,
        idprodukt: 65,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "445kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book66",
        id: 66,
        idprodukt: 66,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "413kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book67",
        id: 67,
        idprodukt: 67,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "428kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book68",
        id: 68,
        idprodukt: 68,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "465kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book69",
        id: 69,
        idprodukt: 69,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "436kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book70",
        id: 70,
        idprodukt: 70,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "426kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book71",
        id: 71,
        idprodukt: 71,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "471kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book72",
        id: 72,
        idprodukt: 72,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "432kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book73",
        id: 73,
        idprodukt: 73,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "405kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book74",
        id: 74,
        idprodukt: 74,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "458kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book75",
        id: 75,
        idprodukt: 75,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "409kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book76",
        id: 76,
        idprodukt: 76,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "456kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book77",
        id: 77,
        idprodukt: 77,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "425kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book78",
        id: 78,
        idprodukt: 78,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "453kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book79",
        id: 79,
        idprodukt: 79,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "451kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book80",
        id: 80,
        idprodukt: 80,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "415kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book81",
        id: 81,
        idprodukt: 81,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "454kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book82",
        id: 82,
        idprodukt: 82,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "415kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book83",
        id: 83,
        idprodukt: 83,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "425kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book84",
        id: 84,
        idprodukt: 84,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "471kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book85",
        id: 85,
        idprodukt: 85,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "434kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book86",
        id: 86,
        idprodukt: 86,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "432kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book87",
        id: 87,
        idprodukt: 87,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "445kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book88",
        id: 88,
        idprodukt: 88,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "465kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book89",
        id: 89,
        idprodukt: 89,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "460kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book90",
        id: 90,
        idprodukt: 90,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "438kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book91",
        id: 91,
        idprodukt: 91,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "465kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book92",
        id: 92,
        idprodukt: 92,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "420kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book93",
        id: 93,
        idprodukt: 93,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "426kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book94",
        id: 94,
        idprodukt: 94,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "465kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book95",
        id: 95,
        idprodukt: 95,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "437kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book96",
        id: 96,
        idprodukt: 96,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "479kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book97",
        id: 97,
        idprodukt: 97,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "455kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book98",
        id: 98,
        idprodukt: 98,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "402kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book99",
        id: 99,
        idprodukt: 99,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "427kr",
        description: "Lorem ipsum dolor sit amet"
      },
           {
        name: "book0",
        id: 0,
        idprodukt: 0,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "467kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book1",
        id: 1,
        idprodukt: 1,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "456kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book2",
        id: 2,
        idprodukt: 2,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "466kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book3",
        id: 3,
        idprodukt: 3,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "432kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book4",
        id: 4,
        idprodukt: 4,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "418kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book5",
        id: 5,
        idprodukt: 5,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "468kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book6",
        id: 6,
        idprodukt: 6,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "468kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book7",
        id: 7,
        idprodukt: 7,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "450kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book8",
        id: 8,
        idprodukt: 8,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "403kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book9",
        id: 9,
        idprodukt: 9,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "455kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book10",
        id: 10,
        idprodukt: 10,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "441kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book11",
        id: 11,
        idprodukt: 11,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "461kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book12",
        id: 12,
        idprodukt: 12,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "457kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book13",
        id: 13,
        idprodukt: 13,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "445kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book14",
        id: 14,
        idprodukt: 14,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "420kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book15",
        id: 15,
        idprodukt: 15,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "413kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book16",
        id: 16,
        idprodukt: 16,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "432kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book17",
        id: 17,
        idprodukt: 17,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "459kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book18",
        id: 18,
        idprodukt: 18,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "442kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book19",
        id: 19,
        idprodukt: 19,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "457kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book20",
        id: 20,
        idprodukt: 20,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "406kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book21",
        id: 21,
        idprodukt: 21,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "466kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book22",
        id: 22,
        idprodukt: 22,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "409kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book23",
        id: 23,
        idprodukt: 23,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "451kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book24",
        id: 24,
        idprodukt: 24,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "462kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book25",
        id: 25,
        idprodukt: 25,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "426kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book26",
        id: 26,
        idprodukt: 26,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "423kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book27",
        id: 27,
        idprodukt: 27,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "401kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book28",
        id: 28,
        idprodukt: 28,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "456kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book29",
        id: 29,
        idprodukt: 29,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "405kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book30",
        id: 30,
        idprodukt: 30,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "439kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book31",
        id: 31,
        idprodukt: 31,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "417kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book32",
        id: 32,
        idprodukt: 32,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "435kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book33",
        id: 33,
        idprodukt: 33,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "436kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book34",
        id: 34,
        idprodukt: 34,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "418kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book35",
        id: 35,
        idprodukt: 35,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "477kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book36",
        id: 36,
        idprodukt: 36,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "475kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book37",
        id: 37,
        idprodukt: 37,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "424kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book38",
        id: 38,
        idprodukt: 38,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "454kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book39",
        id: 39,
        idprodukt: 39,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "422kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book40",
        id: 40,
        idprodukt: 40,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "441kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book41",
        id: 41,
        idprodukt: 41,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "437kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book42",
        id: 42,
        idprodukt: 42,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "408kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book43",
        id: 43,
        idprodukt: 43,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "442kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book44",
        id: 44,
        idprodukt: 44,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "418kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book45",
        id: 45,
        idprodukt: 45,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "450kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book46",
        id: 46,
        idprodukt: 46,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "459kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book47",
        id: 47,
        idprodukt: 47,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "442kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book48",
        id: 48,
        idprodukt: 48,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "475kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book49",
        id: 49,
        idprodukt: 49,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "431kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book50",
        id: 50,
        idprodukt: 50,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "400kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book51",
        id: 51,
        idprodukt: 51,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "440kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book52",
        id: 52,
        idprodukt: 52,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "408kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book53",
        id: 53,
        idprodukt: 53,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "455kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book54",
        id: 54,
        idprodukt: 54,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "476kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book55",
        id: 55,
        idprodukt: 55,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "452kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book56",
        id: 56,
        idprodukt: 56,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "479kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book57",
        id: 57,
        idprodukt: 57,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "429kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book58",
        id: 58,
        idprodukt: 58,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "452kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book59",
        id: 59,
        idprodukt: 59,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "410kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book60",
        id: 60,
        idprodukt: 60,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "458kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book61",
        id: 61,
        idprodukt: 61,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "435kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book62",
        id: 62,
        idprodukt: 62,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "404kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book63",
        id: 63,
        idprodukt: 63,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "460kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book64",
        id: 64,
        idprodukt: 64,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "437kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book65",
        id: 65,
        idprodukt: 65,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "445kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book66",
        id: 66,
        idprodukt: 66,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "413kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book67",
        id: 67,
        idprodukt: 67,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "428kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book68",
        id: 68,
        idprodukt: 68,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "465kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book69",
        id: 69,
        idprodukt: 69,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "436kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book70",
        id: 70,
        idprodukt: 70,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "426kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book71",
        id: 71,
        idprodukt: 71,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "471kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book72",
        id: 72,
        idprodukt: 72,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "432kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book73",
        id: 73,
        idprodukt: 73,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "405kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book74",
        id: 74,
        idprodukt: 74,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "458kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book75",
        id: 75,
        idprodukt: 75,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "409kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book76",
        id: 76,
        idprodukt: 76,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "456kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book77",
        id: 77,
        idprodukt: 77,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "425kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book78",
        id: 78,
        idprodukt: 78,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "453kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book79",
        id: 79,
        idprodukt: 79,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "451kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book80",
        id: 80,
        idprodukt: 80,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "415kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book81",
        id: 81,
        idprodukt: 81,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "454kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book82",
        id: 82,
        idprodukt: 82,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "415kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book83",
        id: 83,
        idprodukt: 83,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "425kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book84",
        id: 84,
        idprodukt: 84,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "471kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book85",
        id: 85,
        idprodukt: 85,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "434kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book86",
        id: 86,
        idprodukt: 86,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "432kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book87",
        id: 87,
        idprodukt: 87,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "445kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book88",
        id: 88,
        idprodukt: 88,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "465kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book89",
        id: 89,
        idprodukt: 89,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "460kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book90",
        id: 90,
        idprodukt: 90,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "438kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book91",
        id: 91,
        idprodukt: 91,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "465kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book92",
        id: 92,
        idprodukt: 92,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "420kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book93",
        id: 93,
        idprodukt: 93,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "426kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book94",
        id: 94,
        idprodukt: 94,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "465kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book95",
        id: 95,
        idprodukt: 95,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "437kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book96",
        id: 96,
        idprodukt: 96,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "479kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book97",
        id: 97,
        idprodukt: 97,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "455kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book98",
        id: 98,
        idprodukt: 98,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "402kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book99",
        id: 99,
        idprodukt: 99,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "427kr",
        description: "Lorem ipsum dolor sit amet"
      },
             {
        name: "book0",
        id: 0,
        idprodukt: 0,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "467kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book1",
        id: 1,
        idprodukt: 1,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "456kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book2",
        id: 2,
        idprodukt: 2,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "466kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book3",
        id: 3,
        idprodukt: 3,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "432kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book4",
        id: 4,
        idprodukt: 4,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "418kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book5",
        id: 5,
        idprodukt: 5,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "468kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book6",
        id: 6,
        idprodukt: 6,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "468kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book7",
        id: 7,
        idprodukt: 7,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "450kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book8",
        id: 8,
        idprodukt: 8,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "403kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book9",
        id: 9,
        idprodukt: 9,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "455kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book10",
        id: 10,
        idprodukt: 10,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "441kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book11",
        id: 11,
        idprodukt: 11,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "461kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book12",
        id: 12,
        idprodukt: 12,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "457kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book13",
        id: 13,
        idprodukt: 13,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "445kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book14",
        id: 14,
        idprodukt: 14,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "420kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book15",
        id: 15,
        idprodukt: 15,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "413kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book16",
        id: 16,
        idprodukt: 16,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "432kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book17",
        id: 17,
        idprodukt: 17,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "459kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book18",
        id: 18,
        idprodukt: 18,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "442kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book19",
        id: 19,
        idprodukt: 19,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "457kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book20",
        id: 20,
        idprodukt: 20,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "406kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book21",
        id: 21,
        idprodukt: 21,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "466kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book22",
        id: 22,
        idprodukt: 22,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "409kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book23",
        id: 23,
        idprodukt: 23,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "451kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book24",
        id: 24,
        idprodukt: 24,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "462kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book25",
        id: 25,
        idprodukt: 25,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "426kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book26",
        id: 26,
        idprodukt: 26,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "423kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book27",
        id: 27,
        idprodukt: 27,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "401kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book28",
        id: 28,
        idprodukt: 28,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "456kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book29",
        id: 29,
        idprodukt: 29,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "405kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book30",
        id: 30,
        idprodukt: 30,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "439kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book31",
        id: 31,
        idprodukt: 31,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "417kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book32",
        id: 32,
        idprodukt: 32,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "435kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book33",
        id: 33,
        idprodukt: 33,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "436kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book34",
        id: 34,
        idprodukt: 34,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "418kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book35",
        id: 35,
        idprodukt: 35,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "477kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book36",
        id: 36,
        idprodukt: 36,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "475kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book37",
        id: 37,
        idprodukt: 37,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "424kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book38",
        id: 38,
        idprodukt: 38,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "454kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book39",
        id: 39,
        idprodukt: 39,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "422kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book40",
        id: 40,
        idprodukt: 40,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "441kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book41",
        id: 41,
        idprodukt: 41,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "437kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book42",
        id: 42,
        idprodukt: 42,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "408kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book43",
        id: 43,
        idprodukt: 43,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "442kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book44",
        id: 44,
        idprodukt: 44,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "418kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book45",
        id: 45,
        idprodukt: 45,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "450kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book46",
        id: 46,
        idprodukt: 46,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "459kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book47",
        id: 47,
        idprodukt: 47,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "442kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book48",
        id: 48,
        idprodukt: 48,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "475kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book49",
        id: 49,
        idprodukt: 49,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "431kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book50",
        id: 50,
        idprodukt: 50,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "400kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book51",
        id: 51,
        idprodukt: 51,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "440kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book52",
        id: 52,
        idprodukt: 52,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "408kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book53",
        id: 53,
        idprodukt: 53,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "455kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book54",
        id: 54,
        idprodukt: 54,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "476kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book55",
        id: 55,
        idprodukt: 55,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "452kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book56",
        id: 56,
        idprodukt: 56,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "479kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book57",
        id: 57,
        idprodukt: 57,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "429kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book58",
        id: 58,
        idprodukt: 58,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "452kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book59",
        id: 59,
        idprodukt: 59,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "410kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book60",
        id: 60,
        idprodukt: 60,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "458kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book61",
        id: 61,
        idprodukt: 61,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "435kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book62",
        id: 62,
        idprodukt: 62,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "404kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book63",
        id: 63,
        idprodukt: 63,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "460kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book64",
        id: 64,
        idprodukt: 64,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "437kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book65",
        id: 65,
        idprodukt: 65,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "445kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book66",
        id: 66,
        idprodukt: 66,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "413kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book67",
        id: 67,
        idprodukt: 67,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "428kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book68",
        id: 68,
        idprodukt: 68,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "465kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book69",
        id: 69,
        idprodukt: 69,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "436kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book70",
        id: 70,
        idprodukt: 70,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "426kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book71",
        id: 71,
        idprodukt: 71,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "471kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book72",
        id: 72,
        idprodukt: 72,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "432kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book73",
        id: 73,
        idprodukt: 73,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "405kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book74",
        id: 74,
        idprodukt: 74,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "458kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book75",
        id: 75,
        idprodukt: 75,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "409kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book76",
        id: 76,
        idprodukt: 76,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "456kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book77",
        id: 77,
        idprodukt: 77,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "425kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book78",
        id: 78,
        idprodukt: 78,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "453kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book79",
        id: 79,
        idprodukt: 79,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "451kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book80",
        id: 80,
        idprodukt: 80,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "415kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book81",
        id: 81,
        idprodukt: 81,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "454kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book82",
        id: 82,
        idprodukt: 82,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "415kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book83",
        id: 83,
        idprodukt: 83,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "425kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book84",
        id: 84,
        idprodukt: 84,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "471kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book85",
        id: 85,
        idprodukt: 85,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "434kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book86",
        id: 86,
        idprodukt: 86,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "432kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book87",
        id: 87,
        idprodukt: 87,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "445kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book88",
        id: 88,
        idprodukt: 88,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "465kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book89",
        id: 89,
        idprodukt: 89,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "460kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book90",
        id: 90,
        idprodukt: 90,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "438kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book91",
        id: 91,
        idprodukt: 91,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "465kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book92",
        id: 92,
        idprodukt: 92,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "420kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book93",
        id: 93,
        idprodukt: 93,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "426kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book94",
        id: 94,
        idprodukt: 94,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "465kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book95",
        id: 95,
        idprodukt: 95,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "437kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book96",
        id: 96,
        idprodukt: 96,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "479kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book97",
        id: 97,
        idprodukt: 97,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "455kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book98",
        id: 98,
        idprodukt: 98,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "402kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book99",
        id: 99,
        idprodukt: 99,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "427kr",
        description: "Lorem ipsum dolor sit amet"
      }
             {
        name: "book0",
        id: 0,
        idprodukt: 0,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "467kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book1",
        id: 1,
        idprodukt: 1,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "456kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book2",
        id: 2,
        idprodukt: 2,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "466kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book3",
        id: 3,
        idprodukt: 3,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "432kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book4",
        id: 4,
        idprodukt: 4,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "418kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book5",
        id: 5,
        idprodukt: 5,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "468kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book6",
        id: 6,
        idprodukt: 6,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "468kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book7",
        id: 7,
        idprodukt: 7,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "450kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book8",
        id: 8,
        idprodukt: 8,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "403kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book9",
        id: 9,
        idprodukt: 9,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "455kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book10",
        id: 10,
        idprodukt: 10,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "441kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book11",
        id: 11,
        idprodukt: 11,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "461kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book12",
        id: 12,
        idprodukt: 12,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "457kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book13",
        id: 13,
        idprodukt: 13,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "445kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book14",
        id: 14,
        idprodukt: 14,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "420kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book15",
        id: 15,
        idprodukt: 15,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "413kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book16",
        id: 16,
        idprodukt: 16,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "432kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book17",
        id: 17,
        idprodukt: 17,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "459kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book18",
        id: 18,
        idprodukt: 18,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "442kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book19",
        id: 19,
        idprodukt: 19,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "457kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book20",
        id: 20,
        idprodukt: 20,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "406kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book21",
        id: 21,
        idprodukt: 21,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "466kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book22",
        id: 22,
        idprodukt: 22,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "409kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book23",
        id: 23,
        idprodukt: 23,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "451kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book24",
        id: 24,
        idprodukt: 24,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "462kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book25",
        id: 25,
        idprodukt: 25,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "426kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book26",
        id: 26,
        idprodukt: 26,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "423kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book27",
        id: 27,
        idprodukt: 27,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "401kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book28",
        id: 28,
        idprodukt: 28,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "456kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book29",
        id: 29,
        idprodukt: 29,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "405kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book30",
        id: 30,
        idprodukt: 30,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "439kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book31",
        id: 31,
        idprodukt: 31,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "417kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book32",
        id: 32,
        idprodukt: 32,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "435kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book33",
        id: 33,
        idprodukt: 33,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "436kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book34",
        id: 34,
        idprodukt: 34,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "418kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book35",
        id: 35,
        idprodukt: 35,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "477kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book36",
        id: 36,
        idprodukt: 36,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "475kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book37",
        id: 37,
        idprodukt: 37,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "424kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book38",
        id: 38,
        idprodukt: 38,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "454kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book39",
        id: 39,
        idprodukt: 39,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "422kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book40",
        id: 40,
        idprodukt: 40,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "441kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book41",
        id: 41,
        idprodukt: 41,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "437kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book42",
        id: 42,
        idprodukt: 42,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "408kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book43",
        id: 43,
        idprodukt: 43,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "442kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book44",
        id: 44,
        idprodukt: 44,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "418kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book45",
        id: 45,
        idprodukt: 45,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "450kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book46",
        id: 46,
        idprodukt: 46,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "459kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book47",
        id: 47,
        idprodukt: 47,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "442kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book48",
        id: 48,
        idprodukt: 48,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "475kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book49",
        id: 49,
        idprodukt: 49,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "431kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book50",
        id: 50,
        idprodukt: 50,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "400kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book51",
        id: 51,
        idprodukt: 51,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "440kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book52",
        id: 52,
        idprodukt: 52,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "408kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book53",
        id: 53,
        idprodukt: 53,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "455kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book54",
        id: 54,
        idprodukt: 54,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "476kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book55",
        id: 55,
        idprodukt: 55,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "452kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book56",
        id: 56,
        idprodukt: 56,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "479kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book57",
        id: 57,
        idprodukt: 57,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "429kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book58",
        id: 58,
        idprodukt: 58,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "452kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book59",
        id: 59,
        idprodukt: 59,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "410kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book60",
        id: 60,
        idprodukt: 60,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "458kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book61",
        id: 61,
        idprodukt: 61,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "435kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book62",
        id: 62,
        idprodukt: 62,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "404kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book63",
        id: 63,
        idprodukt: 63,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "460kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book64",
        id: 64,
        idprodukt: 64,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "437kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book65",
        id: 65,
        idprodukt: 65,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "445kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book66",
        id: 66,
        idprodukt: 66,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "413kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book67",
        id: 67,
        idprodukt: 67,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "428kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book68",
        id: 68,
        idprodukt: 68,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "465kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book69",
        id: 69,
        idprodukt: 69,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "436kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book70",
        id: 70,
        idprodukt: 70,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "426kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book71",
        id: 71,
        idprodukt: 71,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "471kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book72",
        id: 72,
        idprodukt: 72,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "432kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book73",
        id: 73,
        idprodukt: 73,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "405kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book74",
        id: 74,
        idprodukt: 74,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "458kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book75",
        id: 75,
        idprodukt: 75,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "409kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book76",
        id: 76,
        idprodukt: 76,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "456kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book77",
        id: 77,
        idprodukt: 77,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "425kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book78",
        id: 78,
        idprodukt: 78,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "453kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book79",
        id: 79,
        idprodukt: 79,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "451kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book80",
        id: 80,
        idprodukt: 80,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "415kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book81",
        id: 81,
        idprodukt: 81,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "454kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book82",
        id: 82,
        idprodukt: 82,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "415kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book83",
        id: 83,
        idprodukt: 83,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "425kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book84",
        id: 84,
        idprodukt: 84,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "471kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book85",
        id: 85,
        idprodukt: 85,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "434kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book86",
        id: 86,
        idprodukt: 86,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "432kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book87",
        id: 87,
        idprodukt: 87,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "445kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book88",
        id: 88,
        idprodukt: 88,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "465kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book89",
        id: 89,
        idprodukt: 89,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "460kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book90",
        id: 90,
        idprodukt: 90,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "438kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book91",
        id: 91,
        idprodukt: 91,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "465kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book92",
        id: 92,
        idprodukt: 92,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "420kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book93",
        id: 93,
        idprodukt: 93,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "426kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book94",
        id: 94,
        idprodukt: 94,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "465kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book95",
        id: 95,
        idprodukt: 95,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "437kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book96",
        id: 96,
        idprodukt: 96,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "479kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book97",
        id: 97,
        idprodukt: 97,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "455kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book98",
        id: 98,
        idprodukt: 98,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "402kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book99",
        id: 99,
        idprodukt: 99,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "427kr",
        description: "Lorem ipsum dolor sit amet"
      }
             {
        name: "book0",
        id: 0,
        idprodukt: 0,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "467kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book1",
        id: 1,
        idprodukt: 1,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "456kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book2",
        id: 2,
        idprodukt: 2,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "466kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book3",
        id: 3,
        idprodukt: 3,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "432kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book4",
        id: 4,
        idprodukt: 4,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "418kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book5",
        id: 5,
        idprodukt: 5,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "468kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book6",
        id: 6,
        idprodukt: 6,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "468kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book7",
        id: 7,
        idprodukt: 7,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "450kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book8",
        id: 8,
        idprodukt: 8,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "403kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book9",
        id: 9,
        idprodukt: 9,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "455kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book10",
        id: 10,
        idprodukt: 10,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "441kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book11",
        id: 11,
        idprodukt: 11,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "461kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book12",
        id: 12,
        idprodukt: 12,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "457kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book13",
        id: 13,
        idprodukt: 13,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "445kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book14",
        id: 14,
        idprodukt: 14,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "420kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book15",
        id: 15,
        idprodukt: 15,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "413kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book16",
        id: 16,
        idprodukt: 16,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "432kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book17",
        id: 17,
        idprodukt: 17,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "459kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book18",
        id: 18,
        idprodukt: 18,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "442kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book19",
        id: 19,
        idprodukt: 19,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "457kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book20",
        id: 20,
        idprodukt: 20,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "406kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book21",
        id: 21,
        idprodukt: 21,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "466kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book22",
        id: 22,
        idprodukt: 22,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "409kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book23",
        id: 23,
        idprodukt: 23,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "451kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book24",
        id: 24,
        idprodukt: 24,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "462kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book25",
        id: 25,
        idprodukt: 25,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "426kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book26",
        id: 26,
        idprodukt: 26,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "423kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book27",
        id: 27,
        idprodukt: 27,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "401kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book28",
        id: 28,
        idprodukt: 28,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "456kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book29",
        id: 29,
        idprodukt: 29,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "405kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book30",
        id: 30,
        idprodukt: 30,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "439kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book31",
        id: 31,
        idprodukt: 31,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "417kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book32",
        id: 32,
        idprodukt: 32,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "435kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book33",
        id: 33,
        idprodukt: 33,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "436kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book34",
        id: 34,
        idprodukt: 34,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "418kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book35",
        id: 35,
        idprodukt: 35,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "477kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book36",
        id: 36,
        idprodukt: 36,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "475kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book37",
        id: 37,
        idprodukt: 37,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "424kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book38",
        id: 38,
        idprodukt: 38,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "454kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book39",
        id: 39,
        idprodukt: 39,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "422kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book40",
        id: 40,
        idprodukt: 40,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "441kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book41",
        id: 41,
        idprodukt: 41,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "437kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book42",
        id: 42,
        idprodukt: 42,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "408kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book43",
        id: 43,
        idprodukt: 43,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "442kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book44",
        id: 44,
        idprodukt: 44,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "418kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book45",
        id: 45,
        idprodukt: 45,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "450kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book46",
        id: 46,
        idprodukt: 46,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "459kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book47",
        id: 47,
        idprodukt: 47,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "442kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book48",
        id: 48,
        idprodukt: 48,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "475kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book49",
        id: 49,
        idprodukt: 49,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "431kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book50",
        id: 50,
        idprodukt: 50,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "400kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book51",
        id: 51,
        idprodukt: 51,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "440kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book52",
        id: 52,
        idprodukt: 52,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "408kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book53",
        id: 53,
        idprodukt: 53,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "455kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book54",
        id: 54,
        idprodukt: 54,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "476kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book55",
        id: 55,
        idprodukt: 55,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "452kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book56",
        id: 56,
        idprodukt: 56,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "479kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book57",
        id: 57,
        idprodukt: 57,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "429kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book58",
        id: 58,
        idprodukt: 58,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "452kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book59",
        id: 59,
        idprodukt: 59,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "410kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book60",
        id: 60,
        idprodukt: 60,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "458kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book61",
        id: 61,
        idprodukt: 61,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "435kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book62",
        id: 62,
        idprodukt: 62,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "404kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book63",
        id: 63,
        idprodukt: 63,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "460kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book64",
        id: 64,
        idprodukt: 64,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "437kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book65",
        id: 65,
        idprodukt: 65,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "445kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book66",
        id: 66,
        idprodukt: 66,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "413kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book67",
        id: 67,
        idprodukt: 67,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "428kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book68",
        id: 68,
        idprodukt: 68,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "465kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book69",
        id: 69,
        idprodukt: 69,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "436kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book70",
        id: 70,
        idprodukt: 70,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "426kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book71",
        id: 71,
        idprodukt: 71,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "471kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book72",
        id: 72,
        idprodukt: 72,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "432kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book73",
        id: 73,
        idprodukt: 73,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "405kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book74",
        id: 74,
        idprodukt: 74,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "458kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book75",
        id: 75,
        idprodukt: 75,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "409kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book76",
        id: 76,
        idprodukt: 76,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "456kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book77",
        id: 77,
        idprodukt: 77,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "425kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book78",
        id: 78,
        idprodukt: 78,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "453kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book79",
        id: 79,
        idprodukt: 79,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "451kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book80",
        id: 80,
        idprodukt: 80,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "415kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book81",
        id: 81,
        idprodukt: 81,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "454kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book82",
        id: 82,
        idprodukt: 82,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "415kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book83",
        id: 83,
        idprodukt: 83,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "425kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book84",
        id: 84,
        idprodukt: 84,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "471kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book85",
        id: 85,
        idprodukt: 85,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "434kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book86",
        id: 86,
        idprodukt: 86,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "432kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book87",
        id: 87,
        idprodukt: 87,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "445kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book88",
        id: 88,
        idprodukt: 88,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "465kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book89",
        id: 89,
        idprodukt: 89,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "460kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book90",
        id: 90,
        idprodukt: 90,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "438kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book91",
        id: 91,
        idprodukt: 91,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "465kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book92",
        id: 92,
        idprodukt: 92,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "420kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book93",
        id: 93,
        idprodukt: 93,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "426kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book94",
        id: 94,
        idprodukt: 94,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "465kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book95",
        id: 95,
        idprodukt: 95,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "437kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book96",
        id: 96,
        idprodukt: 96,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "479kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book97",
        id: 97,
        idprodukt: 97,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "455kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book98",
        id: 98,
        idprodukt: 98,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "402kr",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        name: "book99",
        id: 99,
        idprodukt: 99,
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
       kr: "427kr",
        description: "Lorem ipsum dolor sit amet"
      }


    ];
            var datablog = data1[counter];
            var trim1 = datablog.id.toString();
            localStorage.setItem('lastname', trim1);
            window.location.assign('http://127.0.0.1:5500/index2.html');

        }
    }
})();