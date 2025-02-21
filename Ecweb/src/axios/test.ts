import HttpInstance from "./http";
export function getCategoryAPI() {
    return HttpInstance( { url: "home/category/head" });
}