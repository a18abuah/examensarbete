

window.onload = function()
  

{
  
 
  onpageshow= setupHistory();
    
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
                id: "loginknapp",
                onClick:  updateHistory('knapp'),
                className: "btn btn-outline-light me-2"
              }, "Login"), /*#__PURE__*/React.createElement("button", {
                type: "button",
                id: "loginknapp2",
                onClick:  updateHistory('knapp2'),
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

    const data1 = [
      {
        name: "Purrsloud",
        id: "id1",
        idprodukt: "id1",
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "http://localhost/joomla3.9/templates/testing/bilder/navbarbild.jpg",
        kr: "250kr"
      },
      {
        name: "Barksalot",
        id: "id2",
        idprodukt: "id2",
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "http://localhost/joomla3.9/templates/testing/bilder/navbarbild.jpg",
        kr: "150kr"
      },
      {
        name: "Meowsalot",
        id: "id3",
        idprodukt: "id3",
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "https://learnwebcode.github.io/json-example/images/cat-1.jpg",
        kr: "500kr"
      },
      {
        name: "Meowsalotes",
        id: "id4",
        idprodukt: "id4",
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "http://localhost/joomla3.9/templates/testing/bilder/navbarbild.jpg",
        kr: "500kr"
      },
      {
        name: "Meowsalot",
        id: "id5",
        idprodukt: "id5",
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "http://localhost/joomla3.9/templates/testing/bilder/navbarbild.jpg",
        kr: "500kr"
      },
      {
        name: "Meowsalot",
        id: "id6",
        idprodukt: "id6",
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "http://localhost/joomla3.9/templates/testing/bilder/navbarbild.jpg",
        kr: "500kr"
      },
      {
        name: "Meowsalot",
        id: "id7",
        idprodukt: "id7",
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "http://localhost/joomla3.9/templates/testing/bilder/navbarbild.jpg",
        kr: "500kr"
      },
      {
        name: "Meowsalot",
        id: "id8",
        idprodukt: "id8",
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "http://localhost/joomla3.9/templates/testing/bilder/navbarbild.jpg",
        kr: "500kr"
      },
      {
        name: "Meowsalot",
        id: "id9",
        idprodukt: "id9",
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "http://localhost/joomla3.9/templates/testing/bilder/navbarbild.jpg",
        kr: "500kr"
      },
      {
        name: "Meowsalot",
        id: "id10",
        idprodukt: "id10",
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "http://localhost/joomla3.9/templates/testing/bilder/navbarbild.jpg",
        kr: "500kr"
      },
      {
        name: "Meowsalot",
        id: "id11",
        idprodukt: "id11i",
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "http://localhost/joomla3.9/templates/testing/bilder/navbarbild.jpg",
        kr: "500kr"
      }
      
    ];

    
  





    class produktview extends React.Component
    {
        render()
        {
          return /*#__PURE__*/React.createElement("div", {
            className: "productview",
            id: "productview"
          }, data1.map((dat, key) => {



            
            


            return /*#__PURE__*/React.createElement("div", {
              key: key,
              className: dat.name,
              id: dat.idprodukt
            }, /*#__PURE__*/React.createElement("div", {
              id: "${dat.name}"
            }, /*#__PURE__*/React.createElement("div", {
              className: "container"
            }, /*#__PURE__*/React.createElement("header", {
              className: "header",
              role: "banner"
            }, /*#__PURE__*/React.createElement("div", {
              className: "header-inner clearfix"
            }, /*#__PURE__*/React.createElement("a", {
              className: "brand pull-left",
              href: "/joomla3.9/"
            }, /*#__PURE__*/React.createElement("span", {
              className: "site-title",
              title: "E-commerce",
              href:  " "
            }, "E-commerce"), "           "), /*#__PURE__*/React.createElement("div", {
              className: "header-search pull-right"
            }))), /*#__PURE__*/React.createElement("div", {
              className: "row-fluid"
            }, /*#__PURE__*/React.createElement("main", {
              id: "content",
              role: "main",
              className: "span9"
            }, /*#__PURE__*/React.createElement("div", {
              itemProp: "articleBody"
            }), /*#__PURE__*/React.createElement("div", {
              id: "system-message-container"
            }), /*#__PURE__*/React.createElement("div", {
              id: "akeeba-renderjoomla"
            }, /*#__PURE__*/React.createElement("div", {
              className: "j2store-single-product simple detail bs2 ",
              id: dat.idprodukt
            }, /*#__PURE__*/React.createElement("div", {
              itemScope: true,
              itemType: "https://schema.org/Product",
              className: "product-13 simple-product"
            }, /*#__PURE__*/React.createElement("div", {
              className: "row-fluid"
            }, /*#__PURE__*/React.createElement("div", {
              className: "span6"
            }, /*#__PURE__*/React.createElement("div", {
              className: "j2store-mainimage"
            }, /*#__PURE__*/React.createElement("span", {
              className: "zoom",
              id: "j2store-item-main-image-13"
            }, /*#__PURE__*/React.createElement("img", {
              itemProp: "image",
              alt: "book6",
              title: "book6",
              className: "j2store-product-main-image j2store-img-responsive",
              src: dat.img,
              width: "200"
            })))), /*#__PURE__*/React.createElement("div", {
              className: "span6"
            }, /*#__PURE__*/React.createElement("h1", {
              itemProp: "name",
              className: "product-title"
            }, "book6 "), /*#__PURE__*/React.createElement("div", {
              className: "price-sku-brand-container row-fluid"
            }, /*#__PURE__*/React.createElement("div", {
              className: "span6"
            }, /*#__PURE__*/React.createElement("div", {
              itemProp: "offers",
              itemScope: true,
              itemType: "https://schema.org/Offer",
              className: "product-price-container"
            }, /*#__PURE__*/React.createElement("div", {
              className: "sale-price"
            }, "$", dat.kr), /*#__PURE__*/React.createElement("meta", {
              itemProp: "price",
              content: "50.00"
            }), /*#__PURE__*/React.createElement("meta", {
              itemProp: "priceCurrency",
              content: "USD"
            }), /*#__PURE__*/React.createElement("link", {
              itemProp: "availability",
              href: "https://schema.org/InStock"
            })), /*#__PURE__*/React.createElement("div", {
              className: "discount-percentage"
            })), /*#__PURE__*/React.createElement("div", {
              className: "span6"
            }, /*#__PURE__*/React.createElement("div", {
              className: "product-sku"
            }, /*#__PURE__*/React.createElement("span", {
              className: "sku-text"
            }, "SKU:"), /*#__PURE__*/React.createElement("span", {
              itemProp: "sku",
              className: "sku"
            }, " book6 ")))), /*#__PURE__*/React.createElement("form", {
              action: "/joomla3.9/index.php/component/j2store/carts/addItem?Itemid=170",
              method: "post",
              className: "j2store-addtocart-form",
              id: "j2store-addtocart-form-13",
              name: "j2store-addtocart-form-13",
              "data-product_id": "13",
              "data-product_type": "simple",
              encType: "multipart/form-data"
            }, /*#__PURE__*/React.createElement("div", {
              className: "cart-action-complete",
            
            }, /*#__PURE__*/React.createElement("p", {
              className: "text-success"
            }, "Item added to cart.            ", /*#__PURE__*/React.createElement("a", {
              href: "/joomla3.9/index.php/component/j2store/carts?Itemid=170",
              className: "j2store-checkout-link"
            }, "Checkout     "))), /*#__PURE__*/React.createElement("div", {
              id: "add-to-cart-13",
              className: "j2store-add-to-cart"
            }, /*#__PURE__*/React.createElement("div", {
              className: "product-qty"
            }, /*#__PURE__*/React.createElement("input", {
              type: "number",
              name: "product_qty",
              value: "1",
              className: "input-mini form-control ",
              min: "0",
              step: "1"
            })), /*#__PURE__*/React.createElement("input", {
              type: "hidden",
              id: "j2store_product_id",
              name: "product_id",
            
            }), /*#__PURE__*/React.createElement("input", {
              "data-cart-action-always": "Adding...",
              "data-cart-action-done": "Add to cart",
              "data-cart-action-timeout": "1000",
             
              type: "submit",
              className: "j2store-cart-button btn btn-primary"
            })), /*#__PURE__*/React.createElement("input", {
              type: "hidden",
              name: "option",
            
            }), /*#__PURE__*/React.createElement("input", {
              type: "hidden",
              name: "view",
             
            }), /*#__PURE__*/React.createElement("input", {
              type: "hidden",
              name: "task",
          
            }), /*#__PURE__*/React.createElement("input", {
              type: "hidden",
              name: "ajax",
            
            }), /*#__PURE__*/React.createElement("input", {
              type: "hidden",
              name: "f35c7028a9eadd904bd984664507088a",
           
            }), " ", /*#__PURE__*/React.createElement("input", {
              type: "hidden",
              name: "return",
            
            }), /*#__PURE__*/React.createElement("div", {
              className: "j2store-notifications"
            })))), /*#__PURE__*/React.createElement("div", {
              className: "row-fluid"
            }, /*#__PURE__*/React.createElement("div", {
              className: "span12"
            }, /*#__PURE__*/React.createElement("ul", {
              className: "nav nav-tabs",
              id: "j2store-product-detail-tab"
            }, /*#__PURE__*/React.createElement("li", {
              className: "active"
            }, /*#__PURE__*/React.createElement("a", {
              href: "#description",
              "data-toggle": "tab"
            }, "Description"))), /*#__PURE__*/React.createElement("div", {
              className: "tab-content"
            }, /*#__PURE__*/React.createElement("div", {
              itemProp: "description",
              className: "tab-pane fade in active",
              id: "description"
            }, /*#__PURE__*/React.createElement("div", {
              className: "product-sdesc"
            }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "$", dat.description, " ")), " "), /*#__PURE__*/React.createElement("div", {
              className: "product-ldesc"
            })))))))), /*#__PURE__*/React.createElement("div", {
              className: "clearfix"
            })), /*#__PURE__*/React.createElement("div", {
              id: "aside",
              className: "span3"
            })))));
          }));
    }
  
  }
      
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
          localStorage.setItem("lastname", id);
         
        }
       
        
       

      
      }
        render()
        {
          
          return  /*#__PURE__*/ React.createElement("div", {
            id: "container"
          }, /*#__PURE__*/React.createElement("div", {
            id: "row"
          }, /*#__PURE__*/React.createElement("div", {
            itemScope: true,
            itemType: "https://schema.org/ItemList",
            className: "j2store-product-module j2store-product-module-list"
          }, /*#__PURE__*/React.createElement("div", {
            className: "j2store-module-product-row row-0 row-fluid"
          }, data1.map((dat, key) => {
            
            return /*#__PURE__*/React.createElement("div", {
              key: key
            }, /*#__PURE__*/React.createElement("div", {
              itemProp: "itemListElement",
              itemScope: "",
              itemType: "https://schema.org/ListItem",
              className: dat.name
            }, /*#__PURE__*/React.createElement("meta", {
              itemProp: "position",
              content: "1"
            }), /*#__PURE__*/React.createElement("div", {
              itemProp: "item",
              itemScope: "",
              itemType: "http://schema.org/Product",
              className: "j2store product-7 j2store-module-product"
            }, /*#__PURE__*/React.createElement("div", {
              className: "j2store-product-image   span12 "
            }, /*#__PURE__*/React.createElement("a", {
              href: "/joomla3.9/index.php/shopping/book1",
              title: "book1"
            }, /*#__PURE__*/React.createElement("img", {
              itemProp: "image",
              alt: "book1",
              className: "j2store-img-responsive j2store-product-image-7",
              src: dat.img,
              width: "80",
              height: "80"
            }))), /*#__PURE__*/React.createElement("h4", {
              itemProp: "name",
              className: "product-title",
               
            }, /*#__PURE__*/React.createElement("a", {
              itemProp: "url",
              id: dat.id,
              className: "status",
              
              
              onClick: this.handleClick,
          
              
                  
              href: "file:///C:/Users/asayi/react/index2.html",
              title: "book1"
            }, dat.name,)), /*#__PURE__*/React.createElement("div", {
              className: "product-cart-section  span12"
            }, /*#__PURE__*/React.createElement("div", {
              className: "product-cart-left-block  span12"
            }, /*#__PURE__*/React.createElement("div", {
              itemProp: "offers",
              itemScope: true,
              itemType: "http://schema.org/Offer",
              className: "product-price-container"
            }, /*#__PURE__*/React.createElement("div", {
              className: "sale-price"
            },  dat.kr, " "), /*#__PURE__*/React.createElement("div", {
              className: "tax-text"
            }), /*#__PURE__*/React.createElement("meta", {
              itemProp: "price",
              content: "0.00000"
            }), /*#__PURE__*/React.createElement("meta", {
              itemProp: "priceCurrency",
              content: "USD"
            }), /*#__PURE__*/React.createElement("link", {
              itemProp: "availability",
              href: "https://schema.org/InStock"
            })), /*#__PURE__*/React.createElement("div", {
              className: "product_cart_block"
            }, /*#__PURE__*/React.createElement("form", {
              action: "/joomla3.9/index.php/component/j2store/carts/addItem",
              method: "post",
              className: "j2store-addtocart-form",
              id: "j2store-addtocart-form-7",
              name: "j2store-addtocart-form-7",
              "data-product_id": "7",
              "data-product_type": "simple",
              encType: "multipart/form-data"
            }, /*#__PURE__*/React.createElement("div", {
              className: "cart-action-complete",
             
            }, /*#__PURE__*/React.createElement("p", {
              className: "text-success"
            }, "Item added to cart. ", /*#__PURE__*/React.createElement("a", {
              href: "/joomla3.9/index.php/component/j2store/carts",
              className: "j2store-checkout-link"
            }, "Checkout "))), /*#__PURE__*/React.createElement("div", {
              id: "add-to-cart-7",
              className: "j2store-add-to-cart"
            }, /*#__PURE__*/React.createElement("div", {
              className: "product-qty"
            }, /*#__PURE__*/React.createElement("input", {
              type: "number",
              name: "product_qty",
        
              className: "input-mini form-control",
              min: "1",
              step: "1"
            })), /*#__PURE__*/React.createElement("input", {
              type: "hidden",
              name: "product_id",
          
            }), /*#__PURE__*/React.createElement("input", {
              "data-cart-action-always": "Adding...",
              "data-cart-action-done": "Add to cart",
              "data-cart-action-timeout": "1000",
         
              type: "submit",
              className: "j2store-cart-button btn btn-primary"
            })), /*#__PURE__*/React.createElement("input", {
              type: "hidden",
              name: "option",
         
            }), /*#__PURE__*/React.createElement("input", {
              type: "hidden",
              name: "view",
         
            }), /*#__PURE__*/React.createElement("input", {
              type: "hidden",
              name: "task",
         
            }), /*#__PURE__*/React.createElement("input", {
              type: "hidden",
              name: "ajax",
       
            }), /*#__PURE__*/React.createElement("input", {
              type: "hidden",
              name: "f9dcccba7895aa8628dd4cd015ae43c7",
        
            }), " ", /*#__PURE__*/React.createElement("input", {
              type: "hidden",
              name: "return",
           
            }), /*#__PURE__*/React.createElement("div", {
              className: "j2store-notifications"
            }))))), /*#__PURE__*/React.createElement("div", {
              className: "product-short-description"
            }))));
          })))));
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
    ReactDOM.render(
       

      React.createElement(products1,),
      document.getElementById('container1')
      
  );
  ReactDOM.render(
       

    React.createElement(produktview,),
    document.getElementById('produktview')
    
);
  

  
  
};
function reply_click(id){
            
         
             

        
  document.getElementById('sidebar').style.display="none";
  document.getElementById('carosell').style.display="none";
  document.getElementById('container1').style.display="none";
  
  document.getElementById(id).style.display="block";
 

  
          console.log("done");
          
          

}  


function updateHistory(token) {
  history.pushState(token, "Titel: " + token, "");
}


function setupHistory() {
  window.onpopstate = function(event) {
      historyChange(event);
  };
}
function historyChange(event) {
  var knappstart = document.getElementById('loginknapp').id;
  var knappstart2 = document.getElementById('loginknapp2').className;
 
 
  console.log("knapp1", event.state,"knappstart", knappstart,"knappstart2", knappstart2);
  
  if (knappstart == event.state) {
     
  }
  if (knappstart2 == event.state) {
      about();
  }

}