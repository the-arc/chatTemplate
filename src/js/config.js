let apiConfig = {
    host: "https://kotosora-luqas.dtsedge.net/",
    //applicationId: "DTS-W-ON-PREMISE"
    applicationId: "DTS-WEST-SAMPLES"
	//host: "https://luqas.dtsedge.net",
    //applicationId: "DTS-DAVinCI-TEST"
    //host: "http://localhost",
    //applicationId: "DTS-LUQAS-SAMPLE"
    //host: "https://zoom-luqas.dtsedge.net",
    //applicationId: "DTS-ZOOM-ANSWERS"
    //host: "https://jse-luqas.dtsedge.net",
    //applicationId: "JSE-LUQAS-SAMPLE"
    //applicationId: "DTS-AMERICA-TEST"
    //applicationId: "DTS-LUQAS-SAMPLE"
}; 

/*
 *こちらからチャットサーバとのAPIを記述します
 */
function submit(){
    console.log(apiConfig.host);
    return "<p>title<p><p>detail<p>";
}



class config{
    firstComment(){
        return "なんでも聞いてください";
    }
    submit(text){
        return submit(text);
    }
}

module.exports = config;