import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.scss";
import Home from './container/Home';
import { getUserInfo, getUserResume } from './services/apiClient';

export default function App() {

  const [state, setState] = useState(null);

  async function fetchData() {
    try {
      const userInfo = await getUserInfo();
      const userResume = await getUserResume();
      if (userInfo.status === 200) {
        let userInfoData = await userInfo.json();
        setState(prev => ({ ...prev, ...userInfoData }))
      }
      if (userResume.status === 200) {
        let userResumeData = await userResume.json();
        setState(prev => ({ ...prev, ...userResumeData }))
      }
    }
    catch (err) {

    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container-fluid p-0 App">
      <Home />
    </div>
  );
}
