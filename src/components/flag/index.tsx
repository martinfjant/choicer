export interface FlagProps {
  country: string
}

const Flag: React.SFC<FlagProps> = (country) => {
  return (<div>{country}></div>);
}

export default Flag;