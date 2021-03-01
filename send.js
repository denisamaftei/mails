const ExcelJS = require("exceljs");
const nodemailer = require("nodemailer");

const workbook = new ExcelJS.Workbook();

workbook.xlsx.readFile("./Apelative.xlsx")
    .then(()=> {
      const worksheet = workbook.getWorksheet(1);
      
      // studentName.eachCell((cell, rowNumber) => {
      //   console.log(cell.value);
      // });
      
      // console.log(worksheet.getRow(2).getCell(1).value);
      // worksheet.eachRow((row, rowNumber) => {
      for(let i = 2; i < 3; i++) {
      
      const sendController = nodemailer.createTransport({
        host: "smtp.gmail.com", // Send mail using built-in transport View support list: https://nodemailer.com/smtp/well-known/
        port: 465, // SMTP port
        secure: true, // used SSL
        auth: {
          user: "denisa.mihaela.maftei@gmail.com",
          pass: "zzaeexdxnqkllcll"
        }
      });

      let name = worksheet.getRow(i).getCell(1).value;
      let splitNames = name.split(" ");
      let course = worksheet.getRow(i).getCell(2).value;
      let splitCourses = course.split(" ");
      let ability1 = "";
      let ability2 = "";
      let ability3 = "";
      let ability4 = "";
      let abilities = "";
      let futureAbility1 = "";
      let futureAbility2 = "";
      let futureAbility3 = "";
      let futureAbility4 = "";
      let futureAbilities = "";
      let best = worksheet.getRow(i).getCell(4).value.toLowerCase();
      let socialSkill1 = worksheet.getRow(i).getCell(5).value;
      let socialSkill2 = worksheet.getRow(i).getCell(6).value;
      let socialSkill3 = worksheet.getRow(i).getCell(7).value;
      let socialSkill4 = worksheet.getRow(i).getCell(8).value;

      for(let j = 2; j < 21; j++) {

        let checkCourses = "";
        if(worksheet.getRow(j).getCell(14).value) {
          checkCourses = worksheet.getRow(j).getCell(14).value.split(" ");
        }
        if(checkCourses[0] == splitCourses[0] || checkCourses.includes(splitCourses[0])) {
          abilities = worksheet.getRow(j).getCell(15).value.split(";");
          ability1 = abilities[0];
          ability2 = abilities[1];
          ability3 = abilities[2];
          ability4 = abilities[3];
        }
      }

      for(let k = 2; k < 21; k++) {

        let checkCourses = "";
        if(worksheet.getRow(k).getCell(14).value) {
          checkCourses = worksheet.getRow(k).getCell(14).value.split(" ");
        }
        if(checkCourses[0] == splitCourses[0] || checkCourses.includes(splitCourses[0])) {
          futureAbilities = worksheet.getRow(k).getCell(16).value.split(";");
          futureAbility1 = futureAbilities[0];
          futureAbility2 = futureAbilities[1];
          futureAbility3 = futureAbilities[2];
          futureAbility4 = futureAbilities[3];
        }
      }

        const mailOptions = {
          from: "denisa.mihaela.maftei@gmail.com",
          to: "denysadeny11@yahoo.com",
          subject: "Logiscool Bd. Turda – Feedback " + name ,
          html: "<p> Bine te-am regăsit, </p> " +
          "<p> Ne bucurăm să îți trimitem, împreună cu echipa de traineri Logiscool Bd. Turda un feedback despre " +"<b><i>"+splitNames[1] + "</b></i>"+" și parcursul lui alături de noi în acest semestru. Stim că este important pentru tine să înțelegi ce învață copiii la Logiscool și de ce sunt atât de încântați după fiecare sesiune. Lumea digitală aduce o mulțime de beneficii, de la dobândirea de cunoștințe practice în orice domeniu, până la dezvoltarea abilităților cognitive. </p> " +
          "<p>Ce a realizat " + "<b><i>"+splitNames[1] +"</b></i>"+" alături de noi în aceste luni?</p> " +
         " <ul><li>" + ability1 +"</li> " +
         " <li> " + ability2 +" </li> " +
          '<li>' + ability3 +'</li>'  +
          "<li>" + ability4 + "</li> </ul> " +
           
         " <p>În contul MyLogiscool al lui "+"<b><i>"+ splitNames[1] +"</b></i>"+ " la secțiunea “Profilul Meu” la “Certificate” veți  găsi diploma Logiscool de finalizare a acestui modul de programare care include informațiile de mai sus. </p>" +
           
          "<p>Ce va învăța în semestrul următor?</p> " +
         " <ul><li>"+ futureAbility1 + " </li>" +
         " <li>" + futureAbility2 +"</li>" +
          '<li>'+ futureAbility3 + '</li> ' +
          "<li>"+ futureAbility4 +"</li></ul>" +
           
         " <p>Ne dorim ca abilitățile dobândite să îi fie utile pe viitor și să le aplice cu succes. </p> "+
          '<p>Din punct de vedere al competențelor sociale, am remarcat la ' +"<b><i>"+ splitNames[1]+"</b></i>"+': <p>'+
         ' <ul><li>'+ socialSkill1 + '</li> ' +
          "<li>" + socialSkill2 + "</li> "+
         " <li>"+ socialSkill3 +"</li>"+
         ' <li>' + socialSkill4 + '</li></ul> '+
           
         " <p>Unicitatea este una dintre calitățile pe care le apreciem cel mai mult la elevii noștri, iar <b><i>" + 
           splitNames[1]+ "</b></i> a reușit în timpul petrecut alături de noi să se remarce că fiind " + "<b>"+best +"</b>" +
          ". Îi înmânăm cu bucurie diplomă care atestă acest lucru și sperăm să ne surprindă plăcut în continuare.</p> " +
           
         " <p>Ne bucurăm să îl avem pe " +"<b><i>"+ splitNames[1] +"</b></i>"+ " alături de noi și vă așteptăm cu drag să continuăm împreună educația digitală în semestrul următor sau la tabere. Vă mulțumim! <p>" +
           
           
         '<p style="margin-top:5px;margin-bottom:2px"><b><span style="display:block;font-size: 12.0pt;color: #009add;text-transform: uppercase;background: #fff;font-family: Arial,sans-serif;">' + 
         '<span>LAURA</span> ENE </span></b></p>' +

         '<p style="margin-top:5px;margin-bottom:2px"><b><span style="font-size:9.0pt;font-family:Arial,sans-serif;color:#333333;background:#fff;display:block">'+ 
         "School Manager, Logiscool București - Bd. Turda </span></b></p>" +
         
         "<p style='margin-top:5px;margin-bottom:2px'><span><a href='mailto:laura.ene@logiscool.com'>"+
         "<span style='font-size:9.0pt;font-family:Arial,sans-serif;color:#666666;border:none windowtext 1.0pt;padding:0cm;background:white'>"+
        " laura.ene@logiscool.com</span></a> </span>"+
        "<span style='font-size:9.0pt;font-family:Arial,sans-serif;color:#009add;border:none windowtext 1.0pt;padding:0cm;background:white'>| </span><a href='tel:+40771651996'><span style='font-size:9.0pt;font-family:Arial,sans-serif;color:#666666;border:none windowtext 1.0pt;padding:0cm;background:#fff'>+40771651996  </span></a></p>" +
         
         "<p style='margin-top:5px;margin-bottom:2px'><a href='https://www.logiscool.com/ro/'><span style='font-size:9.0pt;font-family:Arial,sans-serif;color:#666666;border:none windowtext 1.0pt;padding:0cm'>"+
         "www.logiscool.com/ro</span></a> <span style='font-size:9.0pt;font-family:Arial,sans-serif;color:#009add;border:none windowtext 1.0pt;padding:0cm'> |</span>"+
         "<span style='font-size:9.0pt;font-family:Arial,sans-serif;color:#666666;border:none windowtext 1.0pt;padding:0cm'>Strada Iordache Golescu nr.17, etaj 2 Regina Maria Office Building 011302 București, Sector 1</span></p>" +
         "<p><a href='https://www.logiscool.com/ro/'><img src='cid:lgs.png' style='width:2.3437in;height:.4166in'></a></p>",
         attachments: [{
          filename: 'lgs.png',
          path: './lgs.png',
          cid: 'lgs.png' //same cid value as in the html img src
      }]
  
        };
        sendController.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.log(error);
          } else {
            console.log("**********OK**********" + info);
          }
        });
      }});
    // })
