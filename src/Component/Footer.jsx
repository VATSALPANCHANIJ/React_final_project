import React from "react";
import './Footer.css'
const Footer = () => {
  return (
    <>
      <div>
        {/* footer start */}
        <section className="footer4 section-tb-padding ">
          <div className="container-fluid">
            <div className="row align-items-center justify-content-between">
              <div className="col-2">
                <ul className="footer-ul">
                  <li className="footer-li footer-logo">
                    <a href="index6.html">
                      <img className="img-fluid" src="image/logo4.png" alt />
                    </a>
                    <p>Tortor neque egestas augue, eu vulputate magna eros eu erat.</p>
                  </li>
                  <li>
                    <a href="javascript:void(0)"><img src="image/payment.png" className="img-fluid" alt="pay-image" /></a>
                  </li>
                </ul>

              </div>
     
              <div className="col-2">
                <div className="f-link">
                  <h5 className="h-footer">Top search</h5>
                  <ul className="f-link-ul">
                    <li className="f-link-ul-li"><a href="product-style-6.html">Fruits</a></li>
                    <li className="f-link-ul-li"><a href="product-style-6.html">Fast food</a></li>
                    <li className="f-link-ul-li"><a href="product-style-6.html">Vegetable</a></li>
                    <li className="f-link-ul-li"><a href="product-style-6.html">Salads</a></li>
                    <li className="f-link-ul-li"><a href="product-style-6.html">Bestseller</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-2">
                <div class="f-link">
                  <h5 class="h-footer">Services</h5>

                  <ul class="f-link-ul">
                    <li class="f-link-ul-li"><a href="about-us.html">About vegist</a></li>
                    <li class="f-link-ul-li"><a href="faq%27s.html">Faq's</a></li>
                    <li class="f-link-ul-li"><a href="contact.html">Contact us</a></li>
                    <li class="f-link-ul-li"><a href="blog-style-6-3-grid.html">News</a></li>
                    <li class="f-link-ul-li"><a href="sitemap.html">Sitemap</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-2">
                <div class="f-link">
                  <h5 class="h-footer">Privacy & terms</h5>

                  <ul class="f-link-ul">
                    <li class="f-link-ul-li"><a href="payment-policy.html">Payment policy</a></li>
                    <li class="f-link-ul-li"><a href="privacy-policy.html">Privacy policy</a></li>
                    <li class="f-link-ul-li"><a href="return-policy.html">Return policy</a></li>
                    <li class="f-link-ul-li"><a href="shipping-policy.html">Shipping policy</a></li>
                    <li class="f-link-ul-li"><a href="terms-conditions.html">Terms conditions</a></li>
                  </ul>
                </div></div>
              <div className="col-2">
                <div class="f-link">
                  <h5 class="h-footer">My account</h5>
                  <ul class="f-link-ul " id="privacy" data-bs-parent="#footer-accordian">
                    <li class="f-link-ul-li"><a href="account.html">My account</a></li>
                    <li class="f-link-ul-li"><a href="cart-3.html">My cart</a></li>
                    <li class="f-link-ul-li"><a href="tracking.html">Order history</a></li>
                    <li class="f-link-ul-li"><a href="wishlist.html">My wishlist</a></li>
                    <li class="f-link-ul-li"><a href="addresses.html">My address</a></li>
                  </ul>
                </div></div>
              <div className="col-2">
                <div class="contact-6">
                  <div class="f-deal-content">
                    <h2>Location</h2>
                  </div>
                  <ul class="f-contact">
                    <li><i class="ion-ios-location"></i></li>
                    <li class="contact-link">
                      <p>401 Broadway 24th floor</p>
                      <p>Near ant mall cross road</p>
                    </li>
                  </ul>
                  <ul class="f-contact">
                    <li><i class="ion-ios-telephone"></i></li>
                    <li class="contact-link">
                      <a href="tel:1-800-222-000">Phone: 1-800-222-000</a>
                      <a href="mailto:demo@demo.com">Email: demo@demo.com</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* footer end */}
        {/* copyright start */}
        <section className="footer-copyright">
          <div className="container">
            <div className="row">
              <div className="col">
                <ul className="f-bottom">
                  <li className="f-c f-copyright">
                    <p>Copyright <i className="fa fa-copyright" /> 2023 spacingtech rights reserved</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>



    </>
  )
}
export default Footer;