import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Loader from "./Loader";
import { Link } from "react-router-dom";
import axios from "axios";
const Shop = () => {
  const [allProducts, setAllProducts] = useState([]);

  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [highprice, setHighprice] = useState("HighlowTo");
  const [lowprice, setlowprice] = useState("LowToHigh");
  const [searchTerm, setSearchTerm] = useState("");
  const [status, setStatus] = useState("");
  const [showProduct, setShowProduct] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
const [recordsPerPage] = useState(12);



  const nPages = Math.ceil(allProducts.length / recordsPerPage)
  const goToPrevPage = () => {
    if(currentPage !== 1) 
        setCurrentPage(currentPage - 1)
}
const goToNextPage = () => {
    if(currentPage !== nPages) 
        setCurrentPage(currentPage + 1);
    console.log("colled");
}
const pageNumbers = [...Array(nPages + 1).keys()].slice(1);
  const pagination = (data=[])=>{
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    console.log(data);
    const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
    console.log(currentRecords);
    setShowProduct(currentRecords);
  }

  const Fetch_AllProducts = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3030/AllProduct_show_shop_page"
      );
      const fetchedData = await res.data;
      setAllProducts(fetchedData);
    //   setShowProduct(fetchedData);
        pagination(fetchedData)

      console.log("all products", fetchedData);
    } catch (error) {
      console.log(error);
    }
  };

  //show 4 type of products veg, furits, etc...
  const allcatogory = () => {
    axios
      .get(`http://localhost:3030/catogery`)
      .then((response) => {
        setCategory(response.data);
      })
      .catch((error) => {
        console.log(error);
        return false;
      });
  };
  const categoryFilter = (catogerydata) => {
    console.log(catogerydata);
    if (catogerydata === "all") {
      Fetch_AllProducts();
    } else {
      axios
        .get(
          `http://localhost:3030/AllProduct_show_shop_page?catogery=${catogerydata}`
        )
        .then((response) => {
          setAllProducts(response.data);
          setShowProduct(response.data);
        })
        .catch((error) => {
          console.log(error);
          return false;
        });
    }
  };
  // Price low to high
  const handleSort = (order) => {
    if (highprice === order) {
      setAllProducts([...allProducts].reverse());
      setHighprice(order === "HighlowTo" ? "LowToHigh" : "HighlowTo");
    } else {
      setAllProducts([...allProducts].sort((a, b) => a.Price - b.Price));
      setHighprice(order);
    }
  };
  const handleLow = (order) => {
    if (lowprice === order) {
      setAllProducts([...allProducts].reverse());
      setlowprice(order === "LowToHigh" ? "HighlowTo" : "LowToHigh");
    } else {
      setAllProducts([...allProducts].sort((a, b) => b.Price - a.Price));
      setlowprice(order);
    }
  };
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  //filter method
  useEffect(() => {
    const filteredProducts = allProducts.filter((product) => {
      return product.Product_Name.toLowerCase().includes(
        searchTerm.toLowerCase()
      );
    });

    setShowProduct(filteredProducts);
    console.log("filter ", filteredProducts);
  }, [searchTerm]);

  // status update
  useEffect(() => {
    axios
      .get(
        `http://localhost:3030/AllProduct_show_shop_page?Marketstatus=${status}&status=instock`
      )
      .then((res) => {
        // console.log(res);
        setAllProducts(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        return false;
      });
  }, [status]);

  useEffect(() => {
    Fetch_AllProducts();
    allcatogory();
 
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);


useEffect(()=>{
    console.log(currentPage ,"changed"); 
    pagination(allProducts);
},[currentPage]);
  return (
    <div
      className="sweet-loading"
      style={{ backgroundColor: loading ? "" : "", minHeight: "100vh" }}
    >
      {loading ? (
        <Loader />
      ) : (
        <>
          <section className="section-tb-padding">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-4 col-12 text-center ">
                  <div className="all-filter" style={{ position: "fixed" }}>
                    <div className="categories-page-filter mt-5">
                      <h3 class="filter-title">Categories</h3>
                      <a className="filter-link">
                        <span>Categories </span>
                        <i className="fa fa-angle-down" />
                      </a>
                      <ul className="all-option collapse">
                        {category.map((val) => (
                          <li
                            className="Product_name col-4"
                            key={val.catogery_name}
                            onClick={() => categoryFilter(val.catogery_name)}
                          >
                            <a
                              style={{ cursor: "pointer" }}
                              onClick={() => categoryFilter(val.catogery_name)}
                            >
                              {val.catogery_name}
                            </a>
                          </li>
                        ))}
                        <li
                          onClick={() => categoryFilter("all")}
                          style={{ width: "100%" }}
                          type="button"
                          className="Product_name"
                        >
                          All
                        </li>
                      </ul>
                    </div>
                    <div className="card" style={{ width: "18rem" }}>
                      <ul className="list-group list-group-flush">
                        <>
                          <ul className="list-group">
                            <li className="list-group-item p-3">
                              <button
                                className="btn btn-outline-secondary w-100"
                                onClick={() => handleSort("HighlowTo")}
                              >
                                Price Low to High
                              </button>
                            </li>
                            <li className="list-group-item p-3">
                              <button
                                className="btn btn-outline-secondary w-100"
                                onClick={() => handleLow("LowToHigh")}
                              >
                                Price High To Low
                              </button>
                            </li>
                          </ul>
                        </>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-lg-9 col-md-8 col-12">
                  <div
                    className="grid-list-banner"
                    style={{ backgroundImage: "url(image/slider17.jpg)" }}
                  >
                    <div className="grid-banner-content">
                      <h4>Bestseller</h4>
                      <p>
                        Praesent dapibus, neque id cursus Ucibus, tortor neque
                        egestas augue, eu vulputate magna eros eu erat. Aliquam
                        erat volutpat. Nam dui mi, tincidunt quis, facilisis
                        luc...
                      </p>
                    </div>
                  </div>
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="border border-warning col-4"
                  />

                  <select
                    onChange={(e) => setStatus(e.target.value)}
                    className="form"
                  >
                    <option>--- select status----</option>
                    <option value="best">Best</option>
                    <option value="Upcomming">Upcomming</option>
                    <option value="Trending">Trending</option>
                    <option value="latest">latest</option>
                  </select>
                  <div className="grid-4-product">
                    <div className="grid-pro">
                      <ul className="grid-product">
                        {showProduct.map((val) => {
                          return (
                            <li className="grid-items">
                              <div className="tred-pro">
                                <div className="tr-pro-img">
                                  <a href="#">
                                    <img
                                      className="img-fluid"
                                      src={val.Image_1}
                                      alt="pro-img1"
                                    />
                                    <img
                                      className="img-fluid additional-image"
                                      src={val.Image_2}
                                      alt="additional image"
                                    />
                                  </a>
                                </div>
                                <div className="Pro-lable">
                                  <span className="p-text">New</span>
                                </div>
                                <div className="pro-icn">
                                  <div className="row ">
                                    <Link to={``} className="icn icns">
                                      <i className="fa fa-heart" />
                                    </Link>
                                    <Link to={`/Cart`} className="icn">
                                      <i className="fa fa-shopping-bag" />
                                    </Link>
                                    <Link
                                      to={`/Product/${`AllProduct_show_shop_page`}/${
                                        val.id
                                      }`}
                                      href="javascript:void(0)"
                                      className="icn"
                                    >
                                      <i className="fa fa-eye" />
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <div className="caption">
                                <h3>
                                  <a href="product.html">{val.Product_Name}</a>
                                </h3>
                                <div className="rating">
                                  <i className="fa fa-star c-star" />
                                  <i className="fa fa-star c-star" />
                                  <i className="fa fa-star c-star" />
                                  <i className="fa fa-star-o" />
                                  <i className="fa fa-star-o" />
                                </div>
                                <div className="pro-price">
                                  <span className="new-price">{val.Price}</span>
                                </div>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                  <nav>
    <ul className='pagination justify-content-center'>
        <li className="page-item">
            <a className="page-link" 
                onClick={()=>goToPrevPage()} 
               >
                
                Previous
            </a>
        </li>
        {pageNumbers.map(pgNumber => (
            <li key={pgNumber} 
                className= {`page-item ${currentPage == pgNumber ? 'active' : ''} `} >

                <a onClick={() => setCurrentPage(pgNumber)}  
                    className='page-link' 
                    >
                    
                    {pgNumber}
                </a>
            </li>
        ))}
        <li className="page-item">
            <a className="page-link" 
                onClick={()=>goToNextPage()}
                >
                
                Next
            </a>
        </li>
    </ul>
</nav>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};
export default Shop;
