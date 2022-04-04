// // export {default} from "./07c69bb5eb032ef4@3209.js";
// // https://observablehq.com/@meglalley/envision-stroubles-data-analysis-project@3209
// import define1 from "./e93997d5089d7165@2303.js";
// import define2 from "./4be0b7b0578fccff@1366.js";
// import define3 from "./1b3a22cd8be84c2f@73.js";
// import define4 from "./7dfec509126263f5@315.js";
// import define5 from "./a33468b95d0b15b0@808.js";


function _1(md){
  return(
md` # Envision Stroubles Data Analysis Project`
)
}

function _2(md){return(
md`Team Name: Envision Stroubles

Team Members: Ian Chang, Megan Hicks, Nidhi Chopdekar, Shashank Vidiyala 

Submitted to: Dr. Nicholas Polys
 `
)}

function _4(md){return(
md`**==================================================================================================================================**`
)}

async function _5(FileAttachment,md){return(
  md`
  ![image.png](${await FileAttachment("image.png").url()})`
  )}

  function _97(md){return(
    md`## **Credits**`
    )}
    
    function _98(md){return(
    md` All the team members interviewed the client, Dr. Hession on various occasions and took well structured notes during all the meetings. `
    )}
    
    function _99(md){return(
    md`All team members were directly involved in developing, writing, and editing Phase 1 and Phase 2 documents.`
    )}
    
    function _100(md){return(
    md`Since this was a team project, we wanted to be sure we all had the opportunity to learn how to accomplish key programming challenges during the project.  As a result, we set up a shared notebook and a Discord channel so that we could all participate as the notebook/project was developed.`
    )}
    
    function _101(md){return(
    md`By sharing the Observable Notebook, we were able to all contribute to the programming aspect of the project.  One person often started with one part of the development and others were able to "take the baton" when someone got stuck.`
    )}
    
    function _102(md){return(
    md`Ian Chang - Worked on data downloading, dataset formatting, time series plot development, parallel coordinates chart development, user selection options, dataset downloading, notebook editing and organization.
    
    Nidhi Chopdekar -Worked on data downloading, dataset formatting, time series plot development, parallel coordinates chart development, user selection options, dataset downloading, notebook editing and organization. 
    
    Megan Hicks - Worked on data downloading, dataset formatting, time series plot development, parallel coordinates chart development, user selection options, dataset downloading, notebook editing and organization.
    
    Shashank Vidiyala - Worked on data downloading, dataset formatting, time series plot development, parallel coordinates chart development, user selection options, dataset downloading, notebook editing and organization.`
    )}
    

export default function define(runtime, observer) {
  const main = runtime.module();
  const fileAttachments = new Map([["aggregated@2.csv",new URL("./files/7c546f03b11863f38ea8da3f9042d4b02a290266b9b47fa365fe071f0d9dba1ba3975085633af32ba58543384bf11cb6ba20f8f1e8f5e65dc759a28d8dbfdcb6",import.meta.url)],["image.png",new URL("./files/f4c68884deff4bbdf44586f10cd7def9ffb61821ac78691ac9bfc76aac9ef6e96d472777b94ea588b77caa502a00edc6e7f43bdf4c5cb2c98a8b266cb17d583d",import.meta.url)],["image@1.png",new URL("./files/bd27c5c48a16291dce41d2455eac54d343911a9b2c6dd3f2c2ef7902045f656935c0f8ac449f061f7ccdbb5104bb4170a45c36e5f45145bbc04ed6874ac9dd43",import.meta.url)],["image@5.png",new URL("./files/ab3b6f7715c8809a4562e71a0d317b991914b5de86bbf590fa019d3ce69e2fd9f3159f5710c656ef197aaf05063cb5a4d1fdab84fbcdb02a72686a4aaac0125f",import.meta.url)],["image@7.png",new URL("./files/db5d9b7114ecb3134bb1d915f761d5afe175cc7d838fdaccf8f8f785177dd0f03da71998d25ac367e4d4640b42fb818ba342637d305ce3c6198470c379f41a38",import.meta.url)],["processed_img.csv",new URL("./files/20c4adcf8d6191896b31dcedefa2d811cc45b0321f91da81b5b81760fe0f75d3beaa234b653737b744ce8717c06357d9d91428080f58e60c22ba446b292a7181",import.meta.url)],["observableData.PNG",new URL("./files/29e53d0f2f7b89e98a8efa90c2f88deffaf2ab93a663889eae99500330eb39cbe3226ca3e7c3b06a7df913a639d61219c4f02ca8bc5c888d51d2a79a9041f333",import.meta.url)]]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], _1);
  main.variable(observer()).define(["md"], _2);
  main.variable(observer()).define(["md"], _4);
  main.variable(observer()).define(["FileAttachment","md"], _5);
  main.variable(observer()).define(["md"], _4);
  main.variable(observer()).define(["md"], _97);
  main.variable(observer()).define(["md"], _98);
  main.variable(observer()).define(["md"], _99);
  main.variable(observer()).define(["md"], _100);
  main.variable(observer()).define(["md"], _101);
  main.variable(observer()).define(["md"], _102);

  return main;
}
