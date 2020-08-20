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
 *こちらにボットが最初に表示するコメントを入力してください。
 */
function firstBotComment(){
    return firstComment = "質問を入力してください！";
}

/*
 * こちらからチャットサーバとの連携APIを記述します
 * param:  質問テキスト
 * return: bot返却用テキスト
 */
function submit(text){
    return text+"の回答です";
}


class config{
    firstComment(){
        return firstBotComment();
    }
    submit(text){
        return submit(text);
    }
}

module.exports = config;