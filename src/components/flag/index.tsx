import React from 'react';
import dk from "../../assets/dk.svg"
import fi from "../../assets/fi.svg"
import no from "../../assets/no.svg"
import se from "../../assets/se.svg"
import lt from "../../assets/lt.svg"
import lv from "../../assets/lv.svg"
export interface FlagProps {
  country: string
}

const Flag: React.SFC<FlagProps> = ({ country }) => {
  const flags: any = {
    "Denmark": dk,
    "Finland": fi,
    "Norway": no,
    "Sweden": se,
    "Lithuania": lt,
    "Latvia": lv
  }
  return (<img className="h-6 w-8 rounded" src={flags[country]} alt={`The flag of ${country}`} />);
}

export default Flag;