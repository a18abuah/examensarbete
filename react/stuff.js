

window.onload = function()
  

{
  

  function navbar() {
    
    return  React.createElement("header", {
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
        idprodukt: "id11",
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "paolo.jpg",
        kr: "500kr"
      }
      
    ];

    
  
    class produktview extends React.Component
    {
  
      componentDidMount(){
        var $this = $(ReactDOM.findDOMNode(this)); 
        console.log($this);
     

        let str=localStorage.getItem("theData");

        


          let measurement=new Date();
            measurement = measurement.getTime();

        
     
              
                    str="Start of textfile: \n";
                
               
                
              
                    str=localStorage.getItem("theData");
                  
                    str+= measurement+"\n";
    
                  
              
    
                // Increase counter and save data to local storage
              
                
                localStorage.setItem("theData",str);
               
    
    
             
    
                // Reload page!
                
    
               
        
      
        
      }
      componentWillMount (){
        var $this = $(ReactDOM.findDOMNode(this)); 
        console.log($this);
        
        let str1=localStorage.getItem("theData1");

        


          let measurement1=new Date();
            measurement1 = measurement1.getTime();

        
     
              
                    str1="Start of textfile: \n";
                
               
                
              
                    str1=localStorage.getItem("theData1");
                  
                    str1+= measurement1+"\n";
    
                  
              
    
                // Increase counter and save data to local storage
              
                
                localStorage.setItem("theData1",str1);
               
    
    
             
    
                // Reload page!
                
      

      }
       

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
              id: dat.name
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
            }, dat.name), React.createElement("div", {
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




  ReactDOM.render( 
    
    /*#__PURE__*/React.createElement("div", null,
     /*#__PURE__*/React.createElement(navbar, null),
   /*#__PURE__*/React.createElement(produktview, null),
    /*#__PURE__*/React.createElement(footer, null)), 
    document.getElementById('root'));



var id50 = localStorage.getItem("lastname");
document.getElementById(id50).style.display = "block";


  
};




function abbo(){
            
         
             
alert("done");
  
          console.log("done");
          
          

} 