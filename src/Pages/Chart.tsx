import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
export interface CountryDataType {
  active: number;
  activePerOneMillion: number;
  cases: number;
  casesPerOneMillion: number;
  continent: string;
  country: string;
  countryInfo: {
    flag: string;
    iso2: string;
    iso3: string;
    lat: number;
    long: number;
    _id: number;
  };
  critical: number;
  criticalPerOneMillion: number;
  deaths: number;
  deathsPerOneMillion: number;
  oneCasePerPeople: number;
  oneDeathPerPeople: number;
  oneTestPerPeople: number;
  population: number;
  recovered: number;
  recoveredPerOneMillion: number;
  tests: number;
  testsPerOneMillion: number;
  todayCases: number;
  todayDeaths: number;
  todayRecovered: number;
  updated: number;
}

const getData = async (): Promise<CountryDataType[]> => {
  const { data } = await axios.get<CountryDataType[]>(
    "https://disease.sh/v3/covid-19/countries"
  );
  const flattenedData = data.reduce(
    (acc: CountryDataType[], curr: CountryDataType) => acc.concat([curr]),
    []
  );
  return flattenedData;
};
const Chart = () => {
  const { data: allData, isLoading } = useQuery<CountryDataType[]>(
    "countryData",
    getData
  );
  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log("Data", allData);

  return (
    <div>
      {allData &&
        allData?.map((el, i) => {
          return (
            <div key={i}>
              <h1>{el?.continent}</h1>
            </div>
          );
        })}
    </div>
  );
};

export default Chart;
