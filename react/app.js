

window.onload = function()
  

{
  

  
    
    class Greetings extends React.Component
    {
        render()
        {
            return React.createElement('h1', null, 'Greetings, ' + this.props.name + '!');
        }
    }
    class navbar extends React.Component
    {
        render()
        {
           
            return /*#__PURE__*/React.createElement("header", {
                className: "p-3 bg-dark text-white"
              }, /*#__PURE__*/React.createElement("div", {
                className: "alert position-relative alert-danger",
                role: "alert"
              }, "Bokrea p\xE5 15 kr"), /*#__PURE__*/React.createElement("div", {
                className: "container"
              }, /*#__PURE__*/React.createElement("div", {
                className: "d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"
              }, /*#__PURE__*/React.createElement("a", {
                href: "/",
                className: "d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
              }), /*#__PURE__*/React.createElement("ul", {
                className: "nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0"
              }), /*#__PURE__*/React.createElement("div", {
                className: "text-end"
              }, /*#__PURE__*/React.createElement("button", {
                type: "button",
                className: "btn btn-outline-light me-2"
              }, "Login"), /*#__PURE__*/React.createElement("button", {
                type: "button",
                className: "btn btn-warning"
              }, "Sign-up")))));
              
            
        }
    }
    class produkter extends React.Component
    {
        render()
        {
           
            return /*#__PURE__*/React.createElement("div", {
              class: "container"
            }, /*#__PURE__*/React.createElement("div", {
              id: "container"
            }, " "), " ");
              
            
        }
    }
    
    class carousell extends React.Component
    {
        render()
        {
           
            return    /*#__PURE__*/React.createElement("div", {
              id: "carouselExampleDark",
              className: "carousel carousel-dark slide",
              "data-bs-ride": "carousel"
            }, /*#__PURE__*/React.createElement("div", {
              className: "carousel-indicators"
            }, /*#__PURE__*/React.createElement("button", {
              type: "button",
              "data-bs-target": "#carouselExampleDark",
              "data-bs-slide-to": "0",
              className: "active",
              "aria-current": "true",
              "aria-label": "Slide 1"
            }), /*#__PURE__*/React.createElement("button", {
              type: "button",
              "data-bs-target": "#carouselExampleDark",
              "data-bs-slide-to": "1",
              "aria-label": "Slide 2"
            }), /*#__PURE__*/React.createElement("button", {
              type: "button",
              "data-bs-target": "#carouselExampleDark",
              "data-bs-slide-to": "2",
              "aria-label": "Slide 3"
            })), /*#__PURE__*/React.createElement("div", {
              className: "carousel-inner"
            }, /*#__PURE__*/React.createElement("div", {
              className: "carousel-item active",
              "data-bs-interval": "10000"
            }, /*#__PURE__*/React.createElement("img", {
              src: "",
              className: "d-block w-100",
              alt: "..."
            }), /*#__PURE__*/React.createElement("div", {
              className: "carousel-caption d-none d-md-block"
            }, /*#__PURE__*/React.createElement("h5", null, "First slide label"), /*#__PURE__*/React.createElement("p", null, "Some representative placeholder content for the first slide."))), /*#__PURE__*/React.createElement("div", {
              className: "carousel-item",
              "data-bs-interval": "2000"
            }, /*#__PURE__*/React.createElement("img", {
              src: "",
              className: "d-block w-100",
              alt: "..."
            }), /*#__PURE__*/React.createElement("div", {
              className: "carousel-caption d-none d-md-block"
            }, /*#__PURE__*/React.createElement("h5", null, "Second slide label"), /*#__PURE__*/React.createElement("p", null, "Some representative placeholder content for the second slide."))), /*#__PURE__*/React.createElement("div", {
              className: "carousel-item"
            }, /*#__PURE__*/React.createElement("img", {
              src: "",
              className: "d-block w-100",
              alt: "..."
            }), /*#__PURE__*/React.createElement("div", {
              className: "carousel-caption d-none d-md-block"
            }, /*#__PURE__*/React.createElement("h5", null, "Third slide label"), /*#__PURE__*/React.createElement("p", null, "Some representative placeholder content for the third slide.")))), /*#__PURE__*/React.createElement("button", {
              className: "carousel-control-prev",
              type: "button",
              "data-bs-target": "#carouselExampleDark",
              "data-bs-slide": "prev"
            }, /*#__PURE__*/React.createElement("span", {
              className: "carousel-control-prev-icon",
              "aria-hidden": "true"
            }), /*#__PURE__*/React.createElement("span", {
              className: "visually-hidden"
            }, "Previous")), /*#__PURE__*/React.createElement("button", {
              className: "carousel-control-next",
              type: "button",
              "data-bs-target": "#carouselExampleDark",
              "data-bs-slide": "next"
            }, /*#__PURE__*/React.createElement("span", {
              className: "carousel-control-next-icon",
              "aria-hidden": "true"
            }), /*#__PURE__*/React.createElement("span", {
              className: "visually-hidden"
            }, "Next")));
            
        }
    }
    class footer extends React.Component
    {
        render()
        {
           
            return   /*#__PURE__*/React.createElement("footer", {
                className: "bg-dark text-center text-white"
              }, /*#__PURE__*/React.createElement("div", {
                className: "container p-4"
              }, /*#__PURE__*/React.createElement("section", {
                className: ""
              }, /*#__PURE__*/React.createElement("form", {
                action: ""
              }, /*#__PURE__*/React.createElement("div", {
                className: "row d-flex justify-content-center"
              }, /*#__PURE__*/React.createElement("div", {
                className: "col-auto"
              }, /*#__PURE__*/React.createElement("p", {
                className: "pt-2"
              }, /*#__PURE__*/React.createElement("strong", null, "Sign up for our newsletter"))), /*#__PURE__*/React.createElement("div", {
                className: "col-md-5 col-12"
              }, /*#__PURE__*/React.createElement("div", {
                className: "form-outline form-white mb-4"
              }, /*#__PURE__*/React.createElement("input", {
                type: "email",
                id: "form5Example2",
                className: "form-control"
              }), /*#__PURE__*/React.createElement("label", {
                className: "form-label",
                htmlFor: "form5Example2"
              }, "Email address"))), /*#__PURE__*/React.createElement("div", {
                className: "col-auto"
              }, /*#__PURE__*/React.createElement("button", {
                type: "submit",
                className: "btn btn-outline-light mb-4"
              }, "Subscribe"))))), /*#__PURE__*/React.createElement("section", {
                className: ""
              })), /*#__PURE__*/React.createElement("div", {
                className: "text-center p-3"
              }, "\xA9 2020 Copyright:", /*#__PURE__*/React.createElement("a", {
                className: "text-white",
                href: "https://mdbootstrap.com/"
              }, "MDBootstrap.com")));
            
        }
    }
    

    class sidebar extends React.Component
    {
        render()
        {
           
            return /*#__PURE__*/React.createElement("ol", {
              className: "list-group"
            },  /*#__PURE__*/React.createElement("ul", {
                className: "latestnews mod-list"
              }, /*#__PURE__*/React.createElement("li", {
                className: "latestnews1"
              }, /*#__PURE__*/React.createElement("div", {
                className: "produkt1"
              }, /*#__PURE__*/React.createElement("div", {
                className: "ind"
              }, " 1 "), /*#__PURE__*/React.createElement("div", {
                className: "img1"
              }, /*#__PURE__*/React.createElement("a", {
                href: "file:///C:/Users/asayi/react/index2.html"
              }, " ", /*#__PURE__*/React.createElement("img", {
                src: "http://localhost/joomla3.9/templates/testing/bilder/navbarbild.jpg"
              }))), /*#__PURE__*/React.createElement("div", {
                className: "info1"
              }, /*#__PURE__*/React.createElement("h3", null, "book1 "), /*#__PURE__*/React.createElement("h5", null, " dsada "), /*#__PURE__*/React.createElement("p", null, " 800kr ")))), /*#__PURE__*/React.createElement("li", {
                className: "latestnews1"
              }, /*#__PURE__*/React.createElement("div", {
                className: "produkt1"
              }, /*#__PURE__*/React.createElement("div", {
                className: "ind"
              }, " 1 "), /*#__PURE__*/React.createElement("div", {
                className: "img1"
              }, /*#__PURE__*/React.createElement("a", {
                href: "file:///C:/Users/asayi/react/index2.html"
              }, " ", /*#__PURE__*/React.createElement("img", {
                src: "http://localhost/joomla3.9/templates/testing/bilder/navbarbild.jpg"
              }))), /*#__PURE__*/React.createElement("div", {
                className: "info1"
              }, /*#__PURE__*/React.createElement("h3", null, "book1 "), /*#__PURE__*/React.createElement("h5", null, " dsada "), /*#__PURE__*/React.createElement("p", null, " 800kr ")))), /*#__PURE__*/React.createElement("li", {
                className: "latestnews1"
              }, /*#__PURE__*/React.createElement("div", {
                className: "produkt1"
              }, /*#__PURE__*/React.createElement("div", {
                className: "ind"
              }, " 1 "), /*#__PURE__*/React.createElement("div", {
                className: "img1"
              }, /*#__PURE__*/React.createElement("a", {
                href: "file:///C:/Users/asayi/react/index2.html"
              }, " ", /*#__PURE__*/React.createElement("img", {
                src: "http://localhost/joomla3.9/templates/testing/bilder/navbarbild.jpg"
              }))), /*#__PURE__*/React.createElement("div", {
                className: "info1"
              }, /*#__PURE__*/React.createElement("h3", null, "book1 "), /*#__PURE__*/React.createElement("h5", null, " dsada "), /*#__PURE__*/React.createElement("p", null, " 800kr ")))), /*#__PURE__*/React.createElement("li", {
                className: "latestnews1"
              }, /*#__PURE__*/React.createElement("div", {
                className: "produkt1"
              }, /*#__PURE__*/React.createElement("div", {
                className: "ind"
              }, " 1 "), /*#__PURE__*/React.createElement("div", {
                className: "img1"
              }, /*#__PURE__*/React.createElement("a", {
                href: "file:///C:/Users/asayi/react/index2.html"
              }, " ", /*#__PURE__*/React.createElement("img", {
                src: "http://localhost/joomla3.9/templates/testing/bilder/navbarbild.jpg"
              }))), /*#__PURE__*/React.createElement("div", {
                className: "info1"
              }, /*#__PURE__*/React.createElement("h3", null, "book1 "), /*#__PURE__*/React.createElement("h5", null, " dsada "), /*#__PURE__*/React.createElement("p", null, " 800kr "))))));
              
            
        }
    }

   
    

    ReactDOM.render(
       
        React.createElement(navbar,),
        document.getElementById('root'),

        
    );
    ReactDOM.render(
       

        React.createElement(carousell,),
        document.getElementById('carosell')
        
    );
    ReactDOM.render(
       

        React.createElement(footer,),
        document.getElementById('footer')
        
    );
    ReactDOM.render(
       

        React.createElement(sidebar,),
        document.getElementById('sidebar')
        
    );



  
};