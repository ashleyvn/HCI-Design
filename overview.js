function _4(md){return(
md`**==================================================================================================================================**`
)}

function _5(md){return(
md`# **OVERVIEW**`
)}

function _6(md){return(
md`**==================================================================================================================================**`
)}

async function _7(FileAttachment,md){return(
md`**1. Domain Situation**


- Stroubles Creek is a  12 miles long stream
- Starts in Blacksburg and travels past Virginia Tech's campus. 
- VT Stream Research, Education and Management (StREAM) Lab is a world-class research center
- Focused on understanding the interactions of natural and human systems.
- StREAM Lab provides opportunities to concurrently conduct research, education, and outreach just kilometers from campus.

![image.png](${await FileAttachment("image.png").url()})`
)}

function _8(md){return(
md`**2. Problem Statement**

The main goal of this project is to facilitate **better access** and **visualization** of the  *wealth of data* collected by the StREAM Lab that can help people learn about Stroubles Creek so that more people can appreciate it and take care of it.    
`
)}

function _9(md){return(
md`1. **Immense amounts of Data**
2. **Current visualizations are sparse and out of date.**`
)}

async function _10(FileAttachment,md){return(
md`**3. Example Visualization by StREAM Lab**

![image@1.png](${await FileAttachment("image@1.png").url()})`
)}

function _11(md){return(
md`**4. Target Users**

- Scientists
- Researchers
- Graduate students who work with the StREAM Lab
`
)}

function _12(md){return(
md`**5. Data Abstraction**

a. Data size: >82,000 rows ... and counting!

b. Data sources:
- A dataset is available (by invitation) on the EDI Data Portal.
- Includes a high-frequency time series of stage height, stream discharge, and water quality.
- 360∘ images along the creek from two different time periods (about 6 years apart).
- Data at locations “Bridge 1” and “Bridge 2” on Stroubles Creek  are collected at regular time intervals.
- Includes ~ 25 attributes recorded every 15 minutes & recorded for ~ 10 years.
- Images (photographs) saved periodically.

`
)}

function _13(md){return(
md`**6. Task Abstraction**
- Managing the large amount of data available through the StREAM Lab as it is difficult for users to access it.
- Better access to data from the two bridge locations at different (but specific) periods of time.
- Targeted areas include looking at features within time series:
    - changes in the topography
    - trends (e.g. how changes might occur with the seasons or unusual weather events)
    - paths (e.g. different locations might have different results during the same “events”).
- Filtering data by certain attributes.
`
)}
    


    export default function define(runtime, observer) {
        const main = runtime.module();
        const fileAttachments = new Map([["aggregated@2.csv",new URL("./files/7c546f03b11863f38ea8da3f9042d4b02a290266b9b47fa365fe071f0d9dba1ba3975085633af32ba58543384bf11cb6ba20f8f1e8f5e65dc759a28d8dbfdcb6",import.meta.url)],["image.png",new URL("./files/f4c68884deff4bbdf44586f10cd7def9ffb61821ac78691ac9bfc76aac9ef6e96d472777b94ea588b77caa502a00edc6e7f43bdf4c5cb2c98a8b266cb17d583d",import.meta.url)],["image@1.png",new URL("./files/bd27c5c48a16291dce41d2455eac54d343911a9b2c6dd3f2c2ef7902045f656935c0f8ac449f061f7ccdbb5104bb4170a45c36e5f45145bbc04ed6874ac9dd43",import.meta.url)],["image@5.png",new URL("./files/ab3b6f7715c8809a4562e71a0d317b991914b5de86bbf590fa019d3ce69e2fd9f3159f5710c656ef197aaf05063cb5a4d1fdab84fbcdb02a72686a4aaac0125f",import.meta.url)],["image@7.png",new URL("./files/db5d9b7114ecb3134bb1d915f761d5afe175cc7d838fdaccf8f8f785177dd0f03da71998d25ac367e4d4640b42fb818ba342637d305ce3c6198470c379f41a38",import.meta.url)],["processed_img.csv",new URL("./files/20c4adcf8d6191896b31dcedefa2d811cc45b0321f91da81b5b81760fe0f75d3beaa234b653737b744ce8717c06357d9d91428080f58e60c22ba446b292a7181",import.meta.url)],["observableData.PNG",new URL("./files/29e53d0f2f7b89e98a8efa90c2f88deffaf2ab93a663889eae99500330eb39cbe3226ca3e7c3b06a7df913a639d61219c4f02ca8bc5c888d51d2a79a9041f333",import.meta.url)]]);
        main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
        main.variable(observer()).define(["md"], _4);
        main.variable(observer()).define(["md"], _5);
        main.variable(observer()).define(["md"], _6);
        main.variable(observer()).define(["FileAttachment","md"], _7);
        main.variable(observer()).define(["md"], _8);
        main.variable(observer()).define(["md"], _9);
        main.variable(observer()).define(["FileAttachment","md"], _10);
        main.variable(observer()).define(["md"], _11);
        main.variable(observer()).define(["md"], _12);
        main.variable(observer()).define(["md"], _13);
        return main;
      }
      