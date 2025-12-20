import { useEffect, useState } from "react";
import "./prayerTimes.css";
export default function PrayerTimes({ city }: { city: string }) {
  const [times, setTimes] = useState();


  useEffect(() => {
    

    fetch(`https://api.aladhan.com/v1/timingsByCity?city=${city}&country=Palestine&method=5`)
      .then((ras) =>  ras.json() )
      .then((event) => setTimes(event.data.timings))
    
  }, [city]);


  if (!times) {
    return <p>جارِ التحميل...</p>
  }
    else{
      return (
    <div className="PrayerTimes">
      <p>الفجر: {times.Fajr}</p>
      <p>الشروق: {times.Sunrise}</p>
      <p>الظهر: {times.Dhuhr}</p>
      <p>العصر: {times.Asr}</p>
      <p>المغرب: {times.Maghrib}</p>
      <p>العشاء: {times.Isha}</p>
    </div>
  );
};
}