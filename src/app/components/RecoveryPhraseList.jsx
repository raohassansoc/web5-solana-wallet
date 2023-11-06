import React from "react";

const RecoveryPhraseList = ({ children }) => {
  return (
    <div className="w-full">
      <ol className="list-decimal font-bold">{children}</ol>
    </div>
  );
};

export default RecoveryPhraseList;
