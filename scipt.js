
        const box1 = document.getElementById("doorBox1");
        const box2 = document.getElementById("doorBox2");
        const box3 = document.getElementById("doorBox3");
        const box4 = document.getElementById("doorBox4");
        const box5 = document.getElementById("doorBox5");
        const box6 = document.getElementById("doorBox6");
        const box7 = document.getElementById("doorBox7");
        const box8 = document.getElementById("doorBox8");
        const box9 = document.getElementById("doorBox9");
        const box10 = document.getElementById("doorBox10");
        const box11 = document.getElementById("doorBox11");
        const box12 = document.getElementById("doorBox12");
        const box13 = document.getElementById("doorBox13");
        const box14 = document.getElementById("doorBox14");
        const box15 = document.getElementById("doorBox15");
        const box16 = document.getElementById("doorBox16");
        const box17 = document.getElementById("doorBox17");
        const box18 = document.getElementById("doorBox18");
        const box19 = document.getElementById("doorBox19");
        const box20 = document.getElementById("doorBox20");
        const box21 = document.getElementById("doorBox21");
        const box22 = document.getElementById("doorBox22");
        const box23 = document.getElementById("doorBox23");
        const box24 = document.getElementById("doorBox24");
        const ans = document.getElementById("ans");
        const ans2 = document.getElementById("ans2");
        const ans3 = document.getElementById("ans3");
        const ans4 = document.getElementById("ans4");
        const ans5 = document.getElementById("ans5");
        const ans6 = document.getElementById("ans6");
        const ans7 = document.getElementById("ans7");
        const ans8 = document.getElementById("ans8");
        const ans9 = document.getElementById("ans9");
        const ans10 = document.getElementById("ans10");
        const ans11 = document.getElementById("ans11");
        const ans12 = document.getElementById("ans12");
        const ans13 = document.getElementById("ans13");
        const ans14 = document.getElementById("ans14");
        const ans15 = document.getElementById("ans15");
        const ans16 = document.getElementById("ans16");
        const ans17 = document.getElementById("ans17");
        const ans18 = document.getElementById("ans18");
        const ans19 = document.getElementById("ans19");
        const ans20 = document.getElementById("ans20");
        const ans21 = document.getElementById("ans21");
        const ans22 = document.getElementById("ans22");
        const ans23 = document.getElementById("ans23");
        const ans24 = document.getElementById("ans24");
        let dayone = localStorage.getItem('dayone')
        let daytwo = localStorage.getItem('daytwo')
        let daythree = localStorage.getItem('daythree')
        let dayfour = localStorage.getItem('dayfour')
        let dayfive = localStorage.getItem('dayfive')
        let daysix = localStorage.getItem('daysix')
        let dayseven = localStorage.getItem('dayseven')
        let dayeigth = localStorage.getItem('dayeigth')
        let daynine = localStorage.getItem('daynine')
        let dayten = localStorage.getItem('dayten')
        let dayeleven = localStorage.getItem('dayeleven')
        let daytwelve = localStorage.getItem('daytwelve')
        let daythirteen = localStorage.getItem('daythirteen')
        let dayfouteen = localStorage.getItem('dayfouteen')
        let dayfifteen = localStorage.getItem('dayfifteen')
        let daysixteen = localStorage.getItem('daysixteen')
        let dayseventeen = localStorage.getItem('dayseventeen')
        let dayeithteen = localStorage.getItem('dayeithteen')
        let dayninteen = localStorage.getItem('dayninteen')
        let daytwenty = localStorage.getItem('daytwenty')
        let daytwentyone = localStorage.getItem('daytwentyone')
        let daytwentytwo = localStorage.getItem('daytwentytwo')
        let daytwentythree = localStorage.getItem('daytwentythree')
        let daytwentyfour = localStorage.getItem('daytwentyfour')



        if (dayone === "23") {
            box1.classList.add("open"); // or toggle if you prefer
        }
        ans.addEventListener("input", () => {
            if (ans.value === "23") {
                box1.classList.add("open"); // or toggle if you prefer
                localStorage.setItem('dayone', ans.value);
            };
        });
        if (daytwo === "16") {
            box2.classList.add("open"); // or toggle if you prefer
        }

        ans2.addEventListener("input", () => {
            if (ans2.value === "16") {
                box2.classList.add("open");
                localStorage.setItem('daytwo', ans2.value);
            };


        });
        if (daythree === "13") {
            box3.classList.add("open"); // or toggle if you prefer
        }
        ans3.addEventListener("input", () => {


            if (ans3.value === "13") {
                box3.classList.add("open"); // or toggle if you prefer
                localStorage.setItem('daythree', ans3.value);
            }

        });
          if(dayfour === "6"){
               box4.classList.add("open"); // or toggle if you prefer
        }
        ans4.addEventListener("input", () => {
            console.log(ans.value);

            if (ans4.value === "6") {
                box4.classList.add("open"); // or toggle if you prefer
                localStorage.setItem('dayfour', ans4.value);
            }
        });
          if(dayfive === "20"){
               box5.classList.add("open"); // or toggle if you prefer
        }
        ans5.addEventListener("input", () => {
            console.log(ans.value);

            if (ans5.value === "20") {
                box5.classList.add("open"); // or toggle if you prefer
                localStorage.setItem('dayfive', ans5.value);
            }
        });
          if(daysix === "1"){
               box6.classList.add("open"); // or toggle if you prefer
        }
        ans6.addEventListener("input", () => {
            console.log(ans.value);

            if (ans6.value === "1") {
                box6.classList.add("open"); // or toggle if you prefer
                localStorage.setItem('daysix', ans6.value);
            }
        });
          if(dayseven === "26"){
               box7.classList.add("open"); // or toggle if you prefer
        }
        ans7.addEventListener("input", () => {
            console.log(ans.value);

            if (ans7.value === "26") {
                box7.classList.add("open"); // or toggle if you prefer
                localStorage.setItem('dayseven', ans7.value);
            }
        });
          if(dayeigth === "6"){
               box8.classList.add("open"); // or toggle if you prefer
        }
        ans8.addEventListener("input", () => {
            console.log(ans.value);

            if (ans8.value === "6") {
                box8.classList.add("open"); // or toggle if you prefer
                localStorage.setItem('dayeigth', ans8.value);
            }
        });
          if(daynine === "24"){
               box9.classList.add("open"); // or toggle if you prefer
        }
        ans9.addEventListener("input", () => {
            console.log(ans.value);

            if (ans9.value === "24") {
                box9.classList.add("open"); // or toggle if you prefer
                localStorage.setItem('daynine', ans9.value);
            }
        });
          if(dayten === "32"){
               box10.classList.add("open"); // or toggle if you prefer
        }
        ans10.addEventListener("input", () => {
            console.log(ans.value);

            if (ans10.value === "32") {
                box10.classList.add("open"); // or toggle if you prefer
                localStorage.setItem('dayten', ans10.value);
            }
        });
          if(dayeleven === "18"){
               box11.classList.add("open"); // or toggle if you prefer
        }
        ans11.addEventListener("input", () => {
            console.log(ans.value);

            if (ans11.value === "18") {
                box11.classList.add("open"); // or toggle if you prefer
                localStorage.setItem('dayeleven', ans11.value);
            }
        });
          if(daytwelve === "48"){
               box12.classList.add("open"); // or toggle if you prefer
        }
        ans12.addEventListener("input", () => {
            console.log(ans.value);

            if (ans12.value === "48") {
                box12.classList.add("open"); // or toggle if you prefer
                localStorage.setItem('daytwelve', ans12.value);
            }
        });
          if(daythirteen === "7"){
               box13.classList.add("open"); // or toggle if you prefer
        }
        ans13.addEventListener("input", () => {
            console.log(ans.value);

            if (ans13.value === "7") {
                box13.classList.add("open"); // or toggle if you prefer
                localStorage.setItem('daythirteen', ans13.value);
            }
        });
          if(dayfouteen === "32"){
               box14.classList.add("open"); // or toggle if you prefer
        }
        ans14.addEventListener("input", () => {
            console.log(ans.value);

            if (ans14.value === "32") {
                box14.classList.add("open"); // or toggle if you prefer
                localStorage.setItem('dayfouteen', ans14.value);
            }
        });
          if(dayfifteen === "72"){
               box15.classList.add("open"); // or toggle if you prefer
        }
        ans15.addEventListener("input", () => {
            console.log(ans.value);

            if (ans15.value === "72") {
                box15.classList.add("open"); // or toggle if you prefer
                localStorage.setItem('dayfifteen', ans15.value);
            }
        });
          if(daysixteen === "19"){
               box16.classList.add("open"); // or toggle if you prefer
        }
        ans16.addEventListener("input", () => {
            console.log(ans.value);

            if (ans16.value === "19") {
                box16.classList.add("open"); // or toggle if you prefer
                localStorage.setItem('daysixteen', ans16.value);
            }
        });
          if(dayseventeen === "6"){
               box17.classList.add("open"); // or toggle if you prefer
        }
        ans17.addEventListener("input", () => {
            console.log(ans.value);

            if (ans17.value === "6") {
                box17.classList.add("open"); // or toggle if you prefer
                localStorage.setItem('dayseventeen', ans17.value);
            }
        });
          if(dayeithteen === "23"){
               box18.classList.add("open"); // or toggle if you prefer
        }
        ans18.addEventListener("input", () => {
            console.log(ans.value);

            if (ans18.value === "23") {
                box18.classList.add("open"); // or toggle if you prefer
                localStorage.setItem('dayeithteen', ans18.value);
            }
        });
          if(dayninteen === "27"){
               box19.classList.add("open"); // or toggle if you prefer
        }
        ans19.addEventListener("input", () => {
            console.log(ans.value);

            if (ans19.value === "27") {
                box19.classList.add("open"); // or toggle if you prefer
                localStorage.setItem('dayninteen', ans19.value);
            }
        });
          if(daytwenty === "6"){
               box20.classList.add("open"); // or toggle if you prefer
        }
        ans20.addEventListener("input", () => {
            console.log(ans.value);

            if (ans20.value === "6") {
                box20.classList.add("open"); // or toggle if you prefer
                localStorage.setItem('daytwenty', ans20.value);
            }
        });
          if(daytwentyone === "18"){
               box21.classList.add("open"); // or toggle if you prefer
        }
        ans21.addEventListener("input", () => {
            console.log(ans.value);

            if (ans21.value === "18") {
                box21.classList.add("open"); // or toggle if you prefer
                localStorage.setItem('daytwentyone', ans21.value);
            }
        });
          if(daytwentytwo === "15"){
               box22.classList.add("open"); // or toggle if you prefer
        }
        ans22.addEventListener("input", () => {
            console.log(ans.value);

            if (ans22.value === "15") {
                box22.classList.add("open"); // or toggle if you prefer
                localStorage.setItem('daytwentytwo', ans22.value);
            }
        });
          if(daytwentythree === "20"){
               box23.classList.add("open"); // or toggle if you prefer
        }
        ans23.addEventListener("input", () => {
            console.log(ans.value);

            if (ans23.value === "20") {
                box23.classList.add("open"); // or toggle if you prefer
                localStorage.setItem('daytwentythree', ans23.value);
            }
        });
          if(daytwentyfour === "17"){
               box24.classList.add("open"); // or toggle if you prefer
        }
        ans24.addEventListener("input", () => {
            console.log(ans.value);

            if (ans24.value === "17") {
                box24.classList.add("open"); // or toggle if you prefer
                localStorage.setItem('daytwentyfour', ans24.value);
            }
        });
   