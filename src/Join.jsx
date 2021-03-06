import React, { useState, useEffect } from "react";
import Navbar from "./Join/UI/Navbar";
import JoinFormSection from "./Join/ui/formComponents/JoinFormSection";
import AgreementSection from "./Join/ui/agreementComponents/AgreementSection";
import PersonalInfoSection from "./Join/ui/PersonalInfoSection";
import SubmitButton from "./Join/ui/SubmitButton";
import formValidation from "./Join/formValidation/formValidation";
import style from "../style/join_style/JoinPage.module.css";
import UnderNavbar from "./UnderNavbar";
import enterKeyDown from "./evenfunction/enterKeyDown";
export default function Join() {
  const [joinInfo, setJoinInfo] = useState({
    id: "",
    password: "",
    fullname: "",
    email: "",
    phone: "",
    validate: "",
  });
  const [visible, setVisible] = useState("password");

  const [all, setAll] = useState(false);
  const [essential, setEssential] = useState(Array(3).fill(false));
  const [selectable, setSelectable] = useState(Array(2).fill(false));
  const [periodRadio, setPeriodRadio] = useState(null);

  const handleSubmitButton = (e) => {
    e.preventDefault();
    const validation = formValidation(joinInfo, essential, periodRadio);
    if (validation) {
      console.log({ joinInfo, essential, selectable, period: periodRadio });
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", enterKeyDown, true);
    return () => {
      document.removeEventListener("keydown", enterKeyDown, true);
    };
  }, []);

  return (
    <div>
      <div className={style.joinPage}>
        <form id="joinForm" onSubmit={handleSubmitButton}>
          <Navbar />
          <JoinFormSection
            joinInfo={joinInfo}
            setJoinInfo={setJoinInfo}
            visible={visible}
            setVisible={setVisible}
          />
          <AgreementSection
            all={all}
            setAll={setAll}
            essential={essential}
            setEssential={setEssential}
            selectable={selectable}
            setSelectable={setSelectable}
          />
          <PersonalInfoSection
            setPeriodRadio={setPeriodRadio}
            periodRadio={periodRadio}
          />
          <SubmitButton />
        </form>
      </div>
      <UnderNavbar path="review" />
    </div>
  );
}
