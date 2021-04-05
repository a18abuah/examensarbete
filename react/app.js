

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

    const data1 = [
      {
        name: "Purrsloud",
        id: "Purrsloud1",
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "http://localhost/joomla3.9/templates/testing/bilder/navbarbild.jpg",
        kr: "250kr"
      },
      {
        name: "Barksalot",
        id: "Barksalot1",
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "http://localhost/joomla3.9/templates/testing/bilder/navbarbild.jpg",
        kr: "150kr"
      },
      {
        name: "Meowsalot",
        id: "Meowsalot1",
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "https://learnwebcode.github.io/json-example/images/cat-1.jpg",
        kr: "500kr"
      },
      {
        name: "Meowsalotes",
        id: "Meowsalotes1",
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "https://learnwebcode.github.io/json-example/images/cat-1.jpg",
        kr: "500kr"
      },
      {
        name: "Meowsalot",
        id: "Meowsalotz1",
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "https://learnwebcode.github.io/json-example/images/cat-1.jpg",
        kr: "500kr"
      },
      {
        name: "Meowsalot",
        id: "Meowsalotz1ed",
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "https://learnwebcode.github.io/json-example/images/cat-1.jpg",
        kr: "500kr"
      },
      {
        name: "Meowsalot",
        id: "Meowsalotz1ed12",
        href: "file:///C:/Users/asayi/react/index2.html",
        img: "https://learnwebcode.github.io/json-example/images/cat-1.jpg",
        kr: "500kr"
      }
      
    ];

    document.getElementById("container1").innerHTML = `
    ${data1.map(function (dat) { 
      

    return ` `;
}).join('')}
                
         `


         
         
    class products1 extends React.Component
    {     
        render()
        {
          
          return  document.getElementById("container1").innerHTML =  
          
          
          `
          
          ${data1.map(function (dat) {     
              

            


          return ` <div id="row">
              <div itemscope itemtype="https://schema.org/ItemList" class="j2store-product-module j2store-product-module-list">
                  <div class="j2store-module-product-row row-0 row-fluid">
                      <div itemprop="itemListElement" itemscope="" itemtype="https://schema.org/ListItem" class="${dat.name}">
                          <meta itemprop="position" content="1" />
                          <div itemprop="item" itemscope="" itemtype="http://schema.org/Product" class="j2store product-7 j2store-module-product">
                              <!-- product image if postion is top -->
                              <div class="j2store-product-image   span12 ">
                                  <a href="/joomla3.9/index.php/shopping/book1" title="book1">
                                      <img itemprop="image" alt="book1" class="j2store-img-responsive j2store-product-image-7" 
                                          src="${dat.img}" width="80" height="80" />
  
                                  </a>
                              </div>
                              
                              <h4 itemprop="name" class="product-title">
                                  <a  itemprop="url" class="status" id="${dat.id}" value="${dat.id}" ;
                                      href=""   title="book1">
  
                                      ${dat.name} </a>
                              </h4>
                              <div class="product-cart-section  span12">
                                  <div class="product-cart-left-block  span12">
                                      <!-- Product price block-->
                                      <div itemprop="offers" itemscope itemtype="http://schema.org/Offer" class="product-price-container">
  
                                          <div class="sale-price">
                                             ${dat.kr} </div>
                                          <div class="tax-text">
                                          </div>
                                          <meta itemprop="price" content="0.00000" />
                                          <meta itemprop="priceCurrency" content="USD" />
                                          <link itemprop="availability" href="https://schema.org/InStock" />
                                      </div>
                                      <div class="product_cart_block">
                                          <form action="/joomla3.9/index.php/component/j2store/carts/addItem" method="post" class="j2store-addtocart-form" id="j2store-addtocart-form-7" name="j2store-addtocart-form-7" data-product_id="7" data-product_type="simple" enctype="multipart/form-data">
                                              <div class="cart-action-complete" style="display:none;">
                                                  <p class="text-success">
                                                      Item added to cart. <a href="/joomla3.9/index.php/component/j2store/carts" class="j2store-checkout-link">
                                                          Checkout </a>
                                                  </p>
                                              </div>
                                              <div id="add-to-cart-7" class="j2store-add-to-cart">
                                                  <div class="product-qty">
                                                      <input type="number" name="product_qty" value="1" class="input-mini form-control" min="1" step='1' />
                                                  </div>
                                                  <input type="hidden" name="product_id" value="7" />
                                                  <input data-cart-action-always="Adding..." data-cart-action-done="Add to cart" data-cart-action-timeout="1000" value="Add to cart" type="submit" class="j2store-cart-button btn btn-primary" />
                                              </div>
                                              <input type="hidden" name="option" value="com_j2store" />
                                              <input type="hidden" name="view" value="carts" />
                                              <input type="hidden" name="task" value="addItem" />
                                              <input type="hidden" name="ajax" value="0" />
                                              <input type="hidden" name="f9dcccba7895aa8628dd4cd015ae43c7" value="1" /> <input type="hidden" name="return" value="aHR0cDovL2xvY2FsaG9zdC9qb29tbGEzLjkv" />
                                              <div class="j2store-notifications"></div>
                                          </form>
                                      </div>
                                  </div>
                              </div> 
                              <div class="product-short-description"></div>

                          </div> 
                      </div> 

                  </div>
              </div>
          </div>
                      `;
                      function reply_click(clicked_id)
                      {
                          console.log(clicked_id);
                      };
                      
    }).join('')}
                      
               `;
    }

  }
  class produktview extends React.Component
  {
      render()
      {
        return  document.getElementById("container1").innerHTML = `
        ${data1.map(function (dat) {
        return `     <div id="${dat.name}">
  <div class="container">
    <!-- Header -->
    <header class="header" role="banner">
      <div class="header-inner clearfix">
        <a class="brand pull-left" href="/joomla3.9/">
          <span class="site-title" title="E-commerce">E-commerce</span>											</a>
        <div class="header-search pull-right">
          
        </div>
      </div>
    </header>
          
    <div class="row-fluid">
              <main id="content" role="main" class="span9">
                  <div itemprop="articleBody"></div>
        <!-- Begin Content -->
        
        <div id="system-message-container">
</div>

        <div id="akeeba-renderjoomla">
<div class="j2store-single-product simple detail bs2 ">
    <div itemscope itemtype="https://schema.org/Product" class="product-13 simple-product">
<div class="row-fluid">
  <div class="span6">
        <div class="j2store-mainimage">
                          
          <span class="zoom" id="j2store-item-main-image-13">
       <img itemprop="image"
                alt="book6"
                title="book6"
                class="j2store-product-main-image j2store-img-responsive"
                src="${dat.img}"
                width="200"
           />
       </span>

          </div>


  

  </div>

  <div class="span6">
    
<h1 itemprop="name" class="product-title">
  book6	</h1>

                  
    <div class="price-sku-brand-container row-fluid">
      <div class="span6">
      
<div itemprop="offers" itemscope itemtype="https://schema.org/Offer" class="product-price-container">
  
          <div class="sale-price">							
          ${dat.kr}				
  </div>
  
    
<meta itemprop="price" content="50.00" />
<meta itemprop="priceCurrency" content="USD" />
<link itemprop="availability" href="https://schema.org/InStock" />
</div>


  <div class="discount-percentage">
          </div>
      </div>

      <div class="span6">
                                    <div class="product-sku">
  <span class="sku-text">SKU:</span>
  <span itemprop="sku" class="sku"> book6 </span>
</div>
        
                </div>
    </div>

    
    <form action="/joomla3.9/index.php/component/j2store/carts/addItem?Itemid=170"
        method="post" class="j2store-addtocart-form"
        id="j2store-addtocart-form-13"
        name="j2store-addtocart-form-13"
        data-product_id="13"
        data-product_type="simple"
        enctype="multipart/form-data">

      
              <div class="cart-action-complete" style="display:none;">
      <p class="text-success">
        Item added to cart.												<a href="/joomla3.9/index.php/component/j2store/carts?Itemid=170" class="j2store-checkout-link">
                    Checkout					</a>
      </p>
  </div>



  <div id="add-to-cart-13" class="j2store-add-to-cart">
  
  <div class="product-qty"><input type="number" name="product_qty" value="1" class="input-mini form-control " min="0" step="1" /></div>
    <input type="hidden" id="j2store_product_id" name="product_id" value="13" />

      <input
        data-cart-action-always="Adding..."
        data-cart-action-done="Add to cart"
        data-cart-action-timeout="1000"
         value="Add to cart"
         type="submit"
         class="j2store-cart-button btn btn-primary"
         />
   </div>


<input type="hidden" name="option" value="com_j2store" />
<input type="hidden" name="view" value="carts" />
<input type="hidden" name="task" value="addItem" />
<input type="hidden" name="ajax" value="0" />
<input type="hidden" name="f35c7028a9eadd904bd984664507088a" value="1" />	<input type="hidden" name="return" value="aHR0cDovL2xvY2FsaG9zdC9qb29tbGEzLjkvaW5kZXgucGhwL3Nob3BwaW5nL2Jvb2s2" />
<div class="j2store-notifications"></div>

    </form>
        </div>
</div>

      <div class="row-fluid">
  <div class="span12">
    <ul class="nav nav-tabs" id="j2store-product-detail-tab">
                <li class="active"><a href="#description" data-toggle="tab">Description</a>
      
            </ul>

    <div class="tab-content">
              <div itemprop="description" class="tab-pane fade in active" id="description">
        
<div class="product-sdesc">
  
<p><strong>${dat.description}	</strong></p>	</div>

        
<div class="product-ldesc">
    </div>

      </div>
      
            </div>
  </div>
</div>		

      </div>	



  </div>

</div>

        <div class="clearfix"></div>
        
        <!-- End Content -->
      </main>
                <div id="aside" class="span3">
          <!-- Begin Right Sidebar -->
          
          <!-- End Right Sidebar -->
        </div>
            </div>
  </div>
  </div>
                    `;
  }).join('')}
                    
             `;
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


  
};