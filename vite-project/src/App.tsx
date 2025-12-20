import "./App.css";
import { useState } from "react";
import PrayerTimes from "./prayerTimes";

export default function App() {
  const [city, setCity] = useState("Nablus");

  return (
    <section>
      <div className="container">
        <div className="top_sec">
          <div className="city">
            <h3>المدينة</h3>
            <select value={city} onChange={(event) => setCity(event.target.value)}>
              <option value="Jaffa">يافا</option>
              <option value="Nablus">نابلس</option>
              <option value="Hebron">الخليل</option>
              <option value="Ramallah">رام الله</option>
              <option value="Jerusalem">القدس</option>
            </select>
          </div>
          <div className="date">
            <h3>التاريخ</h3>
            <h3>{new Date().toLocaleDateString("en-PS")}</h3>
          </div>
        </div>
        <div className="prayer">
            <PrayerTimes city={city} />
           </div>
      </div>
    </section>
  );
}
