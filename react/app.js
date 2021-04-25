

window.onload = function()
  

{
    class navbar extends React.Component
    {

 


      
        render()
        {
          console.log("hejhabfea123");
          console.warn("will mount");
            return React.createElement("header", {
                className: "p-3 bg-dark text-white"
              }, React.createElement("div", {
                className: "alert position-relative alert-danger",
                role: "alert"
              }, "Bokrea p\xE5 15 kr"), React.createElement("div", {
                className: "container"
              }, React.createElement("div", {
                className: "d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"
              }, React.createElement("a", {
                href: "/",
                className: "d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
              }), React.createElement("ul", {
                className: "nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0"
              }), React.createElement("div", {
                className: "text-end"
              }, React.createElement("button", {
                type: "button",
                id: "loginknapp",
               href: "#",
               onClick: console.log("hej"),
                className: "btn btn-outline-light me-2"
              }, "Login"), React.createElement("button", {
                type: "button",
                id: "loginknapp2",
                className: "btn btn-warning"
              }, "Sign-up")))));  
        }
    }

    
    class carousell extends React.Component
    {
        render()
        {
           
            return    React.createElement("div", {
              id: "carouselExampleDark",
              className: "carousel carousel-dark slide",
              "data-bs-ride": "carousel"
            }, React.createElement("div", {
              className: "carousel-indicators"
            }, React.createElement("button", {
              type: "button",
              "data-bs-target": "#carouselExampleDark",
              "data-bs-slide-to": "0",
              className: "active",
              "aria-current": "true",
              "aria-label": "Slide 1"
            }), React.createElement("button", {
              type: "button",
              "data-bs-target": "#carouselExampleDark",
              "data-bs-slide-to": "1",
              "aria-label": "Slide 2"
            }), React.createElement("button", {
              type: "button",
              "data-bs-target": "#carouselExampleDark",
              "data-bs-slide-to": "2",
              "aria-label": "Slide 3"
            })), React.createElement("div", {
              className: "carousel-inner"
            }, React.createElement("div", {
              className: "carousel-item active",
              "data-bs-interval": "10000"
            }, React.createElement("img", {
              src: "",
              className: "d-block w-100",
              alt: "..."
            }), React.createElement("div", {
              className: "carousel-caption d-none d-md-block"
            }, React.createElement("h5", null, "First slide label"), React.createElement("p", null, "Some representative placeholder content for the first slide."))), React.createElement("div", {
              className: "carousel-item",
              "data-bs-interval": "2000"
            }, React.createElement("img", {
              src: "",
              className: "d-block w-100",
              alt: "..."
            }), React.createElement("div", {
              className: "carousel-caption d-none d-md-block"
            }, React.createElement("h5", null, "Second slide label"), React.createElement("p", null, "Some representative placeholder content for the second slide."))), React.createElement("div", {
              className: "carousel-item"
            }, React.createElement("img", {
              src: "",
              className: "d-block w-100",
              alt: "..."
            }), React.createElement("div", {
              className: "carousel-caption d-none d-md-block"
            }, React.createElement("h5", null, "Third slide label"), React.createElement("p", null, "Some representative placeholder content for the third slide.")))), React.createElement("button", {
              className: "carousel-control-prev",
              type: "button",
              "data-bs-target": "#carouselExampleDark",
              "data-bs-slide": "prev"
            }, React.createElement("span", {
              className: "carousel-control-prev-icon",
              "aria-hidden": "true"
            }), React.createElement("span", {
              className: "visually-hidden"
            }, "Previous")), React.createElement("button", {
              className: "carousel-control-next",
              type: "button",
              "data-bs-target": "#carouselExampleDark",
              "data-bs-slide": "next"
            }, React.createElement("span", {
              className: "carousel-control-next-icon",
              "aria-hidden": "true"
            }), React.createElement("span", {
              className: "visually-hidden"
            }, "Next")));
            
        }
    }
    class footer extends React.Component
    {
        render()
        {
           
            return   React.createElement("footer", {
                className: "bg-dark text-center text-white"
              }, React.createElement("div", {
                className: "container p-4"
              }, React.createElement("section", {
                className: ""
              }, React.createElement("form", {
                action: ""
              }, React.createElement("div", {
                className: "row d-flex justify-content-center"
              }, React.createElement("div", {
                className: "col-auto"
              }, React.createElement("p", {
                className: "pt-2"
              }, React.createElement("strong", null, "Sign up for our newsletter"))), React.createElement("div", {
                className: "col-md-5 col-12"
              }, React.createElement("div", {
                className: "form-outline form-white mb-4"
              }, React.createElement("input", {
                type: "email",
                id: "form5Example2",
                className: "form-control"
              }), React.createElement("label", {
                className: "form-label",
                htmlFor: "form5Example2"
              }, "Email address"))), React.createElement("div", {
                className: "col-auto"
              }, React.createElement("button", {
                type: "submit",
                className: "btn btn-outline-light mb-4"
              }, "Subscribe"))))), React.createElement("section", {
                className: ""
              })), React.createElement("div", {
                className: "text-center p-3"
              }, "\xA9 2020 Copyright:", React.createElement("a", {
                className: "text-white",
                href: "https://mdbootstrap.com/"
              }, "MDBootstrap.com")));
            
        }
    }
    

    class sidebar extends React.Component
    {
        render()
        {
           
            return React.createElement("ol", {
              className: "list-group"
            },  React.createElement("ul", {
                className: "latestnews mod-list"
              }, React.createElement("li", {
                className: "latestnews1"
              }, React.createElement("div", {
                className: "produkt1"
              }, React.createElement("div", {
                className: "ind"
              }, " 1 "), React.createElement("div", {
                className: "img1"
              }, React.createElement("a", {
                href: "file:///C:/Users/asayi/react/index2.html"
              }, " ", React.createElement("img", {
                src: "http://localhost/joomla3.9/images/paolo.jpg"
              }))), React.createElement("div", {
                className: "info1"
              }, React.createElement("h3", null, "book1 "), React.createElement("h5", null, " dsada "), React.createElement("p", null, " 800kr ")))), React.createElement("li", {
                className: "latestnews1"
              }, React.createElement("div", {
                className: "produkt1"
              }, React.createElement("div", {
                className: "ind"
              }, " 1 "), React.createElement("div", {
                className: "img1"
              }, React.createElement("a", {
                href: "file:///C:/Users/asayi/react/index2.html"
              }, " ", React.createElement("img", {
                src: "http://localhost/joomla3.9/images/paolo.jpg"
              }))), React.createElement("div", {
                className: "info1"
              }, React.createElement("h3", null, "book1 "), React.createElement("h5", null, " dsada "), React.createElement("p", null, " 800kr ")))), React.createElement("li", {
                className: "latestnews1"
              }, React.createElement("div", {
                className: "produkt1"
              }, React.createElement("div", {
                className: "ind"
              }, " 1 "), React.createElement("div", {
                className: "img1"
              }, React.createElement("a", {
                href: "file:///C:/Users/asayi/react/index2.html"
              }, " ", React.createElement("img", {
                src: "http://localhost/joomla3.9/images/paolo.jpg"
              }))), React.createElement("div", {
                className: "info1"
              }, React.createElement("h3", null, "book1 "), React.createElement("h5", null, " dsada "), React.createElement("p", null, " 800kr ")))), React.createElement("li", {
                className: "latestnews1"
              }, React.createElement("div", {
                className: "produkt1"
              }, React.createElement("div", {
                className: "ind"
              }, " 1 "), React.createElement("div", {
                className: "img1"
              }, React.createElement("a", {
                href: "file:///C:/Users/asayi/react/index2.html"
              }, " ", React.createElement("img", {
                src: "http://localhost/joomla3.9/images/paolo.jpg"
              }))), React.createElement("div", {
                className: "info1"
              }, React.createElement("h3", null, "book1 "), React.createElement("h5", null, " dsada "), React.createElement("p", null, " 800kr "))))));
              
            
        }
    }

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
      }
      
    ];
    
  



  

      
    class products1 extends React.Component
    {     
 
      
      constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
      }
      handleClick(event) {
        const id = event.target.id;
        if(id){
        reply_click(id);
        }
 
      }
        render()
        {
          
          return   React.createElement("div", {
            id: "container"
          }, React.createElement("div", {
            id: "row"
          }, React.createElement("div", {
            itemScope: true,
            itemType: "https://schema.org/ItemList",
            className: "j2store-product-module j2store-product-module-list"
          }, React.createElement("div", {
            className: "j2store-module-product-row row-0 row-fluid"
          }, data1.map((dat, key) => {
            
            return React.createElement("div", {
              key: key
            }, React.createElement("div", {
              itemProp: "itemListElement",
              itemScope: "",
              itemType: "https://schema.org/ListItem",
              className: dat.name
            }, React.createElement("meta", {
              itemProp: "position",
              content: "1"
            }), React.createElement("div", {
              itemProp: "item",
              itemScope: "",
              itemType: "http://schema.org/Product",
              className: "j2store product-7 j2store-module-product"
            }, React.createElement("div", {
              className: "j2store-product-image   span12 "
            }, React.createElement("a", {
              href: "/joomla3.9/index.php/shopping/book1",
              title: "book1",
              id:  dat.name
            }, React.createElement("img", {
              itemProp: "image",
              alt: "book1",
              className: "j2store-img-responsive j2store-product-image-7",
              src: dat.img,
              width: "80",
              height: "80"
            }))), React.createElement("h4", {
              itemProp: name,
              className: "product-title",
               
            }, React.createElement("a", {
              itemProp: "url",
              id: dat.id,
              className: "status",
              onClick: this.handleClick,
              href: "http://127.0.0.1:5500/index2.html",
              title: "book1"
            }, dat.name,)), React.createElement("div", {
              className: "product-cart-section  span12"
            }, React.createElement("div", {
              className: "product-cart-left-block  span12"
            }, React.createElement("div", {
              itemProp: "offers",
              itemScope: true,
              itemType: "http://schema.org/Offer",
              className: "product-price-container"
            }, React.createElement("div", {
              className: "sale-price"
            },  dat.kr, " "), React.createElement("div", {
              className: "tax-text"
            }), React.createElement("meta", {
              itemProp: "price",
              content: "0.00000"
            }), React.createElement("meta", {
              itemProp: "priceCurrency",
              content: "USD"
            }), React.createElement("link", {
              itemProp: "availability",
              href: "https://schema.org/InStock"
            })), React.createElement("div", {
              className: "product_cart_block"
            }, React.createElement("form", {
              action: "/joomla3.9/index.php/component/j2store/carts/addItem",
              method: "post",
              className: "j2store-addtocart-form",
              id: "j2store-addtocart-form-7",
              name: "j2store-addtocart-form-7",
              "data-product_id": "7",
              "data-product_type": "simple",
              encType: "multipart/form-data"
            }, React.createElement("div", {
              id: "add-to-cart-7",
              className: "j2store-add-to-cart"
            }, React.createElement("div", {
              className: "product-qty"
            }, React.createElement("input", {
              type: "number",
              name: "product_qty",
        
              className: "input-mini form-control",
              min: "1",
              step: "1"
            })), React.createElement("input", {
              type: "hidden",
              name: "product_id",
          
            }), React.createElement("input", {
              "data-cart-action-always": "Adding...",
              "data-cart-action-done": "Add to cart",
              "data-cart-action-timeout": "1000",
         
              type: "submit",
              className: "j2store-cart-button btn btn-primary"
            })), React.createElement("input", {
              type: "hidden",
              name: "option",
         
            }), React.createElement("input", {
              type: "hidden",
              name: "view",
         
            }), React.createElement("input", {
              type: "hidden",
              name: "task",
         
            }), React.createElement("input", {
              type: "hidden",
              name: "ajax",
       
            }), React.createElement("input", {
              type: "hidden",
              name: "f9dcccba7895aa8628dd4cd015ae43c7",
        
            }), " ", React.createElement("input", {
              type: "hidden",
              name: "return",
           
            }), React.createElement("div", {
              className: "j2store-notifications"
            }))))), React.createElement("div", {
              className: "product-short-description"
            }))));
          })))));
    }
    

  }



  
  



 
  



    ReactDOM.render( React.createElement("div", null, 
    React.createElement(navbar, null), 
   React.createElement(carousell, null), 
    React.createElement(sidebar, null), 
    React.createElement(products1, null), 
    React.createElement(footer, null)), 
    document.getElementById('root'));

  
    
};

function reply_click(id){         
  localStorage.setItem("lastname", id);
}  



