  
    function _90(md){return(
    md`**=============================================================================================================================**`
    )}
    
    function _91(md){return(
    md`# **VALIDATION**`
    )}
    
    function _92(md){return(
    md`**=============================================================================================================================**
    `
    )}
    
    function _93(md){return(
    md`## 1.0  Solution Justification`
    )}
    
    function _94(md){return(
    md` The main concerns and desires of the client that are addressed in our design 
     - Enables users to easily access the large amount of data collected by the StREAM Lab.
     - Enables users to easily download their chosen data for further off-line analysis.
     - Allowing the user to specify what time periods to visualize.
     - Allowing the user to determine which attributes to visualize.
     - Proof of concept to link images to chart for specific date via tooltip.
     - Facilitates better comparisons between various attributes and time frames.`
    )}
    
    function _95(md){return(
    md`## 1.1  Changes from Phase-2`
    )}
    
    function _96(md){return(
    md`- The initial design idea was to have different graphs for each attribute.
    - The visualization implemented shows all the attributes in a single graph.
    - The tooltip is also updated to show the readings of the selected attributes, along with the date and time.
    - A feature to display images at various time stamps is also incorporated.
    - Users are also allowed to choose the dataset (normalized / raw) they wish to visualize.
    - Users can also choose to download their dataset for further analysis on other platforms`
    )}
    

    
    export default function define(runtime, observer) {
      const main = runtime.module();
      const fileAttachments = new Map([["aggregated@2.csv",new URL("./files/7c546f03b11863f38ea8da3f9042d4b02a290266b9b47fa365fe071f0d9dba1ba3975085633af32ba58543384bf11cb6ba20f8f1e8f5e65dc759a28d8dbfdcb6",import.meta.url)],["image.png",new URL("./files/f4c68884deff4bbdf44586f10cd7def9ffb61821ac78691ac9bfc76aac9ef6e96d472777b94ea588b77caa502a00edc6e7f43bdf4c5cb2c98a8b266cb17d583d",import.meta.url)],["image@1.png",new URL("./files/bd27c5c48a16291dce41d2455eac54d343911a9b2c6dd3f2c2ef7902045f656935c0f8ac449f061f7ccdbb5104bb4170a45c36e5f45145bbc04ed6874ac9dd43",import.meta.url)],["image@5.png",new URL("./files/ab3b6f7715c8809a4562e71a0d317b991914b5de86bbf590fa019d3ce69e2fd9f3159f5710c656ef197aaf05063cb5a4d1fdab84fbcdb02a72686a4aaac0125f",import.meta.url)],["image@7.png",new URL("./files/db5d9b7114ecb3134bb1d915f761d5afe175cc7d838fdaccf8f8f785177dd0f03da71998d25ac367e4d4640b42fb818ba342637d305ce3c6198470c379f41a38",import.meta.url)],["processed_img.csv",new URL("./files/20c4adcf8d6191896b31dcedefa2d811cc45b0321f91da81b5b81760fe0f75d3beaa234b653737b744ce8717c06357d9d91428080f58e60c22ba446b292a7181",import.meta.url)],["observableData.PNG",new URL("./files/29e53d0f2f7b89e98a8efa90c2f88deffaf2ab93a663889eae99500330eb39cbe3226ca3e7c3b06a7df913a639d61219c4f02ca8bc5c888d51d2a79a9041f333",import.meta.url)]]);
      main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
      main.variable(observer()).define(["md"], _90);
      main.variable(observer()).define(["md"], _91);
      main.variable(observer()).define(["md"], _92);
      main.variable(observer()).define(["md"], _93);
      main.variable(observer()).define(["md"], _94);
      main.variable(observer()).define(["md"], _95);
      main.variable(observer()).define(["md"], _96);
      return main;
    }
    