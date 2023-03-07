import React, { useState } from "react";
import { Player } from "./Player/Player";
import { Sidebar } from "./Sidebar/Sidebar";
import * as S from "./Contents.styles";

const Contents = () => {
  const [played, setPlayed] = useState(0);
  const [isChecked, setIsChecked] = useState(false);

  const getPlayTime = progress => {
    setPlayed(progress);
    if (played.loadedSeconds * 0.5 <= played.playedSeconds) {
      setIsChecked(true);
    }
  };

  return (
    <S.Div>
      <Player getPlayTime={getPlayTime} />
      <Sidebar isChecked={isChecked} />
    </S.Div>
  );
};

export default Contents;
