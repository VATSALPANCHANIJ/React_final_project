import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Category = () => {

  const navigate = useNavigate()
  const [category, setCategory] = useState("");
  const [categoryData, setCategoryData] = useState([]);
  const [isedit, setIsEdit] = useState("");

  // Marketstatus
  const [Market_status_name, setMarket_status_name] = useState("")
  const [Market_status_data, setMarket_status_data] = useState([])
  const [Status_edit, setStatus_edit] = useState("");
  // category
  const categorySubmit = () => {
    if (isedit) {
      // put mining data push db JSON into
      axios.put(`http://localhost:3030/catogery/${isedit}`, {
        catogery_name: category
      })
        .then((res) => {
          console.log(res);
          alert("Success - category")
          setCategory("");
          setIsEdit("");
          getcategory();
        }).catch((err) => {
          console.log(err, "Error - category");
          return false;
        })
    } else {
      axios.post(`http://localhost:3030/catogery`, {
        catogery_name: category
      })
        .then((res) => {
          toast.success("Category successfully add");
          setCategory("");
          getcategory();
        }).catch((err) => {
          console.log(err);
          return false;
        })
    }
  }
  // category show 
  const getcategory = () => {
    axios.get(`http://localhost:3030/catogery`)
      .then((res) => {
        setCategoryData(res.data);
        // console.log(res.data);
      }).catch((err) => {
        console.log(err);
        return false;
      })

  }
  // delete category
  const deletedata = (id) => {
    axios.delete(`http://localhost:3030/catogery/${id}`)
      .then((res) => {
        toast.success("Category successfully deleted");
        setCategory("");
        getcategory();
      }).catch((err) => {
        console.log(err);
        return false;
      })
  }
  const editedata = (id) => {
    axios.get(`http://localhost:3030/catogery/${id}`)
      .then((response) => {
        setCategory(response.data.catogery_name);
        // this name for the category ^^^^^^^^ name in dp json file           
        setIsEdit(id)
      }).catch((err) => {
        console.log(err);
        return false;
      })
  }

  const Market_status_submit = () => {
    if (Status_edit) {
      axios.put(`http://localhost:3030/Marketstatus/${Status_edit}`, {
        Marketstatus: Market_status_name
      }).then((response) => {
        console.log(response);
        setMarket_status_name("");
        setStatus_edit("");
        getMarketStatus();
      }).catch((error) => {
        console.log(error + "marketstatus ");
        return false;
      })
    } else {
      axios.post(`http://localhost:3030/Marketstatus`, {
        Marketstatus: Market_status_name
      }).then((response) => {
        setMarket_status_name("");
        getMarketStatus();
     
      })
        .catch((error) => {
          console.log("error marketstatus " + error);
          return false
        })
    }
  }
  const editeMarket = (id) => {
    axios.get(`http://localhost:3030/Marketstatus/${id}`)
      .then((response) => {
        setMarket_status_name(response.data.Marketstatus);
        setStatus_edit(id)
      }).catch((error) => {
        console.log(error + "marketstatus");
        return false;
      })
  }
  const deleteMarket = (id) => {
    axios.delete(`http://localhost:3030/Marketstatus/${id}`)
      .then((response) => {
        toast.success("Marketstatus successfully deleted");
        setMarket_status_name("");
        getMarketStatus();
      });
  }

  //done
  const getMarketStatus = () => {
    axios.get(`http://localhost:3030/Marketstatus`)
      .then((res) => {
        //data show display
        setMarket_status_data(res.data);
      }).catch((err) => {
        console.log(err);
        return false;
      })
  }


  useEffect(() => {
    getcategory();
    getMarketStatus();
    
  }, [])
  return (
    <>
      <div style={{ overflow: "hidden" }}>
        <div className="row justify-content-center">
          <div className="col-5">
            <h2>Category type  </h2>
            <br /><br />
            <table>
              <tr>
                <td>Category :-</td>
                <td><input type="category" className="input-box" onChange={(e) => setCategory(e.target.value)} name="name" id="" value={category} placeholder="Enter Your Next category add" /></td>
              </tr>
              <tr>
                <td></td>
                <td  className="text-center">{
                  isedit ? (<button type="button" className=" btn-s" onClick={() => categorySubmit()}>Edit</button>)
                    : (<button type="button" className="btn-s" onClick={() => categorySubmit()} >submit</button>)
                }</td>
              </tr>
            </table>
            <table>
              <tbody>
                <tr>
                  <td className="col-1 text-center">Id <hr /></td>
                  <td className="col-2 text-center">Category <hr /></td>
                  <td className="col-2 text-center">Action <hr /></td>
                </tr>
                {
                  categoryData.map((value) => {
                    return (
                      <tr className="text-center">
                        <td className="pt-2">{value.id}</td>
                        <td className="pt-2">{value.catogery_name}</td>
                        <td className="pt-2">
                          <button type="button" onClick={() => deletedata((value.id))} className="p-1 btn-s">delete</button>
                          <button type="button" onClick={() => editedata((value.id))} className="p-1 btn-s">edit</button>

                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
              <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
              />
            </table>
          </div>
          <div className="col-5">
            <h2> Marketstatus type  </h2>
            <br /><br />
            <table>
              <tr>
                <td>Marketstatus :-</td>
                <td><input type="Marketstatus" className="input-box" onChange={(e) => setMarket_status_name(e.target.value)} name="name"  value={Market_status_name} placeholder="Enter Your Next Market status add" /></td>
              </tr>
              <tr>
                <td></td>
                <td className="text-center">{
                  Status_edit ? (<button type="button" id="" className="btn-s" onClick={() => Market_status_submit()}>Edit</button>)
                    : (<button type="button" id="" className="btn-s" onClick={() => Market_status_submit()} >submit</button>)
                }</td>
              </tr>
            </table>
            <br />
            <table>
              <tbody>
                <tr className="text-center">
                  <td className="col-1">Id <hr /></td>
                  <td className="col-2">Marketstatus <hr /></td>
                  <td className="col-2">Action <hr /> </td>
                </tr>
                {
                  Market_status_data.map((value) => {
                    return (
                      <tr className="text-center">
                        <td>{value.id}</td>
                        <td style={{textTransform:"capitalize"}}>{value.Marketstatus}</td>
                        <td>

                          <button type="button" onClick={() => deleteMarket((value.id))} className="p-1 btn-s">delete</button>
                          <button type="button" onClick={() => editeMarket((value.id))} className="p-1 btn-s">edit</button>
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>

            </table>
          </div>
        </div>
      </div>

    </>
  )
}
export default Category;