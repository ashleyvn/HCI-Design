import define1 from "./e93997d5089d7165@2303.js";
import define2 from "./4be0b7b0578fccff@1366.js";
import define3 from "./1b3a22cd8be84c2f@73.js";
import define4 from "./7dfec509126263f5@315.js";
import define5 from "./a33468b95d0b15b0@808.js";

async function _joined_files2(d3,FileAttachment,parseDate,moment){return(
    d3.csvParse( await FileAttachment("aggregated@2.csv").text(),(obj)=>({...d3.autoType(obj),TIMESTAMP: parseDate(obj['TIMESTAMPRECORD']), DAYSTAMP: (new Date(parseDate(obj['TIMESTAMPRECORD'])).toDateString()), WEEK: moment(parseDate(obj['TIMESTAMPRECORD']),"YYYY-MM-DD").isoWeek(), MONTH: (moment(parseDate(obj['TIMESTAMPRECORD']),"YYYY-MM-DD").month()+1), YEAR: moment(parseDate(obj['TIMESTAMPRECORD']),"YYYY-MM-DD").year()  }))
    )}
    
    function _parseDate(d3){return(
    d3.timeParse('%Y-%m-%d %H:%M:%S')
    )}

    export default function define(runtime, observer) {
        const main = runtime.module();
        const fileAttachments = new Map([["aggregated@2.csv",new URL("./files/7c546f03b11863f38ea8da3f9042d4b02a290266b9b47fa365fe071f0d9dba1ba3975085633af32ba58543384bf11cb6ba20f8f1e8f5e65dc759a28d8dbfdcb6",import.meta.url)],["image.png",new URL("./files/f4c68884deff4bbdf44586f10cd7def9ffb61821ac78691ac9bfc76aac9ef6e96d472777b94ea588b77caa502a00edc6e7f43bdf4c5cb2c98a8b266cb17d583d",import.meta.url)],["image@1.png",new URL("./files/bd27c5c48a16291dce41d2455eac54d343911a9b2c6dd3f2c2ef7902045f656935c0f8ac449f061f7ccdbb5104bb4170a45c36e5f45145bbc04ed6874ac9dd43",import.meta.url)],["image@5.png",new URL("./files/ab3b6f7715c8809a4562e71a0d317b991914b5de86bbf590fa019d3ce69e2fd9f3159f5710c656ef197aaf05063cb5a4d1fdab84fbcdb02a72686a4aaac0125f",import.meta.url)],["image@7.png",new URL("./files/db5d9b7114ecb3134bb1d915f761d5afe175cc7d838fdaccf8f8f785177dd0f03da71998d25ac367e4d4640b42fb818ba342637d305ce3c6198470c379f41a38",import.meta.url)],["processed_img.csv",new URL("./files/20c4adcf8d6191896b31dcedefa2d811cc45b0321f91da81b5b81760fe0f75d3beaa234b653737b744ce8717c06357d9d91428080f58e60c22ba446b292a7181",import.meta.url)],["observableData.PNG",new URL("./files/29e53d0f2f7b89e98a8efa90c2f88deffaf2ab93a663889eae99500330eb39cbe3226ca3e7c3b06a7df913a639d61219c4f02ca8bc5c888d51d2a79a9041f333",import.meta.url)]]);
        main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));

        main.variable(observer("joined_files2")).define("joined_files2", ["d3","FileAttachment","parseDate","moment"], _joined_files2);
        main.variable(observer("parseDate")).define("parseDate", ["d3"], _parseDate);

        return main;
      }