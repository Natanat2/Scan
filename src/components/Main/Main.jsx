import React from "react";
import {Navigate, Route,Routes} from "react-router-dom";
import { useSelector } from "react-redux";
import MainPage from "./MainPage/MainPage";
import Authorization from "../Authorization/Authorization";
import Search from "../Search/Search";
import Result from "../Result/Result";

const Main = () => {
  let companyInfo = useSelector(state => state.profile.companyInfo)
  return companyInfo ? (
        <Routes> 
          <Route path="/" element={<MainPage />}/>
          <Route path="/search" element={<Search/>}/>
          <Route path="/result" element={<Result/>}/>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes> 
  ) : (
    <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/login" element={<Authorization/>} />
        <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}


export default Main
