define(function() {
    return {

        type: "line",
        height: 800,
        rows: [
            {
                view: 'toolbar',
                cols: [

                    { template: "<H1><B>Patients information</B></H1>" +
                            "__________________________________________________________________________" +
                            "<dfn><H3>FCs: Marsova Sezim Marsovna</dfn></H3>" +
                            "<dfn><H3>Date of birth: 10 November 2003. </dfn></H3>" +
                            "<dfn><H3>Gender: Female. </dfn></H3>" +
                            "<dfn><H3>Address: Kyrgyzstan, Osh, Salieva №20, f. 18. </dfn></H3>" +
                            "<dfn><H3>Blood type: 1</dfn></H3>" +
                            "<dfn><H3>Rhesus factor: Positiv </dfn></H3>" +
                            "<dfn><H3>Contacts: +996 550 066303 </dfn></H3>" +
                            "__________________________________________________________________________" +
                            "<H1><B>Medical history</B></H1>" +
                            "______________________________________" +
                            "<p>From November 6, 2019 to November 18, 2019, she underwent treatment " +
                            "at the 4th City Hospital in Bishkek. She was diagnosed with Hepatitis B.</p>" +
                            "______________________________________" +
                            "<p>From May 2020 to June, she was in the hospital due to a broken leg</p>" +
                            "______________________________________" },
                    { template: "<H2>Is currently receiving: \t&#10003; </H2>" +
                            "<dfn><b>Where is the patient being treated at the moment: Kyrgyzstan, Bishkek, Zhukeeva-Pudovkina, 75 'CSM #6'</dfn></b>" +
                            "<p></p><dfn><b>Diagnosis: Covid-19</dfn></b>" +
                            "<p></p><dfn><H3>Notes: </dfn></H3>" +
                            "<p></p><dfn><b>3 January 2022 08:00 Family physician </dfn></b>" +
                            "<p></p><dfn><b>4 January 2022 09:30 Physiotherapist </dfn></b>" +
                            "<p></p><dfn><b>4 January 2022 11:30 Family physician </dfn></b>"


                    },
                ]
            }

        ]
    }
})