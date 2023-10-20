import { TODOLIST2 } from "./adatok.js";
import Megjelenit from "./Megjelenit.js";

$(function () {
    const szuloELEM = $(".tarolo");
    new Megjelenit(TODOLIST2, szuloELEM);
    let helyesOsztaly = "kesz";

    $(window).on("kesz",(event)=>{
        let objPeldany = event.detail
        // console.log(event.detail)
        // console.log("Kész esemény!")
        objPeldany.setHatterszin()
        TODOLIST2[objPeldany.index].kesz=true;
        console.log(TODOLIST2);
        if (helyesOsztaly === "kesz") {
            helyesOsztaly = "megse";
        } else {
            helyesOsztaly = "kesz";
        }
    });

    $(window).on("megse",(event)=>{
        let objPeldany = event.detail
        // console.log(event.detail)
        // console.log("Mégse esemény!")
        objPeldany.setHatterszin()
        TODOLIST2[objPeldany.index].kesz=false;
        if (helyesOsztaly === "kesz") {
            helyesOsztaly = "megse";
        } else {
            helyesOsztaly = "kesz";
        }
    });
    

    $(window).on("torles", (event) => {
        let objPeldany = event.detail;
        const confirmed = confirm("Biztosan törölni szeretnéd?");
        if (confirmed) {
            TODOLIST2.splice(objPeldany.index, 1); 
            console.log(TODOLIST2);
            objPeldany.sorElem.remove(); 
        }
    });
    

    $(window).on("torles", (event) => {
        console.log(event.detail);
    });

    $(window).on("megse", (event) => {
        console.log(event.detail);
    });

    $(window).on("kesz", (event) => {
        console.log(event.detail);
    });
});
