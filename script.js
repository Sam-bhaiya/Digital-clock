// digital clock javascript
// days script
let date = new Date();
let day = document.querySelector(".day");
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let today = date.getDay();
for (let i = 0; i <= today; i++) {
  if (today === i) {
    day.innerText = days[i];
  }
}
// month script
let month = document.querySelector(".month");
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let current_month = date.getMonth();
//  console.log(current_month);
for (let i = 0; i <= current_month; i++) {
  if (current_month === i) {
    month.innerText = months[i];
  }
}

// date script
let dates = document.querySelector(".date");
let current_date = date.getDate();
dates.innerText = current_date;
//    year script
let years = document.querySelector(".year");
let current_year = date.getFullYear();
years.innerText = current_year;

//  time script
let hours = document.querySelector(".hour span");
let mins = document.querySelector(".min span");
let second = document.querySelector(".sec span");
let clock = function () {
  let current_time = new Date();
  let hour = current_time.getHours();
  let min = current_time.getMinutes();
  let sec = current_time.getSeconds();
  hours.textContent = hour;
  mins.textContent = min;
  second.textContent = sec;
};
clock();
setInterval(clock, 1000);

//  alarm script
let alarm_clock = function () {
  // audio script
  let default_audio = new Audio("hen-sound.mp3");
  let audio0 = " ";
  let audio = new Audio("alarm-tone.wav");
  let audio1 = new Audio("alarm-tone1.mp3");
  let audio2 = new Audio("alarm-tone2.wav");
  let audio_arr = [audio, audio1, audio2];
  let audio_button = document.querySelector(".alarm-section details ul .a1");
  let audio_button1 = document.querySelector(".alarm-section details ul .a2");
  let audio_button2 = document.querySelector(".alarm-section details ul .a3");
  let i = audio_button.value;
  let j = audio_button1.value;
  let k = audio_button2.value;
  // if (audio_arr[0] === audio){
  //    audio0.play();
  // }
  //  audio0 = audio_arr[i];

  audio_button.addEventListener("click", () => {
    if (audio_button.value === i) {
      audio0 = audio_arr[i];
      console.log(audio0);
    }
  });
  audio_button1.addEventListener("click", () => {
    if (audio_button1.value === j) {
      audio0 = audio_arr[j];
      console.log(audio0);
    }
  });
  audio_button2.addEventListener("click", () => {
    if (audio_button2.value === k) {
      audio0 = audio_arr[k];
      console.log(audio0);
    }
  });
  console.log(audio0);
  //   audio script end
  let alarm = document.querySelector(".alarm-section form");
  alarm.addEventListener("submit", (e) => {
    e.preventDefault();
    let set_alarm = alarm.timer.value;
    //   console.log(set_alarm);
    let check = function () {
      let current_alarm = new Date();
      let current_hour = current_alarm.getHours();
      let current_min = current_alarm.getMinutes();
      let complete_time = current_hour + ":" + current_min; //if time like this-- 10:22, 11:34
      let complete_times = current_hour + ":0" + current_min; //if time like this-- 11:02, 11:04
      let complete_times1 = "0" + current_hour + ":0" + current_min; //if time like this-- 09:01, 03:04
      let complete_times2 = "0" + current_hour + ":" + current_min; //if time like this-- 09:22, 01:34
      // console.log(complete_time);
      if (set_alarm === complete_time) {
        if (audio0 === audio) {
          audio0.play();
        } else if (audio0 === audio1) {
          audio0.play();
        } else if (audio0 === audio2) {
          audio0.play();
        } else {
          default_audio.play();
        }
      } else if (set_alarm === complete_times) {
        if (audio0 === audio) {
          audio0.play();
        } else if (audio0 === audio1) {
          audio0.play();
        } else if (audio0 === audio2) {
          audio0.play();
        } else {
          default_audio.play();
        }
      } else if (set_alarm === complete_times1) {
        if (audio0 === audio) {
          audio0.play();
        } else if (audio0 === audio1) {
          audio0.play();
        } else if (audio0 === audio2) {
          audio0.play();
        } else {
          default_audio.play();
        }
      } else if (set_alarm === complete_times2) {
        if (audio0 === audio) {
          audio0.play();
        } else if (audio0 === audio1) {
          audio0.play();
        } else if (audio0 === audio2) {
          audio0.play();
        } else {
          default_audio.play();
        }
      }
    };
    check();
    setInterval(check, 1000);
  });
};
alarm_clock();
