// PTITC 2027 timetables and fees — edit class times and prices here.
// Lesson format: [day, start, end, subject, room]
const DAYS = ["Mon","Tue","Wed","Thu","Fri","Sat"];
const DAYNAME = { Mon:"Monday", Tue:"Tuesday", Wed:"Wednesday", Thu:"Thursday", Fri:"Friday", Sat:"Saturday" };
const COLORS = { "Bahasa Melayu":"--s-bm", "English":"--s-en", "Mathematics":"--s-ma", "Science":"--s-sc", "Tamil":"--s-ta",
  "Sejarah":"--s-se", "Sejarah (Tamil)":"--s-se", "Geography":"--s-ge", "Perniagaan":"--s-bz", "Physics":"--s-ph",
  "Chemistry":"--s-ch", "Add Maths":"--s-ma", "Accounts":"--s-bz",
  "Maths (English)":"--s-ma", "Maths (Tamil)":"--s-ma", "Science (English)":"--s-sc", "Science (Tamil)":"--s-sc" };

const T_S2 = {
  std1: { name:"Standard 1", level:"p", lessons:[["Mon","20:00","21:00","English",1],["Tue","20:00","21:00","Bahasa Melayu",5],["Fri","20:00","21:00","Tamil",5],["Sat","13:30","14:30","Mathematics",5],["Sat","14:30","15:30","Science",5]] },
  std2: { name:"Standard 2", level:"p", lessons:[["Mon","21:00","22:00","English",5],["Tue","21:00","22:00","Bahasa Melayu",5],["Fri","21:00","22:00","Tamil",5],["Sat","15:30","16:30","Mathematics",5],["Sat","16:30","17:30","Science",5]] },
  std3: { name:"Standard 3", level:"p", lessons:[["Mon","20:00","21:00","Tamil",5],["Thu","20:00","21:00","Mathematics",5],["Thu","21:00","22:00","Science",5],["Sat","13:30","14:30","Bahasa Melayu",2],["Sat","14:30","15:30","English",2]] },
  std4: { name:"Standard 4", level:"p", lessons:[["Mon","18:00","19:00","Tamil",4],["Mon","19:00","20:00","Sejarah (Tamil)",4],["Tue","19:00","20:00","Bahasa Melayu",4],["Thu","18:00","19:00","Mathematics",4],["Thu","19:00","20:00","Science",4],["Sat","13:30","14:30","English",4]] },
  std5: { name:"Standard 5", level:"p", lessons:[["Mon","18:00","19:00","Sejarah (Tamil)",3],["Wed","20:00","21:00","Mathematics",2],["Wed","21:00","22:00","Science",2],["Fri","19:00","20:00","Tamil",3],["Sat","14:30","15:30","Bahasa Melayu",3],["Sat","15:30","16:30","English",3]] },
  std6: { name:"Standard 6", level:"p", lessons:[["Mon","19:00","20:00","Tamil",1],["Mon","20:00","21:00","Sejarah (Tamil)",4],["Thu","19:00","20:00","Mathematics",2],["Thu","20:00","21:00","Science",4],["Sat","14:30","15:30","Bahasa Melayu",3],["Sat","15:30","16:30","English",3]] },
  form1: { name:"Form 1", level:"s", lessons:[["Tue","20:00","21:00","Mathematics",2],["Thu","20:00","21:00","Geography",2],["Thu","21:00","22:00","English",2],["Fri","20:00","21:00","Sejarah",2],["Sat","14:30","15:30","Bahasa Melayu",1],["Sat","15:30","16:30","Science",2]] },
  form2: { name:"Form 2", level:"s", lessons:[["Tue","21:00","22:00","Mathematics",4],["Thu","20:00","21:00","English",3],["Thu","21:00","22:00","Geography",3],["Fri","21:00","22:00","Sejarah",4],["Sat","15:30","16:30","Bahasa Melayu",1],["Sat","16:30","17:30","Science",3]] },
  form3: { name:"Form 3", level:"s", lessons:[["Tue","19:00","20:00","Mathematics",2],["Thu","19:00","20:00","Geography",3],["Thu","20:00","21:00","English",3],["Fri","18:30","19:30","Sejarah",2],["Sat","16:30","17:30","Bahasa Melayu",2],["Sat","17:30","18:30","Science",2]] },
  form4: { name:"Form 4", level:"s", note:"Attend only the subjects you have registered for.", lessons:[["Mon","18:00","19:15","Add Maths",5],["Mon","19:15","20:30","Physics",2],["Tue","18:00","19:00","Perniagaan",5],["Tue","19:00","20:00","Mathematics",3],["Wed","20:00","21:00","English",3],["Fri","19:00","20:00","Sejarah",1],["Fri","20:00","21:00","Science",4],["Sat","16:15","17:30","Chemistry",4],["Sat","17:30","18:30","Bahasa Melayu",1]] },
  form5: { name:"Form 5", level:"s", note:"Attend only the subjects you have registered for.", lessons:[["Mon","18:00","19:15","Physics",2],["Mon","19:15","20:30","Add Maths",3],["Tue","18:00","19:00","Mathematics",4],["Tue","19:00","20:00","Perniagaan",5],["Wed","20:00","21:00","English",3],["Fri","19:00","20:00","Science",4],["Fri","20:00","21:00","Sejarah",3],["Sat","15:00","16:15","Chemistry",4],["Sat","17:30","18:30","Bahasa Melayu",1]] },
};
// November only: temporary timetables
const NOV_S2 = {
  // Per Seremban 2 report updated 26 Oct 2026 (pages 6, 9, 12, 29)
  form1: { lessons: [["Tue","19:00","20:00","Mathematics",2],["Thu","19:00","20:00","Geography",1],["Thu","20:00","21:00","English",2],["Fri","18:30","19:30","Sejarah",2],["Sat","16:30","17:30","Bahasa Melayu",1],["Sat","17:30","18:30","Science",2]],
           note: "November only: Form 1 follows the Form 3 timetable." },
  form3: { lessons: [["Tue","20:00","21:00","Mathematics",2],["Thu","20:00","21:00","Geography",1],["Thu","21:00","22:00","English",1],["Fri","20:00","21:00","Sejarah",2],["Sat","14:30","15:30","Bahasa Melayu",1],["Sat","15:30","16:30","Science",2]],
           note: "November only: Form 3 follows the Form 1 timetable." },
  std4: { lessons: [["Mon","20:00","21:00","English",4],["Mon","21:00","22:00","Sejarah (Tamil)",4],["Tue","20:00","21:00","Bahasa Melayu",4],["Fri","20:00","21:00","Tamil",1],["Sat","13:30","14:30","Mathematics",4],["Sat","14:30","15:30","Science",4]],
          note: "November only: Standard 4 follows the Standard 1 timetable, plus Sejarah on Monday, 9:00–10:00 PM." },
  std1: { lessons: [["Mon","18:00","19:00","Tamil",4],["Tue","19:00","20:00","Bahasa Melayu",4],["Thu","18:00","19:00","Mathematics",4],["Thu","19:00","20:00","Science",4],["Sat","13:30","14:30","English",1]],
          note: "November only: Standard 1 follows the Standard 4 timetable." },
};
const F45 = "Attend only the subjects you have registered for.";
const T_SMY = {
  std1: { name:"Standard 1", level:"p", lessons:[["Mon","20:00","21:00","English",4],["Mon","21:00","22:00","Mathematics",4],["Fri","19:00","20:00","Tamil",3],["Fri","20:00","21:00","Bahasa Melayu",4],["Fri","21:00","22:00","Science",4]] },
  std2: { name:"Standard 2", level:"p", lessons:[["Tue","20:00","21:00","English",4],["Tue","21:00","22:00","Mathematics",4],["Fri","19:00","20:00","Science",4],["Fri","20:00","21:00","Tamil",1],["Fri","21:00","22:00","Bahasa Melayu",1]] },
  std3: { name:"Standard 3", level:"p", lessons:[["Wed","20:00","21:00","English",4],["Wed","21:00","22:00","Mathematics",4],["Thu","20:00","21:00","Bahasa Melayu",4],["Fri","20:00","21:00","Science",4],["Fri","21:00","22:00","Tamil",4]] },
  std4: { name:"Standard 4", level:"p", lessons:[["Mon","18:00","19:00","Bahasa Melayu",2],["Mon","19:00","20:00","Mathematics",3],["Tue","18:00","19:00","English",1],["Thu","18:00","19:00","Sejarah",3],["Thu","19:00","20:00","Science",2],["Fri","18:00","19:00","Tamil",5]] },
  std5: { name:"Standard 5", level:"p", lessons:[["Mon","18:00","19:00","Tamil",1],["Mon","19:00","20:00","Bahasa Melayu",2],["Mon","20:00","21:00","Mathematics",3],["Tue","19:00","20:00","English",1],["Thu","19:00","20:00","Sejarah",3],["Thu","20:00","21:00","Science",2]] },
  std6: { name:"Standard 6", level:"p", lessons:[["Mon","19:00","20:00","Tamil",1],["Mon","20:00","21:00","Bahasa Melayu",1],["Mon","21:00","22:00","Mathematics",1],["Tue","20:00","21:00","English",1],["Thu","20:00","21:00","Sejarah",3],["Thu","21:00","22:00","Science",2]] },
  form1: { name:"Form 1", level:"s", lessons:[["Tue","20:00","21:00","English",2],["Tue","21:00","22:00","Sejarah",3],["Fri","20:00","21:00","Bahasa Melayu",2],["Fri","21:00","22:00","Science",3],["Sat","13:15","14:30","Geography",3],["Sat","14:30","15:45","Mathematics",2]] },
  form2: { name:"Form 2", level:"s", lessons:[["Tue","20:00","21:00","Sejarah",3],["Tue","21:00","22:00","English",2],["Fri","20:00","21:00","Science",3],["Fri","21:00","22:00","Bahasa Melayu",2],["Sat","14:30","15:45","Geography",3],["Sat","15:45","17:00","Mathematics",2]] },
  form3: { name:"Form 3", level:"s", lessons:[["Tue","18:00","19:00","Sejarah",3],["Tue","19:00","20:00","English",2],["Fri","18:00","19:00","Science",3],["Fri","19:00","20:00","Bahasa Melayu",2],["Sat","15:45","17:00","Geography",3],["Sat","17:00","18:15","Mathematics",2]] },
  form4: { name:"Form 4", level:"s", note:F45, lessons:[["Mon","19:00","20:15","Accounts",5],["Tue","18:00","19:00","English",2],["Tue","19:30","20:45","Add Maths",5],["Thu","17:00","18:15","Mathematics",2],["Fri","17:00","18:00","Bahasa Melayu",2],["Fri","18:00","19:00","Sejarah",2],["Sat","13:00","14:15","Chemistry",4],["Sat","14:15","15:30","Physics",5],["Sat","16:00","17:15","Science",1],["Sat","17:15","18:30","Perniagaan",5]] },
  form5: { name:"Form 5", level:"s", note:F45, lessons:[["Mon","20:15","21:30","Accounts",5],["Tue","17:00","18:00","English",1],["Tue","20:45","22:00","Add Maths",5],["Thu","18:15","19:30","Mathematics",1],["Fri","18:00","19:00","Bahasa Melayu",1],["Fri","19:00","20:00","Sejarah",1],["Sat","13:00","14:15","Physics",5],["Sat","14:15","15:30","Chemistry",4],["Sat","16:00","17:15","Perniagaan",5],["Sat","17:15","18:30","Science",1]] },
};
const F45_SDG = "Attend only the subjects you have registered for. Chemistry, Physics, Biology and Accounts are not offered at Serdang yet.";
const SDG_23 = [["Tue","18:00","19:00","Mathematics",2],["Wed","20:00","21:00","Bahasa Melayu",2],["Wed","21:00","22:00","Science",2],["Thu","18:00","19:00","Tamil",2],["Thu","19:00","20:00","English",2]];
const T_SDG = {
  std1: { name:"Standard 1", level:"p", lessons:[["Wed","19:00","20:00","Mathematics",3],["Wed","20:00","21:00","Science",3],["Wed","21:00","22:00","Bahasa Melayu",3],["Thu","18:00","19:00","English",3],["Thu","19:00","20:00","Tamil",3]] },
  std2: { name:"Standard 2", level:"p", lessons:SDG_23 },
  std3: { name:"Standard 3", level:"p", lessons:SDG_23 },
  std4: { name:"Standard 4", level:"p", lessons:[["Mon","18:00","19:00","Sejarah",2],["Tue","18:00","19:00","Science",4],["Tue","19:00","20:00","Mathematics",2],["Thu","20:00","21:00","English",2],["Thu","21:00","22:00","Tamil",2],["Fri","18:00","19:00","Bahasa Melayu",2]] },
  std5: { name:"Standard 5", level:"p", lessons:[["Mon","19:00","20:00","Sejarah",2],["Tue","19:00","20:00","Science",4],["Tue","20:00","21:00","Mathematics",2],["Thu","20:00","21:00","Tamil",4],["Thu","21:00","22:00","English",4],["Fri","19:00","20:00","Bahasa Melayu",4]] },
  std6: { name:"Standard 6", level:"p", lessons:[["Mon","20:00","21:00","Sejarah",2],["Tue","20:00","21:00","Science",4],["Tue","21:00","22:00","Mathematics",2],["Thu","20:00","21:00","Tamil",4],["Thu","21:00","22:00","English",4],["Fri","19:00","20:00","Bahasa Melayu",4]] },
  form1: { name:"Form 1", level:"s", lessons:[["Mon","20:00","21:00","Sejarah",3],["Tue","20:00","21:00","Geography",3],["Thu","20:00","21:00","Mathematics",3],["Thu","21:00","22:00","Science",1],["Fri","20:00","21:00","English",1],["Fri","21:00","22:00","Bahasa Melayu",2]] },
  form2: { name:"Form 2", level:"s", lessons:[["Mon","21:00","22:00","Sejarah",3],["Tue","21:00","22:00","Geography",3],["Thu","20:00","21:00","Science",1],["Thu","21:00","22:00","Mathematics",3],["Fri","20:00","21:00","Bahasa Melayu",2],["Fri","21:00","22:00","English",1]] },
  form3: { name:"Form 3", level:"s", lessons:[["Mon","19:00","20:00","Sejarah",3],["Tue","19:00","20:00","Geography",3],["Thu","18:00","19:00","Mathematics",4],["Thu","19:00","20:00","Science",1],["Fri","19:00","20:00","English",3],["Sat","15:00","16:00","Bahasa Melayu",4]] },
  form4: { name:"Form 4", level:"s", note:F45_SDG, lessons:[["Mon","18:00","19:00","Sejarah",1],["Thu","17:00","18:00","Science",4],["Fri","18:00","19:00","English",1],["Fri","19:00","20:00","Perniagaan",1],["Sat","14:45","16:00","Add Maths",1],["Sat","16:00","17:15","Mathematics",1],["Sat","17:15","18:30","Bahasa Melayu",4]] },
  form5: { name:"Form 5", level:"s", note:F45_SDG, lessons:[["Mon","19:00","20:00","Sejarah",1],["Thu","18:00","19:00","Science",1],["Fri","18:00","19:00","English",1],["Fri","20:00","21:00","Perniagaan",4],["Sat","13:30","14:45","Add Maths",1],["Sat","16:00","17:15","Bahasa Melayu",4],["Sat","17:15","18:30","Mathematics",1]] },
};
const F45_KJG = "Science stream: Physics, Chemistry and Biology. Other students: Accounts and Science. Attend only the subjects you have registered for.";
const T_KJG = {
  std1: { name:"Standard 1", level:"p", lessons:[["Wed","20:00","21:00","Bahasa Melayu",5],["Wed","21:00","22:00","English",5],["Thu","20:00","21:00","Tamil",5],["Sat","14:30","15:30","Mathematics",5],["Sat","15:30","16:30","Science",5]] },
  std2: { name:"Standard 2", level:"p", lessons:[["Wed","20:00","21:00","English",3],["Wed","21:00","22:00","Bahasa Melayu",3],["Thu","21:00","22:00","Tamil",5],["Sat","15:30","16:30","Mathematics",3],["Sat","16:30","17:30","Science",3]] },
  std3: { name:"Standard 3", level:"p", lessons:[["Tue","20:00","21:00","English",3],["Tue","21:00","22:00","Bahasa Melayu",3],["Fri","20:00","21:00","Tamil",3],["Sat","16:30","17:30","Mathematics",2],["Sat","17:30","18:30","Science",2]] },
  std4: { name:"Standard 4", level:"p", lessons:[["Mon","20:00","21:00","Science",2],["Tue","19:00","20:00","Bahasa Melayu",1],["Tue","20:00","21:00","English",1],["Tue","21:00","22:00","Sejarah",1],["Fri","18:00","19:00","Tamil",1],["Fri","19:00","20:00","Mathematics",1]] },
  std5: { name:"Standard 5", level:"p", lessons:[["Mon","19:00","20:00","Science",4],["Tue","18:00","19:00","Bahasa Melayu",2],["Tue","19:00","20:00","English",2],["Tue","20:00","21:00","Sejarah",2],["Fri","18:00","19:00","Mathematics",2],["Fri","19:00","20:00","Tamil",2]] },
  std6: { name:"Standard 6", level:"p", lessons:[["Mon","21:00","22:00","Science",2],["Tue","19:00","20:00","Sejarah",4],["Tue","20:00","21:00","Bahasa Melayu",4],["Tue","21:00","22:00","English",4],["Fri","20:00","21:00","Mathematics",4],["Fri","21:00","22:00","Tamil",4]] },
  form1: { name:"Form 1", level:"s", lessons:[["Mon","20:00","21:00","Geography",1],["Mon","21:00","22:00","English",1],["Thu","20:00","21:15","Bahasa Melayu",1],["Thu","21:15","22:30","Science",1],["Sat","09:30","10:45","Mathematics",1],["Sat","10:45","12:00","Sejarah",1]] },
  form2: { name:"Form 2", level:"s", lessons:[["Mon","20:00","21:00","English",4],["Mon","21:00","22:00","Geography",4],["Thu","20:00","21:15","Science",4],["Thu","21:15","22:30","Bahasa Melayu",4],["Sat","10:45","12:00","Mathematics",4],["Sat","12:00","13:15","Sejarah",4]] },
  form3: { name:"Form 3", level:"s", lessons:[["Mon","18:00","19:00","English",1],["Mon","19:00","20:00","Geography",1],["Thu","17:30","18:45","Bahasa Melayu",1],["Thu","18:45","20:00","Science",1],["Sat","12:00","13:15","Mathematics",1],["Sat","13:15","14:30","Sejarah",1]] },
  form4: { name:"Form 4", level:"s", note:F45_KJG, lessons:[["Mon","16:00","17:15","Bahasa Melayu",4],["Mon","17:15","18:30","Accounts",2],["Mon","17:15","18:30","Physics",3],["Tue","16:00","17:15","Science",1],["Tue","16:00","17:15","Chemistry",5],["Tue","17:15","18:30","Mathematics",4],["Thu","18:00","19:00","Sejarah",2],["Thu","19:00","20:00","English",2],["Fri","16:00","17:15","Add Maths",4],["Fri","17:15","18:30","Biology",3],["Sat","12:30","13:45","Perniagaan",3]] },
  form5: { name:"Form 5", level:"s", note:F45_KJG, lessons:[["Mon","16:00","17:15","Accounts",2],["Mon","16:00","17:15","Physics",3],["Mon","17:15","18:30","Bahasa Melayu",4],["Tue","16:00","17:15","Mathematics",4],["Tue","17:15","18:30","Science",1],["Tue","17:15","18:30","Chemistry",5],["Thu","18:00","19:00","English",4],["Thu","19:00","20:00","Sejarah",4],["Fri","16:00","17:15","Biology",3],["Fri","17:15","18:30","Add Maths",4],["Sat","13:45","15:00","Perniagaan",3]] },
};
const T_ONL = {
  std4: { name:"Standard 4", level:"p", note:"Live online classes. Times are Malaysia time. Choose Science in English or Science in Tamil.", lessons:[["Mon","19:10","20:10","English","Online"],["Mon","20:30","21:30","Maths (English)","Online"],["Tue","18:00","19:00","Tamil","Online"],["Tue","19:10","20:10","Sejarah (Tamil)","Online"],["Thu","18:00","19:00","Science (English)","Online"],["Thu","18:00","19:00","Science (Tamil)","Online"],["Fri","18:00","19:00","Bahasa Melayu","Online"]] },
  std5: { name:"Standard 5", level:"p", note:"Live online classes. Times are Malaysia time. Choose one Maths class (in English or in Tamil) and one Science class (in English or in Tamil).", lessons:[["Mon","18:00","19:00","English","Online"],["Mon","19:10","20:10","Maths (English)","Online"],["Tue","18:00","19:00","Sejarah (Tamil)","Online"],["Tue","20:30","21:30","Tamil","Online"],["Wed","20:00","21:00","Maths (Tamil)","Online"],["Thu","20:30","21:30","Science (English)","Online"],["Thu","20:30","21:30","Science (Tamil)","Online"],["Fri","19:10","20:10","Bahasa Melayu","Online"]] },
  std6: { name:"Standard 6", level:"p", note:"Live online classes. Times are Malaysia time. Choose one Maths class (in English or in Tamil) and one Science class (in English or in Tamil).", lessons:[["Mon","18:00","19:00","Maths (English)","Online"],["Mon","20:30","21:30","English","Online"],["Tue","19:10","20:10","Tamil","Online"],["Tue","20:30","21:30","Sejarah (Tamil)","Online"],["Wed","19:00","20:00","Maths (Tamil)","Online"],["Thu","19:10","20:10","Science (English)","Online"],["Thu","19:10","20:10","Science (Tamil)","Online"],["Fri","20:30","21:30","Bahasa Melayu","Online"]] },
  form1: { name:"Form 1", level:"s", note:"Live online classes. Times are Malaysia time.", lessons:[["Mon","20:00","21:00","Science","Online"],["Tue","20:00","21:00","Mathematics","Online"],["Thu","20:00","21:00","English","Online"],["Thu","21:00","22:00","Bahasa Melayu","Online"],["Fri","20:00","21:00","Geography","Online"],["Fri","21:00","22:00","Sejarah","Online"]] },
  form2: { name:"Form 2", level:"s", note:"Live online classes. Times are Malaysia time.", lessons:[["Mon","21:00","22:00","Science","Online"],["Tue","21:00","22:00","Mathematics","Online"],["Thu","20:00","21:00","Bahasa Melayu","Online"],["Thu","21:00","22:00","English","Online"],["Fri","20:00","21:00","Sejarah","Online"],["Fri","21:00","22:00","Geography","Online"]] },
  form3: { name:"Form 3", level:"s", note:"Live online classes. Times are Malaysia time.", lessons:[["Mon","19:00","20:00","Science","Online"],["Wed","21:00","22:00","English","Online"],["Thu","18:00","19:00","Mathematics","Online"],["Thu","19:00","20:00","Bahasa Melayu","Online"],["Fri","18:00","19:00","Sejarah","Online"],["Fri","19:00","20:00","Geography","Online"]] },
};
const NOV_ONL = {
  std4: { lessons:[["Mon","20:00","21:00","Maths (English)","Online"],["Mon","21:10","22:10","English","Online"],["Tue","20:00","21:00","Tamil","Online"],["Tue","21:10","22:10","Sejarah (Tamil)","Online"],["Thu","20:00","21:00","Science (English)","Online"],["Thu","20:00","21:00","Science (Tamil)","Online"],["Fri","20:00","21:00","Bahasa Melayu","Online"]], note:"November only." },
  std5: { lessons:[["Mon","18:45","19:45","Maths (English)","Online"],["Mon","20:00","21:00","English","Online"],["Tue","18:45","19:45","Tamil","Online"],["Tue","20:00","21:00","Sejarah (Tamil)","Online"],["Wed","20:00","21:00","Maths (Tamil)","Online"],["Thu","18:45","19:45","Science (English)","Online"],["Thu","18:45","19:45","Science (Tamil)","Online"],["Fri","18:45","19:45","Bahasa Melayu","Online"]], note:"November only." },
  std6: { lessons:[["Mon","17:30","18:30","Maths (English)","Online"],["Mon","18:45","19:45","English","Online"],["Tue","17:30","18:30","Tamil","Online"],["Tue","18:45","19:45","Sejarah (Tamil)","Online"],["Wed","19:00","20:00","Maths (Tamil)","Online"],["Thu","17:30","18:30","Science (English)","Online"],["Thu","17:30","18:30","Science (Tamil)","Online"],["Fri","17:30","18:30","Bahasa Melayu","Online"]], note:"November only." },
  form1: { lessons: T_ONL.form3.lessons, note: "November only: Form 1 follows the Form 3 timetable." },
  form3: { lessons: T_ONL.form1.lessons, note: "November only: Form 3 follows the Form 1 timetable." },
};
const NOV_KJG = {
  form1: { lessons: T_KJG.form3.lessons, note: "November only: Form 1 follows the Form 3 timetable." },
  form3: { lessons: T_KJG.form1.lessons, note: "November only: Form 3 follows the Form 1 timetable." },
  std4: { lessons: T_KJG.std1.lessons.concat([["Tue","21:00","22:00","Sejarah",1]]),
          note: "November only: Standard 4 follows the Standard 1 timetable, plus Sejarah on Tuesday, 9:00–10:00 PM." },
  std1: { lessons: T_KJG.std4.lessons.filter(l => !l[3].startsWith("Sejarah")),
          note: "November only: Standard 1 follows the Standard 4 timetable." },
};
const NOV_SMY = {
  form1: { lessons: T_SMY.form3.lessons, note: "November only: Form 1 follows the Form 3 timetable." },
  form3: { lessons: T_SMY.form1.lessons, note: "November only: Form 3 follows the Form 1 timetable." },
};
const NOV_SDG = {
  // Form 1 follows Form 3, but Bahasa Melayu moved to Wednesday 7-8 PM (Room 4) for November
  form1: { lessons: T_SDG.form3.lessons.filter(l => l[3] !== "Bahasa Melayu").concat([["Wed","19:00","20:00","Bahasa Melayu",4]]), note: "November only: Form 1 follows the Form 3 timetable." },
  form3: { lessons: T_SDG.form1.lessons, note: "November only: Form 3 follows the Form 1 timetable." },
};
// Branches. T: null = timetable not published yet.
const BR = {
  s2:  { name:"Seremban 2", phone:"011-7272 7698", wa:"601172727698", T:T_S2,  NOV:NOV_S2 },
  smy: { name:"Semenyih",   phone:"013-712 7274", wa:"60137127274",  T:T_SMY, NOV:NOV_SMY },
  kjg: { name:"Kajang",     phone:"010-272 7324", wa:"60102727324",  T:T_KJG, NOV:NOV_KJG },
  sdg: { name:"Serdang",    phone:"010-272 7248", wa:"60102727248",  T:T_SDG, NOV:NOV_SDG },
  onl: { name:"Online",     phone:"012-660 5622", wa:"60126605622",  T:T_ONL, NOV:NOV_ONL },
};
const AREA = { kjg:"Selangor", sdg:"Selangor", smy:"Selangor", s2:"Negeri Sembilan", onl:"Live online classes" };
const ORDER = ["kjg", "sdg", "smy", "s2", "onl"];

// Fees 2027 (from PTITC fee structure)
const FEES = {
  p13: { label: "STD 1–3", title: "Standard 1 – 3", sub: "Choose a school package or individual subjects.",
    pkgs: [["SJKT Package", ["Bahasa Melayu","English","Mathematics","Science","Tamil"], "RM202"], ["SK Package", ["Bahasa Melayu","English","Mathematics","Science"], "RM202"]],
    mix: [["1 subject","RM77"],["2 subjects","RM142"],["3 subjects","RM152"]] },
  p46: { label: "STD 4–6", title: "Standard 4 – 6", sub: "Subjects that support the next stage of learning.",
    pkgs: [["SJKT Package", ["Bahasa Melayu","English","Mathematics","Science","Tamil","Sejarah"], "RM212"], ["SK Package", ["Bahasa Melayu","English","Mathematics","Science"], "RM202"]],
    mix: [["1 subject","RM82"],["2 subjects","RM152"],["3 subjects","RM182"],["4 subjects","RM202"]] },
  f13: { label: "FORM 1–3", title: "Form 1 – 3", sub: "Build your subject combination with a package that suits you.",
    pkgs: [["Basic Package", ["Bahasa Melayu","English","Mathematics","Science"], "RM212"], ["Combo Package", ["Bahasa Melayu","English","Mathematics","Science","Sejarah","Geography"], "RM232"]],
    mix: [["2 subjects","RM162"],["3 subjects","RM192"],["4 subjects","RM212"]] },
  f45: { label: "FORM 4–5", title: "Form 4 – 5", sub: "Choose core subjects, then add the electives you need.",
    pkgs: [["Core Package", ["Bahasa Melayu","English","Mathematics","Sejarah","Science / Chemistry"], "RM232"]],
    mix: [["3 subjects","RM212","RM70 per subject"],["4 subjects","RM242","RM60 per subject"],["5 subjects","RM252","RM50 per subject"]],
    electives: ["Ekonomi","Perniagaan","Accounts","Add Maths","Physics","Biology"],
    addon: [["1 elective","RM40","per subject"],["2–3 electives","RM20","per subject"],["Up to 5 electives","RM15","per subject"]] },
};
const FEES_ONL = {
  p46: { label: "STD 4–6", title: "Standard 4 – 6 · Online", sub: "Live online classes for Standard 4 to Standard 6.",
    pkgs: [["Online classes", ["Live online lessons with PTITC teachers"], "RM122"]], mix: [] },
  f13: { label: "FORM 1–3", title: "Form 1 – 3 · Online", sub: "Live online classes for Form 1 to Form 3.",
    pkgs: [["Online classes", ["Bahasa Melayu","English","Mathematics","Science","Sejarah","Geography"], "RM152"]], mix: [] },
};
const LEVEL_OF = { std1:"p13", std2:"p13", std3:"p13", std4:"p46", std5:"p46", std6:"p46", form1:"f13", form2:"f13", form3:"f13", form4:"f45", form5:"f45" };
