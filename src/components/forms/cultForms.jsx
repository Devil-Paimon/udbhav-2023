import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { cultEvents } from "../Data";
import { auth, db } from "../../config";
import "./FormStyle.scss";
import { ToastContainer, toast } from "react-toastify";
import { arrayUnion, doc, setDoc, updateDoc } from "firebase/firestore";

const cultForms = () => {
  const { id } = useParams();
  const user = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [count, setCount] = useState(1);
  const [members, setMembers] = useState([]);

  const initialValues = {
    mName: "",
    email: "",
    phnNo: "",
  };

  const [values, setValues] = useState(initialValues);
  const [teamN, setTeamN] = useState("");

  const addMember = (e) => {
    e.preventDefault();
    if (!values.mName || !values.email || !values.phnNo) {
      // if (condition) {

      // }
      toast.error("Enter details");
      return;
    }
    setMembers([...members, values]);
    setCount(count + 1);
    setValues(initialValues);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!teamN || members.length === 0) {
      toast.error("Enter Details");
      setLoading(false);
      setTeamN("");
      setValues(initialValues);
      return;
    } else {
      // set data in event collection
      await setDoc(doc(db, id, teamN), {
        uid: auth.currentUser.uid,
        teamName: teamN,
        Members: members,
      });

      members.forEach(async (item) => {
        //  set event in user collecction
        await updateDoc(doc(db, "users", item.email), {
          events: arrayUnion({
            eventName: id,
            teamName: teamN,
            Members: members,
          }),
        });
      });

      toast.success("Submitted");
      setLoading(false);
      setTeamN("");
      setValues(initialValues);
      setMembers([]);
      setTimeout(function () {
        navigate("/cultural");
      }, 2000);
    }
  };

  const submitSolo = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!values.mName || !values.email || !values.phnNo) {
      toast.error("Enter Details");
      setLoading(false);
      setValues(initialValues);
      return;
    } else {
      await setDoc(doc(db, id, values.email), {
        Name: values.mName,
        Email: values.email,
        phoneNo: values.phnNo,
      });
      toast.success("Submitted");
      setLoading(false);
      setValues(initialValues);
      setTimeout(function () {
        navigate("/cultural");
      }, 2000);
    }
  };

  return (
    <div className=" ">
      {Object.entries(cultEvents).map((item, i) => {
        if (item[0] === id) {
          return (
            <div
              className="grid grid-cols-1
             md:grid-cols-3 h-screen w-full   ">
              <div
                className="login-box scrollbar-hidden w-full md:w-4/5 pt-20 md:pt-5 overflow-scroll h-screen md:h-fit mt-4 relative md:col-span-2"
                key={i}>
                {item[1].map((value, index) => {
                  return (
                    <div key={index}>
                      <h2 className="text-2xl font-semibold">{value.title}</h2>

                      {value.type === "group" && (
                        <div className="flex flex-col gap-5">
                          <div className="user-box">
                            <input
                              type="text"
                              value={teamN}
                              onChange={(e) => setTeamN(e.target.value)}
                              name="teamN"
                              required=""
                            />
                            <label>Team Name*</label>
                          </div>
                          {members.length !== 0 &&
                            members.map((arr_item, i) => {
                              return (
                                <div
                                  className="flex flex-col md:flex-row gap-10"
                                  key={i}>
                                  <div className="user-box">
                                    <input
                                      contentEditable={false}
                                      type="text"
                                      value={arr_item && arr_item.mName}
                                    />
                                    <label>Member {i + 1}*</label>
                                  </div>
                                  <div className="user-box">
                                    <input
                                      contentEditable={false}
                                      type="email"
                                      value={arr_item && arr_item.email}
                                    />
                                    <label>Email*</label>
                                  </div>
                                  <div className="user-box">
                                    <input
                                      contentEditable={false}
                                      type="number"
                                      value={arr_item && arr_item.phnNo}
                                    />
                                    <label>Phone No.*</label>
                                  </div>
                                </div>
                              );
                            })}
                        </div>
                      )}
                      {value.type === "group" && count <= value.limit && (
                        <div className="flex justify-center flex-col md:flex-row  md:gap-10">
                          <div className="user-box">
                            <input
                              type="text"
                              value={values && values.mName}
                              onChange={(e) =>
                                setValues({
                                  ...values,
                                  mName: e.target.value,
                                })
                              }
                              name="mName"
                              required=""
                            />
                            <label>Member {count}*</label>
                          </div>
                          <div className="user-box">
                            <input
                              type="email"
                              value={values && values.email}
                              onChange={(e) =>
                                setValues({ ...values, email: e.target.value })
                              }
                              name="email"
                              required=""
                            />
                            <label>Email*</label>
                          </div>
                          <div className="user-box">
                            <input
                              type="number"
                              value={values && values.phnNo}
                              onChange={(e) =>
                                setValues({
                                  ...values,
                                  phnNo: e.target.value,
                                })
                              }
                              name="phnNo"
                              required=""
                            />
                            <label>Phone No.*</label>
                          </div>
                          {count <= value.limit && value.type === "group" && (
                            <button
                              type="button"
                              onClick={addMember}
                              className="border-2 text-sm border-white text-white p-2 hover:text-green-600 hover:border-green-600 rounded-xl h-fit">
                              Add
                            </button>
                          )}
                        </div>
                      )}
                      {value.type === "solo" && (
                        <div className="flex flex-col gap-10">
                          <div className="user-box">
                            <input
                              type="text"
                              value={values.mName}
                              onChange={(e) =>
                                setValues({ ...values, mName: e.target.value })
                              }
                              name="mName"
                              required=""
                            />
                            <label>Name*</label>
                          </div>
                          <div className="user-box">
                            <input
                              placeholder="CSE/A3"
                              type="email"
                              value={values.email}
                              onChange={(e) =>
                                setValues({ ...values, email: e.target.value })
                              }
                              name="email"
                              required=""
                            />
                            <label>Email*</label>
                          </div>
                          <div className="user-box">
                            <input
                              type="number"
                              value={values.phnNo}
                              onChange={(e) =>
                                setValues({ ...values, phnNo: e.target.value })
                              }
                              name="phnNo"
                              required=""
                            />
                            <label>Phone No.*</label>
                          </div>
                        </div>
                      )}

                      <div className="flex gap-5 items-center ">
                        <button
                          onClick={
                            value.type === "group" ? handleSubmit : submitSolo
                          }
                          className="submit"
                          type="submit">
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          {loading ? "Submitting" : "Submit"}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className=" h-screen w-full p-5 pt-10 md:pt-24  text-white bg-[#101a26] md:rounded-lg md:shadow-lg md:shadow-black/80 flex flex-col gap-4 overflow-y-scroll">
                <h3 className="font-bold text-3xl text-center underline">
                  {item[1][0].title}
                </h3>
                <ul className="list-disc space-y-1  pl-8 leading-8">
                  {item[1][0].rules.map((rule, num) => {
                    return <li>{rule}</li>;
                  })}
                </ul>
              </div>
            </div>
          );
        }
      })}
      <ToastContainer />
    </div>
  );
};

export default cultForms;
