function birthday(year,month,date,person) {
      this.year=year
      this.month=month
      this.date=date
      this.person=person
  }

function birthdaylist() {
  }

function daysFromToday(sdate,smonth) {
  now = new Date();
   secsNow = now.getTime();
   dateNow = now.getDate();
   monthNow = now.getMonth()+1;
   yearNow = now.getFullYear();
   //yearNow += 1900;
   var birthday = new Date();
   birthday.setMonth(smonth-1);
   //birthday.setMonth(smonth);
   birthday.setDate(sdate);
   if(smonth < monthNow)
      birthday.setFullYear(yearNow+1);
      else if(smonth > monthNow)
         birthday.setFullYear(yearNow);
         else
         if(sdate < dateNow)
            birthday.setFullYear(yearNow+1);
            else
               birthday.setFullYear(yearNow);
  var secsBirthday = birthday.getTime();
  milliSecsInDay = 1000*60*60*24;
  days = (secsBirthday-secsNow)/milliSecsInDay;
  days = Math.round(days);
  days = days % 365;
  return days;
}


function writeNextBirthday(list) {

      var daysToClosest=888;
      var closest = 0;
      var i = 0;
      document.write('<ul>')
      while (i < 84) {
          if (daysFromToday(list[i].date,list[i].month)<daysToClosest) {
                  daysToClosest=daysFromToday(list[i].date,list[i].month);
                  closest=i;
if (daysToClosest==0)
              document.write("<li><b>"+list[closest].person + "</b>, vandaag !</li>");
else if (daysToClosest < 30)
document.write("<li><b>"+list[closest].person+"</b> op "+list[closest].date + "/" + list[closest].month + ".</li>");
                }
         i += 1;
      }

      document.write('</ul>')
}

blist=new birthdaylist()
  blist[0]= new birthday(1944,5,25,"Erik")
  blist[1]= new birthday(1947,3,22,"Marleen")
  blist[2]= new birthday(1970,10,30,"Kristof")
  blist[3]= new birthday(1975,4,28,"Veroniek")
  blist[4]= new birthday(1975,7,14,"Frederik")
  blist[5]= new birthday(1975,4,4,"David")
  blist[6]= new birthday(1975,4,24,"Lieve")
  blist[7]= new birthday(1975,6,12,"Marc Jourquin")
  blist[8]= new birthday(1939,9,12,"Monique")
  blist[9]= new birthday(1967,5,30,"Geert")
  blist[10]= new birthday(1970,2,8,"Linda")
  blist[11]= new birthday(1993,10,22,"Bram")
  blist[12]= new birthday(1995,8,12,"Stef")
  blist[13]= new birthday(1969,9,2,"Christel")
  blist[14]= new birthday(1941,4,12,"Bernard")
  blist[15]= new birthday(1942,10,2,"Marie-Claire")
  blist[16]= new birthday(1967,8,16,"Filip")
  blist[17]= new birthday(1967,4,16,"Claudine")
  blist[18]= new birthday(1990,2,4,"Michelle")
  blist[19]= new birthday(1991,6,30,"Iris")
  blist[20]= new birthday(1995,5,14,"Cedric")
  blist[21]= new birthday(1997,1,30,"Julie")
  blist[22]= new birthday(1971,7,7,"Mia")
  blist[23]= new birthday(1969,10,29,"Stephan")
  blist[24]= new birthday(1996,1,6,"Thijs")
  blist[25]= new birthday(1998,7,30,"Emma")
  blist[26]= new birthday(1976,10,17,"Wim")
  blist[27]= new birthday(1977,5,12,"Greet")
  blist[28]= new birthday(1942,5,13,"Calix")
  blist[29]= new birthday(1948,1,4,"Agnes (Calix)")
  blist[30]= new birthday(1973,11,28,"Peter")
  blist[31]= new birthday(1973,12,20,"Nathalie")
  blist[32]= new birthday(1978,11,24,"Stijn")
  blist[33]= new birthday(1981,1,17,"Liesbeth")
  blist[34]= new birthday(1945,8,27,"Paul")
  blist[35]= new birthday(1947,1,23,"Agnes Pot")
  blist[36]= new birthday(1970,2,16,"Hilde")
  blist[37]= new birthday(1995,12,6,"Bert")
  blist[38]= new birthday(1998,8,26,"Tim")
  blist[39]= new birthday(1972,10,3,"Els")
  blist[40]= new birthday(1968,1,11,"Frank")
  blist[41]= new birthday(1995,6,22,"Nienke")
  blist[42]= new birthday(1997,3,7,"Niels")
  blist[43]= new birthday(1974,9,29,"Leen")
  blist[44]= new birthday(1971,11,5,"Christophe")
  blist[45]= new birthday(1998,12,10,"Wout")
  blist[46]= new birthday(1977,4,9,"Steven")
  blist[47]= new birthday(1979,2,12,"Mieke")
  blist[48]= new birthday(1971,1,28,"Dirk")
  blist[49]= new birthday(1955,7,12,"Johan")
  blist[50]= new birthday(1955,8,16,"Myriam")
  blist[51]= new birthday(1985,5,25,"Jan")
  blist[52]= new birthday(1988,12,16,"Carolien")
  blist[53]= new birthday(1978,2,24,"Dimitri")
  blist[54]= new birthday(1980,9,25,"Ilse")
  blist[55]= new birthday(2005,3,30,"Kiona")
  blist[56]= new birthday(2005,1,19,"Justine")
  blist[57]= new birthday(2004,12,20,"Joran")
  blist[58]= new birthday(2004,5,28,"Jose")
  blist[59]= new birthday(2004,11,12,"Annie")
  blist[60]= new birthday(2004,8,9,"Fleur")
  blist[61]= new birthday(2004,4,5,"Annemie")
  blist[62]= new birthday(2004,2,24,"Dimitri")
  blist[63]= new birthday(2004,3,6,"Mario")
  blist[64]= new birthday(2004,10,25,"Diedierik")
  blist[65]= new birthday(2004,3,8,"Luc")
  blist[66]= new birthday(2004,10,21,"Ludwine")
  blist[67]= new birthday(2004,9,25,"Ilse")
  blist[68]= new birthday(2004,7,28,"Koen")
  blist[69]= new birthday(2004,12,5,"Valerie")
  blist[70]= new birthday(1947,8,13,"Marc")
  blist[71]= new birthday(1956,8,6,"Christine (Marc)")
  blist[72]= new birthday(1979,4,12,"Benny")
  blist[73]= new birthday(1981,2,17,"Virginie")
  blist[74]= new birthday(1985,11,10,"Aline")
  blist[74]= new birthday(2006,3,31,"Cleo")
  blist[75]= new birthday(2006,6,11,"Jolien")
  blist[76]= new birthday(2007,5,8,"Thibaut")
  blist[77]= new birthday(2007,8,9,"Jules")
  blist[78]= new birthday(2007,10,23,"Margot")
  blist[79]= new birthday(2008,7,9,"Lina")
  blist[80]= new birthday(2008,7,17,"Yannick")
  blist[81]= new birthday(2008,8,31,"Yitka")
  blist[82]= new birthday(2010,6,16,"Loic")
  blist[83]= new birthday(2012,8,26,"Jean-Louis")
  blist[84]= new birthday(2012,12,14,"Remi")

  var now=new Date()
  today=new Date(now.getYear(),now.getMonth(),now.getDate())   // today 0:00:00

   writeNextBirthday(blist)

