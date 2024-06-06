
import * as acessoWebFrame from './unico-webframe.min.js';

document.addEventListener("DOMContentLoaded", () => {
    
    var callback = {
        on: {
            success: function (obj) {
                alert("sucesso");
                debugger;
                console.log(obj.base64);
                console.log(obj.encrypted);
                $("#base64").attr('src', obj.base64);
                //acessoWebFrame.closeCamera();
            },
            error: function (error) {
                alert("error");
                debugger;
                console.error(error)
                //confira na aba "Configurações" sobre os tipos de erros
            },
            support: function (error) {
                alert("support");
                debugger;
                console.log(error)
                //confira na aba "Configurações" sobre os tipos de erros
            }
        }
    };

    var layout = {
        silhouette: {
            primaryColor: "#0bbd26",
            secondaryColor: "#bd0b0b",
            neutralColor: "#fff",
        },
        buttonCapture: {
            backgroundColor: "#2980ff",
            iconColor: "#fff",
        },
        popupLoadingHtml: '<div style="position: absolute; top: 45%; right: 50%; transform: translate(50%, -50%); z-index: 10; text-align: center;">Carregando...</div>',
        boxMessage: {
            backgroundColor: "#2980ff",
            fontColor: "#fff"
        },
        boxDocument: {
            backgroundColor: "#2980ff",
            fontColor: "#fff"
        }
    }



    //var configurations1 = {
    //    TYPE: 1
    //}
    //acessoWebFrame.initCamera(configurations1, callback, layout);



    // inteligente


    var modelsAddress = "http://localhost:7698/models";


    var configurations2 = {
        TYPE: 2
    }
    acessoWebFrame.webFrameModel.loadModelsCameraInteligence(modelsAddress).then(() => {
        acessoWebFrame.initCamera(configurations2, callback, layout);
                             
    })
        .catch((error) => {
            alert("loadModelsCameraInteligence");
            console.error(error);
            debugger;
            //Confira em "Configurações" a lista de erros e demais informações
        });





});


