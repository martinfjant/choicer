import React from 'react';
import dk from "../../assets/dk.svg"
import fi from "../../assets/fi.svg"
import no from "../../assets/no.svg"
import se from "../../assets/se.svg"
export interface FlagProps {
  country: string
}

const Flag: React.SFC<FlagProps> = ({ country }) => {
  const flags: any = {
    "Denmark": dk,
    "Finland": fi,
    "Norway": no,
    "Sweden": se
  }
  return (<img src={flags[country]} />);
}

export default Flag;