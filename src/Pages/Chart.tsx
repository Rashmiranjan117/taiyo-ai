import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import ChartComponent from "../Components/ChartComponent";
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
  // const countryLatLng: { [key: string]: LatLngExpression } = {};
  // data.forEach((item) => {
  //   countryLatLng[item.countryInfo.iso2] = [
  //     item.countryInfo.lat,
  //     item.countryInfo.long,
  //   ];
  // });
  // return flattenedData.map((item) => ({
  //   ...item,
  //   latlng: countryLatLng[item.countryInfo.iso2],
  // }));
  return flattenedData;
};
const Chart = () => {
  const { data: allData, isLoading } = useQuery<CountryDataType[]>(
    "countryData",
    getData
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [lat, setLat] = useState<number | null>(null);
  const [long, setLong] = useState<number | null>(null);
  const [filteredData, setFilteredData] = useState<CountryDataType[]>([]);
  useEffect(() => {
    const timerId = setTimeout(() => {
      const filtered = allData?.filter((el) => {
        return el?.country?.toLowerCase().includes(searchTerm.toLowerCase());
      });
      setFilteredData(filtered || []);
    }, 500);

    if (filteredData.length === 1) {
      setLat(filteredData[0]?.countryInfo?.lat);
      setLong(filteredData[0]?.countryInfo?.long);
    } else {
      setLat(null);
      setLong(null);
    }
    return () => clearTimeout(timerId);
  }, [searchTerm, allData]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log("Data", filteredData);

  return (
    <div className="flex flex-col bg-white justify-center items-center w-full h-100 px-4 py-14 gap-4">
      <input
        type="text"
        placeholder="Search By Country"
        value={searchTerm}
        className="px-2 py-2 border rounded"
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {filteredData && filteredData.length === 1 ? (
        <div className="border px-4 py-4 rounded flex-col gap-4">
          <p>{filteredData[0]?.country}</p>
          <p>Active Cases: {filteredData[0]?.active}</p>
          <p>Recovered Cases: {filteredData[0]?.recovered}</p>
          <p>Deaths Cases: {filteredData[0]?.deaths}</p>
          <ChartComponent activeCases={filteredData[0]?.active} recoveredCases={filteredData[0]?.recovered} deathCases={filteredData[0]?.deaths} />
        </div>
      ) : (
        <div>
          <p>No data Found.</p>
        </div>
      )}
    </div>
  );
};

export default Chart;
