export const API_KEY = "AIzaSyBaLWFGWmgbm8zhOaoeFZXorAZVBRdHyNM";

export function value_converter(views){
    if(views > 1000000){
        const calc = views / 1000000;
        return calc.toFixed(1) + "M";
    }
    else if(views > 1000){
        const calc = views / 1000;
        return calc.toFixed(1) + "K";
    }
    else{
        return views;
    }
}