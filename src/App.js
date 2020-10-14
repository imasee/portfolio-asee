import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.scss";
import Home from './container/Home';
import { getUserInfo, getUserResume } from './services/apiClient';
import { userInfoFallback, userResumeFallback } from './utils/fallbackData';

export default function App() {

  const [state, setState] = useState({
    loading: true,
    data: undefined
  });

  async function fetchData() {
    try {
      let data;
      const userInfo = await getUserInfo();
      const userResume = await getUserResume();
      if (userInfo.status === 200) {
        let userInfoData = await userInfo.json();
        data = { ...data, ...userInfoData };
      }
      if (userResume.status === 200) {
        let userResumeData = await userResume.json();
        data = { ...data, ...userResumeData };
      }
      setState(prev => ({ ...prev, data: data, loading: false }));
    }
    catch (err) {
      setState(prev => ({ ...prev, data: { ...userInfoFallback, ...userResumeFallback }, loading: false }));
    }
  }

  useEffect(() => {
    // fetchData();
  }, []);

  React.useEffect(() => {
    console.log(state);
  }, [state])

  return (
    <div className="container-fluid p-0 App">
      <Home infoData={userInfoFallback} resumeData={userResumeFallback} />
    </div>
  );
}
