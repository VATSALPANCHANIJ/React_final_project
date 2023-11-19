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
  const handleSubmit = () => {
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

  useEffect(() => {
    getcategory();
  }, [])
  return (
    <>
      <h1>Category</h1>
      <table>
        <tr>
          <td>Category :-</td>
          <td><input type="category" className=" border-primary" onChange={(e) => setCategory(e.target.value)} name="name" id="" value={category} placeholder="Enter Your Next category add" /></td>
        </tr>
        <tr>
          <td></td>
          <td>{
            isedit ? (<input type="button" id="" className=" border-primary" onClick={() => handleSubmit()} value="Edit" />)
              : (<input type="button" id="" className="border-primary" onClick={() => handleSubmit()} value="submit" />)
          }</td>
        </tr>
      </table>
      <table border={1}>
        <tbody>
          <tr>
            <td>Id</td>
            <td>Category</td>
            <td>Action</td>
          </tr>
          {
            categoryData.map((value) => {
              return (
                <tr>
                  <td>{value.id}</td>
                  <td>{value.catogery_name}</td>
                  <td>
                    <button type="button" onClick={() => deletedata((value.id))} className="p-1">delete</button>
                    <button type="button" onClick={() => editedata((value.id))} className="p-1">edit</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
        <ToastContainer />
      </table>
    </>
  )
}
export default Category;