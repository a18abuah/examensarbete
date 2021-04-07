

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
               
                className: "btn btn-outline-light me-2"
              }, "Login"), React.createElement("button", {
                type: "button",
                id: "loginknapp2",
                
                className: "btn btn-warning"
              }, "Sign-up")))));
              
            
        }
    }
    class produkter extends React.Component
    {
        render()
        {
           
            return React.createElement("div", {
              class: "container"
            }, React.createElement("div", {
              id: "container"
            }, " "), " ");
              
            
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
                src: "http://localhost/joomla3.9/templates/testing/bilder/navbarbild.jpg"
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
                src: "http://localhost/joomla3.9/templates/testing/bilder/navbarbild.jpg"
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
                src: "http://localhost/joomla3.9/templates/testing/bilder/navbarbild.jpg"
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
                src: "http://localhost/joomla3.9/templates/testing/bilder/navbarbild.jpg"
              }))), React.createElement("div", {
                className: "info1"
              }, React.createElement("h3", null, "book1 "), React.createElement("h5", null, " dsada "), React.createElement("p", null, " 800kr "))))));
              
            
        }
    }

    const data1 = [
      {
        name: "book1",
        id: "id1",
        idprodukt: "id1",
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
        kr: "250kr"
      },
      {
        name: "book2",
        id: "id2",
        idprodukt: "id2",
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
        kr: "150kr"
      },
      {
        name: "book3",
        id: "id3",
        idprodukt: "id3",
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
        kr: "500kr"
      },
      {
        name: "book4",
        id: "id4",
        idprodukt: "id4",
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
        kr: "500kr"
      },
      {
        name: "book5",
        id: "id5",
        idprodukt: "id5",
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
        kr: "500kr"
      },
      {
        name: "book6",
        id: "id6",
        idprodukt: "id6",
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
        kr: "500kr"
      },
      {
        name: "book7",
        id: "id7",
        idprodukt: "id7",
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
        kr: "500kr"
      },
      {
        name: "book8",
        id: "id8",
        idprodukt: "id8",
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
        kr: "500kr"
      },
      {
        name: "book9",
        id: "id9",
        idprodukt: "id9",
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
        kr: "500kr"
      },
      {
        name: "book10",
        id: "id10",
        idprodukt: "id10",
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
        kr: "500kr"
      },
      {
        name: "book11",
        id: "id11",
        idprodukt: "id11i",
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
        kr: "500kr"
      }
      
    ];

    
  





    class produktview extends React.Component
    {
        render()
        {
          return React.createElement("div", {
            className: "productview",
            id: "productview"
          }, data1.map((dat, key) => {



            
            


            return React.createElement("div", {
              key: key,
              className: dat.name,
              id: dat.idprodukt
            }, React.createElement("div", {
              id: "${dat.name}"
            }, React.createElement("div", {
              className: "container"
            }, React.createElement("header", {
              className: "header",
              role: "banner"
            }, React.createElement("div", {
              className: "header-inner clearfix"
            }, React.createElement("a", {
              className: "brand pull-left",
              href: "/joomla3.9/"
            }, React.createElement("span", {
              className: "site-title",
              title: "E-commerce",
              href:  " "
            }, "E-commerce"), "           "), React.createElement("div", {
              className: "header-search pull-right"
            }))), React.createElement("div", {
              className: "row-fluid"
            }, React.createElement("main", {
              id: "content",
              role: "main",
              className: "span9"
            }, React.createElement("div", {
              itemProp: "articleBody"
            }), React.createElement("div", {
              id: "system-message-container"
            }), React.createElement("div", {
              id: "akeeba-renderjoomla"
            }, React.createElement("div", {
              className: "j2store-single-product simple detail bs2 ",
              id: dat.idprodukt
            }, React.createElement("div", {
              itemScope: true,
              itemType: "https://schema.org/Product",
              className: "product-13 simple-product"
            }, React.createElement("div", {
              className: "row-fluid"
            }, React.createElement("div", {
              className: "span6"
            }, React.createElement("div", {
              className: "j2store-mainimage"
            }, React.createElement("span", {
              className: "zoom",
              id: "j2store-item-main-image-13"
            }, React.createElement("img", {
              itemProp: "image",
              alt: "book6",
              title: "book6",
              className: "j2store-product-main-image j2store-img-responsive",
              src: dat.img,
              width: "200"
            })))), React.createElement("div", {
              className: "span6"
            }, React.createElement("h1", {
              itemProp: "name",
              className: "product-title"
            }, "book6 "), React.createElement("div", {
              className: "price-sku-brand-container row-fluid"
            }, React.createElement("div", {
              className: "span6"
            }, React.createElement("div", {
              itemProp: "offers",
              itemScope: true,
              itemType: "https://schema.org/Offer",
              className: "product-price-container"
            }, React.createElement("div", {
              className: "sale-price"
            }, "$", dat.kr), React.createElement("meta", {
              itemProp: "price",
              content: "50.00"
            }), React.createElement("meta", {
              itemProp: "priceCurrency",
              content: "USD"
            }), React.createElement("link", {
              itemProp: "availability",
              href: "https://schema.org/InStock"
            })), React.createElement("div", {
              className: "discount-percentage"
            })), React.createElement("div", {
              className: "span6"
            }, React.createElement("div", {
              className: "product-sku"
            }, React.createElement("span", {
              className: "sku-text"
            }, "SKU:"), React.createElement("span", {
              itemProp: "sku",
              className: "sku"
            }, " book6 ")))), React.createElement("form", {
              action: "/joomla3.9/index.php/component/j2store/carts/addItem?Itemid=170",
              method: "post",
              className: "j2store-addtocart-form",
              id: "j2store-addtocart-form-13",
              name: "j2store-addtocart-form-13",
              "data-product_id": "13",
              "data-product_type": "simple",
              encType: "multipart/form-data"
            }, React.createElement("div", {
              className: "cart-action-complete",
            
            }, React.createElement("p", {
              className: "text-success"
            }, "Item added to cart.            ", React.createElement("a", {
              href: "/joomla3.9/index.php/component/j2store/carts?Itemid=170",
              className: "j2store-checkout-link"
            }, "Checkout     "))), React.createElement("div", {
              id: "add-to-cart-13",
              className: "j2store-add-to-cart"
            }, React.createElement("div", {
              className: "product-qty"
            }, React.createElement("input", {
              type: "number",
              name: "product_qty",
              value: "1",
              className: "input-mini form-control ",
              min: "0",
              step: "1"
            })), React.createElement("input", {
              type: "hidden",
              id: "j2store_product_id",
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
              name: "f35c7028a9eadd904bd984664507088a",
           
            }), " ", React.createElement("input", {
              type: "hidden",
              name: "return",
            
            }), React.createElement("div", {
              className: "j2store-notifications"
            })))), React.createElement("div", {
              className: "row-fluid"
            }, React.createElement("div", {
              className: "span12"
            }, React.createElement("ul", {
              className: "nav nav-tabs",
              id: "j2store-product-detail-tab"
            }, React.createElement("li", {
              className: "active"
            }, React.createElement("a", {
              href: "#description",
              "data-toggle": "tab"
            }, "Description"))), React.createElement("div", {
              className: "tab-content"
            }, React.createElement("div", {
              itemProp: "description",
              className: "tab-pane fade in active",
              id: "description"
            }, React.createElement("div", {
              className: "product-sdesc"
            }, React.createElement("p", null, React.createElement("strong", null, "$", dat.description, " ")), " "), React.createElement("div", {
              className: "product-ldesc"
            })))))))), React.createElement("div", {
              className: "clearfix"
            })), React.createElement("div", {
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
              title: "book1"
            }, React.createElement("img", {
              itemProp: "image",
              alt: "book1",
              className: "j2store-img-responsive j2store-product-image-7",
              src: dat.img,
              width: "80",
              height: "80"
            }))), React.createElement("h4", {
              itemProp: "name",
              className: "product-title",
               
            }, React.createElement("a", {
              itemProp: "url",
              id: dat.id,
              className: "status",
              
              
              onClick: this.handleClick,
          
              
                  
              href: "file:///C:/Users/asayi/OneDrive/Skrivbord/examensarbete/react/index2.html",
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
              className: "cart-action-complete",
             
            }, React.createElement("p", {
              className: "text-success"
            }, "Item added to cart. ", React.createElement("a", {
              href: "/joomla3.9/index.php/component/j2store/carts",
              className: "j2store-checkout-link"
            }, "Checkout "))), React.createElement("div", {
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


